const { oppdaterPoeng, sjekkOmRiktigBokstav, visNyOppgave } = require('./script');

describe('Bokstavspill for barn', () => {
    let poeng, feil;

    beforeEach(() => {
        poeng = 0;
        feil = 0;
    });

    test('oppdaterPoeng skal oppdatere poengsummen riktig', () => {
        poeng = 3;
        feil = 1;
        oppdaterPoeng();
        expect(document.getElementById('poeng').textContent).toBe('Poeng: 3');
        expect(document.getElementById('feil').textContent).toBe('Feil: 1');
    });

    test('sjekkOmRiktigBokstav skal øke poeng ved riktig svar', () => {
        const riktigBokstav = 'a';
        sjekkOmRiktigBokstav('a');
        expect(poeng).toBe(1);
        expect(feil).toBe(0);
    });

    test('sjekkOmRiktigBokstav skal øke feil ved galt svar', () => {
        const riktigBokstav = 'b';
        sjekkOmRiktigBokstav('a');
        expect(poeng).toBe(0);
        expect(feil).toBe(1);
    });

    test('visNyOppgave skal velge et nytt ord', () => {
        const oppgave = visNyOppgave();
        expect(oppgave).toBeTruthy();  // Sjekk at en ny oppgave vises
    });
});
