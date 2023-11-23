import { Outlet } from 'react-router-dom';
import MainMenuNavBar from './MainMenuNavBar';
import CustomizedSnackbars from './CustomizedSnackbars';import { ThemeProvider, createTheme } from "@mui/material";

const THEME = createTheme({
    typography: {
        body1: {
            'fontFamily': `"Josefin sans", sans-serif`,
            'fontSize': '20px',
            'fontWeight': '500',
            'marginBottom': '25px'
        },
        body2: {
            'fontFamily': `"Josefin sans", sans-serif`,
            'fontSize': '32px',
            'fontWeight': '400',
            'color': '#FFFFFF',
            'marginBottom': '25px'
        },
        h4: {
            'fontFamily': `"Advent Pro", sans-serif`,
            'fontSize': '60px',
            'marginBottom': '25px'
        },
    }
})

function Layout() {
  return (
    <div id="wrapper" className='bg-[#D6FBE4] h-screen font-main'>
            <ThemeProvider theme={THEME}>
          <MainMenuNavBar />
          <CustomizedSnackbars />
      <img src="src\assets\images\logo.png" />
      <Outlet />
            </ThemeProvider>
    </div>
  );
}

export default Layout;
