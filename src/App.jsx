import{ useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/home';
import Login from './page/login';
// import Contac from './page/contac';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  // {
  //   path: '/contac-us',
  //   element: <Contac />,
  // },
]);

function App() {
  useState(0)
  // const [count, setCount] = useState(0);
  return <RouterProvider router={router} />;
}

export default App;
