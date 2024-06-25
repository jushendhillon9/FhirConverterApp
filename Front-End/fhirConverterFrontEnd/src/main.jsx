import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Login from "./Login.jsx"
const router = createBrowserRouter([
  {
    path: '/convertPage',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  },
  {
    path: '/',
    element: <Login />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
