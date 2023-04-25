import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className='container navbar'>
      <a href='#'>
        <img src={logo} alt='logo' className='logo' />
      </a>

      <nav className='nav-links'>
        <ul>
          <li>
            <a href='/#'>
              <i className='ri-shopping-cart-2-line'></i> Cart
            </a>
          </li>
          {loggedIn ? (
            <>
              <li>
                <a href='/#'>
                  <i className='ri-user-line'></i> Profile
                </a>
              </li>
              <button className='btn btn-link'>
                <i class='ri-logout-circle-r-line'></i> Logout
              </button>
            </>
          ) : (
            <li>
              <a href='/#'>
                <i class='ri-login-circle-line'></i> Login
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
