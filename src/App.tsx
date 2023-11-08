import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import Layout from './components/ui/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;