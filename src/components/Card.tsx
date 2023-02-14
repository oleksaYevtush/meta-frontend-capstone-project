import * as React from "react";
import { Card, createStyles, Group, Stack, Text, Title } from "@mantine/core";
import { IconBike } from "@tabler/icons";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  background: {
    backgroundColor: colors.light,
  },
  image: {
    width: "100%",
    objectFit: "cover",
  },
  description: {
    minHeight: 150,
  },
  button: {
    cursor: "pointer",
  },
}));

interface Dish {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const _Card: React.FC<{ dish: Dish }> = ({ dish }) => {
  const { classes } = useStyles();

  return (
    <Card radius="lg" shadow="md" className={classes.background}>
      <Card.Section>
        <img src={dish.image} height={200} className={classes.image} />
      </Card.Section>
      <Stack my="lg">
        <Group position="apart" noWrap>
          <Title order={3}>{dish.title}</Title>
          <Text c={colors.pink} fw="bold">
            ${dish.price}
          </Text>
        </Group>
        <Text c={colors.primary} className={classes.description}>
          {dish.description}
        </Text>
      </Stack>
      <Group
        className={classes.button}
        onClick={() => {
          console.log(`Ordering ${dish.title}...`);
        }}
      >
        <Text fw="bold">Order a delivery</Text>
        <IconBike size={20} />
      </Group>
    </Card>
  );
};

export default _Card;
