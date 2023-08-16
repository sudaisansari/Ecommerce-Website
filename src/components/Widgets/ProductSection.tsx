import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import ProductSlider from '@/components/shared/Slider'

const ProductSection = () => {

    return (
        <section id='productsection'>
            <Wrapper>
                <div className='mt-36'>
                    {/* Heading */}
                    <div className=''>
                        <h3 className='text-[#7E2CFF] font-bold text-center'>PRODUCTS</h3>
                        <h2 className='text-[32px] tracking-wide font-bold text-center'>Check What We Have</h2>
                    </div>
                    {/* Slider */}
                    <div>
                       <ProductSlider />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default ProductSection