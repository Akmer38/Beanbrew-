import { useState } from "react";
import { useLocalStorage } from "./interfaces/useLocalStorage";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import HomePage from "./pages/HomePage";
import "./index.css";

const INITIAL_DATA = [
  { id: 1, name: "Filtre Kahve",  description: "Çikolata ve fındık notaları",  price: 65, size: "M", category: "filtre",   emoji: "☕" },
  { id: 2, name: "Sütlü Latte",  description: "Kremsi, hafif tatlı",           price: 75, size: "L", category: "sütlü",   emoji: "🥛" },
  { id: 3, name: "Espresso",     description: "Yoğun ve güçlü",               price: 55, size: "S", category: "espresso", emoji: "⚡" },
  { id: 4, name: "Soğuk Brew",   description: "Serinletici, düşük asit",       price: 80, size: "L", category: "soğuk",   emoji: "🧊" },
];

export default function App() {
  // Tüm state tek yerde — LocalStorage ile kalıcı
  const [coffees, setCoffees] = useLocalStorage("bb_coffees", INITIAL_DATA);
  const [cart, setCart]       = useLocalStorage("bb_cart", []);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  // Sepete ekle
  const handleAddToCart = (coffee) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === coffee.id);
      if (exists) return prev.map((c) => c.id === coffee.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...coffee, qty: 1 }];
    });
  };

  // Sepet adet
  const handleCartQty = (id, qty) => {
    if (qty <= 0) setCart((p) => p.filter((c) => c.id !== id));
    else setCart((p) => p.map((c) => c.id === id ? { ...c, qty } : c));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar
        count={coffees.length}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <HomePage
        coffees={coffees}
        setCoffees={setCoffees}
        cart={cart}
        onAddToCart={handleAddToCart}
      />

      <Cart
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleCartQty}
        onRemove={(id) => setCart((p) => p.filter((c) => c.id !== id))}
        onClear={() => setCart([])}
      />
    </div>
  );
}
