import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../ui/components/Layout';
import About from '../ui/pages/About';
import Contact from '../ui/pages/Contact';
import SignIn from '../ui/pages/SignIn';
import SignUp from '../ui/pages/Signup';
import ProtectedRoute from './ProtectedRoute';
import Home from '../ui/pages/Home';
import Profile from '../ui/pages/Profile';
import Swipe from '../ui/pages/Swipe';

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
          <Route path="/swipe" element={<Swipe />} />
          {/* // TODO: Change route to the read more page when implemented */}
          <Route path="/swipe/:name" element={<Swipe />} />
          <Route element={<ProtectedRoute redirectPath="signin" />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
