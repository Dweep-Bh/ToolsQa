import BasePage from '../Page_objects/BasePage';
import HomePage from '../Page_objects/HomePage'
describe('HomePage test',()=>{
    it('HomePage should work', function(){
         const basePage=new BasePage();
         const homePage=new HomePage();
         basePage.url();
         homePage.carouselisVisible();
         homePage.clickOnHome();
         homePage.clickOnOnlineBanking();
    })
})