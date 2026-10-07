const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan total belanja:", function(belanja) {
    belanja = parseInt(belanja);

    if (belanja >= 250000){
        let diskon = belanja * 0.1;
        let total = belanja - diskon;
        console.log("Total belanja anda:",belanja);
        console.log("mendapatkan diskon:",diskon);
        console.log("sakabeh kabeh:",total);
    }
    else if (belanja >= 100000){
        let diskon = belanja * 0.05;
        let total = belanja - diskon;
        console.log("Total belanja anda:",belanja);
        console.log("mendapatkan diskon:",diskon);
        console.log("sakabeh kabeh:",total);
    }
    else if(belanja >= 50000){
        let diskon = belanja * 0.03;
        let total = belanja - diskon;
        console.log("Total belanja anda:",belanja);
        console.log("mendapatkan diskon:",diskon);
        console.log("sakabeh kabeh:",total);
    } else{
        let hargaAkhir = belanja;
        console.log("sakabeh kabeh", belanja);
        console.log("tidak mendapatkan diskon")
    }

    rl.close();


});