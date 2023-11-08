import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenuNavBar from './components/ui/MainMenuNavBar';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <MainMenuNavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
