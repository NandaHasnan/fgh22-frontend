import{ useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';
import Movie from './page/list-movie';
import Detail from './page/detail';
import Order from './page/order';
import Payment from './page/payment';
import PaymentModal from './page/payment-modal';
import Ticket from './page/ticket-result';
import Profile from './page/profile';
import Odrhistori from './page/order-history';
import Chart from './page/admin-chart';
import Admmovie from './page/adm-movie';
import Addmovie from './page/add-movie';

import { Provider } from 'react-redux';
import { store} from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
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
    path: '/movie',
    element: <Movie />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/payment-modal',
    element: <PaymentModal />,
  },
  {
    path: '/ticket',
    element: <Ticket />,
  },
  {
    path: '/profil',
    element: <Profile />,
  },
  {
    path: '/odrhistori',
    element: <Odrhistori />,
  },
  {
    path: '/chart',
    element: <Chart />,
  },
  {
    path: '/adm-movie',
    element: <Admmovie />,
  },
  {
    path: '/add-movie',
    element: <Addmovie />,
  },
]);

function App() {
  useState(0)
  // const [count, setCount] = useState(0);
  // return <><RouterProvider router={router} /></>
  return (
    <Provider store={store}>
      
      <RouterProvider router={router} />;
      
    </Provider>
  );
    
     
    
  ;
  // <RouterProvider router={router} />;
}

export default App;
