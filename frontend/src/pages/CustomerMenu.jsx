// src/pages/CustomerMenu.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GradientCard from "../components/GradientCard";
import { api } from "../api/client";

const CustomerMenu = () => {
  const { vendorId } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/public/menu/${vendorId}`);
      setMenuData(res.data.data);
    } catch (err) {
      console.error(err);
      setMenuData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [vendorId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <p className="text-slate-700 text-lg font-medium">Loading Menu...</p>
      </div>
    );
  }

  if (!menuData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <p className="text-slate-700 text-lg font-medium">
          Menu not found 🚫
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-6">
      {/* Header */}
      <GradientCard className="text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          {menuData.vendor.stallName}
        </h1>
        <p className="text-sm text-slate-600">{menuData.vendor.location}</p>
        <p className="text-xs text-slate-500 mt-1">
          Owner: {menuData.vendor.name}
        </p>
      </GradientCard>

      {/* separator */}
      <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      {/* Menu Sections */}
      <div className="space-y-6">
        {menuData.categories.map((cat) => (
          <div key={cat._id}>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">
              {cat.categoryType1} •{" "}
              <span className="text-pink-500">{cat.categoryType2}</span>
            </h2>

            {/* No Items */}
            {(!cat.items || cat.items.length === 0) && (
              <p className="text-sm text-slate-500 italic">
                No items available yet.
              </p>
            )}

            {/* Items */}
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {cat.items?.map((item) => (
                <div
                  key={item._id}
                  className="rounded-2xl bg-white/80 border border-slate-200 shadow-sm p-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-slate-800">
                      {item.itemName}
                    </p>
                    {item.description && (
                      <p className="text-xs text-slate-500">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-slate-800">
                      ₹{item.price}
                    </p>
                    {!item.isAvailable && (
                      <span className="text-[11px] text-red-500 italic">
                        Not Available
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-slate-500 mt-10">
        Powered by <span className="text-pink-500">SmartMenu</span> 🍽
      </p>
    </div>
  );
};

export default CustomerMenu;
