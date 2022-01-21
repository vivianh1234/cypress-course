describe('Write/read data to JSON/text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', {name: "Mike", age: 25})
    })

    it('should write data into text file', () => {
        cy.writeFile('log.txt', 'hello world')
    })

    it('should read and verify data from a JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 25)
    })

    it('should read and verify data from a text file', () => {
        cy.readFile('log.txt').should('eq', 'hello world')
    })

    it('should read and verify browser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})