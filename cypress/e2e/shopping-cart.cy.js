import loginPage from './pages/loginPage.js'

describe ('Purchase flow',()=>{
    before('Precondition',()=>{
        cy.visit('/')
        
        const user1 = 'standard_user' 
        const pass ='secret_sauce'
        /*const userName ='Janna'
        const lastName='Aquino'*/

        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()

        cy.get('.header_secondary_container').should('exist')
        cy.get('.title').should('have.text', 'Products')

        /*cart.userName().type(userName)
        cart.lastName().type(lastName)*/

    })

    it('TC1: Carry out the purchase flow by selecting one item.',()=>{

        cy.fixture('cart').then((cart)=>{
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();
            cy.get(cart.userName).type('Janna')
            cy.get(cart.lastName).type('Aquino')
            cy.get(cart.zipCode).type('10014')
            cy.get(cart.continueBtt).click();
            cy.get(cart.finishBtt).click();
            cy.get(cart.backHome).contains('Back Home')
            cy.wait(1000);
            cy.get(cart.backHome).click();

        })
       
    })

})