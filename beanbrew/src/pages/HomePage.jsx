import { useState } from "react";
import { useLocalStorage } from "../interfaces/useLocalStorage";
import CoffeeForm from "../components/CoffeeForm";
import CoffeeCard from "../components/CoffeeCard";
import SearchBar from "../components/SearchBar";

export default function HomePage({ coffees, setCoffees, onAddToCart }) {
  const [editItem, setEditItem]     = useState(null);
  const [search, setSearch]         = useState("");
  const [filterCat, setFilterCat]   = useState("");
  const [toast, setToast]           = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  // ── EKLE ──────────────────────────────────────
  const handleAdd = (newCoffee) => {
    setCoffees([...coffees, newCoffee]);
    showToast(`"${newCoffee.name}" menüye eklendi ✓`);
  };

  // ── GÜNCELLE ──────────────────────────────────
  const handleUpdate = (updated) => {
    setCoffees(coffees.map((c) => (c.id === updated.id ? updated : c)));
    setEditItem(null);
    showToast(`"${updated.name}" güncellendi ✓`);
  };

  // ── SİL ───────────────────────────────────────
  const handleDelete = (id) => {
    const target = coffees.find((c) => c.id === id);
    if (!window.confirm(`"${target?.name}" silinsin mi?`)) return;
    setCoffees(coffees.filter((c) => c.id !== id));
    if (editItem?.id === id) setEditItem(null);
    showToast(`"${target?.name}" silindi`, "danger");
  };

  // ── SEPETE EKLE ───────────────────────────────
  const handleAddToCart = (coffee) => {
    onAddToCart(coffee);
    showToast(`"${coffee.name}" sepete eklendi 🛒`);
  };

  // ── FİLTRELE ──────────────────────────────────
  const filtered = coffees.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat ? c.category === filterCat : true;
    return matchSearch && matchCat;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-[340px_1fr] gap-6 items-start">

      {/* Sol: Form */}
      <div className="md:sticky md:top-20">
        <CoffeeForm
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          editItem={editItem}
          onCancelEdit={() => setEditItem(null)}
        />
      </div>

      {/* Sağ: Liste */}
      <div className="flex flex-col gap-4">
        <SearchBar
          search={search} setSearch={setSearch}
          filterCat={filterCat} setFilterCat={setFilterCat}
        />

        {/* Banner */}
        <div className="bg-[#2E7CB8] rounded-2xl px-5 py-4 flex justify-between items-center">
          <div>
            <p className="text-white/70 text-xs font-medium">Menüde toplam</p>
            <p className="text-white font-extrabold text-2xl">{coffees.length} kahve</p>
          </div>
          <span className="text-4xl opacity-80">☕</span>
        </div>

        {/* Kart listesi */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#EDE8E2] p-10 text-center">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-[#999] text-sm">Sonuç bulunamadı</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onEdit={setEditItem}
                onDelete={handleDelete}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl text-white text-sm font-semibold shadow-lg z-50 ${
          toast.type === "danger" ? "bg-[#E24B4A]" : "bg-[#2E7CB8]"
        }`}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}
