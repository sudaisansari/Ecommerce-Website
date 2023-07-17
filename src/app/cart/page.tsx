import StripeCheckOutButton from "@/components/shared/StripeCheckOutButton";
import Wrapper from "@/components/shared/Wrapper";
import { AllProducts } from "@/utils/mock";
import Image from "next/image";
import React from 'react'
import { urlForImage } from "../../../sanity/lib/image";
import { RiDeleteBinLine } from "react-icons/ri"
import Quantity from "@/components/shared/Quantity";

const getProduct = async () => {
    const data = await AllProducts();
    return data.map((product) => product)
}

const page = async () => {
    const result = await getProduct();
    return (
        <Wrapper>
            <div className="items-center mt-24 mb-10 mx-36">
                <h1 className="text-3xl font-bold text-textPrimary">Shopping Cart</h1>
            </div>
            <div className="flex justify-evenly">
                <div className="space-y-12">
                    {/* Left Side */}
                    {
                        result.map((item) => (
                            <div  key={item._id} className="flex justify-between">
                                <div className="flex flex-wrap items-center">
                                    <div>
                                        <Image
                                            className="rounded-md"
                                            height={170}
                                            width={170}
                                            src={urlForImage(item.image).url()}
                                            alt={item.title} />
                                    </div>
                                    <div>
                                        <h2 className="mx-8 text-xl font-semibold text-textSecondary">{item.title}</h2>
                                        <p className="mx-8 my-2 text-textSecondary text-lg">{item.description}</p>
                                        <p className="mx-8 my-2 text-lg font-bold text-textPrimary">Delivery Estimation</p>
                                        <p className="mx-8 my-2 text-yellow-600 text-lg font-semibold">5 Working Days</p>
                                        <p className="mx-8 my-2 text-textPrimary text-lg font-bold">${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between items-end">
                                    <div className="">
                                        <RiDeleteBinLine className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <Quantity />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Right Side */}
                <div className="bg-[#FBFCFF] h-56 pt-2 pb-2">
                    <div className="mx-6 space-y-5 justify-center">
                        <h4 className="text-xl font-bold text-textPrimary">Order Summary</h4>
                        <div className="flex gap-x-10 mx-6 text-lg font-medium">
                            <p>Quantity</p>
                            <p>6</p>
                        </div>
                        <div className="flex mx-6 text-lg gap-x-10 font-medium gap-y-6">
                            <p>Sub Total</p>
                            <p>$1260</p>
                        </div>
                        <div className="items-center justify-center">
                            <StripeCheckOutButton />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper >
    )
}

export default page