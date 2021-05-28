import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css';

const Links = () => {
  return (
    <div className='links'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/liked'}>My List</NavLink>
    </div>
  );
};

export default Links;
