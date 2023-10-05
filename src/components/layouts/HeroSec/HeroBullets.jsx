import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import React from "react";

const useStyles = createStyles((theme) => ({
  // container: {
  //   backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "#000000",


  // },


  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 4,

  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,


    [theme.fn.smallerThan("md")]: {
      display: "none",

    },

  },


}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div className="bg-gray-900 " >
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {/* <h1 className={classes.title}>
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  inherit
                >
                  Powering The Next Generation Of Learning-Based 3D Application
                </Text>
              </h1> */}
              <span className={classes.title}>
              <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  inherit
                >
              Powering the next generation of learning-based 3D application
              </Text>

              </span>
            </Title>

            <List
            className="text-white"
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon  size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item >
                <b>WebGL, Mobile, Augmented and Virtual Reality</b>
              </List.Item>
              <List.Item>
                <b>The first cloud based virtual 3D assets Of human organs</b>
              </List.Item>
              <List.Item>
                <b>
                  Interactive virtual platform for visualizing 3D interior
                  design
                </b>
              </List.Item>
              <List.Item>
                <b>Virtual 3D experience for the tourist</b>
              </List.Item>
            </List>
          </div>
          <Image src="/images/vrman.jpg" radius={"md"} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
export default HeroBullets;
