import React from 'react';

const Navbar = ({ totalCounters }) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand' href>
          Navbar
          <span className='badge badge-pill badge-secondary badge-sm m-1'>
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
