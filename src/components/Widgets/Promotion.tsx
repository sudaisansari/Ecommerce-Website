import React from 'react'
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import { Button } from '@/components/shared/Button';
import { AllProducts } from '@/utils/mock';

const getData3 = async () => {
  const data = await AllProducts();
  return data.filter((product) => product._id === "1df3f0f3-27f3-4a5e-93c7-c9114b1c303a")
}

const getData2 = async () => {
  const data = await AllProducts();
  return data.filter((product) => product._id === "8d4a5634-b4f3-4b15-84db-ea5c172b6b85")
}

const getData1 = async () => {
  const data = await AllProducts();
  return data.filter((product) => product._id === "39dc22b8-f400-4a57-bb5b-af65ebbab4ed")
}

const Promotion = async () => {
  const data1 = await getData1();
  const data2 = await getData2();
  const data3 = await getData3();

  return (
    <section id='promotions'>
      <Wrapper>
        <div className='mt-28'>
          <h3 className='text-[#7E2CFF] font-bold text-center'>PROMOTIONS</h3>
          <h2 className='text-[32px] font-bold tracking-wide text-center'>Our Promotions Events</h2>
          <div className='flex flex-col xl:flex-row items-center mt-5 px-24'>
            {/* Left Side */}
            <div className=''>
              {/* Upper Side */}
              <div className=' bg-[#D6D6D8]'>
                {
                  data1.map((item, i) => (
                    <div key={i} className='flex flex-col md:flex-row mx-5'>
                      <div>
                        <h2 className='text-3xl mt-4 font-bold lg:max-w-[150px]'>{item.title}</h2>
                        <p className='text-xl mt-2 font-medium lg:max-w-[100px]'>{item.description}</p>
                      </div>
                      <div>
                        <Image
                          width={300}
                          height={300}
                          //className='object-left-bottom'
                          src={urlForImage(item.image).url()} alt={item.title} />
                      </div>
                    </div>
                  ))
                }
              </div>
              {/* Lower Side */}
              <div className='bg-[#212121] mt-5 mb-5 flex flex-col items-center'>
                <div className='mt-16'>
                  <h3 className='text-center font-bold text-4xl text-white'>GET 30% Off</h3>
                  <p className='text-center mt-4 font-medium text-white'>USE PROMO CODE</p>
                </div>
                <div>
                  <Button className='hover:shadow-md hover:ring-1 ring-slate-400 bg-[#474747] mt-2 mb-10 text-white tracking-[0.3rem]'>DINEWEEKENDSALE</Button>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className='flex flex-col gap-y-2 md:flex-row mb-4'>
              {/* Left Image */}
              <div className='mx-5 bg-[#EFE1C7]'>
                {data2.map((item, i) => (
                  <div key={i}>
                    {/* Heading */}
                    <div className='mt-6 mx-5'>
                      <h4 className='font-medium text-xl text-black'>{item.title}</h4>
                      <div className='flex mt-1 mb-5'>
                        <p className='line-through text-xl'>${item.price}</p>
                        <p className='font-bold text-xl mx-2'>$75.00</p>
                      </div>
                    </div>
                    {/* Image */}
                    <div>
                      <Image
                        width={300}
                        height={300}
                        src={urlForImage(item.image).url()} alt={item.title} />
                    </div>
                  </div>
                ))}

              </div>
              {/* Right Image */}
              <div className='bg-[#D7D7D9] '>
                {data3.map((item, i) => (
                  <div key={i}>
                    <div className='mt-6 mx-5'>
                      <h4 className='font-medium text-xl text-black'>{item.title}</h4>
                      <div className='flex mt-1 mb-16'>
                        <p className='line-through text-xl'>${item.price}</p>
                        <p className='font-bold text-xl mx-2'>$190.00</p>
                      </div>
                      <Image
                        width={320}
                        height={320}
                        className=''
                        src={urlForImage(item.image).url()} alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Promotion