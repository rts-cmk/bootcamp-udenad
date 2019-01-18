
// GitHub Pull test: Hej :)

// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	let count = 5;             // Opretter/definerer en variabel og lægger tallet 5 ned i.
	updateCountText ();        // Kalder funktionen  (at "kalde" betyder at udføre, eksekvere, afvikle, osv).
	

	// Tilføjer en "click" event til minus-knappen
	document.querySelector ("#btn-count-decrease").addEventListener ("click", () => {
		count --;              // Trækker én fra count variablens værdi.

		if (count < 0) {       // Tjekker om værdien er kommet under 0.
			count = 0;         // Hvis ja, sætter værdien til 0.
		}

		updateCountText ();    // Opdaterer brugerfladen.
	});


	// Tilføjer en "click" event til plus-knappen
	document.querySelector ("#btn-count-increase").addEventListener ("click", () => {
		count ++;              // Lægger én til count variablens værdi.

		if (count > 10) {      // Tjekker om værdien er kommet over 10.
			count = 10;        // Hvis ja, sætter værdien til 10.
		}

		updateCountText ();    // Opdaterer brugerfladen.
	});


	// Opretter/definerer en funktion, som opdaterer brugerfladen
	function updateCountText () {
		// Erstatter HTML elementets indhold med count variablens værdi
		document.querySelector ("#text-count").innerHTML = count;
	}

}); // Afslutter: DOMContentLoaded