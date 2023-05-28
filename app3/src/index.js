import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1 confg router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./routes/Home"
import Contact from './routes/Contact';
import ErrorPage from "./routes/ErrorPage"
import ContactDetails from './routes/ContactDetails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "contact",
//     element: <Contact/>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      // 5 - nested routes = identificador unico para usuario
      {
        path: "/contact/:id",
        element: <ContactDetails/>,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
