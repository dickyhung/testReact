import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logged-in' element={<Nav/>}>
            <Route path='/logged-in/home' element={<Home/>}/>
            <Route path='/logged-in/about' element={<AboutUs/>}/>
          </Route>
        </Routes>
      </Router>
  );
};
