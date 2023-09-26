import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const DatePickers = () => {
    const [date, setDate] = useState(null)
    const handleDate = (newDate) => {
        setDate(newDate)
    }
const selectedDate = dayjs(date);

const selectedYear = selectedDate.format("YYYY"); // Get the year
const selectedMonth = selectedDate.format("MM"); // Get the month (01 for January, 02 for February, etc.)
const selectedDay = selectedDate.format("DD"); // Get the day of the month

console.log("Year: ", selectedYear);
console.log("Month: ", selectedMonth);
console.log("Day: ", selectedDay);
  return (
    <div style={{marginTop:'100px'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={date} onChange={handleDate} />
      </LocalizationProvider>
    </div>
  );
}
export default DatePickers