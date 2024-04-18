const kmPercorso = prompt ("inserisci quanti km vuoi percorrere")
const etaPasseggero = prompt("inserisci la tua età")

const prezzoAlKm = 2;

const prezzoBiglietto = kmPercorso * prezzoAlKm;

let sconto = 0;

if(etaPasseggero < 18){
    sconto = (prezzoBiglietto * 20) / 100
} else if (etaPasseggero > 65) {
    sconto = (prezzoBiglietto * 40) / 100
}

const prezzoFinale = (prezzoBiglietto - sconto).toFixed(2)

console.log("il prezzo del biglietto è " + prezzoFinale)

document.getElementById("prezzoFinaleInput").value = prezzoFinale
