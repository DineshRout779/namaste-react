import logo from '../assets/logo.png';

const Navbar = () => {
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
          <li>
            <a href='/#'>
              <i className='ri-user-line'></i> Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
