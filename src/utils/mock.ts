import { client } from "@/lib/sanityClient"
import { TProduct } from "./types"

const getProducts = async() => {
        const res = await client.fetch(`*[_type == "product" && _id != "39dc22b8-f400-4a57-bb5b-af65ebbab4ed" && _id != "8d4a5634-b4f3-4b15-84db-ea5c172b6b85"]{
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