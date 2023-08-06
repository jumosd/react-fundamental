import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthActions } from '../store';

const Header = () => {
  const isAuth = useSelector((state) => state.isAuth)
  const dispatch = useDispatch()

  const loginHandler = () => {
    dispatch(isAuthActions.login())
  }

  const logoutHandler = (event) => {
    dispatch(isAuthActions.logout())
  }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth ? <nav>
        <ul>
          <li>
            <a href='/'>내 상품들</a>
          </li>
          <li>
            <button onClick={logoutHandler}>로그아웃</button>
          </li>
        </ul>
      </nav> :
        <nav>
          <ul>
            <li>
              <a href='/'>내 상품들</a>
            </li>
            <li>
              <button onClick={loginHandler}>로그인 </button>
            </li>
          </ul>
        </nav>}
    </header>
  );
};

export default Header;
