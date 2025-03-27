const opsiAi = ["gunting", "batu", "kertas"];
const win = "You, Win!";
const lose = "You, Lose!";
const draw = "Draw!";

function play(userChoice) {
    // Tampilkan loading dan sembunyikan pilihan AI serta hasil
    document.getElementById("loading").style.display = "block";
    document.getElementById("ai-choice").innerText = "";
    document.getElementById("result").innerText = "";

    // Sembunyikan tombol pilihan
    document.querySelectorAll('.choice').forEach(btn => {
        btn.style.display = 'none';
    });

    // Simulasi delay untuk pilihan AI (1 detik)
    setTimeout(() => {
        // AI membuat pilihan
        const aiChoice = opsiAi[Math.floor(Math.random() * opsiAi.length)];
        
        // Tampilkan pilihan AI dan sembunyikan loading
        document.getElementById("ai-choice").innerText = `AI memilih: ${aiChoice}`;
        document.getElementById("loading").style.display = "none";

        // Logika permainan
        let result = "";
        if ((userChoice === "batu") && aiChoice === "batu") {
            result = draw;
        } else if ((userChoice === "batu") && aiChoice === "gunting") {
            result = win;
        } else if ((userChoice === "batu") && aiChoice === "kertas") {
            result = lose;
        } else if ((userChoice === "gunting") && aiChoice === "gunting") {
            result = draw;
        } else if ((userChoice === "gunting") && aiChoice === "batu") {
            result = lose;
        } else if ((userChoice === "gunting") && aiChoice === "kertas") {
            result = win;
        } else if ((userChoice === "kertas") && aiChoice === "kertas") {
            result = draw;
        } else if ((userChoice === "kertas") && aiChoice === "gunting") {
            result = lose;
        } else if ((userChoice === "kertas") && aiChoice === "batu") {
            result = win;
        }

        // Tampilkan hasil
        document.getElementById("result").innerText = result;

        // Tampilkan tombol retry
        document.getElementById('retry').style.display = 'inline-block';
    }, 1000); // Delay 1 detik
}

function retry() {
    // Reset permainan
    document.getElementById("ai-choice").innerText = '';
    document.getElementById("result").innerText = '';
    document.getElementById("loading").style.display = "none";
    document.querySelectorAll('.choice').forEach(btn => {
        btn.style.display = 'inline-block';
    });
    document.getElementById('retry').style.display = 'none';
}