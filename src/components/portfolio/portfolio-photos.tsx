'use client';
import * as React from "react";
import { Container, Box } from "@mantine/core";
import { portfolioPhotos, Photo } from '@/lib/photos';
import { useViewportSize } from '@mantine/hooks';
import { useState, useEffect } from "react";
import PortfolioCldImageSm from '@/components/portfolio/portfolio-cld-image-item';
import { LightBoxModal } from "./lightbox-modal";
import { getRelativeSize } from "@/lib/cloudinary-image";

export default function PortfolioPhotos() {
    const [photos, setPhotos] = useState<Photo[] | null>(null);
    const [opened, setOpened] = useState(false);
    const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

    useEffect(() => {
        setPhotos(portfolioPhotos);
    }, []);

    const { width: viewportWidth, height: viewportHeight } = useViewportSize();

    // Open lightbox
    const openLightbox = (photo: Photo) => {
        setSelectedImage(photo);
        setOpened(true);
    };

    // Close lightbox
    const closeLightbox = () => {
        setOpened(false);
        setSelectedImage(null);
    };

    return (
        <Container size="xl">
            {/* Lightbox Modal */}
            {LightBoxModal(opened, closeLightbox, selectedImage, getRelativeSize, viewportWidth, viewportHeight)}
            <Box className="gridContainer" >
                {photos?.map((photo: Photo) => (

                    <Box key={String(photo.key)} className="gridContainerItem"
                        onClick={() => openLightbox(photo)}
                        style={{ cursor: " pointer" }}>
                        < PortfolioCldImageSm public_id={photo.public_id} />
                        {/* <Text ta="center" mt="md">{photo.description}</Text> */}
                    </Box>


                ))

                }
            </Box>
            {/* </Grid> */}


        </Container >);
}





