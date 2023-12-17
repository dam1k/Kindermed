import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'department',
    title: 'Department',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'specialty',
            title: 'Specialty',
            type: 'string',
        }),
        defineField({
            name: 'doctors',
            title: 'Doctors',
            type: 'array',
            of: [{type: 'reference', to: {type: 'doctor'}}],
        }),
    ],
    // preview: {
    //     select: {
    //         title: 'title',
    //         author: 'author.name',
    //         media: 'mainImage',
    //     }
    // },
})