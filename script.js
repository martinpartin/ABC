// Ordliste med bilder og ord
const ordliste = [
    { ord: 'katt', bilde: 'A_simple_and_cute_illustration_of_a_cat,_suitable_.png' },
    { ord: 'bil', bilde: 'A_simple_and_cute_illustration_of_a_car,_suitable_.png' },
    { ord: 'sol', bilde: 'A_simple_and_cute_illustration_of_a_sun,_suitable_.png' },
    { ord: 'hest', bilde: 'A_simple_and_cute_illustration_of_a_horse,_suitabl.png' },
    { ord: 'eple', bilde: 'A_simple_and_cute_illustration_of_an_apple,_suitab.png' },
    { ord: 'ananas', bilde: 'A_simple_and_cute_illustration_of_a_pineapple,_sui.png' },
    { ord: 'elefant', bilde: 'A_simple_and_cute_illustration_of_an_elephant,_sui.png' },
    { ord: 'fisk', bilde: 'A_simple_and_cute_illustration_of_a_fish,_suitable.png' },
    { ord: 'måne', bilde: 'A_simple_and_cute_illustration_of_the_moon,_suitab.png' },
    { ord: 'blomst', bilde: 'A_simple_and_cute_illustration_of_a_flower,_suitab.png' }
];

// Lydfiler
const riktigLyd = new Audio('riktig.mp3');
const galtLyd = new Audio('galt.mp3');

let riktigBokstav = '';
const feedbackElement = document.getElementById('feedback');
const imageElement = document.getElementById('image');

// Funksjon for å vise et nytt ord og bilde
function visNyOppgave() {
    feedbackElement.textContent = '';  // Tøm tidligere feedback
    const oppgave = ordliste[Math.floor(Math.random() * ordliste.length)];
    riktigBokstav = oppgave.ord[0].toLowerCase();  // Første bokstav i ordet
    imageElement.src = oppgave.bilde;  // Vis bildet
}

// Funksjon for å sjekke brukerens svar fra tastatur
function sjekkSvar(event) {
    const tastetrykk = event.key.toLowerCase();
    sjekkOmRiktigBokstav(tastetrykk);
}

// Funksjon for å sjekke brukerens svar fra skjermtastatur
function sjekkOmRiktigBokstav(tastetrykk) {
    if (tastetrykk === riktigBokstav) {
        feedbackElement.textContent = 'Riktig!';
        feedbackElement.style.color = 'green';
        riktigLyd.play();  // Spill av riktig lyd
        setTimeout(visNyOppgave, 1000);  // Gå til neste oppgave etter 1 sekund
    } else {
        feedbackElement.textContent = 'Feil, prøv igjen!';
        feedbackElement.style.color = 'red';
        galtLyd.play();  // Spill av feil lyd
    }
}

// Bruk `self` i stedet for `window` for kompatibilitet
self.addEventListener('keydown', sjekkSvar);

// Lytt til klikk på skjermtastatur
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const bokstav = key.textContent.toLowerCase();
        sjekkOmRiktigBokstav(bokstav);
    });
});

// Start med å vise en oppgave
visNyOppgave();
