import * as React from "react";
import {
  Box,
  Center,
  createStyles,
  Grid,
  Radio,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Displayer, ErrorMessage, RadioField } from "src/components";
import {
  DateIcon,
  DinersIcon,
  OccasionIcon,
  TimeIcon,
} from "src/components/icons";
import { useBookingForm } from "src/hooks";
import { StateContext } from "src/contexts";
import { dateFormatter } from "src/utils";
import { colors } from "src/theme";

const labelProps = {
  c: colors.light,
};

const useStyles = createStyles((theme) => ({
  input: {
    border: `solid 3px ${colors.pink}`,
    fontWeight: 500,
    "&:focus": {
      border: `solid 3px ${colors.pink}`,
    },
  },
}));

const inputs = [
  {
    id: "firstName",
    placeholder: "First Name",
    label: "* First Name",
  },
  {
    id: "lastName",
    placeholder: "Last Name",
    label: "* Last Name",
  },
  {
    id: "email",
    placeholder: "you@company.com",
    label: "* Email",
  },
  {
    id: "phoneNumber",
    placeholder: "###-###-####",
    label: "* Phone Number",
  },
];

const SubmitForm = () => {
  const { classes, cx } = useStyles();
  const { sending, handleSwitchConfirmation } = React.useContext(StateContext);
  const { useFormContext } = useBookingForm();
  const form = useFormContext();

  const displayers = [
    {
      label: "Date",
      value: form.values.date,
      icon: DateIcon,
      isDate: true,
    },
    {
      label: "Diners",
      value: form.values.guests,
      icon: DinersIcon,
    },
    {
      label: "Time",
      value: form.values.time,
      icon: TimeIcon,
    },
    {
      label: "Occasion",
      value: form.values.occasion,
      icon: OccasionIcon,
    },
  ];

  const textInputs = React.useMemo(() => {
    return inputs.map((input) => (
      <Grid.Col key={input.id} sm={6} md={6}>
        <TextInput
          {...form.getInputProps(input.id)}
          placeholder={input.placeholder}
          label={input.label}
          variant="filled"
          radius="md"
          labelProps={labelProps}
          error={false}
          classNames={{
            input: cx({
              [classes.input]: !form.isValid(input.id) && sending,
            }),
          }}
        />
        <ErrorMessage
          condition={!form.isValid(input.id) && sending}
          message="First Name Required"
        />
      </Grid.Col>
    ));
  }, [form, sending]);

  const infoDisplayers = React.useMemo(() => {
    return displayers.map((displayer) => (
      <Grid.Col key={displayer.label} sm={6} md={6}>
        <Displayer
          value={
            displayer.isDate ? dateFormatter(displayer.value) : displayer.value
          }
          extraValue={`Select ${displayer.label}`}
          error={!displayer.value}
          icon={
            <displayer.icon
              value={!displayer.value}
              primary={colors.light}
              secondary={colors.pink}
            />
          }
        />
      </Grid.Col>
    ));
  }, [displayers]);

  return (
    <Box component="form">
      <Grid>
        {textInputs}
        <Grid.Col md={6}>
          <Grid>
            {infoDisplayers}
            <Grid.Col md={12}>
              <Center>
                <Text
                  size="xl"
                  fw={500}
                  c={form.values.seating ? colors.light : colors.pink}
                  sx={{ cursor: !form.values.seating ? "pointer" : "text" }}
                  onClick={
                    !form.values.seating ? handleSwitchConfirmation : () => {}
                  }
                >
                  {form.values.seating
                    ? `${form.values.seating} seating`
                    : "Select Seating"}
                </Text>
              </Center>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col md={6}>
          <Textarea
            placeholder="Comment"
            label="Special Requests"
            variant="filled"
            radius="md"
            minRows={5}
            labelProps={labelProps}
            {...form.getInputProps("requests")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <Radio.Group {...form.getInputProps("accept")} error={false}>
            <RadioField
              value="ok"
              invalid={!form.isValid("accept") && sending}
            />
            <Text c={colors.light}>
              You agree to our friendly{" "}
              <Text span td="underline">
                privacy policy
              </Text>
            </Text>
          </Radio.Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default SubmitForm;
