import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'price',
    title: 'Price',
    type: 'document',
    fields: [
        defineField({
            name: 'oldPrice',
            title: 'Prețul vechi',
            type: 'number',
        }),
        defineField({
            name: 'currentPrice',
            title: 'Prețul curent',
            type: 'string',
        }),
    ]
})
