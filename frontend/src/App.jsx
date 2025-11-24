import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ManageMenu from "./pages/ManageMenu";
import MenuPreview from "./pages/MenuPreview";
import QRPage from "./pages/QRPage";
import ProtectedRoute from "./router/ProtectedRoute";
import Navbar from "./components/Navbar";
import CustomerMenu from "./pages/CustomerMenu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-menu" element={<ManageMenu />} />
          <Route path="/menu-preview" element={<MenuPreview />} />
          <Route path="/qr" element={<QRPage />} />
        </Route>

        <Route path="/menu/:vendorId" element={<CustomerMenu />} />
      </Routes>

      <Footer/>
    </div>
  );
};

export default App;
