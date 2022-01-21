describe('Cypress.$ function', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    })
})