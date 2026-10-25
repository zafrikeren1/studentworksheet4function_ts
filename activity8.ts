console.log("Store Online Invoice");

const hargaBarang = prompt("Masukkan harga barang: ");
const banyakBarang = prompt("Masukkan jumlah barang: ");

function CalculateSubtotal(harga: number, jumlah: number): number {
    return harga * jumlah;
}

function calculateShipping(subtotal: number): number {
    if (subtotal >= 200000){
        return 0;
    }
    return 15000;
}

const subtotal = CalculateSubtotal(Number(hargaBarang), Number(banyakBarang));
const shipping = calculateShipping(subtotal);
const grandTotal = subtotal + shipping;

console.log(`Subtotal: Rp${subtotal}`);
if (shipping === 0) {
    console.log("Biaya pengiriman: Gratis");
} else {
    console.log(`Biaya pengiriman: Rp${shipping}`);
}
console.log(`Total keseluruhan: Rp${grandTotal}`);