const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("jenis olahraga:", function(olahraga){
    rl.question("masukkan durasi olga dalam hitungan menit:", function(waktu){
        waktu = parseInt(waktu);
        
        if (olahraga === "Lari"){
            kalori = (waktu / 5) * 60;
            console.log("Kalori yang terbakar saa:", kalori);
        }
        else if (olahraga === "Push up"){
            kalori = (waktu / 30) * 100;
            console.log("Kalori yang terbakar:", kalori);
        }
        else if (olahraga === "Plank"){
            kalori = (waktu / 1) * 5;
            console.log("Kalori yang terbakar:", kalori);
        }else{
            console.log("Olahraga tidak terdeteksi")
        }

        rl.close();
    });
});