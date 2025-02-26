import { useState } from 'react';
import { Title, Burger, Container, Group, Space, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '@/styles/Header.module.css';
import Link from 'next/link';
import { PageLinks } from '@/components/page-elements/page-links';


export default function Header() {
    const [opened, { open, close }] = useDisclosure(false);
    const [active, setActive] = useState(PageLinks[0].link);
    const menuTitle = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "";

    const burgerItems = PageLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={() => {
                setActive(link.link);
                close()
            }}
        >
            {link.label}
        </Link>
    ));
    const items = PageLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.label}
        </Link>
    ));

    return (
        <div className={classes.header}>

            <Container size="md" className={classes.inner}>

                <Group justify="left" gap={10} visibleFrom="xs">
                    <Title order={1} fw={700}>{menuTitle}</Title>
                    <Space h="xs" />
                    {items}
                </Group>

                <Burger opened={opened} onClick={open} hiddenFrom="xs" size="sm" />


                <Drawer
                    opened={opened}
                    onClose={close}
                    size="100%"
                    padding="md"
                    title={menuTitle}
                    hiddenFrom="sm"
                    zIndex={1000000}
                >
                    {burgerItems}
                </Drawer>
            </Container>
        </div>
    );
}