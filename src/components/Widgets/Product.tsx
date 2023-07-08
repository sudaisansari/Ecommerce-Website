import React from 'react'
import Wrapper from '../shared/Wrapper'
import Slider from '../shared/Slider'

const Product = () => {

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
                    <div>
                       <Slider />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default Product