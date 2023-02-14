import { createStyles } from "@mantine/core";
import { DatePicker, DatePickerProps } from "@mantine/dates";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  input: {
    color: colors.primary,
    fontWeight: 600,
    border: "none",
  },
  activeInput: {
    color: colors.light,
    backgroundColor: colors.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    fontWeight: 600,
  },
  dropdown: {
    borderRadius: theme.radius.lg,
  },
  rightSection: {
    marginRight: 20,
    pointerEvents: "none",
  },
  day: {
    "&[data-selected]": {
      backgroundColor: colors.primary,
      position: "relative",
    },
  },
}));

const DateField = (props: DatePickerProps) => {
  const { classes, cx } = useStyles();

  return (
    <DatePicker
      variant="filled"
      radius="md"
      size="xl"
      {...props}
      classNames={{
        input: cx(classes.input, {
          [classes.activeInput]: props.value,
        }),
        dropdown: classes.dropdown,
        rightSection: classes.rightSection,
        day: classes.day,
      }}
    />
  );
};

export default DateField;
