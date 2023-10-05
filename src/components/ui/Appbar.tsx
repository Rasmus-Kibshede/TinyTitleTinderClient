import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { SideDrawer } from "./Drawer";

/**
 * Top navbar component
 */
export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" href="/">
                Home
              </Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Typography>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Login</Button>
            <SideDrawer />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
