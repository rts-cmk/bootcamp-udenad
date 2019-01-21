
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	// Kalder en funktion  (husk de runde parenteser)
	hils ();

	// Definerer en funktion, som hverken tager imod argumenter (parametre) eller returnerer noget
	function hils () {
		console.log ("Hej med dig");
	}

}); // Afslutter: DOMContentLoaded