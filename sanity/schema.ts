import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import tag from './schemas/tag'
import post from './schemas/post'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, tag, blockContent],
}
