import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { vendor, logout } = useAuth();
  const location = useLocation();

  const isAuthPage = ["/login", "/register", "/"].includes(location.pathname);

  return (
    <nav className="w-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-sm border-b border-white/60">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={vendor ? "/dashboard" : "/"} className="font-semibold text-slate-800 text-lg">
          SmartMenu<span className="text-pink-500">.</span>
        </Link>

        {!isAuthPage && vendor && (
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline text-slate-700">
              Hi, <span className="font-semibold">{vendor.name}</span>
            </span>
            <div className="flex gap-2">
              <Link
                to="/dashboard"
                className="px-3 py-1 rounded-full bg-white/80 text-slate-700 text-xs sm:text-sm shadow-sm hover:bg-white"
              >
                Home
              </Link>
              <Link
                to="/manage-menu"
                className="px-3 py-1 rounded-full bg-white/80 text-slate-700 text-xs sm:text-sm shadow-sm hover:bg-white"
              >
                Menu
              </Link>
              <Link
                to="/menu-preview"
                className="px-3 py-1 rounded-full bg-white/80 text-slate-700 text-xs sm:text-sm shadow-sm hover:bg-white"
              >
                Preview
              </Link>
              <Link
                to="/qr"
                className="px-3 py-1 rounded-full bg-white/80 text-slate-700 text-xs sm:text-sm shadow-sm hover:bg-white"
              >
                QR
              </Link>
              <button
                onClick={logout}
                className="px-3 py-1 rounded-full bg-pink-400/90 text-white text-xs sm:text-sm shadow hover:bg-pink-500"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
