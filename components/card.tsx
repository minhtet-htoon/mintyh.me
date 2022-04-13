import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Modal,
  Stepper,
  Text,
  useMantineTheme
} from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";
import { useState } from "react";

export interface IProject {
  name: string;
  details: string;
  image: string;
  link: string;
  status: number;
  stage: number;
}

export default function ProjectCard(props: IProject) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const color = (status: number) => {
    switch (status) {
      case 0: {
        return "green";
      }
      case 1: {
        return "yellow";
      }
      case 2: {
        return "orange";
      }
      case 3: {
        return "red";
      }
    }
  };
  function statusText(status: number): string {
    switch (status) {
      case 3: {
        return "cancelled";
      }
      case 2: {
        return "delayed";
      }
      case 1: {
        return "In Development";
      }
      case 0: {
        return "Finished";
      }
      default: {
        return "";
      }
    }
  }
  const [opened, setOpened] = useState(false);
  return (
    <Card shadow="sm" p="lg" style={{ width: 300, margin: "auto" }}>
      <Card.Section>
        <Image src={props.image} height={250} alt={props.name} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text
          onClick={() => {
            setOpened(true);
          }}
          weight={500}
        >
          {props.name}
        </Text>
        <Badge color={color(props.status)} variant="light">
          {statusText(props.status)}
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {props.details}
      </Text>

      <Button
        onClick={() => {
          window.open(props.link);
        }}
        variant="light"
        color="gray"
        fullWidth
        style={{ marginTop: 14 }}
      >
        <BrandGithub /> View Source
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Project Details"
        size="80%"
      >
        <div className="width-1/2">
          <h1 style={{ fontSize: 36 }}>Name: {props.name}</h1>
          <p>{props.details}</p>
        </div>
        <div className="width-1/2">
          <Stepper
            active={props.stage}
            breakpoint="sm"
            color={color(props.status)}
            size="xs"
            orientation="vertical"
          >
            <Stepper.Step label="Idea">
              Step 1: An idea which may not happen
            </Stepper.Step>
            <Stepper.Step label="Prototype"></Stepper.Step>
            <Stepper.Step label="Development"></Stepper.Step>
            <Stepper.Step label="Closed Alpha/Beta" />
            <Stepper.Step label="Open Alpha/Beta" />
            <Stepper.Step label="Production" />
          </Stepper>
        </div>
      </Modal>
    </Card>
  );
}
