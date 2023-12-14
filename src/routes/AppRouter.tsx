import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../ui/components/Layout';
import About from '../ui/pages/About';
import Contact from '../ui/pages/Contact';
import SignIn from '../ui/pages/SignIn';
import SignUp from '../ui/pages/Signup';
import ProtectedRoute from './ProtectedRoute';
import Home from '../ui/pages/Home';
import AccountSettings from '../ui/pages/AccountSettings';
import Swipe from '../ui/pages/Swipe';
import TinyTitleTies from '../ui/pages/TinyTitleTies';
import LikedNames from '../ui/pages/LikedNames';
// import AccountSettings from '../ui/pages/accountSettings';

function AppRouter() {
  // Example how to use user store
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<ProtectedRoute redirectPath="signin" />}>
            <Route path="/profile" element={<AccountSettings />} />
            <Route path="/swipe" element={<Swipe />} />
            <Route path="/tinyTitleTies" element={<TinyTitleTies />} />
            <Route path="/likedNames" element={<LikedNames />} />
            <Route path="/accountSettings" element={<AccountSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
