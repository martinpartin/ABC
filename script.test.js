import { oppdaterPoeng, sjekkOmRiktigBokstav, visNyOppgave } from './script.js';

Deno.test("oppdaterPoeng skal oppdatere poengsummen riktig", () => {
    document.body.innerHTML = '<p id="poeng">Poeng: 0</p><p id="feil">Feil: 0</p>';
     poeng = 3;
     feil = 1;
    oppdaterPoeng();
    if (document.getElementById("poeng").textContent !== "Poeng: 3") {
        throw new Error("Poeng ble ikke oppdatert riktig");
    }
});

Deno.test("sjekkOmRiktigBokstav skal øke poeng ved riktig svar", () => {
    poeng = 0;
    sjekkOmRiktigBokstav('a');
    if (poeng !== 1) {
        throw new Error("Poeng ble ikke økt");
    }
});

Deno.test("sjekkOmRiktigBokstav skal øke feil ved galt svar", () => {
    feil = 0;
    sjekkOmRiktigBokstav('b');
    if (feil !== 1) {
        throw new Error("Feil ble ikke økt");
    }
});

Deno.test("visNyOppgave skal velge et nytt ord", () => {
    const oppgave = visNyOppgave();
    if (!oppgave) {
        throw new Error("Ingen oppgave ble valgt");
    }
});
