'use client';
import * as React from "react";
import { Container, Box } from "@mantine/core";
import { portfolioPhotos, Photo } from '@/lib/photos';
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import PortfolioCldImageSm from '@/components/portfolio/portfolio-cld-image-item';
import { LightBoxModal } from "./lightbox-modal";
import { getCldImageThumbNail } from '@/lib/cloudinary-image';

export default function PortfolioPhotos() {
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedImage, setSelectedImage] = useState<Photo>(portfolioPhotos[0]); // init on first image

    const openLightbox = (photo: Photo) => {
        setSelectedImage(photo);
        open();
    };

    return (
        < Container size="xl" >
            {/* Lightbox Modal */}
            < LightBoxModal opened={opened} closeLightbox={close} selectedImage={selectedImage} />
            <Box className="gridContainer" >
                {portfolioPhotos.map((photo: Photo) =>

                    <Box key={String(photo.key)} className="gridContainerItem"
                        onClick={() => openLightbox(photo)}
                        style={{ cursor: " pointer" }}>
                        <PortfolioCldImageSm image={getCldImageThumbNail(photo.public_id)} />
                    </Box>
                )
                }
            </Box>
        </Container >
    )
}





