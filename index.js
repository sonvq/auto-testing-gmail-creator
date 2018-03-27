const puppeteer = require('puppeteer');

//async function runScreenshot() {
//    console.log('start runScreenshot');
//    const browser = await puppeteer.launch();
//    const page = await browser.newPage();
//
//    await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&flowName=GlifWebSignIn&flowEntry=SignUp');
//    await page.screenshot({path: 'screenshots/gmail-login.png'});
//
//    browser.close();
//}
//
//runScreenshot();


async function run() {
    /*
     * const About page
     */
    const ABOUT_LOGIN_BUTTON = 'body > nav > div > a.gmail-nav__nav-link.gmail-nav__nav-link__sign-in';
    
    /*
     * const Login page
     */
    const LOGIN_CREATE_ACCOUNT_BUTTON = '#view_container > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div.daaWTb > div > div > content > span'
    const LOGIN_TEST_TYPE = '#identifierId';
    
    /*
     * const Regsiter page
     */
    const FIRSTNAME_SELECTOR = '#firstName';
    const LASTNAME_SELECTOR = '#lastName';
    const USER_NAME_SELECTOR = '#username';
    const PASSWORD_SELECTOR = '#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
    const PASSWORD_CONFIRM_SELECTOR = '#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
    const ACCOUNT_NEXT_SELECTOR = '#accountDetailsNext';
    
    console.log('Step 1: Create browser');
    const browser = await puppeteer.launch({
        headless: false
    });
    
    console.log('Step 2: Visit about page and click login button');
    const page = await browser.newPage();
    await page.goto('https://www.google.com/gmail/about/');
    await Promise.all([
        page.click(ABOUT_LOGIN_BUTTON),
        page.waitForNavigation()
    ]);

      
    console.log('Step 3: Visit login page and click create account button');
    await page.click(LOGIN_TEST_TYPE);
    await page.keyboard.type('testtypeemail');
    await Promise.all([
        page.click(LOGIN_CREATE_ACCOUNT_BUTTON),
        page.waitForNavigation()
    ]);
    
    
//    await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&flowName=GlifWebSignIn&flowEntry=SignUp');
    console.log('Step 4: Visit register page, fill in info and click next button');
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

    await Promise.all([
        page.click(ACCOUNT_NEXT_SELECTOR),
        page.waitForNavigation()
    ]);    

    await page.screenshot({path: 'screenshots/gmail-login-with-input.png'});

    browser.close();
}

run();
