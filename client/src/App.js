import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Guest Layout
import GuestLayout from "./components/guestLayout/GuestLayout";
import Home from "./components/guestLayout/Home";
import About from "./components/guestLayout/About";
import Services from "./components/guestLayout/Services";
import Contact from "./components/guestLayout/Contact";
import Register from "./components/guestLayout/Register";
import Login from "./components/guestLayout/Login";

// User Layout
import UserLayout from "./components/userLayout/UserLayout";
import Help from "./components/userLayout/Help";
import Notes from "./components/userLayout/Notes";
import Profile from "./components/userLayout/Profile";
import ViewItem from "./components/userLayout/ViewItem";

// Admin Layout
import AdminLayout from "./components/adminLayout/AdminLayout";
import Logout from "./components/adminLayout/Logout";
import Students from "./components/adminLayout/Students";
import AddCourses from "./components/adminLayout/AddCourses";
import AddNotes from "./components/adminLayout/AddNotes";
import Item from "./components/adminLayout/Item";

function App() {
  return (
    <div className="App">
      <Routes>

        {/* ================= GUEST ROUTES ================= */}
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>


        {/* ================= USER ROUTES ================= */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="login" element={<Login />} />
          <Route path="notes" element={<Notes />} />
          <Route path="profile" element={<Profile />} />
          <Route path="viewitem" element={<ViewItem />} />
        </Route>


        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="students" element={<Students />} />
          <Route path="addcourses" element={<AddCourses />} />
          <Route path="addnotes" element={<AddNotes />} />
          <Route path="item" element={<Item />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;