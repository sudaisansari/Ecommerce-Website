import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export async function DELETE(request: NextRequest) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.error();
  }

  try {
    await db.delete(cartTable).where(eq(cartTable.user_id, userId));
    return NextResponse.json({ message: "Cart items deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}