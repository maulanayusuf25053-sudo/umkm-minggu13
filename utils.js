
// Mengubah angka menjadi format mata uang Rupiah
export function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Membuat kalimat pesan dari data form
export function formatPesan({ nama, kategori, pesan }) {
    return `Halo, saya ${nama} ingin menyampaikan pesan mengenai ${kategori}: ${pesan}`;
}

// Membuat elemen HTML baru
export function el(tag, className, teks = "") {
    const elemen = document.createElement(tag);

    elemen.className = className;
    elemen.textContent = teks;

    return elemen;
}
