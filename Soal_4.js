// Suku pertama dari deret geometri
let S1 = 4;

// Rasio deret geometri
let R = 3;

// Jumlah suku yang ingin dihitung
let n = 10;

// Variabel untuk menyimpan jumlah
let ALL = 0;

// Perulangan untuk menghitung jumlah 10 suku pertama
for (let i = 0; i < n; i++) {
    // Menghitung suku ke-i dan menambahkannya ke sum
    ALL += S1 * Math.pow(R, i);
}

console.log("Jumlah 10 suku pertama : " + ALL);