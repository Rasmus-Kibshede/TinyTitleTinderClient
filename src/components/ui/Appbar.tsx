import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
/**
 * Top navbar component
 */
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="about">About</Button>
              <Button color="inherit" component={Link} to="contact">Contact</Button>
            </Typography>
            <Button color="inherit" component={Link} to="signup">Signup</Button>
            <Button color="inherit" component={Link} to="signin">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
