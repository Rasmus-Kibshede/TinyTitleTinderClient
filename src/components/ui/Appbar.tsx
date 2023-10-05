import { SideDrawer } from "./Drawer";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
/**
 * Top navbar component
 */
export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link style={{ marginRight: '10px' }} color="inherit" to="/">
                Home
              </Link>
            <Link style={{ marginRight: '10px' }} color="inherit" to="about">About</Link>
            <Link style={{ marginRight: '10px' }} color="inherit" to="contact">Contact</Link>
          </Typography>
            <Typography variant="h6">
              <Link style={{ marginRight: '10px' }} color="inherit" to="signup">Signup</Link>
              <Link style={{ marginRight: '10px' }} color="inherit" to="signin">Login</Link>
            </Typography>  
            <SideDrawer />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
