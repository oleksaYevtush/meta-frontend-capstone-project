import * as React from "react";
import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  Group,
  Title,
} from "@mantine/core";
import { colors } from "src/theme";
import specials from "src/data/specials.json";
import { Card } from "src/components";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: colors.secondary,
    "&:hover": {
      backgroundColor: theme.colors.yellow[6],
    },
  },
}));

const Specials = () => {
  const { classes } = useStyles();

  const cards = React.useMemo(
    () =>
      specials.map((special) => (
        <Grid.Col key={special.id} sm={6} md={4}>
          <Card dish={special} />
        </Grid.Col>
      )),
    []
  );

  return (
    <Box component="section">
      <Container>
        <Group mt={120} mb={50} position="apart" noWrap>
          <Title fs="xl">This weeks specials!</Title>
          <Button
            size="lg"
            radius="lg"
            c="dark"
            fw="bolder"
            className={classes.button}
          >
            Online Menu
          </Button>
        </Group>
        <Grid gutter="xl">{cards}</Grid>
      </Container>
    </Box>
  );
};

export default Specials;
