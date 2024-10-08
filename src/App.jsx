import React from 'react'
import Error from './Component/Error/Error.jsx';
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
import Home from './Pages/Home/Home.jsx';
import Chat from "./Pages/Chat/Chat.jsx";
import RootLayout from './Component/HomeComponents/RootLayout/RootLayout.jsx';
import Notification from './Pages/Notification/Notification.jsx';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/registration" element={<Registration />}></Route>,
        <Route path="/login" element={<Login />}></Route>
        <Route element={<RootLayout />}>
          <Route index="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/settings" element={"Settings"}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
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