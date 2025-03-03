import { cloudinaryConfig } from '@/lib/cloudinary-config';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { limitFit, thumbnail } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen/index";
export const getRelativeSize = (size: number) => {
    return Math.round(size * .8)
}
export function getCldImage(id: string, height: number, width: number) {
    const image = cloudinaryConfig
        .image(id)
        .resize(limitFit()
            .width(width)
            .height(height));
    return image;
}

export function getCldImageThumbNail(id: string): CloudinaryImage {
    return cloudinaryConfig
        .image(id)
        .resize(thumbnail().width(280))
        .delivery(format('auto'))
        .delivery(quality('auto'))
}
