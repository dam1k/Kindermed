import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'pachet',
    title: 'Pachet',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'consultations',
            title: 'Consultații',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'consultationsDesc',
            title: 'Descriere consultații',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'specialists',
            title: 'Specialiști',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'specialistsDesc',
            title: 'Descriere specialiști',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'investigations',
            title: 'Investigații',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'investigationsDesc',
            title: 'Descriere investigații',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'examinations',
            title: 'Examinări',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'examinationsDesc',
            title: 'Descriere examinări',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'prices',
            title: 'Prices',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'sale',
            title: 'Reducere',
            type: 'string',
        }),
        defineField({
            name: 'saleDesc',
            title: 'Descriere reducere',
            type: 'string',
        }),
    ]
})
