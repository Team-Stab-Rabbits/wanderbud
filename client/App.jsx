import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Landing from "./containers/Landing";
import Login from "./containers/Login";
import Journey from "./containers/Journey";
import Profile from "./containers/Profile";
import Wanderbud from "./media/wanderbud-logo.png"
import { logoutUser } from './reducers/userSlice.jsx'


import { selectFirstname } from './reducers/userSlice';

// import ErrorPage from './containers/ErrorPage';


const App = () => {
  //  useSelector hook creates a link/reference to the store, specifically to the firstName within the userSlice (line 75)
  let firstName = useSelector(selectFirstname);

  //  Initialize useDispatch hook within the top level functional component so we can dispatch actions within helper functions 
  const dispatch = useDispatch();

  //  onClick function which resets the user state within the store
  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <Router>
      <nav className="navbar">
        <img className="navbar-logo" src={Wanderbud} alt="Wanderbud" />
        <h1>wanderBud</h1>
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
  );
}

export default App;
