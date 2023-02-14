import { isEmail, isNotEmpty, matches } from "@mantine/form";

export const bookingFormValidation = {
  seating: isNotEmpty("Please select a seating."),
  date: isNotEmpty("Please select a date."),
  time: isNotEmpty("Please select a time."),
  guests: isNotEmpty("Please select the number of guests."),
  occasion: isNotEmpty("Please select an occasion."),
  firstName: isNotEmpty("First Name Required."),
  lastName: isNotEmpty("Last Name Required."),
  email: isEmail("Email Required."),
  phoneNumber: matches(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    "Phone Number Required."
  ),
  accept: isNotEmpty("Please. Agree on our friendly privacy policy."),
};
