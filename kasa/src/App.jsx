import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/router';
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import './layout/Header/Header.scss'
import './layout/Footer/Footer.scss'
import './components/banner/Banner.scss'
import './components/card/card.scss'
import './components/Collapse/Collapse.scss'
import './App.css'

function App() {
  return (
    <body>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </body>
  );
}


export default App
