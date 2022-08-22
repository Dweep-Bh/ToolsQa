import BasePage from "../Page_objects/BasePage";
import HomePage from "../Page_objects/HomePage";
import OnlineBankingPage from "../Page_objects/OnlineBankingPage";
import AccountActivityPage from "../Page_objects/AccountActivityPage";
import { on } from "commander";
describe('AccountActivityPage test',()=>{
    it('AccountActivityPage should work', function(){
        const basePage=new BasePage();
         const homePage=new HomePage();
         const onlineBankingPage=new OnlineBankingPage();
         const accountActivityPage=new AccountActivityPage()
         basePage.url();
         homePage.carouselisVisible();
         homePage.clickOnHome();
         homePage.clickOnOnlineBanking();
         onlineBankingPage.clickOnAccountSummary();
         onlineBankingPage.loginInput()
         onlineBankingPage.passwordInput()
         onlineBankingPage.clickOncheckBox()
         onlineBankingPage.clickOnSignInButton()
         accountActivityPage.clickOnAccountActivity()
         accountActivityPage.visibility()
         accountActivityPage.selectAccount()
         accountActivityPage.getAllthevalues()
         accountActivityPage.totatDepositAmount()
         accountActivityPage.totalWithDrawlAmount()
         
    })
})