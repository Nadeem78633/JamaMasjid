import React, { useRef, useEffect, useContext } from "react";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer";
// Login
import Login from "./Components/Admin/LoginAndSignUp/Login";
import Register from "./Components/Admin/LoginAndSignUp/Register";
import Reset from "./Components/Admin/LoginAndSignUp/Reset";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";

// Users

import ShowUser from "./Components/Users/ShowUser";
import UserContext from "./context/books";

// Components
import PrayerTimes from "./Components/Mosque/PrayerTimes";
import Donate from "./Components/Donate/Donate";

// UsersForPublic
import ShowUserPublic from "./Components/UsersPublic/ShowUserPublic";

// UserForAdmin
import ShowUserForMosqueAdmin from "./Components/Admin/UserForMosque/ShowUserForMosqueAdmin";



// Import Addamount
import AddAmount from "./Components/Admin/UserForMosque/AddAmount";

// For imam
import ShowUserForImamAdmin from "./Components/Admin/UserForImam/ShowUserForImamAdmin";
import AddAmountForImam from "./Components/Admin/UserForImam/AddAmountForImam";

// React router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import UserDetails from "./Components/Users/UserDetails";
import AddUser from "./Components/Admin/Dashboard/AddUser";



// Date
import DatePickers from "./Components/DatePicker";

const App = () => {
  const { fetchBooks } = useContext(UserContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Header />
            <Footer />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="prayer" element={<PrayerTimes />} />

        <Route path="addUser" element={<AddUser />} />
        <Route path="showUser" element={<ShowUser />} />
        <Route path="showUserPublic" element={<ShowUserPublic />} />

        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="donation" element={<Donate />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/showUserForMosqueAdmin" element={<ShowUserForMosqueAdmin />} />
        <Route path="/addAmount/:id" element={<AddAmount />} />
        <Route path='/showUserForImamAdmin' element={<ShowUserForImamAdmin />} />
        <Route path="/addAmountForImam/:id" element={<AddAmountForImam />} />

        <Route path="/date" element={<DatePickers/>}/>
        

      </Route>
    )
  );

  const scrollInto = useRef(null);
  useEffect(() => {
    scrollInto.current.scrollIntoView();
  });
  return (
    <div ref={scrollInto}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
