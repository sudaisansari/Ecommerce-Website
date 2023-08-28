"use client"
import Wrapper from '@/components/shared/Wrapper'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { AllProducts } from "@/utils/mock";

const getData = async () => {
    const data = await AllProducts();
    return data.filter((products) => products._id !== "39dc22b8-f400-4a57-bb5b-af65ebbab4ed" && products._id !== "8d4a5634-b4f3-4b15-84db-ea5c172b6b85")
}

const ProductSection = async () => {
    const result = await getData();
    //console.log(result.map((item) => item))
    return (
        <section id='productsection'>
            <Wrapper>
                <div className='mt-36'>
                    {/* Heading */}
                    <div className=''>
                        <h3 className='text-[#7E2CFF] font-bold text-center'>PRODUCTS</h3>
                        <h2 className='text-[32px] 
                        tracking-wide font-bold text-center'>Check What We Have</h2>
                    </div>
                    {/* Slider */}
                    <div className=''>
                        <Swiper
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            spaceBetween={10}
                        >
                            {
                                result.map((product, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="mt-8 cursor-pointer mb-8 px-5 text-left image-container hover:scale-110 transition-transform duration-300">
                                            <Link href={`/products/${product._id}`}>
                                                <Image
                                                    width={380}
                                                    height={600}
                                                    src={urlForImage(product.image).url()}
                                                    alt={product.title}
                                                />
                                            </Link>
                                            <p className='text-textPrimary text-xl font-bold mt-2'>{product.title}</p>
                                            <p className='text-textPrimary text-xl font-bold'>${product.price}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </Wrapper>
        </section >
    )
}
export default ProductSection