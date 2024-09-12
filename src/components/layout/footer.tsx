import { Link, Typography } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <Typography
      align="center"
      variant="body2"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'some data provided by '}
      <Link href="https://stats.sharksice.timetoscore.com/display-stats.php?league=1 ">
        SIAHL
      </Link>
      {', '}
      {new Date().getFullYear()}.
    </Typography>
  );
}