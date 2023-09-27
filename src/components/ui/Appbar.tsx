import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
              <Button href="/">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Typography>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
