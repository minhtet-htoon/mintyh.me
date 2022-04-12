// noinspection TypeScriptValidateTypes

import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import {BrandYoutube, BrandInstagram, BrandGithub, Link} from 'tabler-icons-react';

//ts-ignore
const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export default function Footer() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <div>
                    <p>
                        © 2022 Minhtet Htoon
                    </p>
                    <p style={{fontSize:12}}>
                        Powered by <a href="https://nextjs.org">NextJS</a>
                    </p>
                    <p style={{fontSize:12}}>
                        Hosted on <a href="https://vercel.com">Vercel</a>
                    </p>
                </div>
                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <a href='https://github.com/minhtet-htoon'>
                        <ActionIcon size="lg">
                            <BrandGithub size={18}/>
                        </ActionIcon>
                    </a>
                    <ActionIcon size="lg">
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}