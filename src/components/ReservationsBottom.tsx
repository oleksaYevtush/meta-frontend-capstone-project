import * as React from "react";
import { Box, Center, Container, createStyles, Grid } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  image: {
    height: 300,
    width: 300,
    objectFit: "cover",
    borderRadius: theme.radius.xl,
    [theme.fn.smallerThan("md")]: {
      height: 200,
      width: 200,
      borderRadius: theme.radius.lg,
    },
    [theme.fn.smallerThan("sm")]: {
      height: 250,
      width: "100%",
      borderRadius: theme.radius.md,
    },
  },
}));

const ReservationsBottom: React.FC<{ images: string[] }> = ({ images }) => {
  const { classes } = useStyles();

  const pictures = React.useMemo(
    () =>
      images.map((image) => (
        <Grid.Col key={image} sm={4} md={4}>
          <img src={image} className={classes.image} />
        </Grid.Col>
      )),
    [images]
  );

  return (
    <Box component="section">
      <Container>
        <Center>
          <Grid my="xl">{pictures}</Grid>
        </Center>
      </Container>
    </Box>
  );
};

export default ReservationsBottom;
