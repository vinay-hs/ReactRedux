import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
<>
<CakeContainer/>
</>
</Provider>
  );
}

export default App;
