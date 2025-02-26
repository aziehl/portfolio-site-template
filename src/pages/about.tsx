
import { GetStaticProps } from 'next';
import { UnstyledButton, Flex, Group, Paper, Container, Anchor, Text, Title } from '@mantine/core';
import Head from 'next/head';
import { containerProps, paperProps } from '@/lib/constants';
import { IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { cloudinaryConfig } from '@/lib/cloudinary-config';
import { AdvancedImage, placeholder, lazyload } from '@cloudinary/react';
import { limitFit } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import Contact from '@/components/contact/contactform';

interface AboutProps {
    instagramURL: string;
    linkedinURL: string;
    recaptchaURL: string;
}

// fetch IG / LinkedIn / recaptcha urls
export const getStaticProps: GetStaticProps = async () => {
    const instagramURL = process.env.INSTAGRAM_URL ?? "";
    const linkedinURL = process.env.LINKEDIN_URL ?? "";
    const recaptchaURL = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

    return {
        props: {
            instagramURL,
            linkedinURL,
            recaptchaURL,
        },
    };
};

export default function About({ instagramURL, linkedinURL, recaptchaURL }: Readonly<AboutProps>) {
    const headShotImage = cloudinaryConfig
        .image("headshot")
        .resize(limitFit().width(280).relative())
        .delivery(format('auto'))
        .delivery(quality('auto'));


    return (
        <>
            <Head>
                <title>About</title>
                <link rel="canonical" href={"/about"} />
            </Head>

            <Container {...containerProps}>
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Title order={2} fw={700} >Hey There!</Title>
                    <UnstyledButton size="lg" component="a" href={instagramURL} >
                        <IconBrandInstagram size={50} color="var(--mantine-color-feldgrau-9)" />
                    </UnstyledButton>
                    <UnstyledButton size="lg" component="a" href={linkedinURL} >
                        <IconBrandLinkedin size={47} color="var(--mantine-color-feldgrau-9)" />
                    </UnstyledButton>
                </Flex>

                <Paper {...paperProps}>
                    <Text size="md"> Hey, I&apos;m Andrew. I thrive on love of family, community and the outdoors. Whidbey has been home since 2016, when I moved to the island with my partner from Seattle. We originally relocated together from Boston in 2013 after a cross-country road trip.</Text>
                </Paper>
                <Paper {...paperProps}>
                    <Text size="md">I absolutely love being a dad to our kiddo, Eliot. Our family is often out on the local trails biking, running, hiking, or playing. I served for nearly 3 years on the <Anchor href="https://www.ebeysreserve.com/" target="_blank">Ebey&apos;s Reserve Trust Board</Anchor>, and valued the chance to help protect Coupeville and the surrounding prairie. The mountains in Washington hold quite an allure but I&apos;ll always have a connection to Mt. Washington, NH, where I built my backcountry skiing skills and earned my AIARE Level 1. Professionally I&apos;m a software engineer who loves the never ending puzzle of computer science. Creatively, I am a writer, musician, and photographer.</Text>
                </Paper>
                <Group justify="center" mt="md">
                    <AdvancedImage
                        cldImg={headShotImage}
                        className="headshot"

                        plugins={[placeholder(), lazyload()]}
                        loading="lazy"
                        alt="It's Me!"

                    />
                </Group>
                <Contact recaptchaURL={recaptchaURL} />
            </Container >

        </>
    );
}
