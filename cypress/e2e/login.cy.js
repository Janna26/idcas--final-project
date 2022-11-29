describe ('Login test', ()=>{
//Hooks
beforeEach(()=>{
    cy.visit('/')
    const user1 = 'standard_user'
    const user2 = 'problem_user'
    const user3 = 'locked_out_user' //blocked user
    const user4 = 'performance_glitch_user'
    const pass ='secret_sauce'

})

    it('TC1:login_succesfully',()=>{
        //arragement
        const user1 = 'standard_user' 
        const pass ='secret_sauce'
        //action
        cy.get('[data-test="username"]').type(user1)
        cy.get('[data-test="password"]').type(pass)
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.header_secondary_container').should('exist')
       // cy.wait(3000);

    })

    it('TC2:user_empty',()=>{
        //arragement
      
        const pass ='secret_sauce'

        //action
      
        cy.get('[data-test="password"]').type(pass)
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username is required')

    })

    it('TC3:pass_empty',()=>{
        //arragement
      
        //const pass ='secret_sauce'
        const user1 = 'standard_user'

        //action
      
        cy.get('[data-test="username"]').type(user1)
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Password is required')

    })

    it('TC4:credentials_empty',()=>{
        //arragement
      
        //action
      
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username is required')

    })

    it('TC5:invalid_credentials',()=>{
        //arragement
      
        const user1 = 'Janna'
        const pass ='test'

        //action
        cy.get('[data-test="username"]').type(user1)
        cy.get('[data-test="password"]').type(pass)
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.error-message-container').should('have.text','Epic sadface: Username and password do not match any user in this service')

    })
    

})

