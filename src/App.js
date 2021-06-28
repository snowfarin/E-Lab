import './App.css'
import { BrowserRouter } from 'react-router-dom'
import BaseRouter from './components/router/Routes'

function App() {
  return (
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  );
}

export default App;
