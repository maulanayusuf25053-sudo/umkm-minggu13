
export async function ambilJSON(url, opsi = {}) {
    const respons = await fetch(url, {
        cache: "no-store",
        ...opsi
    });

    // Memeriksa apakah respons berhasil
    if (!respons.ok) {
        throw new Error(
            `HTTP ${respons.status} ${respons.statusText}`.trim()
        );
    }

    // Memeriksa tipe data yang diterima
    const tipe = respons.headers.get("content-type") || "";

    if (!tipe.includes("application/json")) {
        throw new Error(
            "Respons bukan JSON — periksa path atau berkas"
        );
    }

    // Mengembalikan data JSON
    return respons.json();
}
