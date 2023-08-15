import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";

import { v4 as uuid } from "uuid";
import { cookies, headers } from "next/dist/client/components/headers";
import { urlForImage } from "../../../../sanity/lib/image";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.error();
    }
    try {
        // return NextResponse.json({ message: "hello" });
        if (userId) {
            const res = await db
                .select()
                .from(cartTable)
                .where(eq(cartTable.user_id, userId));
            return NextResponse.json(
                { res },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" });
    }
}

export async function POST(request: NextRequest) {
    const req = await request.json();
    const { userId } = auth();

    if (!userId) {
        return NextResponse.error();
    }

    try {
        // console.log(req.image)
        const res = await db
            .insert(cartTable)
            .values({
                product_id: req.product_id,
                quantity: req.quantity,
                title: req.title,
                image: req.image,
                price: req.price,
                description: req.description,
                user_id: userId
            })
            .returning();
        return NextResponse.json({ res });
    } catch (error) {
        console.log(error);
        return NextResponse.json("Something went wrong");
    }
}


export async function DELETE(request: NextRequest) {
    const req = await request.json();
    const { userId } = auth();

    if (!userId) {
        return NextResponse.error();
    }

    try {
        const res = await db.delete(cartTable).where(eq(cartTable.id, req.id))
        //console.log(res);



        return NextResponse.json({ res });
    } catch (error) {
        console.log(error);
        return NextResponse.json("Something went wrong");
    }
}



export async function PUT(request: NextRequest) {
    const req = await request.json();
    const { userId } = auth();

    if (!userId) {
        return NextResponse.error();
    }
    try {
        console.log("Request data:", req);

        const promises = req.map(async (item: any) => {
            const updateFields = {
                quantity: item.quantity,
                // Add other fields to update as needed
            };

            console.log("Request Quantity:", item.quantity);
            console.log("Update Fields:", updateFields);

            const res = await db
                .update(cartTable)
                .set(updateFields)
                .where(eq(cartTable.id, item.id))
                .returning();
            console.log(res);

            return res;
        });

        const results = await Promise.all(promises);

        return NextResponse.json({ results });
    } catch (error) {
        console.log(error);
        return NextResponse.json("Something went wrong");
    }
}