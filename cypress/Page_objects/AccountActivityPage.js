/// <reference types="Cypress" />
import HomePage from "./HomePage";
import OnlineBankingPage from "./OnlineBankingPage";


class AccountActivityPage extends HomePage
{
   
    clickOnAccountActivity()
    {
      
        cy.get('#account_activity_tab > a').click()
    }

    visibility()
    {
        cy.get('.board-header').should('be.visible','Show Transactions')
    }

    selectAccount()
    {
        cy.get('select').select([2])
    }

    getAllthevalues()
    {
        cy.get('div table').each(($el,index,$list)=>{
            const values=$el.text()
            cy.log(values)
        })
    }

    totatDepositAmount()
        
    {
        var sum=0;
        cy.get('div table td:nth-child(3)').each(($el,index,$list)=>{
            const deposit=$el.text()
            cy.log(deposit)

             sum=Number(sum)+Number(deposit)
        }).then(function(){
            cy.log("Total Deposit Amount"+" "+sum)
        })
      
    }

    totalWithDrawlAmount()
    {   var sum=0;
        cy.get('div table td:nth-child(4)').each(($el,index,$list)=>{
           
            const withdrawl=$el.text()
            cy.log(withdrawl)
            sum=Number(sum)+Number(withdrawl)
        }).then(function(){
            cy.log("Total Withdrawl Amount"+" "+sum)
        })
    }
    

    }
   

export default AccountActivityPage