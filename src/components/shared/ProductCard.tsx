import React from 'react'
import { Image as IImage } from 'sanity'
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';

const ProductCard = (
  props:
    {
      _id: string;
      title: string;
      price: string;
      description: string,
      image: IImage;
      category: {
        name: string
      };
    }) => {
      return(
    <Link href={`/allproducts/${props._id}`}>
      <div className='mt-4'>
        <div className=''>
          <Image
            width={250}
            height={350}
            src={urlForImage(props.image).url()}
            alt='Male Products' />
        </div>
        <div className='space-y-1 mt-1'>
          <p className='text-textPrimary font-bold text-xl'>{props.title}</p>
          <p className='text-textSecondary font-semibold text-lg'>{props.description}</p>
          <p className='text-textPrimary font-bold text-xl'>${props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard