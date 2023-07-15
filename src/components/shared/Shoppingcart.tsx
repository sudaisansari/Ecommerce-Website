import React from 'react'
import { ShoppingCart } from 'lucide-react';

const Shoppingcart = () => {
  return (
    <div>
        <div className="">
            <div className="rounded-full flex justify-center items-center hover:scale-105 hover:shadow-sm">
              <div className="relative">
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
                </div>
                <ShoppingCart className='w-8 h-8 rounded-full' />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Shoppingcart