import{ useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';
import Grid from './page/home-grid';
import Detail from './page/detail';
import Order from './page/order';
// import Contac from './page/contac';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/grid',
    element: <Grid />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/order',
    element: <Order />,
  },
]);

function App() {
  useState(0)
  // const [count, setCount] = useState(0);
  return <RouterProvider router={router} />;
}

export default App;
