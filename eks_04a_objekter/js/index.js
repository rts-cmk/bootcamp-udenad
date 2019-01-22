
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	// Opretter et objekt og giver det 2 egenskaber (fornavn og alder) i ét hug
	let person1 = {
		fornavn: "Mickey", // Der bruges kolon i stedet for lighedstegn
		alder: 50
	};

	// Opretter et objekt og giver det 2 egenskaber (fornavn og alder) i ét hug
	let person2 = {
		fornavn: "Anders", // Der bruges kolon i stedet for lighedstegn
		alder: 70
	};

	// Giver person1-objektet endnu en egenskab (adresse)
	person1.adresse = "3000 Disney Road";

	// Udskriver hele objektet
	console.log (person1);
	console.log (person2);

	// Udskriver kun fornavn tilhørende person1
	// Læg mærke til punktummet mellem objektet (person1) og egenskaben (fornavn)
	console.log (person1.fornavn);

}); // Afslutter: DOMContentLoaded