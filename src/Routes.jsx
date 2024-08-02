import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Porfolio from './pages/Porfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/porfolio', element: <Porfolio /> },
      { path: '/services', element: <Services /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default router;
