import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountBox } from "@mui/icons-material/";
import GradeIcon from "@mui/icons-material/Grade";

//TODO: Add more menu items
const menuItems = [
  {
    text: "Account",
    icon: <AccountBox color="primary" />,
    path: "accountSettings",
  },
  {
    text: "Liked names",
    icon: <GradeIcon color="primary" />,
    path: "likedNames",
  },
];

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
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Settings
          </Typography>
          <List>
            {menuItems.map((item) => (
              <Link to={item.path} key={item.text}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
            ;
          </List>
        </Box>
      </Drawer>
    </>
  );
};
