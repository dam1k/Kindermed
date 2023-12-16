import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import tag from './schemas/tag'
import post from './schemas/post'
import author from './schemas/author'
import doctor from './schemas/doctor';
import department from "./schemas/department";
import doctorSchedule from "@/sanity/schemas/doctorSchedule";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, doctorSchedule,  author, tag, blockContent, doctor, department],
}
