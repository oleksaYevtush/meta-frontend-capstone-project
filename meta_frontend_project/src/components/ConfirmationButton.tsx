import * as React from "react";
import { Button, createStyles } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import { StateContext } from "src/contexts";
import { useBookingForm } from "src/hooks";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: colors.secondary,
    "&:hover": {
      backgroundColor: theme.colors.yellow[6],
    },
  },
}));

const ConfirmationButton = () => {
  const { classes } = useStyles();
  const { confirm, handleSwitchConfirmation, handleSendData } =
    React.useContext(StateContext);
  const { useFormContext } = useBookingForm();
  const form = useFormContext();

  const submitForm = () => {
    if (form.validate().hasErrors) {
      handleSendData();
      showNotification({
        title: "Incomplete info!",
        message: "Make sure to fill all the required fields.",
        color: "red",
        icon: <IconX />,
      });
    } else {
      showNotification({
        title: "Thank you!",
        message: "Your reservation has been confirmed. Check you email.",
        color: "green",
        icon: <IconCheck />,
      });
    }
  };

  return (
    <Button
      size="md"
      radius="lg"
      c="dark"
      fw="bolder"
      w={300}
      className={classes.button}
      type="submit"
      onClick={!confirm ? handleSwitchConfirmation : submitForm}
    >
      {!confirm ? "Reserve a Table" : "Confirm Reservation"}
    </Button>
  );
};

export default ConfirmationButton;
