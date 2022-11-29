describe ('Login test', ()=>{
    it('login succesfully',()=>{
        cy.visit('/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

    })

})