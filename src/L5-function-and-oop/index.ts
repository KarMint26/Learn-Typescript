console.log("=== INI ADALAH LESSON OOP TYPESCRIPT ===");

class Rekening {
    #name: string; // Private Identifier di Encapsulation ES2022
    #age: number;
    #amount: number;

    constructor(name: string, age: number, amount?: number){
        this.#name = name;
        this.#age = age;
        
        // Nullish coalescing 
        // this.#amount = (amount) ? amount : 0; // ternary operator
        this.#amount = amount ?? 0; // jika amount tidak ada maka akan menjadi 0 (Nullish Coalescing)
    }

    getName() {
        return this.#name;
    }

    setName(name: string){
        this.#name = name;
    }

    getAge() {
        return this.#age;
    }

    setAge(age: number){
        this.#age = age;
    }
    
    getAmount() {
        return this.#amount;
    }

    setAmount(amount: number) {
        this.#amount = amount;
    }

    deposit(jumlahDeposit: number): void {
        this.#amount = this.#amount + jumlahDeposit;
    }

    withDraw(jumlahPenarikan: number): void {
        this.#amount = this.#amount - jumlahPenarikan;
    }

    bukaRekening(setoranAwal: number){

    }
}

const rekeningKarel = new Rekening("Karel", 19, 20_000_000);
console.log(`\nSaya bernama ${rekeningKarel.getName()}, umur saya ${rekeningKarel.getAge()} tahun, saldo saya ${rekeningKarel.getAmount()} Juta`);

const rekeningSkilvul = new Rekening("Skilvul", 5, 100_000_000);
console.log(`\nPerusahaan bernama ${rekeningSkilvul.getName()}, berumur ${rekeningSkilvul.getAge()} tahun, dan memiliki saldo bank sebesar ${rekeningSkilvul.getAmount()} juta`);

// Inheritance

class RekeningTabungan extends Rekening {
    #bunga: number;

    constructor(name: string, age: number, bunga: number, amount?: number) {
        super(name, age, amount);
        this.#bunga = bunga;
    }

    getBunga() {
        return this.#bunga;
    }

    setBunga(bunga: number) {
        this.#bunga = bunga;
    }

    bukaRekening(setoranAwal: number) {
        if(setoranAwal < 1_000_000) {
            return new Error("Saldo Kurang");
        }

        console.log("Berhasil"); // Polymorphism (Overriding Method)
    }
}

const myTabungan = new RekeningTabungan("Karel Trisnanto", 20, 2_000_000, 50_000_000);
console.log(`\nNama saya adalah ${myTabungan.getName()}, saya berumur ${myTabungan.getAge()} tahun, dan saya memiliki bunga bank ${myTabungan.getBunga()} juta, serta memiliki saldo sebesar ${myTabungan.getAmount()} juta`);

// abstract class dan interface

interface IBunga {
    hitungBunga: (bungaSaatIni: number) => void;
}

class RekeningInvestasi extends Rekening implements IBunga {
    #bungaSekarang: number;

    constructor(name: string, age: number, bungaSekarang: number,  amount?: number){
        super(name, age, amount);
        this.#bungaSekarang = bungaSekarang;
    }
    getBungaSekarang() {
        return this.#bungaSekarang;
    }

    setBunga(bunga: number) {
        this.#bungaSekarang = bunga;
    }
    hitungBunga(bungaSaatIni: number): void {
        const amountNow: number = Number(this.getAmount);
        const bungaNow: number = bungaSaatIni;
        this.setBunga(amountNow + (amountNow + bungaNow));
        this.setAmount = this.getBungaSekarang;
    }
}

// class Car {
//     private nameOfCar: string;
//     // private readonly ( hanya untuk dibaca bukan diganti )

//     constructor(nameOfCar: string) {
//         this.nameOfCar = nameOfCar;
//     }

//     set setNameCar(nameCar: string) {
//         this.nameOfCar = nameCar;
//     }

//     get getNameCar() {
//         return this.nameOfCar;
//     }
// }