// import { pgTable, varchar, integer, serial } from "drizzle-orm/pg-core"
// import {sql} from "@vercel/postgres"
// import {drizzle} from "drizzle-orm/vercel-postgres"

// //Table below same as database table
// export const cartTable = ({
//     id : serial("id").primaryKey(),
//     user_id : varchar("user_id",{
//         length : 255
//     }).notNull(),
//     // product_id : varchar("product_id",{
//     //     length : 255
//     // }).notNull(),
//     quantity : integer("quantity").notNull()
// });

// export const db = drizzle(sql);


import { pgTable, varchar, serial, integer, text } from "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { sql } from "@vercel/postgres"
import { InferModel } from "drizzle-orm"

// id user_id  title  product_id quantity  price imageURL
export const cartTable = pgTable("carts", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {
        length: 255
    }).notNull(),
    product_id: varchar("product_id", {
        length: 255
    }).notNull(),
    quantity: integer("quantity").notNull(),
    title: varchar("title", {
        length: 255
    }).notNull(),
    price: integer("price").notNull(),
    image: varchar("image", {
        length: 255
    }).notNull(),
    description: varchar("description", {
        length: 255
    }).notNull()
})

export type CartTable = InferModel<typeof cartTable>
export type NewCartTable = InferModel<typeof cartTable, "insert">

export const db = drizzle(sql)