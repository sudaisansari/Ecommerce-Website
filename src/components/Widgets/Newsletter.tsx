import React from 'react'
import { Button } from '../shared/Button'
import { Input } from "../shared/Input"
import Wrapper from "@/components/shared/Wrapper"

const Newsletter = () => {
    return (
        <section id='newsletter'>
            <Wrapper>
                <div className='flex mt-36 flex-col relative justify-center items-center'>
                    <h2 className="absolute opacity-50 xl:block hidden top-0 text-8xl font-bold text-gray-200">
                        Newsletter
                    </h2>
                    {/* Heading */}
                    <div>
                        <h2 className='text-[32px] font-bold tracking-wide text-center'>Subscribe Our Newsletter</h2>
                    </div>
                    {/* Sub heading */}
                    <div>
                        <h4 className='tracking-wide font-normal mt-5 text-md text-center'>Get the latest information and promo offers directly</h4>
                    </div>
                    {/* Input Field */}
                    <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row items-center mt-6 justify-center space-x-2'>
                        {/* field */}
                        <div>
                            <Input type="email" placeholder="Email" className='rounded-none w-72' />
                        </div>
                        {/* button */}
                        <div>
                            <Button className='rounded-none text-center text-white w-36 bg-[#212121]'>Get Started</Button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Newsletter