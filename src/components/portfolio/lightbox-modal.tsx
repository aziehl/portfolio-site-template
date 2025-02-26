'use client';
import * as React from "react";
import { Container, Text, Modal } from "@mantine/core";
import { Photo } from '@/lib/photos';
import getCldImage from '@/lib/cloudinary-image';
import { AdvancedImage, placeholder, lazyload } from '@cloudinary/react';
import { containerProps } from "@/lib/constants";

export function LightBoxModal(opened: boolean, closeLightbox: () => void, selectedImage: Photo | null, getRelativeSize: (size: number) => number, width: number, height: number) {
    return <Modal opened={opened} onClose={closeLightbox} centered padding={0} fullScreen={true}>
        {selectedImage ? (
            <Container {...containerProps} size={getRelativeSize(width)}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <AdvancedImage cldImg={getCldImage(selectedImage.public_id, height)}
                        style={{ maxHeight: getRelativeSize(height) }}
                        plugins={[placeholder(), lazyload()]}
                        loading="lazy" />
                </div>
                <Text ta="center" mt="md">{selectedImage.description}</Text>
            </Container>

        ) : (<></>)}
    </Modal>;
}
