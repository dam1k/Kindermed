import { urlForArticleImage, urlForImage } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
    src: SanityImageSource;
};

import React from 'react';

function SanityImage({ src, alt, ...props }: Props) {
    return (
        <Image
            src={urlForArticleImage(src).url()}
            alt={alt}
            loader={({ width, quality = 100 }) =>
                urlForArticleImage(src).width(width).quality(quality).url()
            }
            {...props}
        />
    );
}

export default SanityImage;