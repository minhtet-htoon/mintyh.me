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
        <a onClick={()=>{setOpened(true)}} href='javascript:void(0);' style={{fontWeight:500}}>{props.name}</a>
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
        className='flex flex-row'
      >
        <div className='flex flex-row'>
          <div className="basis-2/3">
            <h1 style={{ fontSize: 36 }}>Name: {props.name}</h1>
            <p>{props.details}</p>
            <Button
                onClick={() => {
                  window.open(props.link);
                }}
                variant="light"
                color="gray"
                fullWidth
                style={{ width:'50%', margin:'auto' }}
            >
              <BrandGithub /> View Source
            </Button>
          </div>
          <div className="basis-1/3">
            <Stepper
                active={props.stage}
                breakpoint="xs"
                color={color(props.status)}
                size="xs"
                orientation="vertical"
            >
              <Stepper.Step label="Idea" description='An idea that has yet to be explored, may not develop to an actual project'/>
              <Stepper.Step label="Prototype" description='Exploring the idea, still may not be developed'/>
              <Stepper.Step label="Development" description='Developing the app. Confirmed will be taken to production'/>
              <Stepper.Step label="Closed Alpha/Beta" description='Early access for project supporters and others'/>
              <Stepper.Step label="Open Alpha/Beta" description='Early access to the public. Project is now truly open source and available. Not yet stable'/>
              <Stepper.Step label="Production" description='Project is now stable and ready for realease. Will contiune to recieve updates'/>
            </Stepper>
          </div>
        </div>
      </Modal>
    </Card>
  );
}
