import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './layout/Header/Header.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Habitations from './pages/Habitations'


const router = createBrowserRouter([

  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/error', element: <Error /> },
  { path: '/habitations', element: <Habitations /> },

]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}


export default App
