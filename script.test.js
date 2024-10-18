const { oppdaterPoeng, sjekkOmRiktigBokstav, visNyOppgave } = require('./script');

describe('Bokstavspill for barn', () => {
    test('oppdaterPoeng skal oppdatere poengsummen riktig', () => {
        document.body.innerHTML = '<p id="poeng">Poeng: 0</p><p id="feil">Feil: 0</p>';
        let poeng = 3;
        let feil = 1;
        oppdaterPoeng();
        expect(document.getElementById('poeng').textContent).toBe('Poeng: 3');
        expect(document.getElementById('feil').textContent).toBe('Feil: 1');
    });

    test('sjekkOmRiktigBokstav skal øke poeng ved riktig svar', () => {
        let poeng = 0;
        sjekkOmRiktigBokstav('a');
        expect(poeng).toBe(1);
    });

    test('sjekkOmRiktigBokstav skal øke feil ved galt svar', () => {
        let feil = 0;
        sjekkOmRiktigBokstav('b');
        expect(feil).toBe(1);
    });

    test('visNyOppgave skal velge et nytt ord', () => {
        const oppgave = visNyOppgave();
        expect(oppgave).toBeTruthy();
    });
});