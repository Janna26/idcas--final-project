
//import { beforeEach } from 'mocha'
import loginPage from './pages/loginPage.js'

describe ('Filter test',()=>{
    beforeEach(()=>{
        cy.visit('/')
        const user1 = 'standard_user' 
        const pass ='secret_sauce'
       
        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()
    
        cy.get('.header_secondary_container').should('exist')
        //cy.wait(3000);
    })

    it ('home test header',()=>{
        cy.get('.title').should('have.text', 'Products')
    })
    
})

