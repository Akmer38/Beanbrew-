import { useState } from "react";

// ── Afiyet Olsun ekranı ────────────────────────
function AfijetScreen({ order, onClose }) {
  const total = order.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-8 text-center shadow-2xl">

        {/* Animasyonlu emoji */}
        <div className="text-7xl mb-4 animate-bounce">☕</div>

        <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-1">Afiyet Olsun!</h2>
        <p className="text-[#999] text-sm mb-6">Siparişin alındı, hazırlanıyor...</p>

        {/* Sipariş özeti */}
        <div className="bg-[#FAFAF8] rounded-2xl p-4 text-left mb-6">
          {order.map((item, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-[#EDE8E2] last:border-0">
              <span className="text-sm font-semibold text-[#1A1A1A]">
                {item.emoji} {item.name}
                <span className="text-[#999] font-normal"> ×{item.qty}</span>
              </span>
              <span className="text-sm font-bold text-primary">₺{item.price * item.qty}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 mt-1">
            <span className="text-sm font-bold text-[#1A1A1A]">Toplam</span>
            <span className="text-base font-extrabold text-primary">₺{total}</span>
          </div>
        </div>

        <div className="bg-[#E8F4FD] rounded-xl p-3 mb-6">
          <p className="text-primary text-xs font-semibold">🚀 Tahmini hazırlanma süresi: 5-10 dk</p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-primary text-white rounded-xl py-3 font-bold text-sm hover:bg-blue-700 transition-all"
        >
          Tamam, harika!
        </button>
      </div>
    </div>
  );
}

// ── Sepet paneli ───────────────────────────────
export default function Cart({ cart, onUpdateQty, onRemove, onClear, isOpen, onClose }) {
  const [ordered, setOrdered] = useState(false);
  const [lastOrder, setLastOrder] = useState([]);

  const total    = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);

  const handleConfirm = () => {
    if (cart.length === 0) return;
    setLastOrder([...cart]);
    setOrdered(true);
    onClear();
  };

  const handleAfijetClose = () => {
    setOrdered(false);
    setLastOrder([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Arka plan overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Sepet paneli */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-40 shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#EDE8E2]">
          <div>
            <h2 className="font-extrabold text-[#1A1A1A] text-lg">Sepetim</h2>
            <p className="text-[#999] text-xs">{itemCount} ürün</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#FAFAF8] border border-[#EDE8E2] flex items-center justify-center text-[#999] hover:text-danger transition-all"
          >✕</button>
        </div>

        {/* İçerik */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">🛒</div>
              <p className="font-semibold text-[#1A1A1A]">Sepet boş</p>
              <p className="text-[#999] text-sm mt-1">Menüden kahve ekle</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <div key={item.id} className="bg-[#FAFAF8] rounded-2xl border border-[#EDE8E2] p-3 flex items-center gap-3">
                  {/* Emoji */}
                  <div className="w-11 h-11 bg-[#E8F4FD] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.emoji}
                  </div>

                  {/* Bilgi */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#1A1A1A] truncate">{item.name}</p>
                    <p className="text-xs text-[#999]">{item.size} · ₺{item.price}</p>
                  </div>

                  {/* Adet kontrolü */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty - 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-[#EDE8E2] flex items-center justify-center text-sm font-bold text-[#999] hover:border-danger hover:text-danger transition-all"
                    >−</button>
                    <span className="text-sm font-bold text-[#1A1A1A] w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold hover:bg-blue-700 transition-all"
                    >+</button>
                  </div>

                  {/* Sil */}
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-[#CCC] hover:text-danger transition-all text-sm"
                    title="Kaldır"
                  >🗑️</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — Toplam + Onayla */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-[#EDE8E2]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-[#999]">Toplam</span>
              <span className="text-xl font-extrabold text-primary">₺{total}</span>
            </div>
            <button
              onClick={handleConfirm}
              className="w-full bg-primary text-white rounded-xl py-3.5 font-bold text-sm hover:bg-blue-700 transition-all shadow-sm"
            >
              Siparişi Onayla →
            </button>
            <button
              onClick={onClear}
              className="w-full mt-2 text-[#BBB] text-xs py-1 hover:text-danger transition-all"
            >Sepeti temizle</button>
          </div>
        )}
      </div>

      {/* Afiyet olsun ekranı */}
      {ordered && (
        <AfijetScreen order={lastOrder} onClose={handleAfijetClose} />
      )}
    </>
  );
}
