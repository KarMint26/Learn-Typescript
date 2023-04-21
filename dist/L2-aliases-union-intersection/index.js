"use strict";
// Union Type dan Insersection Type (Menkombinasikan Types)
let surly = {
    name: "surly",
    umur: 20
};
let ayam = "amfibi";
let karyawanTetap = {
    id: "12GT",
    nama: "Karel",
    email: "karel@gmail.com",
    jabatan: "CEO"
};
const { id: myID, nama: myName, email: myEmail, jabatan: myJabatan } = karyawanTetap;
console.log(`Id saya adalah ${myID}, Nama saya adalah ${myName}, Email saya adalah ${myEmail}, Jabatan saya adalah ${myJabatan}`);
