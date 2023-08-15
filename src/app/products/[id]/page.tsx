import { AllProducts } from '@/utils/mock'
import React from 'react'
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';
import Quantity from '@/components/shared/Quantity';
import AddProductButton from '@/components/shared/AddToCart';
import Wrapper from '@/components/shared/Wrapper';

const sizes = ["xs", "sm", "md", "lg", "xl"];

const getProductsDetails = async (id: string) => {
    const data = await AllProducts();
    return data.filter((product) => product._id == id)
}
// filter provides an array of product while find gives only one product of that type
// == compares values only and === compares value + types whether it is of string or number or any other type
const page = async ({ params }: { params: { id: string } }) => {
    const result = await getProductsDetails(params.id);
    return (
        <Wrapper>
            <div className="flex flex-wrap items-center justify-center py-10 mt-16 bg-slate-50">
                {result.map((product) => (
                    <div key={product._id} className="flex md:flex-row flex-col justify-between gap-6">
                        {/* Left Image */}
                        <div>
                            <Image
                                width={450}
                                height={600}
                                src={urlForImage(product.image).url()}
                                alt='Male Products' />
                        </div>
                        {/* Right Content */}
                        <div className=''>
                            <div>
                                <h1 className="text-3xl tracking-wide font-semibold text-textPrimary">{product.title}</h1>
                                <h2 className="text-xl font-semibold text-textSecondary">{product.description}</h2>
                            </div>
                            <div>
                                <h3 className="mt-8 text-xl font-semibold">SELECT SIZE</h3>
                                {/* Sizes */}
                                <div className="flex gap-x-4">
                                    {sizes.map((item, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="w-12 h-12 mt-2 duration-300 border rounded-full _center hover:shadow-xl"
                                            >
                                                <span className="text-lg font-semibold text-center text-textPrimary">
                                                    {item}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* Add to Cart */}
                            <div className="flex items-center mt-5 gap-x-4">
                                <AddProductButton data={result} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* 2nd Div */}
            <div className="bg-white flex flex-col gap-8 mt-28 sm:px-14 py-28 gap-y-10">
                <div className="flex items-center border-b-2 border-[#c4c4c4] relative">
                    <h3 className="absolute text-2xl font-semibold">
                        Product Information
                    </h3>
                    <h1 className="text-[#f2f3f7] xl:text-[7rem] sm:text-8xl min-[410px]:text-7xl text-5xl leading-none font-black max-[310px]:mb-4">
                        Overview
                    </h1>
                </div>
                <div className="flex sm:flex-row flex-col max-sm:space-y-2 justify-between">
                    <h3 className="text-[#666] flex-1 font-semibold">
                        PRODUCT DETAILS
                    </h3>
                    <p className="flex-[2_1] font-light leading-7 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="flex sm:flex-row flex-col max-sm:space-y-2 justify-between">
                    <h3 className="text-[#666] flex-1 font-semibold">
                        PRODUCT DETAILS
                    </h3>
                    <ul className="flex-[2_1] flex flex-col list-disc list-inside gap-1 text-lg">
                        <li className="font-semibold">Hand wash using cold water.</li>
                        <li className="font-semibold">Do not using bleach.</li>
                        <li className="font-semibold">Hang it to dry.</li>
                        <li className="font-semibold">Iron on low temperature.</li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
}

export default page