// src/pages/MenuPreview.jsx
import { useEffect, useState } from "react";
import GradientCard from "../components/GradientCard";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/client";

const MenuPreview = () => {
  const { vendor } = useAuth();
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMenu = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/public/menu/${vendor._id}`);
      setMenuData(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (vendor?._id) {
      loadMenu();
    }
  }, [vendor]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        <GradientCard>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">
            Customer Menu Preview
          </h2>
          <p className="text-sm text-slate-500">
            This is how customers see your menu via QR or public link.
          </p>
        </GradientCard>

        {loading && (
          <p className="text-sm text-slate-600">Loading menu...</p>
        )}

        {!loading && menuData && (
          <GradientCard className="space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-800">
                {menuData.vendor.stallName}
              </h1>
              <p className="text-sm text-slate-600">
                {menuData.vendor.location}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Owner: {menuData.vendor.name}
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2" />

            <div className="space-y-4">
              {menuData.categories.map((cat) => (
                <div key={cat._id}>
                  <h3 className="text-sm font-semibold text-slate-700 mb-1">
                    {cat.categoryType1} •{" "}
                    <span className="text-pink-500">
                      {cat.categoryType2}
                    </span>
                  </h3>
                  {(!cat.items || cat.items.length === 0) && (
                    <p className="text-xs text-slate-400 mb-2">
                      No items added yet.
                    </p>
                  )}
                  {cat.items && cat.items.length > 0 && (
                    <div className="space-y-1">
                      {cat.items.map((item) => (
                        <div
                          key={item._id}
                          className="flex justify-between items-center text-sm bg-white/80 rounded-2xl px-3 py-2 border border-slate-100"
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
                              <p className="text-[11px] text-red-400">
                                Not available
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GradientCard>
        )}
      </div>
    </div>
  );
};

export default MenuPreview;
