//* Elementi recuperati dal DOM

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

//* Inizializzo le variabili

const now = new Date ();
console.log(now);

const tomorrow = new Date ('2023-08-24 9:30');
console.log(tomorrow);

//* Recupero in millisecondi il tempo rimanente tra adesso e domani alle 9:30

let differenceTime = tomorrow - now;

console.log(differenceTime);

//* Funzione per aggiungere un numero
function addnumber(remainingTime) {
    return remainingTime < 10 ? '0' + remainingTime: remainingTime;
}

//* Creo una funzione per creare un countdown
function countdown() {
    differenceTime = differenceTime - 1000;
    if (differenceTime <= 0) {
        alert('Tempo Scaduto')
    } else {
        let remainingHours = Math.floor(differenceTime / 3600000);
        remainingHours = addnumber(remainingHours);
        hoursEl.innerText = remainingHours;

        let remainingMinutes = Math.floor ((differenceTime % 3600000) / 60000);
        remainingMinutes = addnumber(remainingMinutes);
        minutesEl.innerText = remainingMinutes;
        
        let remainingSecond = Math.floor ((differenceTime % 60000) / 1000);
        remainingSecond = addnumber(remainingSecond);
        secondsEl.innerText = remainingSecond;
    }  
}

//* Invoco la funzione all'interno di SetInterval
setInterval(countdown, 1000);

