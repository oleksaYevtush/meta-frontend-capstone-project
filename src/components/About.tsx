import { Box, Container, createStyles, Grid, Text, Title } from "@mantine/core";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  imageContainer: {
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  frontPic: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "auto",
    width: "auto",
    maxHeight: 300,
    maxWidth: 300,
    objectFit: "contain",
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.xl,
    zIndex: 2,
    [theme.fn.smallerThan("md")]: {
      maxWidth: 200,
      maxHeight: 200,
    },
  },
  backPic: {
    position: "absolute",
    right: 150,
    top: 100,
    height: "auto",
    width: "auto",
    maxHeight: 300,
    maxWidth: 300,
    objectFit: "contain",
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.xl,
    zIndex: 1,
    [theme.fn.smallerThan("md")]: {
      right: 100,
      top: 70,
      maxWidth: 200,
      maxHeight: 200,
    },
  },
}));

const About = () => {
  const { classes } = useStyles();

  return (
    <Box component="section" pt={50}>
      <Container>
        <Grid>
          <Grid.Col sm={6} md={6}>
            <Title c={colors.primary}>Little Lemon</Title>
            <Title order={3}>Chicago</Title>
            <Text my="lg" c={colors.dark}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              nemo necessitatibus porro officia ad impedit vero exercitationem
              illo, esse vel vitae error, culpa obcaecati dolorum quis aut unde
              veritatis.
            </Text>
          </Grid.Col>
          <Grid.Col sm={6} md={6} className={classes.imageContainer}>
            <img src="/mario-and-adrian-a.jpg" className={classes.frontPic} />
            <img src="/mario-and-adrian-b.jpg" className={classes.backPic} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
