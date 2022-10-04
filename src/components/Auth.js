import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store";

const Auth = () => {

  const dispatch = useDispatch();
  const checkLoggedIn = useSelector(state => state.auth.loggedIn);
  const toggle = useSelector(state => state.auth.toggle);

  const loginHandler = () => {
    dispatch(authActions.login());
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  const toggleHandler = () => {
    dispatch(authActions.toggle());
  }

  return (
      <main className={classes.auth}>
        {toggle &&
          <section>
            {!checkLoggedIn &&
                <form>
                  <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'/>
                  </div>
                  <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'/>
                  </div>
                  <button onClick={loginHandler}>Login</button>
                </form>
            }

            {checkLoggedIn &&
                <div>
                  <h2>Logged In</h2>
                  <button onClick={logoutHandler}>Logout</button>
                </div>
            }

          </section>
        }
        {!toggle &&  <button onClick={toggleHandler}>Login</button>}
      </main>
  );

};

export default Auth;
