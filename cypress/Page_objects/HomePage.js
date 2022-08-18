import BasePage from "./BasePage";

class HomePage extends BasePage
{

    carouselisVisible()
    {
        cy.get('#carousel').should('be.visible')
    }
    clickOnHome(){
        cy.get('#homeMenu').click()
    }

    clickOnOnlineBanking(){
        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('be.visible','Online Banking')
    }

 
}

export default HomePage