
class Rekening {
    constructor(saldo, transaksi) { //inisiliasasi properti bernama, saldo = 0 dan transaksi sbg array kosong
        this.saldo = 0
        this.transaksi = []
    }
    cetakSaldo() { 
        return this.saldo
    }
    cetakTransaksi() {
        return this.transaksi
    }
}

class Aktifitas extends Rekening {
    nabung(jumlah) { //jumlah sebagai parameter dari method nabung
        this.saldo += jumlah //mengedit properti saldo, berdasarkan parameter jumlah
        this.transaksi.push({namaTransaksi: 'nabung', harga: jumlah}) //kita memasukkan data ke dalam transaksi 
        return this
    }
    belanja(jumlah, barang) {
        this.saldo -= jumlah
        this.transaksi.push({namaTransaksi: barang, harga: jumlah})
        return this
    }
}
let dompet = new Aktifitas() //membuat objek bernama dompet, dan diisi dengan class Aktifitas

console.log(dompet.nabung(10000).cetakSaldo());
console.log(dompet.belanja(2000,'ayam goreng').nabung(10000).cetakSaldo());
console.log(dompet.belanja(5000, 'sodakoh').cetakTransaksi());