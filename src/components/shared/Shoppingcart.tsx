"use client"
import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Shoppingcart = () => {

  const [cartQuantity, setCartQuantity] = useState(0);
  const { refresh } = useRouter();
  const { data, mutate } = useSWR("/api/cart", { revalidateOnFocus: true });

  useEffect(() => {
    if (data && !data.isLoading) {
      const totalQuantity = data?.res?.reduce(
        (total: any, item: any) => total + item.quantity,
        0
      );
      setCartQuantity(totalQuantity);
      refresh();
    }
  }, [data]);

  return (
    <div>
      <div className="">
        <div className="rounded-full flex justify-center items-center hover:scale-105 hover:shadow-sm">
          <div className="relative">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {cartQuantity}
              </p>
            </div>
            <ShoppingCart className='w-8 h-8 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shoppingcart