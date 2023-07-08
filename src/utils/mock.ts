import { client } from "@/lib/sanityClient"
import { TProduct } from "./types"

const getProducts = async() => {
        const res = await client.fetch(`*[_type == "product"]{
          description,
           title,
           price,
           image,
           _id,
           category -> {
            name
          }
        }`)
        return res
      }

     export const AllProducts = async () => {
        const data: TProduct[] = await getProducts();
        return await data
      };