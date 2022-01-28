import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../page/Home';

const Navigation = () => {
     return (
          <div className="navigation" >
               <NavLink exact to='../' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>
                    Accueil
               </NavLink>
               <NavLink exact to="../About" className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>
                    A propos
               </NavLink>
          </div >
     );
};

export default Navigation;