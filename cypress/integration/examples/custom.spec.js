describe('Custom commands', () => {
    it('should login using custom cypress command', () =>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})