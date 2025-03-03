
import { AdvancedImage, placeholder, lazyload } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen/index';

interface PortfolioCldImageSmProps {
    image: CloudinaryImage;

}

export default function PortfolioCldImageSm({ image }: Readonly<PortfolioCldImageSmProps>) {

    return (
        <AdvancedImage
            cldImg={image}
            style={{ maxWidth: '100%' }}
            plugins={[lazyload(), placeholder()]}
            loading="lazy"
        />

    );
};
