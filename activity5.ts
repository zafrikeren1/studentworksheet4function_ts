console.log("Kalkulator Faktorial");

const angkafaktor = prompt("Masukkan angka yang ingin dihitung faktorialnya: ");

function faktorial(angkafaktor: number): number {
    let hasil = 1;

    for (let i = 1; i <= angkafaktor; i++){
        hasil *= i;
    }
    return hasil;
}

const hasilFaktorial = faktorial(Number(angkafaktor));
console.log(`Hasil faktorial dari ${angkafaktor} adalah: ${hasilFaktorial}`);