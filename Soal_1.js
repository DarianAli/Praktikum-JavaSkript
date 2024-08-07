
let panjang = 20.5; 
let lebar = 30; 
let luas = panjang * lebar;


let harga = 1500000;
let hargaTanah = luas * harga;


let PPN = 0.15;
let JumlahPPN = PPN * hargaTanah;

let Total = hargaTanah + JumlahPPN;

console.log("Luas Tanah             : "+ luas +" meter persegi");
console.log("Harga Tanah (tanpa PPN): Rp " + hargaTanah.toLocaleString());
console.log("PPN (15%)              : Rp " + JumlahPPN.toLocaleString());
console.log("Total Biaya            : Rp " + Total.toLocaleString());
