
import { ambilJSON } from "./api.js";
import { formatRupiah, el } from "./utils.js";

// Mengambil elemen HTML
const grid = document.querySelector("#grid-produk");
const statusBox = document.querySelector("#status-galeri");
const namaTerpilih = document.querySelector("#nama-terpilih");

// Kelas untuk setiap kondisi galeri
const KELAS_STATUS = {
    loading: "status status--loading",
    empty: "status status--empty",
    success: "status status--success",
    error: "status status--error",
};

// Mengatur pesan status
function aturStatus(pesan, state) {
    statusBox.className = KELAS_STATUS[state] ?? "status";
    statusBox.textContent = pesan;
    statusBox.dataset.state = state;
}

// Membuat kartu produk
function kartuProduk(produk) {
    const kartu = el("article", "kartu");

    const gambar = el("img", "kartu__gambar");
    gambar.src = produk.gambar;
    gambar.alt = `Foto produk ${produk.nama}`;
    gambar.width = 320;
    gambar.height = 200;

    // Saat gambar diklik, nama produk ditampilkan
    gambar.addEventListener("click", () => {
        namaTerpilih.textContent = `Produk dipilih: ${produk.nama}`;

        document
            .querySelectorAll(".kartu--aktif")
            .forEach((lain) => lain.classList.remove("kartu--aktif"));

        kartu.classList.add("kartu--aktif");
    });

    // Efek hover pada kartu produk
    kartu.addEventListener("mouseenter", () => {
        kartu.classList.add("kartu--sorot");
    });

    kartu.addEventListener("mouseleave", () => {
        kartu.classList.remove("kartu--sorot");
    });

    // Memasukkan gambar, nama, kategori, dan harga
    kartu.append(
        gambar,
        el("h3", "kartu__judul", produk.nama),
        el("p", "kartu__kategori", produk.kategori),
        el("p", "kartu__harga", formatRupiah(produk.harga))
    );

    return kartu;
}

// Memuat galeri produk
export async function muatGaleri(url = "data/produk.json") {
    aturStatus("Memuat produk...", "loading");
    statusBox.setAttribute("aria-busy", "true");
    grid.replaceChildren();

    try {
        const data = await ambilJSON(url);

        // Kondisi jika data kosong
        if (!Array.isArray(data) || data.length === 0) {
            aturStatus(
                "Belum ada produk untuk ditampilkan.",
                "empty"
            );
            return;
        }

        // Menampilkan seluruh kartu produk
        grid.replaceChildren(...data.map(kartuProduk));

        aturStatus(
            `${data.length} produk berhasil dimuat.`,
            "success"
        );

    } catch (galat) {
        // Kondisi jika terjadi kesalahan
        aturStatus(
            `Gagal memuat data: ${galat.message}. Periksa koneksi lalu coba lagi.`,
            "error"
        );

    } finally {
        statusBox.setAttribute("aria-busy", "false");
    }
}
