/*
class Rekening property saldo number & transaksi array of object (namaTransaksi, harga)

method cetak saldo untuk cetak saldo akhir

method cetak transaksi untuk cetak seluruh transaksi

class Aktifitas turuan dari Rekening

method nabung - parameter jumlah 

method belanja - parameter jumlah dibelanjakan & Nama Barang

masing2 method nabung & belanja harus input ke transaksi

INPUT:
------
    let dompet = new Aktifitas()

    dompet.nabung(10000).cetakSaldo()

    dompet.belanja(2000, 'ayam goreng').nabung(10000).cetakSaldo()

    dompet.belanja(5000, 'sodakoh').cetakTransaksi()
OUTPUT:
------
    10000
    18000   
[
        {namaTransaksi: 'nabung', harga: 10000},

        {namaTransaksi: 'ayam goreng', harga: 2000},

        {namaTransaksi: 'nabung', harga: 10000},

        {namaTransaksi: 'sodakoh', harga: 5000}
    ]
*/


let dompet = new Aktifitas()

console.log(dompet.nabung(10000).cetakSaldo());
console.log(dompet.belanja(2000,'ayam goreng').nabung(10000).cetakSaldo());
console.log(dompet.belanja(5000, 'sodakoh').cetakTransaksi());