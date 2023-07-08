import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import { AllProducts } from '@/utils/mock'
import ProductCard from '@/components/shared/ProductCard'

const getData = async () => {
  const data = await AllProducts();
  return data.filter((products) => products._id !== "39dc22b8-f400-4a57-bb5b-af65ebbab4ed" && products._id !== "8d4a5634-b4f3-4b15-84db-ea5c172b6b85")
}

const page = async () => {
  const result = await getData();
  return (
    <section id='allproducts'>
      <Wrapper>
        <div className='grid lg:grid-cols-[repeat(4,auto)] justify-start gap-x-16 mx-4 mt-12'>
          {
            result.map((product) => (
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