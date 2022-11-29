

 const userInput = ()=>{
    return cy.get('[data-test="username"]')
    
}


const passInput = ()=>{
    return cy.get('[data-test="password"]')
    
}

const submit = ()=>{
    return cy.get('[data-test="login-button"]')
    
}

const checkMessage =(message)=>{
    cy.get('.error-message-container').should('have.text', message)

}

export default {
    userInput,
    passInput,
    submit,
    checkMessage
}