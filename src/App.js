import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from "./components/UserProfile"
import { Provider, useSelector } from 'react-redux';
import store from './store';



function App() {
  const isAuth = useSelector((state) => state.isAuth)

  console.log(isAuth)
  return (
    <Provider store={store}>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Provider>
  );
}

export default App;
