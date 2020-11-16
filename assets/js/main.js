// variabili bottoni
var btnGenera = document.getElementById("btn_genera");
var btnAnnulla = document.getElementById("btn_annulla");


btnGenera.addEventListener('click', function() {
   // console.log("genera");

   var nomeUtente = document.getElementById("nome_cognome")
   var kmUtente = document.getElementById("km")
   var fasciaEtaUtente = document.getElementById("fascia_età")


   var nomeCognome = nomeUtente.value;
   var km = kmUtente.value;
   var fasciaEta = fasciaEtaUtente.value;
   // console.log(nomeCognome, km, fasciaEta);


});

btnAnnulla.addEventListener('click', function() {
  // console.log("annulla");
});
