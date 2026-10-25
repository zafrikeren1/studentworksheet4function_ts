console.log("Kalkulator Penjumlahan");

const angka1 = prompt("Masukkan angka pertama: ");
const angka2 = prompt("Masukkan angka kedua: ");

function AddNumbers(angka1: number, angka2: number): number {
    return angka1 + angka2;
}

const hasilAkhir = AddNumbers(Number(angka1), Number(angka2));
console.log(`Hasil penjumlahan dari ${angka1} dan ${angka2} adalah: ${hasilAkhir}`);