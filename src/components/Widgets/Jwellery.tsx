import { client } from '@/lib/sanityClient';
import React from 'react'
import { Image as IImage } from 'sanity';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link';
import Wrapper from '../shared/Wrapper';

const getImage = async () => {
  const res = await client.fetch(` *[_type=="product" && title=="Imperial Alpaca Hoodie"]{
    image,title
 }`);
  return res
}

interface Iimage {
  image: IImage,
  title: string
}

const quarterBoxesData = [
  {
    heading: "Using Good Quality Materials",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
  },
  {
    heading: "100% Handmade Products",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
  },
  {
    heading: "Modern Fashion Design",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
  },
  {
    heading: "Discount for Bulk Orders",
    description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
  }
];

const Jwellery = async () => {
  const imageData: Iimage[] = await getImage();
  return (
    <section id='jwellery'>
      <Wrapper>
        <div className='mt-36'>
          {/* heading */}
          <div className='flex text-center justify-center xl:justify-end pb-5'>
            <h2 className="max-w-lg text-[50px] right-20 font-bold tracking-normal leading-tight">
              Unique and Authentic Vintage Designer Jewellery
            </h2>
          </div>
          <div className='flex flex-col xl:flex-row justify-center'>
            {/* Quarter Boxes */}
            <div className='xl:w-1/2 mb-2'>
              <h2 className="absolute xl:block hidden text-8xl max-w-[250px] font-bold text-gray-200">
                Different from others
              </h2>
              <div className='flex flex-col justify-center flex-1 mx-10 items-center'>
                {/* First Row */}
                <div className='flex flex-row space-x-8'>
                  {quarterBoxesData.slice(0, 2).map((item, i) => (
                    <div key={i} className='rounded-md flex-1 relative flex flex-col justify-center'>
                      <h4 className="font-bold tracking-wide text-xl max-w-[200px]">{item.heading}</h4>
                      <p className="mt-2 text-slate-600 tracking-wider max-w-[200px] z-0">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Second Row */}
                <div className='flex flex-row mt-4 space-x-8'>
                  {quarterBoxesData.slice(2, 4).map((item, i) => (
                    <div key={i} className='rounded-md flex-1 relative flex flex-col justify-center'>
                      <h4 className="font-bold tracking-wide text-xl max-w-[200px]">{item.heading}</h4>
                      <p className="mt-2 text-slate-600 tracking-wider max-w-[200px] z-0">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Image and description */}
            <div className='flex flex-col md:flex-row space-y-4 justify-center items-center bg-yellow-300'>
              {/* image */}
              <div>
                {
                  imageData.map((item) => (
                    <div>
                      <Image
                        width={300}
                        height={600}
                        src={urlForImage(item.image).url()}
                        alt={item.title}
                      />
                    </div>
                  ))
                }
              </div>
              <div className='mx-6'>
                {/* description */}
                <div className=''>
                  <p className='max-w-[220px] tracking-wide font-normal text-lg'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                </div>
                {/* Button */}
                <Link href="/allproducts">
                  <div>
                    <button className='px-2 py-5 mt-3 rounded bg-[#212121] text-white font-semibold'>See All Products</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Jwellery