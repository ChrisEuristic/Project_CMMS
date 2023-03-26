import logo from './logo.svg';
import './App.css';
import Join from './Signup/Join';
import JoinForm from './Signup/JoinForm';
import RouterMain from './Router/RouterMain';

function App() {
  return (
    <BrowserRouter>
      <RouterMain />
    </BrowserRouter>
  );
}

export default App;
