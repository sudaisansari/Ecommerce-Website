import React from 'react'
import { Button } from "@/components/shared/Button"
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import { CgShoppingCart } from 'react-icons/cg'
import Link from 'next/link'

const Hero = () => {
  return (
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center mt-10">
          {/* Left Side */}
          <div className='flex-1 mx-10'>
            {/* sale button */}
            <div className='bg-[#E8F0FE] shadow-md px-1.5 rounded-md py-2 items-center w-24'>
              <h5 className='text-[#7E2CFF] font-bold w-20 text-center'>Sale 70%</h5>
            </div>
            {/* H1 heading */}
            <div className='mt-10'>
              <h1 className="scroll-m-20 max-w-screen-sm pb-2 text-[54px] font-bold tracking-light leading-none transition-colors  first:mt-0 max-md:text-5xl">
                An Industrial Take on Streetwear
              </h1>
            </div>
            {/* paragraph */}
            <div className='mt-8 max-w-[500px] md:max-w-[400px]'>
              <p className='max-w'>
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </p>
            </div>
            {/* shopping button */}
            <Link href='/products'>
              <div className='mt-8'>
                <Button variant={'default'} className='hover:shadow-md hover:ring-1 ring-slate-400 bg-[#212121] px-12 py-8 text-xl gap-x-2 rounded-none text-center text-white'><CgShoppingCart />Shopping</Button>
              </div>
            </Link>
          </div>
          {/* Right Side */}
          <div className='flex-1 lg:block hidden'>
            {/* Cirlce */}
            <div className='w-350 h-350 rounded-full bg-[#FFECE3]'>
              {/* Image */}
              <div>
                <Image
                  width={700}
                  height={1500}
                  src='/heroi.png' 
                  alt='Hero Image' />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
  )
}

export default Hero