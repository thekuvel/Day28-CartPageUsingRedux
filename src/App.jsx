
import './App.css'
import { Provider } from 'react-redux'

import store from './store/store.js'
import Counter from './Counter.jsx';
import Cart from './pages/Cart.jsx';

function App() {

  return (
      <Provider store={store}>
        {console.log("rendering App Component")}
        <Cart />
        {/* <Counter /> */}
      </Provider>
  );
}

export default App;
