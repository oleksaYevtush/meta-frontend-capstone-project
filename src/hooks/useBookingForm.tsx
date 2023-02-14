import { createFormContext } from "@mantine/form";

export interface BookingFormData {
  seating: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  requests?: string;
  accept: string;
}

const [FormProvider, useFormContext, useForm] =
  createFormContext<BookingFormData>();

const useBookingForm = () => {
  return { FormProvider, useFormContext, useForm } as const;
};

export default useBookingForm;
