import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link to='/' className='navbar-brand py-1'>
        My Journal
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor01'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/create'>
              Create
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login' onClick={props.handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='text'
            placeholder='Search'
          />
          <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
