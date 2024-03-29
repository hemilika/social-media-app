import { Badge, Stack, Typography } from "@mui/material";

const NavRightContent = ({ contentName, icon, badge, style }) => {
  return (
    <>
      {badge ? (
        <Stack alignItems="center" sx={style}>
          <Badge badgeContent={3} color="primary">
            {icon}
          </Badge>
          <Typography variant="small" color="grey">
            {contentName}
          </Typography>
        </Stack>
      ) : (
        <Stack alignItems="center" sx={style}>
          {icon}
          <Typography variant="small" color="grey">
            {contentName}
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default NavRightContent;
