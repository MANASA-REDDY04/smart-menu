// src/pages/ManageMenu.jsx
import { useEffect, useState } from "react";
import GradientCard from "../components/GradientCard";
import { api } from "../api/client";
import { Pencil, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const CATEGORY_TYPE1_OPTIONS = ["Veg", "Non-Veg", "Drinks", "Desserts"];

const ManageMenu = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [error, setError] = useState("");

  const [editingItem, setEditingItem] = useState(null);

  const [form, setForm] = useState({
    categoryType1: "",
    categoryType2: "",
    itemName: "",
    price: "",
    description: "",
  });

  const fetchCategories = async () => {
    try {
      setLoadingCats(true);
      const res = await api.get("/category");
      setCategories(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingCats(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /** ---------------- ADD ITEM ---------------- **/
  const handleAddItem = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.categoryType1 || !form.categoryType2)
      return setError("Choose category type1 and provide category type2.");

    if (!form.itemName || !form.price)
      return setError("Item name and price are required.");

    try {
      setItemLoading(true);
      await api.post("/item", {
        categoryType1: form.categoryType1,
        categoryType2: form.categoryType2,
        itemName: form.itemName,
        price: Number(form.price),
        description: form.description,
      });

      toast.success("Item added successfully ");

      setForm({ categoryType1: "", categoryType2: "", itemName: "", price: "", description: "" });
      fetchCategories();
    } catch (err) {
      toast.error("Failed to add item ");
      setError(err?.response?.data?.message || "Failed to add item. Try again.");
    } finally {
      setItemLoading(false);
    }
  };

  /** ---------------- EDIT ITEM ---------------- **/
  const handleEditItem = (item) => {
    setEditingItem(item);
    setForm({
      categoryType1: item.categoryType1,
      categoryType2: item.categoryType2,
      itemName: item.itemName,
      price: item.price,
      description: item.description || "",
    });
  };

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    if (!editingItem) return;

    try {
      setEditLoading(true);
      await api.put(`/item/${editingItem._id}`, {
        categoryType1: form.categoryType1,
        categoryType2: form.categoryType2,
        itemName: form.itemName,
        price: Number(form.price),
        description: form.description,
      });

      toast.success("Item updated successfully ");

      setEditingItem(null);
      setForm({ categoryType1: "", categoryType2: "", itemName: "", price: "", description: "" });
      fetchCategories();
    } catch (err) {
      toast.error("Update failed ");
      setError(err?.response?.data?.message || "Failed to update item.");
    } finally {
      setEditLoading(false);
    }
  };

  /** ---------------- DELETE ITEM ---------------- **/
  const handleDeleteItem = async (itemId) => {
    if (!window.confirm("Delete this item?")) return;

    try {
      await api.delete(`/item/${itemId}`);
      toast.success("Item deleted ");
      fetchCategories();
    } catch (err) {
      toast.error("Failed to delete ");
      console.error(err);
    }
  };

  /** ---------------- DELETE CATEGORY ---------------- **/
  const handleDeleteCategory = async (categoryId) => {
    if (!window.confirm("Delete this entire category and its items?")) return;
    try {
      await api.delete(`/category/${categoryId}`);
      toast.success("Category removed 🧹");
      fetchCategories();
    } catch (err) {
      toast.error("Failed to delete category ");
      console.error(err);
    }
  };

  /** ---------------- TOGGLE ITEM ---------------- **/
  const toggleAvailability = async (itemId) => {
    try {
      await api.patch(`/item/${itemId}/toggle`);
      toast.success("Availability updated ");
      fetchCategories();
    } catch (err) {
      toast.error("Toggle failed");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">

      <Toaster position="top-center" />

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <GradientCard>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Create / Update Menu</h2>
          <p className="text-sm text-slate-500 mb-4">
            Add items, edit, delete or toggle availability anytime.
          </p>

          {error && <div className="mb-3 text-sm text-red-500 bg-red-50 border rounded-xl px-3 py-2">{error}</div>}

          <form className="grid sm:grid-cols-2 gap-4" onSubmit={editingItem ? handleUpdateItem : handleAddItem}>
            <div className="space-y-2">
              <label className="text-xs font-semibold">Category Type 1</label>
              <select name="categoryType1" value={form.categoryType1} onChange={handleChange} className="w-full rounded-2xl border px-3 py-2 text-sm bg-white/70">
                <option value="">Select...</option>
                {CATEGORY_TYPE1_OPTIONS.map((opt) => <option key={opt}>{opt}</option>)}
              </select>

              <label className="text-xs font-semibold mt-2 block">Category Type 2</label>
              <input name="categoryType2" value={form.categoryType2} onChange={handleChange} placeholder="Starter, Meals, Beverages..." className="w-full rounded-2xl border px-3 py-2 bg-white/70 text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold">Item Name</label>
              <input name="itemName" value={form.itemName} onChange={handleChange} placeholder="Example: Paneer Roll" className="w-full rounded-2xl border px-3 py-2 bg-white/70 text-sm" />

              <label className="text-xs font-semibold mt-2 block">Price (₹)</label>
              <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="100" className="w-full rounded-2xl border px-3 py-2 bg-white/70 text-sm" />

              <label className="text-xs font-semibold mt-2 block">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={2} placeholder="Short description" className="w-full rounded-2xl border bg-white/70 px-3 py-2 text-sm resize-none" />
            </div>

            <div className="sm:col-span-2 flex justify-end">
              <button disabled={itemLoading || editLoading} className="px-6 py-2 rounded-2xl bg-pink-500 text-white font-semibold disabled:opacity-60">
                {editingItem ? (editLoading ? "Updating..." : "Update Item") : itemLoading ? "Adding..." : "Add Item"}
              </button>
            </div>
          </form>
        </GradientCard>

        <GradientCard>
          <h3 className="font-semibold text-slate-800 mb-3">Existing Menu</h3>

          {categories.length === 0 && <p className="text-sm text-slate-500">No items yet. Add items to see them here.</p>}

          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat._id} className="rounded-xl bg-white/70 p-3 border">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold">{cat.categoryType1} • <span className="text-pink-500">{cat.categoryType2}</span></p>
                  <button onClick={() => handleDeleteCategory(cat._id)} className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">Delete Category</button>
                </div>

                {cat.items?.length > 0 && (
                  <div className="mt-2 grid sm:grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div key={item._id} className="rounded-xl px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 flex justify-between items-center">

                        <div title={item.description}>
                          <p className="text-sm font-semibold">{item.itemName}</p>
                          <p className="text-xs text-slate-500">₹{item.price} • {item.isAvailable ? "Available" : "Not available"}</p>
                          {item.description && <p className="text-[11px] text-slate-400 mt-[2px] truncate">{item.description}</p>}
                        </div>

                        <div className="flex items-center gap-2">

                          <button
                            onClick={() => toggleAvailability(item._id)}
                            className={`p-2 rounded-full transition ${
                              item.isAvailable ? "bg-green-100 text-green-600 hover:bg-green-200" : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                            }`}
                            title="Toggle availability"
                          >
                            {item.isAvailable ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                          </button>

                          <button onClick={() => handleEditItem(item)} className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200" title="Edit item">
                            <Pencil size={14} />
                          </button>

                          <button onClick={() => handleDeleteItem(item._id)} className="p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200" title="Delete item">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </GradientCard>
      </div>
    </div>
  );
};

export default ManageMenu;
