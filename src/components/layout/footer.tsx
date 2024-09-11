import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {
  return (
    <Typography
      align="center"
      variant="body2"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" to="/">
        author's name
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}