import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/ui/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Profile from "../pages/Profile";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route element={<ProtectedRoute user={false} redirectPath="signin" />}>
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter