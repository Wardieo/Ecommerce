import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
