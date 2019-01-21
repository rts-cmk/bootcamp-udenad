
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	// Gør en hilsen variabel klar (en string)
	let hilsen = "";

	// Kalder en funktion og sender et argument med  (husk de runde parenteser)
	// Vi tager imod dét der bliver returneret ved at lægge det ned i variablen "hilsen"
	hilsen = hils ("Ole");
	console.log (hilsen);

	hilsen = hils ("Gertrud");
	console.log (hilsen);
	

	// Definerer en funktion, som tager imod ét parameter: navn. Funktionen returnerer en string
	function hils (navn) {
		return "Hej med dig, " + navn;

		// Man kan også opbygge en string således (læg mærke til backticks)
		// return `Hej med dig, ${navn}`;
	}

}); // Afslutter: DOMContentLoaded