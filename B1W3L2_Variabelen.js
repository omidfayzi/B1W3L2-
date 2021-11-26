
// je voornaam + achternaam
// naam van de opleiding die je volgt

const element = document.getElementById('element')

const voornaam = prompt('Wat is jouw naam?')
const achternaam = prompt('Wat is jouw achternaam?')
const leeftijd = prompt('Wat is jouw leeftijd')



function ToonText() {
	element.innerHTML = `Welkom ${voornaam} ${achternaam} jouw leeftijd is ${leeftijd}`
} ToonText()
