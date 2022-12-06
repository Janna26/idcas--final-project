import loginPage from './pages/loginPage.js'

describe ('Purchase flow',()=>{
    before('Precondition',()=>{
        cy.visit('/')
        
        const user1 = 'standard_user' 
        const pass ='secret_sauce'

        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()

        cy.get('.header_secondary_container').should('exist')
        cy.get('.title').should('have.text', 'Products')

    })

    it('TC1: Carry out the purchase flow by selecting one item.',()=>{

        cy.fixture('index').then((index)=>{
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(index.addCartButton).click();
            cy.get(index.cartLink).click();
            /*cy.get(index.containerCart).type('Your cart');
            cy.get(index.checkoutBtt).click();
            cy.get(index.checoutInfo).type('Checkout: Your information')
           */

        })
       
    })

})