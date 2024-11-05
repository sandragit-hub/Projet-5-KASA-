import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Header from './Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />

    </Router>
  );
}


export default App
