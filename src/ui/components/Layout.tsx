import { Outlet } from 'react-router-dom';
import MainMenuNavBar from './MainMenuNavBar';
import CustomizedSnackbars from './CustomizedSnackbars';
// import CustomizedSnackbars from './CustomizedSnackbars';

function Layout() {
  return (
    <div id="wrapper">
      <MainMenuNavBar />
      <CustomizedSnackbars />
      <Outlet />
    </div>
  );
}

export default Layout;
