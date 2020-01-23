

describe('login function happy path', () => {

    it('login test', () => {
        browser.url('http://localhost:3000');
        browser.pause(3000);
        const userName = "//input[@name='user.login.userId']";
        $(userName).setValue("VJ");
    })

});