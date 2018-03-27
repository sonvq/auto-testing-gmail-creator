const puppeteer = require('puppeteer');

async function runScreenshot() {
    console.log('start runScreenshot');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&flowName=GlifWebSignIn&flowEntry=SignUp');
//    await page.screenshot({path: 'screenshots/gmail-login.png'});

    browser.close();
}

runScreenshot();


async function run() {
    console.log('start run');
    const browser = await puppeteer.launch({
        headless: false
    });
    
    
    const FIRSTNAME_SELECTOR = '#firstName';
    const LASTNAME_SELECTOR = '#lastName';
    const USER_NAME_SELECTOR = '#username';
    const PASSWORD_SELECTOR = '#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
    const PASSWORD_CONFIRM_SELECTOR = '#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
    const ACCOUNT_NEXT_SELECTOR = '#accountDetailsNext';

    const page = await browser.newPage();
    await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&flowName=GlifWebSignIn&flowEntry=SignUp');
    
    await page.click(FIRSTNAME_SELECTOR);
    await page.keyboard.type('John');

    await page.click(LASTNAME_SELECTOR);
    await page.keyboard.type('Smith');
    
    await page.click(USER_NAME_SELECTOR);
    await page.keyboard.type('johnsmith99882211');
    
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type('langtudeptrai');

    await page.click(PASSWORD_CONFIRM_SELECTOR);
    await page.keyboard.type('langtudeptrai');


    await page.click(ACCOUNT_NEXT_SELECTOR);

    await page.waitForNavigation();

    await page.screenshot({path: 'screenshots/gmail-login-with-input.png'});

    browser.close();
}

run();
