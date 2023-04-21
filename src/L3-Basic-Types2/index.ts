// Array (homogen / sama tipenya)

const angkaDibawahLima: number[] = [1, 2, 3, 4];
const angkaGenap: Array<number> = [6, 8, 10, 12, 14];

const [angkaPertama, angkaKedua, angkaKetiga, angkaKeempat] = angkaDibawahLima // Destructor Array

console.log(angkaPertama, angkaKedua, angkaKetiga, angkaKeempat);
console.log(...angkaDibawahLima, ...angkaGenap); // Spread Operator

// Tuples (Tipe data array berbeda namun di dedeklarasi secara explisit) jumlah tetap anggota tipe beda

const identitasSaya: [string, number, string] = ["karel", 19, "Brebes"];

// null & undefined (null untuk nilai yang tidak ada, undefined untuk variable yg blm memiliki nilai)

type Employee = {
    nama: string,
    umur: number,
    partner?: string | null
}

let seorangPekerja: Employee = {
    nama: "Budi", 
    umur: 20,
    partner: null
}

// void & never (void digunakan jika sebuah fungsi tidak mengembalikan nilai, never tidak pernah muncul)

const log = (message: string): void => {
    console.log(message);
}

class ValidationError extends Error {
    constructor(message: string){
        super(message);
        this.name = "ValidationError";
    }
}

function error(message: string): never {
    throw new Error(message);
} // digunakan di blok try catch