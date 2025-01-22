import { defineType,defineField } from "sanity";

export const product = defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Product Name',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                            .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description'
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Product Price',
    }),
    defineField({
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    }),
    defineField({
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
      description: 'Indicates if the product is featured',
      initialValue: false, // Default value
    }),
    defineField({
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      description: 'Number of items in stock',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Add Category from the listed categories'
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true // Enables cropping and focal point selection
      }
    })
  ]
});