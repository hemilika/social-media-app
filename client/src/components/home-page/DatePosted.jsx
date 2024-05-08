import { DateRange } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const DatePosted = ({ date }) => {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <DateRange fontSize="small" />
      <Typography color="GrayText" variant="subtitle2">
        {formattedDate}
      </Typography>
    </Stack>
  );
};

export default DatePosted;
