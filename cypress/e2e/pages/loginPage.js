

 const userInput = ()=>{
    return cy.get('[data-test="username"]')
    
}


const passInput = ()=>{
    return cy.get('[data-test="password"]')
    
}

const submit = ()=>{
    return cy.get('[data-test="login-button"]')
    
}

const logout = ()=>{
    cy.get('#logout_sidebar_link').click();
    
}

const checkMessage =(message)=>{
    cy.get('.error-message-container').should('have.text', message)

}

const checkMessage2 =()=>{
    cy.get('#continue').click();

}

//it is not using
const userName =()=>{
    return cy.get('#first-name')
}

export default {
    userInput,
    passInput,
    submit,
    logout,
    checkMessage,
    checkMessage2,
    userName
}