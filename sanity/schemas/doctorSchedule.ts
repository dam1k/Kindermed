import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'doctorSchedule',
    title: 'Orar doctor',
    type: 'document',
    fields: [
        defineField({
            name: 'day',
            title: 'Ziua',
            type: 'string',
        }),
        defineField({
            name: 'hours',
            title: 'Ore',
            type: 'string',
        })
        ]
})