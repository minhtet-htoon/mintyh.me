import React from 'react';
import Link from "next/link";
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import MhHeader from "../components/header";
import Footer from "../components/footer";

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        color:theme.colors.gray[2],
        fontFamily: `Roboto mono, mono`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

export default function Custom500() {
    const { classes } = useStyles();

    return (
        <div>
            <MhHeader/>
            <Container className={classes.root}>
                <div className={classes.label}>500</div>
                <Title className={classes.title}>:/</Title>
                <Text color="dimmed" size="lg" align="center" className={classes.description}>
                    This is unfortunate. It appears that something has gone wrong on our end
                </Text>
                <Group position="center">
                    <Link href='/' passHref={true}>
                        <Button variant="subtle" size="md">
                            Take me back to home page
                        </Button>
                    </Link>
                </Group>
            </Container>
            <Footer/>
        </div>
    );
}