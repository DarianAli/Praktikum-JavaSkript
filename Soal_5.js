class Lingkaran{
    constructor(r){
        this.r = r;
    }
    luas(){
        return Math.PI * Math.pow(this.r, 2);
    }

    keliling(){
        return 2 * Math.PI * this.r;
    }
}

class Tabung extends Lingkaran{
    constructor(r, t){
        super(r);
        this.t = t;
    }

    volume(){
        return Math.PI * Math.pow(this.r, 2) * this.t;
    }

    L_Permukaan(){
        return 2 * this.luas() + this.keliling() * this.t;
    }

    L_Selimut(){
        return this.keliling() * this.t;
    }
}

class Kerucut extends Lingkaran {
    constructor(r, t) {
        super(r);
        this.t = t;
    }

    volume() {
        return (1 / 3) * this.luas() * this.t;
    }

    luasPermukaan() {
        let s = Math.sqrt(Math.pow(this.r, 2) + Math.pow(this.t, 2));
        return this.luas() + Math.PI * this.r * s;
    }

    luasSelimut() {
        let s = Math.sqrt(Math.pow(this.r, 2) + Math.pow(this.t, 2));
        return Math.PI * this.r * s;
    }
}

class Bola extends Lingkaran {
    constructor(r) {
        super(r);
    }

    volume() {
        return (4 / 3) * Math.PI * Math.pow(this.r, 3);
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}

// Objek-objek sesuai gambar

// Bola dengan diameter 30 cm
let bola = new Bola(15);
console.log("Volume Bola:", bola.volume().toLocaleString(), "cm^3");
console.log("Luas Permukaan Bola:", bola.luasPermukaan().toLocaleString(), "cm^2");
console.log("");
console.log("--------------------------------------------------");

// Kerucut dengan diameter 20 cm dan tinggi 40 cm
let kerucut = new Kerucut(10 , 40);
console.log("Volume Kerucut:", kerucut.volume().toLocaleString(), "cm^3");
console.log("Luas Permukaan Kerucut:", kerucut.luasPermukaan().toLocaleString(), "cm^2");
console.log("Luas Selimut Kerucut:", kerucut.luasSelimut().toLocaleString(), "cm^2");
console.log("");
console.log("--------------------------------------------------");

// Tabung dengan diameter 15 cm dan tinggi 50 cm
let tabung = new Tabung(7.5, 50);
console.log("Volume Tabung:", tabung.volume().toLocaleString(), "cm^3");
console.log("Luas Permukaan Tabung:", tabung.L_Permukaan().toLocaleString(), "cm^2");
console.log("Luas Selimut Tabung:", tabung.L_Selimut().toLocaleString(), "cm^2");
console.log("");
console.log("--------------------------------------------------");
