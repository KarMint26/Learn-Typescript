// any
// let person: any = {name: 'skilvul'};
// person();

// // unknown
// let nilaiUjian: unknown;
// nilaiUjian = 100;

// console.log(typeof nilaiUjian);

// let nilaiAkhir;
// if(typeof nilaiUjian === "number"){
//     nilaiAkhir = nilaiUjian + 100;
//     console.log(`Nilai Akhir: ${nilaiAkhir}`);
// }

// Boolean
// let benarAtauSalah: boolean = true;
// let benar: true = true;
// let salah = false; // Success compile tapi ketika di run di js file akan error

// benar = false;

// Number dan BigInt
// let harga1: number = 10000;
// let harga2: number = 20_000_000;

// let angkaKecil: number = 100n;
// let angkaBesar: bigint = 100n;
// console.log(angkaBesar);

// string
const userName: string = 'skilvul';
console.log(`saya belajar di : ${userName}`);
console.log(userName.charAt(0));
console.log(userName.toUpperCase());

// symbol
let a = Symbol('a');
let b: symbol =  Symbol('a');
console.log(a === b);

// Object
type Person = {
    name: string,
    umur: number,
    partner?: string
} // Type aliases (Memberikan Konteks pada text);

interface Person2 {
    name: string,
    umur: number,
    date?: number,
    partnert?: string
} // Interface

let person: Person2 = { // Bisa langsung juga di variable nya
    name: "Alex",
    umur: 20
}

let daftarKursiBus: {
    [nomorKursi: string]: string // Key dan Value harus String
} = {
    "A": "Bambang",
    "B": "Tono",
    "C": "Narnia"
}

const { A, B, C } = daftarKursiBus;

console.log(A, B, C);


// Union Type dan Insersection Type (Menkombinasikan Types)