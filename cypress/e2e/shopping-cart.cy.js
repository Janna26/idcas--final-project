
import loginPage from './pages/loginPage.js'

describe ('Purchase flow',()=>{
    beforeEach('Precondition',()=>{
        cy.visit('/')
        
        const user1 = 'standard_user' 
        const pass ='secret_sauce'
        

       /* It is not using
       const userName ='Janna'
        const lastName='Aquino'
        const zipCode='10014'*/

        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()

        cy.get('.header_secondary_container').should('exist')
        cy.get('.title').should('have.text', 'Products')

       /* It is not using
       cart.userName().type(userName)
        cart.lastName().type(lastName)
        cart.zipCode().type(zipCode)*/
    })

    it('TC1: Carry out the purchase flow by selecting one item.',()=>{

        cy.fixture('cart').then((cart)=>{
            cy.get('#item_4_title_link').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            //cy.wait(3000);
            cy.get(cart.checkoutBtt).click();
            cy.get(cart.userName).type('Janna')
            cy.get(cart.lastName).type('Aquino')
            cy.get(cart.zipCode).type('10014')
            cy.get(cart.continueBtt).click();
           // cy.wait(3000);
            cy.get(cart.finishBtt).click();
            //cy.wait(3000);
            cy.get(cart.backHome).click();

        })
       
    })

    it.skip('TC2: Carry out purchase flow by selecting more than one item.',()=>{

        cy.fixture('cart').then((cart)=>{
            cy.get(cart.inventContainer).eq(3).click();
            cy.get(cart.add).click();
           

        })

    })


    it('TC3:Carry out the purchase flow by selecting more than one item and closing the session.',()=>{

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
            cy.get(cart.backHome).click();
            cy.logout();
            
        })

    })

    it.skip('TC4:Make a purchase of more than one item and remove one or more from the cart.',()=>{

        cy.fixture('cart').then((cart)=>{
            cy.get('#item_0_title_link').contains('Sauce Labs Bike Light')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.removeBtt).click();
            cy.wait(3000)
            cy.get(cart.contShopping).click();
            //
            cy.get(cart.checkoutBtt).click();
            cy.get(cart.userName).type('Janna')
            cy.get(cart.lastName).type('Aquino')
            cy.get(cart.zipCode).type('10014')
            cy.get(cart.continueBtt).click();
            cy.get(cart.finishBtt).click();
            cy.get(cart.backHome).click();
            cy.logout();
            
            
        })

    })

    it.skip('TC5: Make a purchase of more than one item and return to the cart.',()=>{

        cy.fixture('cart').then((cart)=>{
           
            
            
        })

    })

    it.skip('TC6: Make a purchase of more than one item and return to the cart, select n items and complete the flow.',()=>{

        cy.fixture('cart').then((cart)=>{
           
            
            
        })

    })

    it('TC7: Carry out the purchase flow and do not enter the name in Checkout.',()=>{

        cy.fixture('cart').then((cart)=>{
            
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();
           // cy.get(cart.userName).type('Janna')
            cy.get(cart.lastName).type('Aquino')
            cy.get(cart.zipCode).type('10014')
            cy.get(cart.continueBtt).click();
            loginPage.checkMessage2('Error: First Name is required')
        
        })

    })

    it('TC8:Carry out the purchase flow and do not enter the last name in Checkout.',()=>{

        cy.fixture('cart').then((cart)=>{
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();
            cy.get(cart.userName).type('Janna')
            //cy.get(cart.lastName).type('Aquino')
            cy.get(cart.zipCode).type('10014')
            cy.get(cart.continueBtt).click();
            loginPage.checkMessage2('Error: Last Name is required')
            
            
        })

    })

    it('TC9: Carry out the purchase flow and do not enter the zip code at Checkout.',()=>{

        cy.fixture('cart').then((cart)=>{
            
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();
            cy.get(cart.userName).type('Janna')
            cy.get(cart.lastName).type('Aquino')
            //cy.get(cart.zipCode).type('10014')
            cy.get(cart.continueBtt).click();
            loginPage.checkMessage2('Error: Postal Code is required')
            
        })

    })
})