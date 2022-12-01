
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
        
    })

    it ('home page',()=>{
        cy.get('.title').should('have.text', 'Products')
    })

    it('Filter articles Name (A to Z)',()=>{ 
       cy.get('.product_sort_container').select ('Name (A to Z)')
      
    })
    
    it('Filter articles Name (Z to A)',()=>{ 
        cy.get('.product_sort_container').select ('Name (Z to A)')
     })

    it('Filter articles Price (low to high)',()=>{ 
        cy.get('.product_sort_container').select ('Price (low to high)')
     })

     it('Filter articles Price (high to low)',()=>{ 
        cy.get('.product_sort_container').select ('Price (high to low)')
     })
})

