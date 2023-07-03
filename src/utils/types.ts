import { Image as IImage } from 'sanity'


export type TProduct = {
  _id: string;
  title: string;
  price: number;
  description : string,
  image: IImage;
  category:{
   name : string 
  };
};