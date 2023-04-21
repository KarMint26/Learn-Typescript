"use strict";
// Array (homogen / sama tipenya)
const angkaDibawahLima = [1, 2, 3, 4];
const angkaGenap = [6, 8, 10, 12, 14];
const [angkaPertama, angkaKedua, angkaKetiga, angkaKeempat] = angkaDibawahLima; // Destructor Array
console.log(angkaPertama, angkaKedua, angkaKetiga, angkaKeempat);
console.log(...angkaDibawahLima, ...angkaGenap); // Spread Operator
// Tuples (Tipe data array berbeda namun di dedeklarasi secara explisit) jumlah tetap anggota tipe beda
const identitasSaya = ["karel", 19, "Brebes"];
let seorangPekerja = {
    nama: "Budi",
    umur: 20,
    partner: null
};
// void & never (void digunakan jika sebuah fungsi tidak mengembalikan nilai, never tidak pernah muncul)
const log = (message) => {
    console.log(message);
};
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function error(message) {
    throw new Error(message);
} // digunakan di blok try catch
