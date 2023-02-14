import * as React from "react";
import { Box, Container, Title } from "@mantine/core";
import { BookingForm, SubmitForm } from "src/components";
import { colors } from "src/theme";
import { StateContext } from "src/contexts";

const ReservationsTop = () => {
  const { confirm } = React.useContext(StateContext);

  return (
    <Box component="section" py="md" sx={{ backgroundColor: colors.primary }}>
      <Container>
        {confirm ? (
          <SubmitForm />
        ) : (
          <>
            <Title my="sm" c={colors.secondary}>
              Reservations
            </Title>
            <BookingForm />
          </>
        )}
      </Container>
    </Box>
  );
};

export default ReservationsTop;
