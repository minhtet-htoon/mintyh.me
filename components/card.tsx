import {Badge, Button, Card, Group, Image, Text, useMantineTheme} from "@mantine/core";
import {BrandGithub} from "tabler-icons-react";

export interface IProject {
    name:string;
    details:string;
    image:string;
    link:string;
    status:EStatus;
}

export enum EStatus {
    Finished,
    InDev,
    Delayed,
    Canceled,
}

export default function ProjectCard(props:IProject) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];
    const color = (status:EStatus) => {
      switch (status) {
          case EStatus.Finished:{
              return 'green';
          }
          case EStatus.InDev:{
              return 'yellow'
          }
          case EStatus.Delayed:{
              return 'orange'
          }
          case EStatus.Canceled:{
              return 'red'
          }
      }
    }
    function statusText(status:EStatus):string {
        switch (status) {
            case EStatus.Canceled:{
                return 'cancelled'
            }
            case EStatus.Delayed:{
                return'delayed'
            }
            case EStatus.InDev:{
                return 'In Development'
            }
            case EStatus.Finished:{
                return 'Finished'
            }
        }
    }
    return(
            <Card shadow="sm" p="lg" style={{ width: 300, margin: 'auto' }}>
                <Card.Section>
                    <Image src={props.image} height={250} alt={props.name} />
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>{props.name}</Text>
                    <Badge color={color(props.status)} variant="light">
                        {statusText(props.status)}
                    </Badge>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {props.details}
                </Text>

                <Button onClick={()=>{
                    window.open(props.link)
                }} variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    <BrandGithub/> View Source
                </Button>
            </Card>
        )

}