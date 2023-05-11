import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/authSlice';

function Header() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authSlice.isAuthenticated);

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Toolkit</h1>
      {authState ?
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
        : null}
    </header>
  );
};

export default Header;
