import loginPage from './pages/loginPage.js'

describe ('FBrowsing',()=>{
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

    it('TC1: Visit the section of all items',()=>{

        cy.get('#react-burger-menu-btn').click({force:true});
        cy.get('#inventory_sidebar_link').click({force:true});
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
       
    })

    it('TC2:Visit the About section',()=>{

        cy.get('#react-burger-menu-btn').click({force:true});
        cy.get('#about_sidebar_link').click({force:true});
        cy.url().should('eq','https://saucelabs.com/')
        cy.go(-1)

        
       
    })

   /* it('TC3:Visit the Reset App State section',()=>{
        //This option is not working
        cy.get('#react-burger-menu-btn').click({force:true});
        cy.get('#reset_sidebar_link').click({force:true});
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        cy.get('#react-burger-cross-btn').click({force:true});
    

    })
   
   */

    it('TC4:Visit Twitter Page',()=>{

        cy.get('.footer').
        should('have.text', 'TwitterFacebookLinkedIn© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        cy.get('.social_twitter > a').click({force:true})
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        //cy.go(-1)
    })

    it('TC5:Visit Facebook Page',()=>{

        cy.get('.footer').
        should('have.text', 'TwitterFacebookLinkedIn© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        cy.get('.social_facebook > a').click({force:true})
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
       
    })

    it.only('TC6:Visit Linkedin Page',()=>{

        cy.get('.footer').
        should('have.text', 'TwitterFacebookLinkedIn© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        cy.get('.social_linkedin > a').click({force:true})
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
       
    })
    

})

