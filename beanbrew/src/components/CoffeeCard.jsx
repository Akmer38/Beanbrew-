export default function CoffeeCard({ coffee, onEdit, onDelete, onAddToCart }) {
  const categoryColor = {
    filtre:   "bg-amber-100 text-amber-700",
    espresso: "bg-gray-100 text-gray-600",
    sütlü:   "bg-blue-100 text-blue-700",
    soğuk:   "bg-cyan-100 text-cyan-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-[#EDE8E2] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">

      {/* Emoji */}
      <div className="w-14 h-14 rounded-xl bg-[#E8F4FD] flex items-center justify-center text-2xl flex-shrink-0">
        {coffee.emoji}
      </div>

      {/* Bilgiler */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-bold text-[#1A1A1A] text-sm truncate">{coffee.name}</span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize flex-shrink-0 ${categoryColor[coffee.category] || "bg-gray-100 text-gray-600"}`}>
            {coffee.category}
          </span>
        </div>
        <p className="text-xs text-[#999] truncate">{coffee.description}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[#2E7CB8] font-extrabold text-sm">₺{coffee.price}</span>
          <span className="text-[10px] text-[#BBB] border border-[#EDE8E2] rounded px-1.5 py-0.5 font-semibold">{coffee.size}</span>
        </div>
      </div>

      {/* Butonlar */}
      <div className="flex flex-col gap-2 flex-shrink-0">
        {/* Sepete ekle */}
        <button
          onClick={() => onAddToCart(coffee)}
          className="w-8 h-8 rounded-lg bg-[#2E7CB8] text-white flex items-center justify-center hover:bg-blue-700 transition-all text-sm font-bold"
          title="Sepete Ekle"
        >+</button>
        {/* Düzenle */}
        <button
          onClick={() => onEdit(coffee)}
          className="w-8 h-8 rounded-lg bg-[#E8F4FD] text-[#2E7CB8] flex items-center justify-center hover:bg-[#2E7CB8] hover:text-white transition-all text-sm"
          title="Düzenle"
        >✏️</button>
        {/* Sil */}
        <button
          onClick={() => onDelete(coffee.id)}
          className="w-8 h-8 rounded-lg bg-red-50 text-[#E24B4A] flex items-center justify-center hover:bg-[#E24B4A] hover:text-white transition-all text-sm"
          title="Sil"
        >🗑️</button>
      </div>

    </div>
  );
}
