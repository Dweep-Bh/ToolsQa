import BasePage from "../Page_objects/BasePage";
import HomePage from "../Page_objects/HomePage";
import OnlineBankingPage from "../Page_objects/OnlineBankingPage";
describe('OnlineBankingPage test',()=>{
    it('OnlineBankingPage should work', function(){
         const basePage=new BasePage();
         const homePage=new HomePage();
         const onlineBankingPage=new OnlineBankingPage();
         basePage.url();
         homePage.carouselisVisible();
         homePage.clickOnHome();
         homePage.clickOnOnlineBanking();
         onlineBankingPage.clickOnAccountSummary();
         onlineBankingPage.loginInput()
         onlineBankingPage.passwordInput()
         onlineBankingPage.clickOncheckBox()
         onlineBankingPage.clickOnSignInButton()
         onlineBankingPage.typeOfAccounts()
         onlineBankingPage.printAllAccountDetails()
         onlineBankingPage.printAllValues()
         
    })
})