import dayjs from "dayjs";

export const dateFormatter = (date: Date | string | undefined | null) => {
  let day;
  let month;

  const formattedDate = dayjs(date).format("MMMM D, YYYY");

  if (formattedDate === "Invalid Date") {
    return;
  }

  day = formattedDate.split(",")[0].split(" ")[1];
  month = formattedDate.split(",")[0].split(" ")[0];

  return `${month}, ${day}`;
};
