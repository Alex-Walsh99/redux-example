import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import auth from "./Auth";
import {authActions} from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const checkLoggedIn = useSelector(state => state.auth.loggedIn);

  const toggleLoginHandler = () => {
    dispatch(authActions.toggle())
  }

  const toggleLogoutHandler = () => {
    dispatch(authActions.toggle())
    dispatch(authActions.logout());
  }

  return (
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
          <li>
            {checkLoggedIn && <button onClick={toggleLogoutHandler}>Logout</button>}
            {!checkLoggedIn && <button onClick={toggleLoginHandler}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
