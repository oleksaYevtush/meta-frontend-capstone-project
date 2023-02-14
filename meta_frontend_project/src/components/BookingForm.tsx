import * as React from "react";
import { Box, Grid, Radio } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import { colors } from "src/theme";
import { DateField, SelectField, RadioField } from "src/components";
import {
  DateIcon,
  DinersIcon,
  OccasionIcon,
  TimeIcon,
} from "src/components/icons";
import { StateContext } from "src/contexts";
import { useBookingForm } from "src/hooks";
import data from "src/data/form-data.json";

const RADIO_SPACING = 50;

const labelProps = {
  c: colors.light,
  size: "md",
  pb: "xs",
};

const Chevron: React.FC<{ value: Date | string | null | undefined }> = ({
  value,
}) => {
  return value ? (
    <IconChevronUp size={28} stroke={1.5} color={colors.light} />
  ) : (
    <IconChevronDown size={28} stroke={1.5} color={colors.primary} />
  );
};

const BookingForm = () => {
  const { availableTimes, handleUpdateTimes } = React.useContext(StateContext);
  const { useFormContext } = useBookingForm();
  const form = useFormContext();

  const selects = [
    {
      id: "date",
      label: "Date",
      placeholder: "Select Date",
      component: DateField,
      icon: DateIcon,
      value: form.values.date,
    },
    {
      id: "guests",
      label: "Number of Diners",
      placeholder: "No. of Diners",
      component: SelectField,
      icon: DinersIcon,
      value: form.values.guests,
      data: data.diners,
      grid: true,
    },
    {
      id: "occasion",
      label: "Occasion",
      placeholder: "Occasion",
      component: SelectField,
      icon: OccasionIcon,
      value: form.values.occasion,
      data: data.occasions,
    },
    {
      id: "time",
      label: "Time",
      placeholder: "Select Time",
      component: SelectField,
      icon: TimeIcon,
      value: form.values.time,
      data: availableTimes,
      grid: true,
    },
  ];

  const radios = React.useMemo(
    () =>
      data.seats.map((seat) => (
        <RadioField
          key={seat.value}
          value={seat.value}
          label={seat.label}
          labelPosition="left"
        />
      )),
    []
  );

  const selectFields = React.useMemo(() => {
    return selects.map((select) => (
      <Grid.Col key={select.id} sm={6} md={6}>
        <select.component
          {...form.getInputProps(select.id)}
          label={select.label}
          placeholder={select.placeholder}
          labelProps={labelProps}
          error={false}
          grid={select.grid}
          data={select.data?.length! > 0 ? select.data! : []}
          icon={
            <select.icon
              value={select.value}
              primary={colors.primary}
              secondary={colors.light}
            />
          }
          rightSection={<Chevron value={select.value} />}
        />
      </Grid.Col>
    ));
  }, [selects]);

  React.useEffect(() => {
    handleUpdateTimes(form.values.date);
  }, [form.values.date]);

  return (
    <Box component="form">
      <Radio.Group
        {...form.getInputProps("seating")}
        size="sm"
        my="md"
        spacing={RADIO_SPACING}
        sx={{ width: "100%" }}
        error={false}
      >
        {radios}
      </Radio.Group>
      <Grid my="md">{selectFields}</Grid>
    </Box>
  );
};

export default BookingForm;
