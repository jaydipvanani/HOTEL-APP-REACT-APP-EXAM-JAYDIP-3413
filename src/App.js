
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { GET_RESERVATION_PENDING, GET_ROOMDETAILS_PENDING, GET_ROOMLIST_PENDING, GET_USER_PENDING } from './redux-saga/user/action/action';
import Navbar from './admin/header/Navbar';
import RoomDetails from './admin/pages/RoomDetails';
import RoomList from './admin/pages/RoomList';
import Reservation from './admin/pages/Reservation';
import ReservationList from './admin/pages/ReservationList';
import Login from './compponannt/Login';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LoginUser from './compponannt/LoginUser';
import UserNav from './admin/header/UserNav';
import RoomType from './admin/pages/RoomType';
const getRole = () => {
  return localStorage.getItem("role");
};
function App() {
 
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ROOMDETAILS_PENDING });
    dispatch({ type: GET_ROOMLIST_PENDING });
    dispatch({ type: GET_RESERVATION_PENDING });
  }, []);

  const role = getRole();
  const location = useLocation();


  const isLoginPage = location.pathname === "/";

  if (!role || role === "") {
    return (
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  if (role === "admin") {
    return (
      <>
      <Navbar/>
        <div
          className="container"
          // style={{
          //   maxWidth: "1150px",
          //   padding: "30px 40px 40px",
          //   height: "100vh",
          //   marginLeft: "310px",
          // }}
        >
          <Routes>
            <Route path="/roomdetails" element={<RoomDetails />} />
           
            <Route path="/roomlist" element={<RoomList />} />

          </Routes>
        </div>
      </>
    );
  }

  if (role === "user") {
    return (
      <>
      <UserNav/>
        <div
          className="container"
          // style={{
          //   maxWidth: "1150px",
          //   padding: "30px 40px 40px",
          //   height: "100vh",
          //   marginLeft: "310px",
          // }}
        >
          <Routes>
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/reservationlist" element={<ReservationList />} />
            <Route path="/roomdetails" element={<RoomDetails />} />
            <Route path="/roomtype" element={<RoomType />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};


export default App;
