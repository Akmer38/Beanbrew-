# ☕ Bean Brew — Kahve Sipariş Yönetim Uygulaması



React ve Tailwind CSS ile geliştirilmiş, tam işlevsel bir kahve sipariş yönetim uygulaması.

🔗 **Canlı Demo:** [beanbrew.netlify.app](https://beanbrew.netlify.app)  
---

## 📸 Ekran Görüntüsü

<img width="1911" height="962" alt="Uygulama ekran görüntüsü 1" src="https://github.com/user-attachments/assets/cc90b320-ee5e-41ba-9dd5-dd603c921fbe" />


<img width="798" height="927" alt="Uygulama ekran görüntüsü 2" src="https://github.com/user-attachments/assets/c97fdcdb-a553-4682-b272-5425b9dc2a85" />


<img width="689" height="705" alt="Uygulama ekran görüntüsü 3" src="https://github.com/user-attachments/assets/b0251228-ef53-4db6-84f4-11adbd48ca43" />

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
    ├── components/        
    │   ├── Navbar.jsx   
    │   ├── CoffeeForm.jsx   
    │   ├── CoffeeCard.jsx  
    │   ├── SearchBar.jsx  
    │   └── Cart.jsx         
    ├── pages/               
    │   └── HomePage.jsx  
    ├── interfaces/     
    │   ├── Coffee.js   
    │   └── useLocalStorage.js 
    ├── App.js             
    └── index.css            
```

---

## ⚙️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16+)
- npm


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


