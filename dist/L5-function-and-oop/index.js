"use strict";
console.log("=== INI ADALAH LESSON OOP TYPESCRIPT ===");
class Rekening {
    #name; // Private Identifier di Encapsulation ES2022
    #age;
    #amount;
    constructor(name, age, amount) {
        this.#name = name;
        this.#age = age;
        // Nullish coalescing 
        // this.#amount = (amount) ? amount : 0; // ternary operator
        this.#amount = amount ?? 0; // jika amount tidak ada maka akan menjadi 0 (Nullish Coalescing)
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
    getAge() {
        return this.#age;
    }
    setAge(age) {
        this.#age = age;
    }
    getAmount() {
        return this.#amount;
    }
    setAmount(amount) {
        this.#amount = amount;
    }
    deposit(jumlahDeposit) {
        this.#amount = this.#amount + jumlahDeposit;
    }
    withDraw(jumlahPenarikan) {
        this.#amount = this.#amount - jumlahPenarikan;
    }
}
const rekeningKarel = new Rekening("Karel", 19, 20000000);
console.log(`\nSaya bernama ${rekeningKarel.getName()}, umur saya ${rekeningKarel.getAge()} tahun, saldo saya ${rekeningKarel.getAmount()} Juta`);
const rekeningSkilvul = new Rekening("Skilvul", 5, 100000000);
console.log(`\nPerusahaan bernama ${rekeningSkilvul.getName()}, berumur ${rekeningSkilvul.getAge()} tahun, dan memiliki saldo bank sebesar ${rekeningSkilvul.getAmount()} juta`);
// Inheritance
class RekeningTabungan extends Rekening {
    #bunga;
    constructor(name, age, bunga, amount) {
        super(name, age, amount);
        this.#bunga = bunga;
    }
    getBunga() {
        return this.#bunga;
    }
    setBunga(bunga) {
        this.#bunga = bunga;
    }
}
const myTabungan = new RekeningTabungan("Karel Trisnanto", 20, 2000000, 50000000);
console.log(`\nNama saya adalah ${myTabungan.getName()}, saya berumur ${myTabungan.getAge()} tahun, dan saya memiliki bunga bank ${myTabungan.getBunga()} juta, serta memiliki saldo sebesar ${myTabungan.getAmount()} juta`);
class RekeningInvestasi extends Rekening {
    #bungaSekarang;
    constructor(name, age, bungaSekarang, amount) {
        super(name, age, amount);
        this.#bungaSekarang = bungaSekarang;
    }
    getBungaSekarang() {
        return this.#bungaSekarang;
    }
    setBunga(bunga) {
        this.#bungaSekarang = bunga;
    }
    hitungBunga(bungaSaatIni) {
        const amountNow = Number(this.getAmount);
        const bungaNow = bungaSaatIni;
        this.setBunga(amountNow + (amountNow + bungaNow));
        this.setAmount = this.getBungaSekarang;
    }
}
class Car {
    nameOfCar;
    // private readonly ( hanya untuk dibaca bukan diganti )
    constructor(nameOfCar) {
        this.nameOfCar = nameOfCar;
    }
    set setNameCar(nameCar) {
        this.nameOfCar = nameCar;
    }
    get getNameCar() {
        return this.nameOfCar;
    }
}
