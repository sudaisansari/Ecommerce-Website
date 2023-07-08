"use client"
import 'swiper/css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AllProducts } from '@/utils/mock';
import { TProduct } from '@/utils/types';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';
import Wrapper from './Wrapper';

const Slider = () => {
    const [data, setData] = useState<TProduct[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                console.log(result)
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getData = async () => {
        const products = await AllProducts();
        return products.filter(
            (product) =>
                product._id !== '39dc22b8-f400-4a57-bb5b-af65ebbab4ed' &&
                product._id !== '8d4a5634-b4f3-4b15-84db-ea5c172b6b85'
        );
    };

    return (
        <div>
            <Wrapper>
                <Swiper
                    className='hover:transi-x-3'
                    spaceBetween={1}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map((product) => (
                        <SwiperSlide key={product._id}>
                            <button>
                                <div className="mt-8 mb-8 text-left image-container hover:scale-110 transition-transform duration-300">
                                    <Image
                                        width={380}
                                        height={600}
                                        src={urlForImage(product.image).url()}
                                        alt={product.title} />
                                    <p className='text-textPrimary text-xl font-bold mt-2'>{product.title}</p>
                                    <p className='text-textPrimary text-xl font-bold'>${product.price}</p>
                                </div>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Wrapper>
        </div>
    );
};

export default Slider;
