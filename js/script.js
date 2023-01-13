// Genera 5 numeri casuali e li mostra in pagina
let numbers = [];
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    numbers.push(randomNum);
    document.getElementById("numbers").innerHTML += randomNum + " ";
}
console.log(numbers)
// Ininiza il timer di 30 secondi, al termine nasconede i numeri
setTimeout(function() {
    // Rende i numeri invisibili
    document.getElementById("numbers").style.display = "none";
    // Timer per avviare la richiesta di inserimento dei numeri
    setTimeout(function(){
        // Chiuede all'utente di inserire i numeri
        let userNumbersArr = [];
        let correctNumbers = 0;
        let correctOrder = 0;
        for (let i = 0; i < 5; i++) {
            let userNumber = parseInt(prompt("Inserisci il " + [i + 1] +  " numero:"));
            userNumbersArr.push(userNumber);
            if (numbers.includes(userNumber)){
                correctNumbers++;
                console.log("Numeri corretti: " + correctNumbers)
            }
            if(userNumber === numbers[i]){
                correctOrder++;
                console.log("Numeri nella posizione corretta: " + correctOrder)
            }
        }
        // Mostra il risultato
        alert("Hai inserito " + correctNumbers + " numeri corretti: " + userNumbersArr.filter(n => numbers.includes(n))+ " e " + correctOrder + " numeri nella posizione corretta");
    }, 50);
}, 3000);