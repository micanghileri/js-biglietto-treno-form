var btnGenera = document.getElementById('btnGenera');
var btnAnnulla = document.getElementById('btnAnnulla');

// click bottone genera
btnGenera.addEventListener("click", function() {
    document.getElementById('visibleAtClick').className += 'show';
    var nome = document.getElementById('passenger').value;
    var km = document.getElementById('km').value;
    var age = document.getElementById('age').value;
    // variabili prezzo/km e offerte
    var prezzoPieno = km * 0.21 ;
    var minorenne= prezzoPieno * 20 / 100;
    var scontoOver = prezzoPieno * 40 / 100;
    var totale = prezzoPieno;
    // cambio prezzo per età e scritta offerta
    if (age == '- 18') {
        totale = prezzoPieno - minorenne;
        document.getElementById('offertaPasseggero').innerHTML = "Sconto Minori"
    } else if (age === '+ 65')  {
        totale = prezzoPieno - scontoOver;
        document.getElementById('offertaPasseggero').innerHTML = "Sconto Silver";
    }  else {
        document.getElementById('offertaPasseggero').innerHTML = "Prezzo Pieno";
    }
    // stampo i risultati
    document.getElementById('nomePasseggero').innerHTML = nome;
    document.getElementById('carrozzaPasseggero').innerHTML = Math.floor(Math.random()*(10 - 1))+1;
    document.getElementById('codicePasseggero').innerHTML = Math.floor(Math.random()*(100000 - 90000))+90000;
    document.getElementById('prezzoBiglietto').innerHTML = totale.toPrecision(3) + '€';
}
);
// click bottone annulla
btnAnnulla.addEventListener("click", function() {
    location.reload();
    document.getElementById('visibleAtClick').className += 'hidden';
}
);
