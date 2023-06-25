import ProductCard from '@/components/shared/ProductCard'
import { AllProducts } from '@/utils/mock'
import React from 'react'
import Wrapper from '@/components/shared/Wrapper'

const getProductsByCategory = async (category: string) => {
  const data = await AllProducts()
  return data.filter((product) => product.category.name === category)
}

const page = async ({ params }: { params: { slug: string } }) => {
  const result = await getProductsByCategory(params.slug);
  return (
    <Wrapper>
      <div className='grid lg:grid-cols-[repeat(4,auto)] justify-start gap-x-16 mx-4 mt-12'>
        {
          result.length > 0 ?
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
            )) :
            <p className='font-bold text-2xl'>No Products Found</p>
        }
      </div>
    </Wrapper>
  )
}

export default page