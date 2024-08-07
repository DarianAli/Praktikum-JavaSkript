let sembako =[
    {nama : "Beras", harga : 10000, jumlah : 5},
    {nama : "Gula", harga : 14000, jumlah : 5},
    {nama : "Telur", harga : 20000, jumlah : 2},
    {nama : "Minyak Goreng", harga : 9000, jumlah : 10}
];

let Total = 0;

for(let item of sembako){
    Total += item.harga * item.jumlah
}

console.log("Daftar Sembako yang Dibeli:");
sembako.forEach(item => {
    console.log("-"+ item.nama+ ": Rp "+item.harga.toLocaleString());
});

console.log("Total Belanja yang Harus Dibayarkan: Rp " + Total.toLocaleString());

