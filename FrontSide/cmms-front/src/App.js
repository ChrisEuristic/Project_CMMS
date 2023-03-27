import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterMain from './build/RouterMain';

function App() {
  return (
    <BrowserRouter>
      <RouterMain />
    </BrowserRouter>
  );
}

export default App;
