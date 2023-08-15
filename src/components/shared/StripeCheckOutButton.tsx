"use client";
import getStipePromise from "@/lib/stripe";

export const stripeproducts = [
    {
        id: 1,
        name: "Stripe Product",
        price: 400,
        quantity: 3,
    },
    {
        product: 2,
        name: "Stripe Product2",
        price: 40,
        quantity: 2,
    },
    {
        product: 3,
        name: "Stripe Product23",
        price: 4000,
        quantity: 1,
    },
];

const StripeCheckOutButton = () => {
    const handleCheckout = async () => {
        const stripe = await getStipePromise();//
        const response = await fetch("/api/stripe-session/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",  
            body: JSON.stringify(stripeproducts),
        });
        console.log("s",response)
        const data = await response.json();
        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    };

    return (
        <div className="py-5">
            <button
                className="hover:shadow-md hover:ring-1 ring-slate-400 bg-[#212121] py-2 px-2 text-lg font-medium gap-x-2 rounded-none text-center text-white"
                onClick={handleCheckout}
            >
                Process to Checkout
            </button>
        </div>
    );
};

export default StripeCheckOutButton;