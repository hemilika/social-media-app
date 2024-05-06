import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const MyForums = () => {
  return (
    <Card>
      <CardHeader title="My Forums" />
      <Divider />
      <CardContent>
        <Stack>
          <Stack direction="row" spacing={2} alignItems="center" mb="10px">
            <Stack>
              <Typography>Forum JavaScript</Typography>
              <Typography>Members: 11</Typography>
            </Stack>
            <Button size="small" variant="outlined" sx={{ height: "40px" }}>
              Go To Forum
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MyForums;
