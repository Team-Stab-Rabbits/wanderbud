import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from "./containers/Landing";
import Login from "./containers/Login";
import Journey from "./containers/Journey";
import Profile from "./containers/Profile";
import Wanderbud from "./media/wanderbud-logo.png"


import { selectFirstname } from './reducers/userSlice';

// import ErrorPage from './containers/ErrorPage';


const App = () => {
  let firstName = useSelector(selectFirstname);
  const navigate = useNavigate();

  const handleLogout = () => {
    return firstName = undefined;
  }

  const handleLogo = () => {
    //if there is a first name defined, route to '/journey'
    if (firstName) return navigate('/journey');
    //if there is no first name, route to '/'
    return navigate('/');
  }

  return (
    <Router>
      <nav className="navbar">
        <img className="navbar-logo" src={Wanderbud} alt="Wanderbud" />
        <h1 onClick={handleLogo}>wanderBud</h1>
        <div className="navbar-links">
          {!firstName && <Link className="navbar-link" to="/"> Home </Link>}
          {!firstName && <Link className="navbar-link" to="/login">Login </Link>}
          {firstName && <Link className="navbar-link" to="/journey"> Journeys </Link>}
          {firstName && <Link className="navbar-link" to="/profile"> Profile </Link>}
          {firstName && <Link className="navbar-link" onClick={handleLogout} to="/"> Logout </Link>}
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Landing />} />
        {/* error page */}
        {/* <Route path="*" element={<ErrorPage />}/>  */}
      </Routes>
    </Router>

    // <div>
    //   <PostDisplay />
    // </div>
  );
}

export default App;
