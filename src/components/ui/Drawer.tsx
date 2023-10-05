import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(true)}
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <Typography variant="h6" component="div">
            Settings
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
