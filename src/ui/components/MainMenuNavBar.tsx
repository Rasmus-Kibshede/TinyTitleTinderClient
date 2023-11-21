import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchName from "./SearchName";

const linkStyle = {
  marginRight: "10px",
  color: "inherit",
};

export default function MainMenuNavBar() {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6">
            <IconButton
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="about">About</Link>
            <Link style={linkStyle} to="contact">Contact</Link>
          </Typography>
        </div>
        <SearchName />
        <Typography variant="h6" sx={{ justifySelf: 'end' }}>
          <Link style={linkStyle} to="signup">Signup</Link>
          <Link style={linkStyle} to="signin">Login</Link>
          <Link style={linkStyle} to="profile">Profile</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
