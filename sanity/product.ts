import { defineType, defineField } from "sanity"

export const product = defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image"
        }),
        defineField({
            name: "price",
            title: "Product price",
            type: "number"
        }),
        defineField({
            name: "category",
            title: "Product category",
            type: "reference",
            to: [
                {
                    type: "category"
                }
            ]
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        })
    ]
}) 