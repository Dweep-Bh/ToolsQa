//import BasePage from "./BasePage";
import HomePage from "./HomePage";

class OnlineBankingPage extends HomePage
{
    clickOnAccountSummary()
    {   
        cy.get('#account_summary_link').click();
    }

    loginInput()
    {
        cy.get('#user_login').type('username')
    }

    passwordInput()
    {
        cy.get('#user_password').type('password')
    }
    clickOncheckBox()
    {
        cy.get('#user_remember_me').click()
    }
    clickOnSignInButton()
    {
        cy.get('.btn').click();
    }
    typeOfAccounts()
    {
        cy.get('h2.board-header').each(($el,index,$list)=>{

           const accounts=$el.text();
           cy.log(accounts);
          

        }

    )}

    printAllAccountDetails()
     {
    cy.get('div.board-content').each(($el,index,$list)=>{

        const printdetails=$el.text();
        cy.log(printdetails);
        
     }

 )}

    printAllValues()
    {
        var sum=0;
        cy.get('.board-content tr td:nth-child(3)').each(($el,index,$list)=>{
            
               const printallvalues=$el.text();
               const totalammount=printallvalues.split("$") 
               cy.log(totalammount[1])
               sum=Number(sum)+Number(totalammount[1])
        }).then(function(){
            cy.log("Total Amount"+" "+sum)
        })
       
    }

    
}



export default OnlineBankingPage