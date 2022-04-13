import React, { useState } from 'react';
import {createStyles, Header, Group, ActionIcon, Container, Burger, Image} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    links: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    social: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },

    burger: {
        marginRight: theme.spacing.md,

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors.gray[0], 0.25)
                    : theme.colors.gray[2],
            color: theme.colors.gray[9],
        },
    },
}));

interface HeaderMiddleProps {
    links: { link: string; label: string }[];
}

const links:HeaderMiddleProps = {
    links:[
        {
            link: '/',
            label:'Home'
        },
        {
            link: '/about',
            label: 'About Me'
        },
        {
            link: '/projects',
            label: 'Projects'
        }
    ]
}

export default function MhHeader() {
    const [opened, toggleOpened] = useBooleanToggle(false);
    const [active, setActive] = useState(links.links[0].link);
    const { classes, cx } = useStyles();

    const items = links.links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={56} style={{
            position:"sticky",
            marginTop:0
        }}>
            <Container className={classes.inner}>
                <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    size="sm"
                    className={classes.burger}
                />
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>

                <Image src='/MH.png'/>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    );
}