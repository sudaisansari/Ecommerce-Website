import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    try {
        if (body.length > 0) {
            // Calculate subtotal and total due
            let subtotal = 0;
            const lineItems = body.map((item: any) => {
                const { title, quantity, price, image } = item;
                const itemPrice = price * 100; // Convert price to cents (Stripe requires the amount in the smallest currency unit)
                subtotal += itemPrice * quantity;
                // console.log("image", String(image), typeof image);

                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: title,
                            images: [image],
                            metadata: {
                                quantity: String(quantity),
                                price: String(price),
                                // images: [image],
                            },
                        },
                        unit_amount: itemPrice, // Set the unit_amount for each line item
                    },
                    quantity: quantity,
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                        maximum: 10,
                    },
                };
            });

            const shippingCost = 2.0;
            const totalDue = subtotal + shippingCost;

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                shipping_options: [
                    { shipping_rate: "shr_1NfJwAExM7Qz6ICmvxjqJzY1" },
                    { shipping_rate: "shr_1NTUEOExM7Qz6ICm2Z23PMHk" }
                ],
                line_items: lineItems,
                success_url: `${request.headers.get("origin")}/success`,
                cancel_url: `${request.headers.get("origin")}/?canceled=true`,
            });

            return NextResponse.json({
                session,
                subtotal: formatPrice(subtotal, "usd"),
                shipping: formatPrice(shippingCost, "usd"),
                total_due: formatPrice(totalDue, "usd"),
            });
        } else {
            return NextResponse.json({ message: "No Data Found" });
        }
    } catch (err: any) {
        return NextResponse.json(err.message);
    }
}

function formatPrice(amount: number, currency: string) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
    }).format(amount / 100); // Convert amount back to the original currency unit (PKR)
}