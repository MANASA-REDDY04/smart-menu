import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 text-center mb-4">
          Smart<span className="text-pink-500">Menu</span> for Street Stalls
        </h1>
        <p className="text-slate-600 max-w-xl text-center mb-8">
          Create a beautiful digital menu with QR, manage your items easily,
          and let customers browse your menu instantly.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/register"
            className="px-8 py-3 rounded-full bg-pink-400 text-white font-semibold shadow-md hover:bg-pink-500"
          >
            Register Stall
          </Link>
          <Link
            to="/login"
            className="px-8 py-3 rounded-full bg-white/90 text-slate-800 font-semibold shadow-md hover:bg-white"
          >
            Login
          </Link>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          Built for small food stalls, tiffin centers, and street food vendors ✨
        </p>
      </div>
    </div>
  );
};

export default Landing;
