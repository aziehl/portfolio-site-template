import { cloudinaryConfig } from '@/lib/cloudinary-config';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { AdvancedImage, placeholder, lazyload } from '@cloudinary/react';

interface PortfolioCldImageSmProps {
    public_id: string;

}

export default function PortfolioCldImageSm({ public_id }: Readonly<PortfolioCldImageSmProps>) {
    const myImage = cloudinaryConfig
        .image(public_id)
        .resize(thumbnail().width(280).relative())
        .delivery(format('auto'))
        .delivery(quality('auto'));
    return (
        <AdvancedImage
            cldImg={myImage}
            style={{ maxWidth: '100%' }}
            plugins={[placeholder(), lazyload()]}
            loading="lazy"
        />

    );
};
