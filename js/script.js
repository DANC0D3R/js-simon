// Genere 5 numeri casuali e li inserisce in "numbers"
let numbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    numbers.push(randomNumber);
    document.getElementById("numbers").innerHTML += randomNumber + " ";
}
console.log(numbers)

// Ininiza il timer di 30 secondi
setTimeout(function() {
    document.getElementById("numbers").innerHTML = " ";
    
    // Chiuede all'utente di inserire i numeri
    let userNumbersArr = [];
    let correctNumbers = 0;
    for (let i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt("Inserisci il numero:"));
        userNumbersArr.push(userNumber);
        if (numbers.includes(userNumber)) {
            correctNumbers++;
        }
    }
    
    // Mostra il risultato
    alert("Hai innseito " + correctNumbers + " numeri corretti: " + userNumbersArr.filter(n => numbers.includes(n)));
}, 1000);