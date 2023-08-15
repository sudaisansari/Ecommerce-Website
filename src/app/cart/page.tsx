// import StripeCheckOutButton from "@/components/shared/StripeCheckOutButton";
// import Wrapper from "@/components/shared/Wrapper";
// import { AllProducts } from "@/utils/mock";
// import Image from "next/image";
// import React from 'react'
// import { urlForImage } from "../../../sanity/lib/image";
// import { RiDeleteBinLine } from "react-icons/ri"
// import Quantity from "@/components/shared/Quantity";

// const getProduct = async () => {
//     const data = await AllProducts();
//     return data.map((product) => product)
// }

// const page = async () => {
//     const result = await getProduct();
//     return (
//         <Wrapper>
//             <div className="items-center mt-24 mb-10 mx-36">
//                 <h1 className="text-3xl font-bold text-textPrimary">Shopping Cart</h1>
//             </div>
//             <div className="flex justify-evenly">
//                 <div className="space-y-12">
//                     {/* Left Side */}
//                     {
//                         result.map((item) => (
//                             <div  key={item._id} className="flex justify-between">
//                                 <div className="flex flex-wrap items-center">
//                                     <div>
//                                         <Image
//                                             className="rounded-md"
//                                             height={170}
//                                             width={170}
//                                             src={urlForImage(item.image).url()}
//                                             alt={item.title} />
//                                     </div>
//                                     <div>
//                                         <h2 className="mx-8 text-xl font-semibold text-textSecondary">{item.title}</h2>
//                                         <p className="mx-8 my-2 text-textSecondary text-lg">{item.description}</p>
//                                         <p className="mx-8 my-2 text-lg font-bold text-textPrimary">Delivery Estimation</p>
//                                         <p className="mx-8 my-2 text-yellow-600 text-lg font-semibold">5 Working Days</p>
//                                         <p className="mx-8 my-2 text-textPrimary text-lg font-bold">${item.price}</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-between items-end">
//                                     <div className="">
//                                         <RiDeleteBinLine className="h-7 w-7" />
//                                     </div>
//                                     <div>
//                                         <Quantity />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 {/* Right Side */}
//                 <div className="bg-[#FBFCFF] h-56 pt-2 pb-2">
//                     <div className="mx-6 space-y-5 justify-center">
//                         <h4 className="text-xl font-bold text-textPrimary">Order Summary</h4>
//                         <div className="flex gap-x-10 mx-6 text-lg font-medium">
//                             <p>Quantity</p>
//                             <p>6</p>
//                         </div>
//                         <div className="flex mx-6 text-lg gap-x-10 font-medium gap-y-6">
//                             <p>Sub Total</p>
//                             <p>$1260</p>
//                         </div>
//                         <div className="items-center justify-center">
//                             <StripeCheckOutButton />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Wrapper >
//     )
// }

// export default page



"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import Wrapper from "@/components/shared/Wrapper";
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'react-hot-toast';
import getStipePromise from "@/lib/stripe";
import { stripeproducts } from "@/components/shared/StripeCheckOutButton";

interface ICartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    user_id: string;
    product_id: string;
}

export interface ICartData {
    res: ICartItem[];
}

const fetcher = (url: string) =>
    fetch(url, { headers: { "Content-Type": "application/json" }, }).then((res) =>
        res.json()
    );

const ProductCart = () => {
    const { data, error, isValidating } = useSWR("/api/cart", fetcher);
    const [cartData, setCartData] = useState<ICartData>();
    const { refresh } = useRouter();
    const [isCartDataModified, setIsCartDataModified] = useState(false);
    const [isUpdatingCart, setIsUpdatingCart] = useState(false); // Corrected variable name

    useEffect(() => {
        setCartData(data);
        refresh();
    }, [data]);

    const handleDeleteCart = async (id: number) => {
        try {
            await fetch("/api/cart", {
                method: "DELETE",
                body: JSON.stringify({
                    id: id,
                }),
            });
            const updatedCartData: ICartData = {
                ...(cartData as ICartData),
                res: cartData?.res?.filter((item: ICartItem) => item.id !== id) || [],
            };

            setCartData(updatedCartData);

            const deletedItem = updatedCartData?.res?.find(
                (item: any) => item.id === id
            );
            toast.success(
                `${deletedItem!.quantity} ${deletedItem!.description
                } deleted from cart successfully!`
            );

            setIsCartDataModified(false);
            mutate("/api/cart", { ...cartData });
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateCart = async () => {
        try {
            if (!cartData || !cartData.res || cartData.res.length === 0) {
                console.error("Cart data is empty.");
                return;
            }
            setIsUpdatingCart(true);

            const updatedCartData = cartData.res.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity,
                };
            });

            const updatedCartResponse = await fetch("/api/cart", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCartData),
            });

            await updatedCartResponse.json();

            setCartData({ ...cartData }); // Update the cart data with the modified data

            setIsCartDataModified(false);
            setIsUpdatingCart(false); // Set the state to false after updating cart
            toast.success(`Orders updated successfully!`);
            mutate("/api/cart");

            // Handle the successful update here
        } catch (error) {
            console.error("Error updating cart:", error);
            setIsUpdatingCart(false); // Set the state to false after updating cart
        } 
    };

    const clearCart = async () => {
        try {
            await fetch("/api/cart-clear/", {
                method: "DELETE",
            });
            console.log("Cart items deleted successfully");
        } catch (error) {
            console.log(error);
            // Handle error
        }
    };

    // 

    const handleCheckout = async () => {
        const stripe = await getStipePromise();//
        const response = await fetch("/api/stripe-session/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
            body: JSON.stringify(cartData?.res),
        });
        console.log(cartData?.res)
        console.log(stripeproducts)
        const data = await response.json();
        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
            clearCart()
        }
    };


    const increaseQuantity = (id: number) => {
        let data = [...cartData!.res];
        const specifiedData = data.find((item) => item.id === id);
        specifiedData!.quantity = specifiedData!.quantity + 1;
        setCartData({ res: data });
        setIsCartDataModified(true);
        console.log(cartData);
    };

    const decreaseQuantity = (id: number) => {
        let data = [...cartData!.res];
        const specifiedData = data.find((item) => item.id === id);

        if (specifiedData!.quantity === 1) {
            return; // Do nothing if the quantity is already 1
        }

        specifiedData!.quantity = specifiedData!.quantity - 1;
        setCartData({ res: data });
        setIsCartDataModified(true);
        console.log(cartData);
    };

    if (!cartData || cartData?.res?.length === 0) {
        return (
            <section className="mt-20">
                <Wrapper>
                    <div className="max-w-screen-2xl mx-auto">
                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                        <div className="flex flex-col items-center text-center w-fit mx-auto py-8">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 1024 1024"
                                height="150"
                                width="150"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                            </svg>
                            <h2 className="text-3xl font-bold">Your shopping bag is empty</h2>
                        </div>
                    </div>
                </Wrapper>
            </section>
        );
    }

    if (error)
        return (
            <div>
                <Wrapper>Error!</Wrapper>
            </div>
        );
    if (isValidating) {
        // Show loading spinner while data is loading
        return (
            <div className="font-bold text-xl">
                <Wrapper>Loading...</Wrapper>
            </div>
        );
    }
    // Calculate the total quantity and subtotal
    const totalQuantity = cartData?.res?.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const subtotal = cartData?.res?.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <main className="mt-20">
            <Wrapper>
                <div className="text-2xl font-bold mb-3">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="flex lg:flex-row flex-col gap-10 mt-10">
                    <div className="flex-[3_1] space-y-10">
                        {cartData?.res?.map((item: any, i: number) => {
                            return (
                                <div key={item.id} className="flex justify-between mt-2">
                                    <div className="flex sm:flex-row flex-col w-full gap-8">
                                        <Image
                                            className="rounded-2xl"
                                            src={item.image}
                                            alt="Product-Image"
                                            width={244}
                                            height={190}
                                        />

                                        <div className="w-full space-y-4 gap-x-6">
                                            <div className="flex justify-between">
                                                <h4 className="font-medium text-[#666] text-xl">
                                                    {item.title}
                                                </h4>

                                                <svg
                                                    onClick={() => {
                                                        handleDeleteCart(item.id);
                                                    }}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="cursor-pointer"
                                                    height="30"
                                                    width="30"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <h4 className="text-lg text-[#212121] font-semibold">
                                                {item.description}
                                            </h4>
                                            <h4 className="font-medium">Delivery Estimation</h4>
                                            <h4 className="font-medium text-[#ffc700]">
                                                5 Working Days
                                            </h4>

                                            <div className="flex justify-between">
                                                <h4 className="text-xl tracking-widest font-semibold">
                                                    ${item.price * item.quantity}
                                                </h4>
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        className="text-2xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer"
                                                    >
                                                        -
                                                    </div>
                                                    {item.quantity}
                                                    <div
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="text-2xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer"
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side */}
                    <div className="bg-[#FBFCFF] h-56 pt-2 pb-6 mb-10">
                        <div className="mx-6 space-y-5 justify-center">
                            <h4 className="text-xl font-bold text-textPrimary">Order Summary</h4>
                            <div className="flex gap-x-10 mx-6 text-lg font-medium">
                                <h3>Quantity</h3>
                                <h4>{totalQuantity} Product</h4>
                            </div>
                            <div className="flex mx-6 text-lg gap-x-10 font-medium gap-y-6">
                                <h3>Sub Total</h3>
                                <h3>${subtotal}</h3>
                            </div>

                            {isCartDataModified && (
                                <div className="flex flex-col gap-2 mt-8">
                                    <button
                                        onClick={handleUpdateCart}
                                        className="text-white bg-black text-sm font-bold py-3 border-b-zinc-400"
                                    >
                                        Update Cart
                                    </button>
                                </div>
                            )}

                            <div className="flex flex-col gap-2 mt-8">
                                {/* <StripeCheckOutButton /> */}
                                <button
                                    disabled={isUpdatingCart || isCartDataModified} // Add the disabled attribute
                                    className="disabled:opacity-20 disabled:cursor-not-allowed text-white bg-black text-sm font-bold py-3 border-b-zinc-400 mt-8"
                                    onClick={handleCheckout}
                                >
                                    Process to Checkout
                                </button>
                                {isCartDataModified && !isUpdatingCart && (
                                    <h4 className="flex items-center leading-none gap-x-1 gap-y-2 text-sm text-red-500 font-semibold">
                                        {" "}
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="-mt-0.5"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                        You have made Changes to Your Orders <br /> Please Update Your
                                        Orders First!
                                    </h4>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster />
            </Wrapper>
        </main>

    );
};

export default ProductCart;