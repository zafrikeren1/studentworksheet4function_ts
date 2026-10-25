console.log("Mesin Kasir Kopi");

const hargaKopi = 15000;
const inputDiskon = prompt("Masukkan persentase diskon (contoh: 10 untuk 10%): ");

function FinalPrice(harga: number, diskon: number): number {

    if (diskon === 0){
        diskon = 5
    }

    const hargaDiskon = harga * (diskon / 100);
    return harga - hargaDiskon;
}

const totalHarga = FinalPrice(hargaKopi, Number(inputDiskon));
console.log(`Harga kopi setelah diskon ${inputDiskon}% adalah: Rp${totalHarga}`);