import { Anchor, Group } from '@mantine/core';
import classes from '@/styles/Footer.module.css';
import { PageLinks } from '@/components/page-elements/page-links';

export default function Footer() {
    const items = PageLinks.map((link) => (
        <Anchor
            c="dimmed"
            key={link.label}
            href={link.link}
            lh={1}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Group className={classes.links}>{items}</Group>
            </div>
        </div>
    );
}