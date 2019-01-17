
// Forskellen på eksempel 01b og 01c er, at 01c bruger en funktion,
// som begrænser count værdien. Funktionen bliver brugt i forbindelse med begge knapper.

// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	let count    = 30;           // Opretter/definerer en variabel og lægger tallet 30 ned i.
	let countMin =  0;           // Minimumværdien
	let countMax = 10;           // Maksimumværdien
	
	restrictCount ();            // Begrænser count værdien (fikser startværdien, så 30 bliver til 10)
	updateCountText ();          // Opdaterer brugerfladen.
	

	// Tilføjer en "click" event til minus-knappen
	document.querySelector ("#btn-count-decrease").addEventListener ("click", () => {
		count --;                // Trækker én fra count variablens værdi.
		restrictCount ();        // Begrænser count værdien.
		updateCountText ();      // Opdaterer brugerfladen.
	});


	// Tilføjer en "click" event til plus-knappen
	document.querySelector ("#btn-count-increase").addEventListener ("click", () => {
		count ++;                // Lægger én til count variablens værdi.
		restrictCount ();        // Begrænser count værdien.
		updateCountText ();      // Opdaterer brugerfladen.
	});


	// Opretter/definerer en funktion, som opdaterer brugerfladen
	function updateCountText () {
		// Erstatter HTML elementets indhold med count variablens værdi
		document.querySelector ("#text-count").innerHTML = count;
	}


	// Opretter/definerer en funktion, som begrænser count værdien
	function restrictCount () {
		if (count < countMin) {  // Tjekker om count's værdi er kommet under countMin's værdi.
			count = countMin;    // Hvis ja, sætter count's værdi til countMin's værdi.
		}
		else
		if (count > countMax) {  // Tjekker om count's værdi er kommet over countMax's værdi.
			count = countMax;    // Hvis ja, sætter count's værdi til countMax's værdi.
		}
	}

}); // Afslutter: DOMContentLoaded