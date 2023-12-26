import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import Authprovider from './Provider/Authprovider.jsx'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </Authprovider>  
  </React.StrictMode>,
)
