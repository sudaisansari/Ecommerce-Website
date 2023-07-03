import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import { AllProducts } from '@/utils/mock'
import ProductCard from '@/components/shared/ProductCard'

const page = async () => {
  const data = await AllProducts();

  return (
    <section id='allproducts'>
      <Wrapper>
        <div className='grid lg:grid-cols-[repeat(4,auto)] justify-start gap-x-16 mx-4 mt-12'>
          {
            data.map((product) => (
              <ProductCard
                key={product._id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                _id={product._id}
                category={{ name: product.category.name }}
              />
            ))
          }
        </div>
      </Wrapper>
    </section>
  )
}

export default page