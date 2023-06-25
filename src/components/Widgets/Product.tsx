import React from 'react'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'

const getProducts = async () => {
    const res = await client.fetch(`*[_type=="product" && _id=="9e1bbd35-2cf7-4b68-9702-bf2c91f96947" || _id=="5e614f65-c905-4c27-9072-3bff03e101d3" || _id=="84ec987f-d73f-4b71-9962-c54d171bc9b4"]{
    image,
    price,
    title
  }`);
    return res
}

interface IProduct {
    image: IImage,
    price: string,
    title: string
}

const Product = async () => {

    const data: IProduct[] = await getProducts();

    return (
        <section id='product'>
            <Wrapper>
                <div className='mt-36'>
                    {/* Heading */}
                    <div className=''>
                        <h3 className='text-[#7E2CFF] font-bold text-center'>PRODUCTS</h3>
                        <h2 className='text-[32px] tracking-wide font-bold text-center'>Check What We Have</h2>
                    </div>
                    {/* First */}
                    <div className='lg:grid lg:grid-cols-[repeat(3,auto)] justify-center mt-8'>
                        {data.map((item) => (
                            <div className='aspect-square hover:scale-110 transition duration-300 ease-in-out'>
                                <Image
                                    width={400}
                                    height={1000}
                                    className='w-full lg:w-[400px]'
                                    src={urlForImage(item.image).url()} alt='product' />
                                <div className='mt-3 mx-3  gap-y-6 mb-3'>
                                    <h1 className='font-bold text-xl'>{item.title}</h1>
                                    <h3 className='font-bold text-xl'>${item.price}</h3>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default Product