import { AllProducts } from '@/utils/mock'
import React from 'react'
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';
import Quantity from '@/components/shared/Quantity';
import AddToCart from '@/components/shared/AddToCart';
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
                    <div key={product._id} className="flex justify-between gap-6">
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
                            {/* Quantity */}
                            <div className="flex items-center mt-8 gap-x-6">
                                <h3 className="text-xl font-semibold">Quantity:</h3>
                                <Quantity />
                            </div>
                            {/* Add to Cart */}
                            <div className="flex items-center mt-5 gap-x-4">
                                <AddToCart />
                                <h2 className="text-2xl font-bold">
                                    ${product.price}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}

export default page