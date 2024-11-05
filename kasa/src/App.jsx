import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/router';
import Header from './layout/Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
}


export default App
