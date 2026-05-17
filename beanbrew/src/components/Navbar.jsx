export default function Navbar({ count, cartCount, onCartOpen }) {
  return (
    <nav className="bg-white border-b border-[#EDE8E2] sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#2E7CB8] rounded-xl flex items-center justify-center text-lg">
            ☕
          </div>
          <div>
            <span className="font-extrabold text-[#1A1A1A] text-lg leading-none">Bean Brew</span>
            <p className="text-[10px] text-[#999] font-normal leading-none mt-0.5">Sipariş Yönetimi</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Menü sayısı */}
          <div className="bg-[#E8F4FD] text-[#2E7CB8] text-sm font-bold px-3 py-1 rounded-full">
            {count} ürün
          </div>

          {/* Sepet butonu */}
          <button
            onClick={onCartOpen}
            className="relative bg-[#2E7CB8] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all"
          >
            🛒 Sepet
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E24B4A] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
