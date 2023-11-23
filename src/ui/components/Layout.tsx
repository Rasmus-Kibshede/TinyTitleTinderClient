import { Outlet } from 'react-router-dom';
import MainMenuNavBar from './MainMenuNavBar';
import CustomizedSnackbars from './CustomizedSnackbars';

function Layout() {
  return (
    <div id="wrapper" className='bg-[#D6FBE4] h-screen font-main'>
      <MainMenuNavBar />
      <CustomizedSnackbars />
      <img src="src\assets\images\logo.png" />
      <Outlet />
    </div>
  );
}

export default Layout;
