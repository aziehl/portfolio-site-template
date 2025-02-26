import { Cloudinary } from '@cloudinary/url-gen';

export const cloudinaryConfig = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
});

