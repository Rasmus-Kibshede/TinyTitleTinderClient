import { Typography, Link } from "@mui/material";

/**
 * Footer component that displays the current year and the name of the app
 */
export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Tiny Title Tinder
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
