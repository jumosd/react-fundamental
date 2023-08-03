import Counter from './components/Counter';
import { Provider } from "react-redux"

import store from './store/index';
import Auth from './components/Auth';
function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Auth></Auth>
    </Provider>
  );
}

export default App;
