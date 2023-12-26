import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import tag from './schemas/tag'
import post from './schemas/post'
import author from './schemas/author'
import doctor from './schemas/doctor';
import department from "./schemas/department";
import doctorSchedule from "@/sanity/schemas/doctorSchedule";
import pachet from "@/sanity/schemas/pachet";
import price from "@/sanity/schemas/price";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, doctorSchedule, pachet, price, author, tag, blockContent, doctor, department],
}
