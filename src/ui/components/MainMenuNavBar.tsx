import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useAuthUserStore } from '../../store/user';
import { SideDrawer } from './SideNavBar';
/**
 * Top navbar component
 */
export default function MainMenuNavBar() {
  const user = useAuthUserStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-[#FFCA80]">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            className="text-black no-underline"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link
              style={{ marginRight: '10px' }}
              to="/"
              className="text-black no-underline"
            >
              Home
            </Link>
            <Link
              style={{ marginRight: '10px' }}
              to="about"
              className="text-black no-underline"
            >
              About
            </Link>
            <Link
              style={{ marginRight: '10px' }}
              to="contact"
              className="text-black no-underline"
            >
              Contact
            </Link>
          </Typography>
          <Typography variant="h6">
            {user.authUser ? (
              <>
                <Logout />
                <Link
                  style={{ marginRight: '10px' }}
                  className="text-black no-underline"
                  to="profile"
                >
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  style={{ marginRight: '10px' }}
                  className="text-black no-underline"
                  to="signup"
                >
                  Signup
                </Link>
                <Link
                  style={{ marginRight: '10px' }}
                  className="text-black no-underline"
                  to="signin"
                >
                  Login
                </Link>
              </>
            )}
          </Typography>
          <SideDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
