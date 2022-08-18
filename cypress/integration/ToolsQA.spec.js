
import BasePage from '../Page_objects/BasePage'
describe('BasePage test',()=>{
    it('BasePage should work', function(){
        
         const basePage=new BasePage();
        
         basePage.url();
    })
})