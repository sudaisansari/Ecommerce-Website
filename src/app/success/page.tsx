import { Button } from '@/components/shared/Button'
import Wrapper from '@/components/shared/Wrapper'
import React from 'react'
import { BsFillBagCheckFill } from "react-icons/bs"
import Link from 'next/link'

const page = () => {
  return (
    <Wrapper>
      <div className=' bg-[#F1F1F1] mt-10 rounded-md '>
        <div className='mb-20 flex flex-col items-center'>
          {/* Bag */}
          <div className='mt-20'>
            <BsFillBagCheckFill className='h-20 w-20 text-[#008000]' />
          </div>
          {/* heading and para */}
          <h1 className='font-bold text-[44px] mt-2'>Thank you for your order!</h1>
          <p className='text-[16px] font-semibold'>Check your email inbox for the receipt</p>
          {/* Para 2 */}
          <p className='text-[16px] font-semibold mt-8 mb-8'>If you have any questions, please email <span className='text-red-500'>dinemarket@example.com</span></p>
          {/* Button */}
          <div className='mb-20'>
            <Link href={"/"}>
              <Button className='rounded-md text-center h-16 text-white w-56 text-xl hover:shadow-md hover:ring-1 ring-slate-400 bg-[#212121]'>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default page