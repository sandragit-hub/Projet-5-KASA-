import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <div>Page d'accueil
    </div>
  },
  {
    path: '/About',
    element: <div>à propos</div>
  },
  {
    path: '/Error',
    element: <div>erreur</div>
  },
  {
    path: '/Habitations',
    element: <div>logements</div>
  }

])

function App() {
  return <RouteurProvider router={router} />
}



export default App
