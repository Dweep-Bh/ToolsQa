import {base_url} from '../fixtures/config'
class BasePage
{  
    
    url()
        {
            
           cy.visit(base_url)
        }  
     
}
export default BasePage