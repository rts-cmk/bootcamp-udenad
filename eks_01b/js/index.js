
// Forskellen på eksempel 01a og 01b er, at 01b bruger ekstra variabler (til minimum- og maksimumværdierne).
// Læg mærke til, at 0 og 10 kun er nævnt én gang nu. Dette er en smartere måde at kode på,
// da det gør det nemmere at justere værdierne.

// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	let count    =  5;           // Opretter/definerer en variabel og lægger tallet 5 ned i.
	let countMin =  0;           // Minimumværdien
	let countMax = 10;           // Maksimumværdien
	updateCountText ();          // Kalder funktionen  (at "kalde" betyder at udføre, eksekvere, afvikle, osv).
	

	// Tilføjer en "click" event til minus-knappen
	document.querySelector ("#btn-count-decrease").addEventListener ("click", () => {
		count --;                // Trækker én fra count variablens værdi.

		if (count < countMin) {  // Tjekker om count's værdi er kommet under countMin's værdi.
			count = countMin;    // Hvis ja, sætter count's værdi til countMin's værdi.
		}

		updateCountText ();      // Opdaterer brugerfladen.
	});


	// Tilføjer en "click" event til plus-knappen
	document.querySelector ("#btn-count-increase").addEventListener ("click", () => {
		count ++;                // Lægger én til count variablens værdi.

		if (count > countMax) {  // Tjekker om count's værdi er kommet over countMax's værdi.
			count = countMax;    // Hvis ja, sætter count's værdi til countMax's værdi.
		}

		updateCountText ();      // Opdaterer brugerfladen.
	});


	// Opretter/definerer en funktion, som opdaterer brugerfladen
	function updateCountText () {
		// Erstatter HTML elementets indhold med count variablens værdi
		document.querySelector ("#text-count").innerHTML = count;
	}

}); // Afslutter: DOMContentLoaded