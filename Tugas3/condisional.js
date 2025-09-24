// werewolf.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk tanya nama
function askNama() {
    rl.question("Masukkan nama kamu: ", function (nama) {
        if (nama.trim() === "") {
            console.log("⚠️ Nama harus diisi!\n");
            askNama();
        } else {
            askPeran(nama);
        }
    });
}

// Fungsi untuk tanya peran
function askPeran(nama) {
    rl.question("Masukkan peran (Penyihir/Guard/Werewolf): ", function (peran) {
        if (peran.trim() === "") {
            console.log("⚠️ Halo " + nama + ", Pilih peranmu untuk memulai game!\n");
            askPeran(nama);
        } else if (peran.toLowerCase() === "penyihir") {
            console.log("Selamat datang di Dunia Werewolf, " + nama);
            console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
            rl.close();
        } else if (peran.toLowerCase() === "guard") {
            console.log("Selamat datang di Dunia Werewolf, " + nama);
            console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
            rl.close();
        } else if (peran.toLowerCase() === "werewolf") {
            console.log("Selamat datang di Dunia Werewolf, " + nama);
            console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
            rl.close();
        } else {
            console.log("⚠️ Peran tidak dikenali, silakan pilih antara Penyihir, Guard, atau Werewolf.\n");
            askPeran(nama);
        }
    });
}

// mulai dari input nama
askNama();
