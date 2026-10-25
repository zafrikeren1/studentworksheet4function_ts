console.log("Printer Receipt");

const item1 = prompt("Masukkan nama item pertama: ") ?? "";
const jumlah1 = prompt("Masukkan jumlah item pertama: ") ?? "0";
const harga1 = prompt("Masukkan harga item pertama: ") ?? "0";

function PrintReceiptLine(item: string, jumlah: number, harga: number): void {
    const subTotal = jumlah * harga;
    console.log(`${item} - ${jumlah} x Rp${harga} = Rp${subTotal}`);
}

const receiptLine = PrintReceiptLine(item1, Number(jumlah1), Number(harga1));
console.log(`Terima kasih telah berbelanja di toko kami!`);