
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	// Kalder en funktion og sender et argument med  (husk de runde parenteser)
	hils ("Ole");
	hils ("Gertrud");

	// Definerer en funktion, som tager imod ét parameter: navn. Funktionen returnerer ikke noget
	function hils (navn) {
		console.log ("Hej med dig, " + navn);

		// Man kan også opbygge en string således (læg mærke til backticks)
		// console.log (`Hej med dig, ${navn}`);
	}

}); // Afslutter: DOMContentLoaded