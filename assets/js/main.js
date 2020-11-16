// variabili bottoni
var btnGenera = document.getElementById("btn_genera");
var btnAnnulla = document.getElementById("btn_annulla");


btnGenera.addEventListener('click', function() {
   // console.log("genera");

   // var degli id dei tag input
   var nomeUtente = document.getElementById("nome_cognome")
   var kmUtente = document.getElementById("km")
   var fasciaEtaUtente = document.getElementById("fascia_età")

   // var degli id dei tag input a cui è assegnata il value
   var nomeCognome = nomeUtente.value;
   var km = kmUtente.value;
   var fasciaEta = fasciaEtaUtente.value;
   // console.log(nomeCognome, km, fasciaEta);

   var costoAlKm = 0.21;
   var costoBiglietto = costoAlKm * km;

   if (fasciaEta == "minorenne") {
     // console.log("applica il 20% di sconto");
     var sconto = (costoBiglietto *20) / 100;
     costoBiglietto = costoBiglietto - sconto;
     // console.log(costoBiglietto);

   }else if (fasciaEta == "over65") {
     // console.log("applica il 40% di sconto");
     var sconto = (costoBiglietto *40) / 100;
     costoBiglietto = costoBiglietto - sconto;
     // console.log(costoBiglietto);
   }

});

btnAnnulla.addEventListener('click', function() {
  // console.log("annulla");
});
