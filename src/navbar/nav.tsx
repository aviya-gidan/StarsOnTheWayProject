import React from 'react';
import { NavLink } from "react-router-dom";


export default function Nav() {

    return (
          
            <div id="nav">
                <NavLink to="/Home " className="link" >דף הבית</NavLink>
                <NavLink to="/About" className="link" > אודות</NavLink>
                <NavLink to="/workshop" className="link">פעיליות</NavLink>
                <NavLink to="/Share" className="link" >בואו לשתף</NavLink>
                <NavLink to="/Login" className="link">התחברות</NavLink>
            </div>
);
};
