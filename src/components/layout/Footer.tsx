import React from 'react'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
import { CgFacebook } from "react-icons/cg"
import { TiSocialLinkedin } from "react-icons/ti"
import { AiOutlineTwitter } from "react-icons/ai"

const Items = [
    {
        Company: ["About",
            "Terms of Use",
            "Privacy Policy",
            "How it Works",
            "Contact Us"
        ],
        Support: [
            "Support Carrer",
            "24h Service",
            "Quick Chat"
        ],
        Contact: [
            "Whatsapp",
            "Support 24h"
        ]
    }
]


const Footer = () => {
    return (
        <footer>
            <Wrapper>
                <div className='mt-36 mb-8 mx-4 md:mx-0'>
                    {/* Upper Side */}
                    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-evenly'>
                        {/* Logo & links */}
                        <div className='md:w-1/4'>
                            {/* logo */}
                            <div>
                                <Image
                                    src={Logo}
                                    alt="Dine Market"
                                    width={200}
                                    height={200}>
                                </Image>
                            </div>
                            {/* paragraph */}
                            <p className='mt-8 mb-8 text-lg'>
                                Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                            </p>
                            {/* links */}
                            <div className='flex flex-row gap-x-6'>
                                <AiOutlineTwitter
                                    className="hover:-translate-y-0.5 rounded-md bg-[#F1F1F1] transition-transform cursor-pointer text-black"
                                    size={32}
                                />
                                <CgFacebook
                                    className="hover:-translate-y-0.5 rounded-md bg-[#F1F1F1] transition-transform cursor-pointer text-black"
                                    size={32}
                                />
                                <TiSocialLinkedin
                                    className="hover:-translate-y-0.5 rounded-md bg-[#F1F1F1] transition-transform cursor-pointer text-black"
                                    size={32}
                                />
                            </div>
                        </div>
                        {/* Company */}
                        <div>
                            <h4 className='text-2xl font-bold'>Company</h4>
                            {
                                Items.map((item) => (
                                    <div className="flex mt-4 flex-col">
                                        {item.Company.map((item, index) => (
                                            <span key={index} className="my-2 font-semibold text-lg">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                        {/* Support */}
                        <div>
                            <h4 className='text-2xl font-bold'>Support</h4>
                            {
                                Items.map((item) => (
                                    <div className="flex mt-4 flex-col">
                                        {item.Support.map((item, index) => (
                                            <span key={index} className="my-2 font-semibold text-lg">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                        {/* Contact */}
                        <div>
                            <h4 className='text-2xl font-bold'>Contact</h4>
                            {
                                Items.map((item) => (
                                    <div className="flex mt-4 flex-col">
                                        {item.Contact.map((item, index) => (
                                            <span key={index} className="my-2 font-semibold text-lg">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Lower Side */}
                    <div className='mt-36'>
                        {/* line */}
                        <div>
                            <hr className="w-full h-[1px] mx-auto my-3 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />
                        </div>
                        {/* headings */}
                        <div className='flex flex-col md:flex-row justify-evenly md:space-x-2 lg:space-x-0 space-y-2 md:space-y-0'>
                            <h5 className='text-lg'>Copyright © 2023 Dine Market</h5>
                            <div>
                                <h5 className='text-lg'>Design by.</h5>
                                <h5 className='font-bold text-lg'>M Sudais Ansari</h5>
                            </div>
                            <div>
                                <h5 className='text-lg'>Code by.</h5>
                                <h5 className='font-bold text-lg'>sudaisansari on github</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer