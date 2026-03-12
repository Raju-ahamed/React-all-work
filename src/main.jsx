import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layout/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Component/Context/AuthProvider.jsx';
import Orders from './Component/Orders/Orders.jsx';
import Product from './Component/Product/Product.jsx';
import Route from './Route/Route.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "orders", element:<Route>
        <Orders></Orders>
      </Route> },
      { path: "product", element:<Route>
        <Product></Product>
      </Route> }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
