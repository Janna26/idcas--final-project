describe ('Login test', ()=>{
//Hooks
beforeEach(()=>{
    cy.visit('/')

})

    it('login succesfully',()=>{
        //arragement
        
        const user1 = 'standard_user'
        const user2 = 'problem_user'
        const user3 = 'locked_out_user' //blocked user
        const user4 = 'performance_glitch_user'
        const pass ='secret_sauce'

        //action
        cy.get('[data-test="username"]').type(user1)
        cy.get('[data-test="password"]').type(pass)
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.header_secondary_container').should('exist')

    })

    it('user_empty',()=>{
        //arragement
      
        const pass ='secret_sauce'

        //action
      
        cy.get('[data-test="password"]').type(pass)
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username is required')

    })

    it('pass_empty',()=>{
        //arragement
      
        //const pass ='secret_sauce'
        const user1 = 'standard_user'

        //action
      
        cy.get('[data-test="username"]').type(user1)
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Password is required')

    })


})

