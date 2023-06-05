import React from 'react'
import { Button } from "@/components/shared/Button"
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import { CgShoppingCart } from 'react-icons/cg'
import Link from 'next/link'
import hero from '/public/header.png'

// const getProductData = async () => {

//   const res = await client.fetch(`*[_type=="product" && _id=="9e1bbd35-2cf7-4b68-9702-bf2c91f96947"]{
//     image,
//       _id,
//   }`); // we use GROQ query for data fetching
//   return res
// }
// interface IProduct { // sanity-typed-schema-builder this automatically builds these types but we need to work on schema
//   title: string,
//   price: number,
//   image: IImage, // the error will come on browser when you pass item.image in function urlForImage() that will resolve by adding url of image from browser in next.config.js file
//   _id: string,
//   category: {
//     name: string
//   }
// }


const Hero = () => {
  // const data: IProduct[] = await getProductData();
  return (
    <section id='home'>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center bg-slate-400">
          {/* Left Side */}
          <div className='flex-1 mx-10'>
            {/* sale button */}
            <div className='bg-[#E8F0FE] shadow-md px-1.5 rounded-md py-2 items-center w-24'>
              <h5 className='text-[#7E2CFF] font-bold w-20 text-center'>Sale 70%</h5>
            </div>
            {/* H1 heading */}
            <div className='mt-10'>
              <h2 className="scroll-m-20 max-w-screen-sm pb-2 text-[54px] font-semibold tracking-light leading-none transition-colors  first:mt-0">
                An Industrial Take on Streetwear
              </h2>
            </div>
            {/* paragraph */}
            <div className='mt-8 max-w-[500px] md:max-w-[400px]'>
              <p className='max-w'>
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </p>
            </div>
            {/* shopping button */}
            <Link href='/allproducts'>
              <div className='mt-8'>
                <Button variant={'default'} className='bg-[#212121] text-white px-12 py-8 text-xl gap-x-2'><CgShoppingCart />Shopping</Button>
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
                      className='' //these classes are for image settlement
                      src={hero} alt='Hero Image' />
                </div>                    
              </div>
            
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero