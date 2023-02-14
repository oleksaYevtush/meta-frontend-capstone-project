import * as React from "react";
import { Center } from "@mantine/core";
import {
  ConfirmationButton,
  ReservationsBottom,
  ReservationsTop,
} from "src/components";
import { BookingFormContextProvider, StateContext } from "src/contexts";

const images = [
  "restaurant.jpg",
  "restaurant-chef.jpg",
  "salad.jpg",
  "grill.jpg",
  "grilled-fish.jpg",
  "pasta.jpg",
];

const ReservationsPage = () => {
  const { confirm } = React.useContext(StateContext);

  return (
    <BookingFormContextProvider>
      <ReservationsTop />
      <Center my="xl">
        <ConfirmationButton />
      </Center>

      <ReservationsBottom
        images={!confirm ? images.slice(0, 3) : images.slice(3, 6)}
      />
    </BookingFormContextProvider>
  );
};

export default ReservationsPage;
