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
        // defineField({
        //     name: 'mainImage',
        //     title: 'Main image',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        //     fields: [
        //         {
        //             name: 'alt',
        //             type: 'string',
        //             title: 'Alternative Text',
        //         }
        //     ]
        // }),
        // defineField({
        //     name: 'shortDesc',
        //     title: 'Descriere scurtă',
        //     type: 'string',
        // }),
        // defineField({
        //     name: 'longDesc',
        //     title: 'Descriere lungă',
        //     type: 'string',
        // }),
        defineField({
            name: 'doctors',
            title: 'Doctors',
            type: 'array',
            of: [{type: 'reference', to: {type: 'doctor'}}],
        }),
    ],
})