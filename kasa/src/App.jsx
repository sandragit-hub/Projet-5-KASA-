import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/router';
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import './layout/Header/Header.scss'
import './layout/Footer/Footer.scss'


function App() {
  return (
    <Router>
      <Header />

      <AppRouter />
      <Footer />
    </Router>
  );
}


export default App
