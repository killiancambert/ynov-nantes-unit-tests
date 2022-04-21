Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', ({ I }) => {
    I.amOnPage('https://www.ynov-nantes.com/');

    I.wait(1)

    //Go on recherche 
    I.amOnPage('https://www.ynov-nantes.com/recherche/');

    // Complete the search input
    I.fillField("s", "info")

    I.wait(1)

    // See if "Bachelor Informatique"
    I.see("Bachelor Informatique")
});
