import User from './data.js'
import loginPage from './pages/loginPage.js'

describe ('Login test', ()=>{
//Hooks
beforeEach(()=>{
    cy.visit('/')
})

    it('TC1:login_succesfully',()=>{
        //arragement
        const user1 = 'standard_user' 
        const pass ='secret_sauce'
        //action
        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()

        //assert
        cy.get('.header_secondary_container').should('exist')
        //cy.wait(3000);

    })

    it('TC2:user_empty',()=>{
        //arragement
      
        const pass ='secret_sauce'

        //action
      
        loginPage.passInput().type(pass)
        loginPage.submit().click()

        //assert
        loginPage.checkMessage('Epic sadface: Username is required')

    })

    it('TC3:pass_empty',()=>{
        //arragement
      
        const user1 = 'standard_user'

        //action
      
        loginPage.userInput().type(user1)
        loginPage.submit().click()

        //assert
        loginPage.checkMessage('Epic sadface: Password is required')

    })

    it('TC4:credentials_empty',()=>{
        //arragement
      
        //action
      
       loginPage.submit().click()

        //assert
        loginPage.checkMessage('Epic sadface: Username is required')

    })

    it('TC5:invalid_credentials',()=>{
        //arragement
      
        const user1 = 'Janna'
        const pass ='test'

        //action
        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()

        //assert
        loginPage.checkMessage('Epic sadface: Username and password do not match any user in this service')

    })
    

})

