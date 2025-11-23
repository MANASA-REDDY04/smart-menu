// src/pages/Dashboard.jsx
import GradientCard from "../components/GradientCard";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { vendor } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <GradientCard>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
            Welcome, {vendor?.name} 👋
          </h1>
          <p className="text-slate-600">
            Stall: <span className="font-semibold">{vendor?.stallName}</span>{" "}
            • Location: <span className="font-semibold">{vendor?.location}</span>
          </p>
        </GradientCard>

        <div className="grid sm:grid-cols-3 gap-4">
          <GradientCard className="flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-slate-800 mb-1">
                Create & Manage Menu
              </h2>
              <p className="text-xs text-slate-500">
                Add categories (Veg / Non-Veg / Drinks / Desserts) and items.
              </p>
            </div>
            <Link
              to="/manage-menu"
              className="mt-4 inline-block text-center rounded-2xl bg-pink-400 text-white text-sm py-2 hover:bg-pink-500"
            >
              Go to Menu Manager
            </Link>
          </GradientCard>

          <GradientCard className="flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-slate-800 mb-1">
                Customer Menu View
              </h2>
              <p className="text-xs text-slate-500">
                See how your menu looks to customers.
              </p>
            </div>
            <Link
              to="/menu-preview"
              className="mt-4 inline-block text-center rounded-2xl bg-blue-400 text-white text-sm py-2 hover:bg-blue-500"
            >
              Open Menu Preview
            </Link>
          </GradientCard>

          <GradientCard className="flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-slate-800 mb-1">
                QR Code
              </h2>
              <p className="text-xs text-slate-500">
                Generate or view QR for sharing your menu.
              </p>
            </div>
            <Link
              to="/qr"
              className="mt-4 inline-block text-center rounded-2xl bg-purple-400 text-white text-sm py-2 hover:bg-purple-500"
            >
              Go to QR Page
            </Link>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
