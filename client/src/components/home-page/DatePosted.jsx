import { DateRange } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";

const DatePosted = ({ date, poster }) => {
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
    <Stack spacing={1}>
      {poster ? <Typography>{`Posted by: ${poster}`}</Typography> : null}
      <Stack direction="row" spacing={1} alignItems="center">
        <DateRange fontSize="small" />
        <Typography color="GrayText" variant="subtitle2">
          {formattedDate}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DatePosted;
