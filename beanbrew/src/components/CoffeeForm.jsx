import { useState, useEffect } from "react";
import { defaultCoffee, CATEGORIES, SIZES, EMOJIS } from "../interfaces/Coffee";

export default function CoffeeForm({ onAdd, onUpdate, editItem, onCancelEdit }) {
  const [form, setForm] = useState(defaultCoffee);
  const [errors, setErrors] = useState({});

  // Düzenleme modunda formu doldur
  useEffect(() => {
    if (editItem) {
      setForm(editItem);
      setErrors({});
    } else {
      setForm(defaultCoffee);
    }
  }, [editItem]);

  const validate = () => {
    const e = {};
    if (!form.name.trim())        e.name = "Kahve adı zorunlu";
    if (!form.description.trim()) e.description = "Açıklama zorunlu";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0)
      e.price = "Geçerli bir fiyat gir";
    return e;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    if (editItem) {
      onUpdate({ ...form, price: Number(form.price) });
    } else {
      onAdd({ ...form, price: Number(form.price), id: Date.now() });
    }
    setForm(defaultCoffee);
    setErrors({});
  };

  const isEditing = Boolean(editItem);

  return (
    <div className="bg-white rounded-2xl border border-[#EDE8E2] p-5 shadow-sm">
      <h2 className="font-bold text-[#1A1A1A] text-base mb-4">
        {isEditing ? "✏️ Kahveyi Düzenle" : "➕ Yeni Kahve Ekle"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        {/* Emoji seç */}
        <div>
          <label className="text-[11px] font-semibold text-[#555] uppercase tracking-wide mb-1 block">Simge</label>
          <div className="flex gap-2">
            {EMOJIS.map((em) => (
              <button
                key={em} type="button"
                onClick={() => handleChange("emoji", em)}
                className={`w-9 h-9 rounded-lg text-lg border transition-all ${
                  form.emoji === em
                    ? "border-primary bg-[#E8F4FD] scale-110"
                    : "border-[#EDE8E2] bg-[#FAFAF8]"
                }`}
              >{em}</button>
            ))}
          </div>
        </div>

        {/* Kahve adı */}
        <div>
          <label className="text-[11px] font-semibold text-[#555] uppercase tracking-wide mb-1 block">Kahve Adı</label>
          <input
            type="text"
            placeholder="örn. Filtre Kahve"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition-all
              ${errors.name ? "border-danger bg-red-50" : "border-[#EDE8E2] focus:border-primary focus:bg-[#F5F9FE]"}`}
          />
          {errors.name && <p className="text-danger text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Açıklama */}
        <div>
          <label className="text-[11px] font-semibold text-[#555] uppercase tracking-wide mb-1 block">Açıklama</label>
          <input
            type="text"
            placeholder="örn. Çikolata ve fındık notaları"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition-all
              ${errors.description ? "border-danger bg-red-50" : "border-[#EDE8E2] focus:border-primary focus:bg-[#F5F9FE]"}`}
          />
          {errors.description && <p className="text-danger text-xs mt-1">{errors.description}</p>}
        </div>

        {/* Fiyat + Boyut */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-[11px] font-semibold text-[#555] uppercase tracking-wide mb-1 block">Fiyat (₺)</label>
            <input
              type="number"
              placeholder="65"
              value={form.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition-all
                ${errors.price ? "border-danger bg-red-50" : "border-[#EDE8E2] focus:border-primary focus:bg-[#F5F9FE]"}`}
            />
            {errors.price && <p className="text-danger text-xs mt-1">{errors.price}</p>}
          </div>

          <div className="flex-1">
            <label className="text-[11px] font-semibold text-[#555] uppercase tracking-wide mb-1 block">Boyut</label>
            <div className="flex gap-2">
              {SIZES.map((s) => (
                <button
                  key={s} type="button"
                  onClick={() => handleChange("size", s)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                    form.size === s
                      ? "border-primary bg-[#E8F4FD] text-primary"
                      : "border-[#EDE8E2] text-[#999]"
                  }`}
                >{s}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Kategori */}
        <div>
          <label className="text-[11px] font-semibold text-[#555] uppercase tracking-wide mb-1 block">Kategori</label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c} type="button"
                onClick={() => handleChange("category", c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border capitalize transition-all ${
                  form.category === c
                    ? "bg-primary text-white border-primary"
                    : "border-[#EDE8E2] text-[#999] bg-[#FAFAF8]"
                }`}
              >{c}</button>
            ))}
          </div>
        </div>

        {/* Butonlar */}
        <div className="flex gap-2 mt-1">
          {isEditing && (
            <button
              type="button"
              onClick={() => { onCancelEdit(); setForm(defaultCoffee); setErrors({}); }}
              className="flex-1 border border-[#EDE8E2] rounded-xl py-2.5 text-sm font-semibold text-[#999] hover:bg-[#FAFAF8] transition-all"
            >İptal</button>
          )}
          <button
            type="submit"
            className="flex-1 bg-primary text-white rounded-xl py-2.5 text-sm font-bold hover:bg-blue-700 transition-all shadow-sm"
          >{isEditing ? "Güncelle" : "Ekle"}</button>
        </div>

      </form>
    </div>
  );
}
