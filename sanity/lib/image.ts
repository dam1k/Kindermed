import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

export const urlForArticleImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source)
}

