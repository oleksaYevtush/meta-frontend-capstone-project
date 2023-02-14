import * as React from "react";
import { Card, createStyles, Group, Rating, Text, Title } from "@mantine/core";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  image: {
    height: 50,
    width: 50,
    objectFit: "cover",
    borderRadius: 50,
  },
}));

interface Review {
  rating: number;
  image: string;
  name: string;
  testimonial: string;
}

const Testimonial: React.FC<{ review: Review }> = ({ review }) => {
  const { classes } = useStyles();

  return (
    <Card radius="lg" shadow="lg">
      <Rating defaultValue={review.rating} readOnly />
      <Group my="lg">
        <img src={review.image} className={classes.image} />
        <Title order={4}>{review.name}</Title>
      </Group>
      <Text size="sm" c={colors.primary}>
        {review.testimonial}
      </Text>
    </Card>
  );
};

export default Testimonial;
