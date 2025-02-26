import { cloudinaryConfig } from '@/lib/cloudinary-config';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { limitFit } from "@cloudinary/url-gen/actions/resize";

export const getRelativeSize = (size: number) => {
    return Math.round(size * .8)
}
export default function getCldImage(id: string, height: number) {
    const image = cloudinaryConfig.image(id);

    // Resize to relative viewport height, get image
    image.resize(limitFit()
        .height(getRelativeSize(height)).relative())
        .delivery(format('auto'))
        .delivery(quality('auto'));
    return image;
}
