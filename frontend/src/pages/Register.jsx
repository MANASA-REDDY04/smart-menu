// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GradientCard from "../components/GradientCard";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    stallName: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(form);
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center px-4">
      <GradientCard className="w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Create your Stall</h2>
        <p className="text-sm text-slate-500 mb-4 text-center">
          Register once and manage your entire menu in one place.
        </p>

        {error && (
          <div className="mb-3 text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            {error}
          </div>
        )}

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input className="input" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
          <input className="input" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />

          {/* Password with eye icon */}
          <div className="relative">
            <input
              className="input pr-10"
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <input className="input" name="stallName" placeholder="Stall Name" value={form.stallName} onChange={handleChange} />
          <input className="input" name="location" placeholder="Location" value={form.location} onChange={handleChange} />

          <button disabled={loading} className="btn-pink">
            {loading ? "Creating Stall..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-medium">Login here</Link>
        </p>
      </GradientCard>
    </div>
  );
};

export default Register;
