console.log("Kalkulator Pangkat Persegi");

const angka = prompt("Masukkan angka yang ingin dipangkatkan: ");

function pangkatPersegi(angka: number): number {
    return angka * angka;
}

const hasil = pangkatPersegi(Number(angka));
console.log(`Hasil pangkat persegi dari ${angka} adalah: ${hasil}`);