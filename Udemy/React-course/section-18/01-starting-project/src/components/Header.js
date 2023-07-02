import classes from './Header.module.css';
import {Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {authActions}from '../store/auth'
const Header = () => {

  const dispatch = useDispatch()
  const isLoginedIn = useSelector(state => state.auth.isAuthanticated)

  const logoutHandler = () =>{
    dispatch(authActions.logout())
  }
  return (
    <Fragment>
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          {isLoginedIn && 
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          }
        </ul>
      </nav>
    </header>
    </Fragment>
  );
};

export default Header;
