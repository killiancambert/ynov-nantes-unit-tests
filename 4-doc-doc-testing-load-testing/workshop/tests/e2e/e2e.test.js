const CLIENT_URL = `http://localhost:5000`;

Feature('Messenger Client');

Scenario('Test new message', ({ I }) => {

    const message = "Hello"
    I.amOnPage(CLIENT_URL);
    I.fillField('#newTODO', message);
    I.click("#create-todo");
    I.see(message);

})

Scenario('Done  TODO', ({ I }) => {

    const message = "Hello"
    I.amOnPage(CLIENT_URL);
    I.fillField('#newTODO', message);
    I.click("#create-todo");
    I.see(message, '#todo-body');

    I.click("//tr[last()]/td/button")
    I.see(message, '#done-body');

})