// variabili bottoni
var btnGenera = document.getElementById("btn_genera");
var btnAnnulla = document.getElementById("btn_annulla");


btnGenera.addEventListener('click', function() {
   // console.log("genera");
   document.getElementById("biglietto").style.opacity="1";

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
   var offerta = "standard"

   if (fasciaEta == "minorenne") {
     // console.log("applica il 20% di sconto");
     var sconto = (costoBiglietto *20) / 100;
     costoBiglietto = costoBiglietto - sconto;
     var offerta = "sconto minorenne"
     // console.log(costoBiglietto);

   }else if (fasciaEta == "over65") {
     // console.log("applica il 40% di sconto");
     var sconto = (costoBiglietto *40) / 100;
     costoBiglietto = costoBiglietto - sconto;
     var offerta = "sconto over 65"
     // console.log(costoBiglietto);
   }

   var elementoNome = document.getElementById("nome_passeggero");
   var elementoSconto = document.getElementById("offerta_sconto");
   var elementoCarrozza = document.getElementById("carrozza");
   var elementoCodice = document.getElementById("codice_cp");
   var elementoBiglietto = document.getElementById("costo_biglietto");

   // numero carrozza casuale
   var numeroCarrozza = Math.floor(Math.random() *9) + 1;
   // numero codice casuale
   var codiceCp = Math.floor(Math.random() *(100000 - 90000)) + 90000;

   // compilare biglietto
   elementoNome.innerHTML = nomeCognome;
   console.log(nomeCognome);
   elementoSconto.innerHTML = offerta;
   elementoCarrozza.innerHTML = numeroCarrozza
   elementoCodice.innerHTML =codiceCp;
   elementoBiglietto.innerHTML = (costoBiglietto).toFixed(2) + "€";

});

btnAnnulla.addEventListener('click', function() {
  // console.log("annulla");
  document.getElementById("biglietto").style.opacity="0";
});
