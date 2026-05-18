# ☕ Bean Brew — Kahve Sipariş Yönetim Uygulaması

> TNC Group Web Geliştirme: JavaScript Eğitimi — Bitirme Projesi

React ve Tailwind CSS ile geliştirilmiş, tam işlevsel bir kahve sipariş yönetim uygulaması.

🔗 **Canlı Demo:** [beanbrew.netlify.app](https://beanbrew.netlify.app)  
📁 **GitHub:** [github.com/Akmer38/Beanbrew-](https://github.com/Akmer38/Beanbrew-)

---

## 📸 Ekran Görüntüsü

> _(Buraya bir ekran görüntüsü ekle: GitHub'da bu dosyayı düzenlerken görseli sürükle bırak)_

---

## 🚀 Özellikler

| İşlem | Açıklama |
|-------|----------|
| ➕ **Ekle** | Yeni kahve ürünü forma adı, açıklama, fiyat, boyut ve kategori girerek ekle |
| 📋 **Listele** | Tüm kahveleri kartlar halinde görüntüle, ara ve kategoriye göre filtrele |
| ✏️ **Güncelle** | Mevcut kahveyi düzenle butonu ile formu doldur ve güncelle |
| 🗑️ **Sil** | Kahveyi listeden kalıcı olarak kaldır |
| 🛒 **Sepet** | Ürün sepete ekle, adet güncelle, siparişi onayla |
| 🎉 **Afiyet Olsun** | Sipariş onaylandığında özet ekranı göster |
| 💾 **LocalStorage** | Veriler sayfa yenilense de kaybolmaz |

---

## 🛠️ Kullanılan Teknolojiler

- **ReactJS** — Bileşen tabanlı UI geliştirme (useState, useEffect)
- **Tailwind CSS** — Utility-first CSS framework
- **LocalStorage** — Tarayıcı tarafında kalıcı veri saklama
- **Netlify** — Otomatik deploy ve yayınlama

---

## 📁 Proje Yapısı

Yönergede belirtildiği üzere `components`, `pages` ve `interfaces` klasörleri oluşturulmuştur:

```
beanbrew/
└── src/
    ├── components/          # Tekrar kullanılabilir UI bileşenleri
    │   ├── Navbar.jsx       # Üst navigasyon, sepet butonu
    │   ├── CoffeeForm.jsx   # Ekle / Güncelle formu
    │   ├── CoffeeCard.jsx   # Kahve listesi kartı
    │   ├── SearchBar.jsx    # Arama ve kategori filtresi
    │   └── Cart.jsx         # Sepet paneli + afiyet olsun ekranı
    ├── pages/               # Sayfa bileşenleri
    │   └── HomePage.jsx     # Ana sayfa — tüm CRUD işlemleri
    ├── interfaces/          # Veri tipleri ve yardımcı hooklar
    │   ├── Coffee.js        # Kahve veri yapısı, sabitler
    │   └── useLocalStorage.js  # LocalStorage custom hook
    ├── App.js               # Kök bileşen, state yönetimi
    └── index.css            # Tailwind direktifleri, Google Font
```

---

## ⚙️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16+)
- npm

### Adımlar

```bash
# 1. Repoyu klonla
git clone https://github.com/Akmer38/Beanbrew-.git

# 2. Proje klasörüne gir
cd Beanbrew-/beanbrew

# 3. Bağımlılıkları yükle
npm install

# 4. Geliştirme sunucusunu başlat
npm start
```

Tarayıcıda `http://localhost:3000` adresini aç.

---

## 📋 Proje Gereksinimleri Kontrol Listesi

Yönergede istenen tüm maddeler tamamlanmıştır:

- [x] Modern JavaScript kütüphanesi seçildi → **ReactJS**
- [x] Kütüphane kurulumu yapıldı → `create-react-app`
- [x] IDE ile açıldı → **VS Code**
- [x] `components`, `pages`, `interfaces` klasörleri oluşturuldu
- [x] CSS kütüphanesi kullanıldı → **Tailwind CSS**
- [x] **Ekle** işlemi gerçekleştirildi
- [x] **Listeleme** işlemi gerçekleştirildi
- [x] **Güncelleme** işlemi gerçekleştirildi
- [x] **Silme** işlemi gerçekleştirildi
- [x] GitHub hesabında public repo oluşturuldu
- [x] Netlify ile yayına alındı

---

## 👨‍💻 Geliştirici

**Akın Mert** — [github.com/Akmer38](https://github.com/Akmer38)

---

*TNC Group Web Geliştirme: JavaScript Eğitimi — 2025*
