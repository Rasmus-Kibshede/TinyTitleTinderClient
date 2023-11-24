import {
    Drawer,
    Box,
    Typography,
    IconButton,
    List,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountBox } from "@mui/icons-material/";
import GradeIcon from "@mui/icons-material/Grade";
import LinkIcon from '@mui/icons-material/Link';

const menuItems = [
    {
        text: "Account",
        icon: <AccountBox />,
        path: "accountSettings",
    },
    {
        text: "Liked names",
        icon: <GradeIcon />,
        path: "likedNames",
    },
    {
        text: "Tiny Title Ties",
        icon: <LinkIcon />,
        path: "tinyTitleTies",
    },
];

export const SideNavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton
                onClick={() => setOpen(true)}
                sx={{ ml: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    style: drawerPaperStyles,
                }}
            >
                <Box textAlign="center" >
                    <StyledHeader>
                        Settings
                    </StyledHeader>
                    <List>
                        {menuItems.map((item) => (
                            <Link to={item.path} key={item.text}>
                                <ListItemButton>
                                    <StyledIcon>{item.icon}</StyledIcon>
                                    <ListItemText
                                        primary={
                                            <StyledTypography>
                                                {item.text}
                                            </StyledTypography>
                                        }
                                    />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

const StyledTypography = styled(Typography)`
    font-family: 'Josefin Sans';
    font-weight: 'regular';
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    `;

const StyledHeader = styled(Typography)`
    font-family: 'Josefin Sans';
    font-weight: bold;
    font-size: 30px;
    color: #000000;
    margin-top: 20px;
    margin-bottom: 20px;
    `;

const StyledIcon = styled(ListItemIcon)`
    background-color: #FFCA80;
    `;

const drawerPaperStyles = {
    backgroundColor: '#FFCA80',
    width: '250px',
};