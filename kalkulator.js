
class Kalkulator {
    constructor(nilaiAwal=0) {
        this.hasil = nilaiAwal; //inisialisasi nilai awal = 0 
    }

    tambah(angka) { //angka sebagai parameter dari method
        this.hasil += angka;
        return this;
    }

    kurang(angka) { //jadi ketika kita ngasih tambah(3). maka angka akan diisi dengan 3
        this.hasil -= angka;
        return this;
    }

    kali(angka) { 
        this.hasil *= angka;
        return this;
    }

    bagi(angka) {
        this.hasil /= angka;
        return this;
    }

    kuadrat() {
        this.hasil = Math.pow(this.hasil, 2); //disini sudah ada fungsi bawaan dari js
        return this;
    }

    akar() {
        this.hasil = Math.sqrt(this.hasil);
        return this;
    }

    phi() {
        this.hasil = Math.PI;
        return this;
    }

    result() { //kita memberikan method result untuk melihat hasil 
        return this.hasil;
    }

    reset() { //mereset hasil agar tidak bertabrakan dengan hasil sebelumnya
        this.hasil = 0;
        return this;
    }
}


const hitung = new Kalkulator(0) //membuat objek bernama hitung, dan diisi dengan class Kalkulator. 
//diset 0, tp sebenearnya diatas sudah di inisialisasi nilai awal = 0, jadi tdk perlu diset 0, tidak masalah 


console.log(hitung.tambah(3).bagi(3).kali(10).result()) //10
hitung.reset()
console.log(hitung.tambah(3).bagi(3).phi().result()) //3.14
hitung.reset()
console.log(hitung.tambah(3).bagi(3).akar().result()) // 1 
hitung.reset()
console.log(hitung.tambah(1).kali(2).kuadrat().result()) // 4
hitung.reset()