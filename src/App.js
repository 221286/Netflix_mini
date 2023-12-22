
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import authorization_store from './Components/Utils/Store';

function App() {
  
  return (
    <Provider store={authorization_store}>
       <Body></Body>
    </Provider>
    
  );
}

export default App;
