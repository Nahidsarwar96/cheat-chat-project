import React from 'react'
import Registration from './Pages/Registration/Registration.jsx';
import Login from './Pages/Login/Login.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/registration" element={<Registration />}></Route>,
        <Route path="/login" element={<Login />}></Route>
      </>
    ))
  return (

    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>


  )
}

export default App