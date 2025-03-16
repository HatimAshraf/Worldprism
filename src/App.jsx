import { Home } from './pages/Home';
import { Country } from './pages/Country';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'country',
    element: <Country />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
