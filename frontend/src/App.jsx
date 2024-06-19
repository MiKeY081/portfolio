import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./pages/Home";
import Main from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AdminLogin from "./Admin/AdminLogin";
import NotificationsPage from "./Admin/Notification";
import ProjectDetails from "./pages/ProjectDetails";
import Layout from "./Components/Layout/Layout";


//setting up route for navigation
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/main' element={<Main />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/notifications' element={<NotificationsPage />} />
          <Route path='/project/:index' element={<ProjectDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
