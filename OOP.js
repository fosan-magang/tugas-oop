class Calculator {
  //write your code here
  constructor (){
    this.hasil = 0;
  
  }

  add (angka) {
    this.hasil += angka;
    return this;
  }

  subtract (angka) {
   this.hasil -= angka;
   return this;
  }

  multiply (angka) {
   this.hasil *= angka;
   return this;
  }

  divide (angka) {
   this.hasil /= angka;
   return this;
  }

  square () {
   this.hasil = Math.pow(this.hasil, 2);
   return this;
  }
  
  squareRoot () {
    this.hasil = Math.sqrt(this.hasil);
    return this;
  }

  phi (){
    this.hasil *= 3.14;
    return this;
  }

  result(){
    return this.hasil;
  }
}


const hitung = new Calculator()

console.log(hitung.add(3).divide(3).multiply(10).result()) //10
hitung.hasil=0
console.log(hitung.add(3).divide(3).phi().result()) //3.14
hitung.hasil=0
console.log(hitung.add(3).divide(3).squareRoot().result()) // 1 