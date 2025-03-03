'use client';
import * as React from "react";
import { Text, Modal } from "@mantine/core";
import { Photo } from '@/lib/photos';
import { getCldImage } from '@/lib/cloudinary-image';
import { AdvancedImage, placeholder, responsive, } from '@cloudinary/react';

export interface LightBoxModalProps {
    opened: boolean;
    closeLightbox: () => void;
    selectedImage: Photo;
}

export function LightBoxModal({ opened, closeLightbox, selectedImage }: Readonly<LightBoxModalProps>) {
    const maxScaleSize: number = 2000;
    const height: number = maxScaleSize, width: number = maxScaleSize;

    return (<Modal opened={opened} onClose={closeLightbox} centered padding={0} fullScreen={true}>


        <div style={{ height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AdvancedImage cldImg={getCldImage(selectedImage.public_id, height, width)}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                plugins={[responsive({ steps: [800, 1000, 1400] }), placeholder()]} />

        </div>
        <Text ta="center" mt="md">{selectedImage.description}</Text>




    </Modal>
    )
}
