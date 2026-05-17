// Kahve nesnesinin yapısını tanımlar
// JavaScript'te TypeScript gibi tip tanımı olmadığı için
// JSDoc ile belgeliyoruz

/**
 * @typedef {Object} Coffee
 * @property {number}  id          - Benzersiz kimlik
 * @property {string}  name        - Kahve adı
 * @property {string}  description - Kısa açıklama
 * @property {number}  price       - Fiyat (TL)
 * @property {string}  size        - Boyut: "S" | "M" | "L"
 * @property {string}  category    - Kategori: "filtre" | "espresso" | "sütlü"
 * @property {string}  emoji       - Temsil emojisi
 */

export const CATEGORIES = ["filtre", "espresso", "sütlü", "soğuk"];
export const SIZES = ["S", "M", "L"];

export const defaultCoffee = {
  name: "",
  description: "",
  price: "",
  size: "M",
  category: "filtre",
  emoji: "☕",
};

export const EMOJIS = ["☕", "🥛", "🧋", "🧊", "🫖", "⚡"];
