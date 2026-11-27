# ☕ Kopi Nusantara

Website katalog produk UMKM **Kopi Nusantara** yang dibuat untuk memenuhi tugas mata kuliah Pemrograman Web I.

## 📌 Deskripsi Proyek

Kopi Nusantara merupakan website sederhana yang menampilkan berbagai produk UMKM. Website ini dikembangkan menggunakan HTML, CSS, dan JavaScript dengan menerapkan konsep ES6 Modular serta Fetch API untuk mengambil data produk dari file JSON.

## ✨ Fitur Website

- Menampilkan daftar produk UMKM.
- Menampilkan gambar dan informasi produk.
- Menampilkan nama produk ketika gambar diklik.
- Efek hover pada kartu produk.
- Memuat ulang data produk menggunakan Fetch API.
- Menampilkan empat kondisi:
  - Loading: saat data sedang dimuat.
  - Empty: saat data kosong.
  - Success: saat data berhasil ditampilkan.
  - Error: saat terjadi kesalahan pengambilan data.

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript ES6
- ES6 Modules (`import` dan `export`)
- Fetch API
- JSON

## 📂 Struktur Folder

```text
umkm-minggu13/
├── index.html
├── README.md
├── css/
│   └── style.css
├── data/
│   ├── produk.json
│   └── produk-kosong.json
├── img/
│   ├── kopi.svg
│   ├── roti.svg
│   ├── teh.svg
│   ├── sambal.svg
│   ├── pisang.svg
│   └── madu.svg
└── js/
    ├── utils.js
    ├── api.js
    ├── galeri.js
    └── app.js
```

## 🚀 Cara Menjalankan

1. Download atau clone repository ini.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Jalankan server lokal dari terminal:

```bash
py -m http.server 8013
```

4. Buka browser dan akses:

```text
http://localhost:8013
```

## 👨‍💻 Pengembang

**Maulana Yusuf**

Proyek tugas mata kuliah Pemrograman Web I.
