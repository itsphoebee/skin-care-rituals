import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: 'white', borderBottom: '2px solid black', paddingTop: '10px', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/"
      >
        Home
        <span className="glyphicon glyphicon-home"></span>
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/rituals"
      >
        Rituals
        <span className="glyphicon glyphicon-tree-conifer"></span>
      </NavLink>
    </div>
  );
}
export default NavBar;