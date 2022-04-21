Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', ({ I }) => {
    I.amOnPage('https://www.ynov-nantes.com/');

    I.wait(1)
     
    // Click on icon
    I.click(locate(".icon-search"))

    // Complete the search input
    I.fillField("s", "info")

    I.wait(1)

    // See if "Bachelor Informatique"
    I.see("Bachelor Informatique")
});
