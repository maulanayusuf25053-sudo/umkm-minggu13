
import { muatGaleri } from "./galeri.js";

// Mengambil tombol dari HTML
const tombolMuat = document.querySelector("#btn-muat");
const tombolKosong = document.querySelector("#btn-kosong");
const tombolError = document.querySelector("#btn-error");

// Tombol untuk memuat ulang produk
tombolMuat.addEventListener("click", () => muatGaleri());

// Tombol untuk menguji data kosong
tombolKosong.addEventListener("click", () => {
    muatGaleri("data/produk-kosong.json");
});

// Tombol untuk menguji error 404
tombolError.addEventListener("click", () => {
    muatGaleri("data/tidak-ada.json");
});

// Memuat produk saat halaman pertama kali dibuka
muatGaleri();
