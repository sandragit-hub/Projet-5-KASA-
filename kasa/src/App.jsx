import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/router';
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
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
