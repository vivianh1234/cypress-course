describe('Automation Practice Checkout', () => {
    before(() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.url().should('contain', 'index.php')
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
    })

    it('signs into account', () => {
        cy.get('a').contains('Sign in').click()
        cy.url().should('contain', 'authentication')

        cy.fixture('user').then(user => {
            let email = user.email
            let password = user.password

            cy.get('#email').as('email')
            cy.get('@email').clear()
            cy.get('@email').type(email)

            cy.get('#passwd').as('password')
            cy.get('@password').clear()
            cy.get('@password').type(password)
        })

        cy.get('#SubmitLogin').click()
        cy.url().should('contain', 'my-account')

    })

    it('adds t-shirt to cart', () => {
        cy.get('a').contains('T-shirts').click({force: true})
        cy.title().should('include', 'T-shirts - My Store')
        cy.get('h1').should('contain', 'T-shirts')

        cy.get('a').contains('Add to cart').click()
        cy.waitFor(5000) //wait for modal to pop up
        cy.get('#layer_cart').should('be.visible')
        cy.get('a').contains('Proceed to checkout').click()
        cy.url().should('contain', 'order')
    })

    it('proceeds through checkout', () => {
        cy.get('.standard-checkout').click()
        cy.url().should('contain', 'step=1')

        cy.get('button').contains('Proceed to checkout').as('checkout_button')
        // cy.get('button').contains('Proceed to checkout').click()
        cy.get('@checkout_button').click()

        cy.get('#cgv').check()
        // cy.get('button').contains('Proceed to checkout').click()
        cy.get('@checkout_button').click()
        cy.get('#total_price').invoke('text').should(($price) => {
            cy.log($price)
        })
    })
})