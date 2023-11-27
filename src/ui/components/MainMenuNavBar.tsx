import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useAuthUserStore } from '../../store/user';
import { SideNavBar } from './SideNavBar';
import SearchName from "./SearchName";

export default function MainMenuNavBar() {
  const user = useAuthUserStore();

  return (
    <AppBar position="static" className="bg-[#FFCA80]">
      <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <>
          <Typography variant="h6">
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="about">About</Link>
            <Link style={linkStyle} to="contact">Contact</Link>
          </Typography>
        </>
        <SearchName />
        <Typography variant="h6" sx={{ justifySelf: 'end' }}>
          {user.authUser ? (
            <>
              <Logout />
              <Link style={linkStyle} to="profile">Profile</Link>
            </>
          ) : (
            <>
              <Link style={linkStyle} to="signup">Signup</Link>
              <Link style={linkStyle} to="signin">Login</Link>
            </>
          )}
          <SideNavBar />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const linkStyle = {
  marginRight: "10px",
  color: "black",
};