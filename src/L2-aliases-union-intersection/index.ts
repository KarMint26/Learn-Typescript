// Union Type dan Insersection Type (Menkombinasikan Types)

type Identity = {
    name: string,
    umur: number
}

let surly: Identity = {
    name: "surly",
    umur: 20
}

// Union Type (Menggabungkan Type)

type Hewan = 'mamalia' | 'amfibi' | 'unggas'

let ayam: Hewan = "amfibi";

// Intersection Type

type Karyawan = {
    id: string,
    nama: string
}

type KaryawanTetap = {
    email: string,
    jabatan: string
}

type karyawanYangTetap = Karyawan & KaryawanTetap;

let karyawanTetap: karyawanYangTetap = {
    id: "12GT",
    nama: "Karel",
    email: "karel@gmail.com",
    jabatan: "CEO"
}

const { id: myID, nama: myName, email: myEmail, jabatan: myJabatan} = karyawanTetap;

console.log(`Id saya adalah ${myID}, Nama saya adalah ${myName}, Email saya adalah ${myEmail}, Jabatan saya adalah ${myJabatan}`);