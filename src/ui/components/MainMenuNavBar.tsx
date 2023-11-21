import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchName from "./SearchName";
/**
 * Top navbar component
 */
export default function MainMenuNavBar() {
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
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link style={{ marginRight: '10px' }} color="inherit" to="/">Home</Link>
            <Link style={{ marginRight: '10px' }} color="inherit" to="about">About</Link>
            <Link style={{ marginRight: '10px' }} color="inherit" to="contact">Contact</Link>
          </Typography>
          <SearchName />
          <Typography variant="h6">
            <Link style={{ marginRight: '10px' }} color="inherit" to="signup">Signup</Link>
            <Link style={{ marginRight: '10px' }} color="inherit" to="signin">Login</Link>
            <Link style={{ marginRight: '10px' }} color="inherit" to="profile">Profile</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
