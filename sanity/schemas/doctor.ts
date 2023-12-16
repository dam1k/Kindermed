import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'doctor',
    title: 'Doctor',
    type: 'document',
    fields: [
        defineField({
            name: 'fullName',
            title: 'Full name',
            type: 'string',
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'schedule',
            title: 'Orar',
            type: 'array',
            of: [{type: 'reference', to: {type: 'doctorSchedule'}}],
        }),
        defineField({
            name: 'alternateDay',
            title: 'Ziua orar alternativ',
            type: "string"
        }),
        defineField({
            name: 'alternateHours',
            title: 'Ore orar alternativ',
            type: "string"
        }),
    ]
})
