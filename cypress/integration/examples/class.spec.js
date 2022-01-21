class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    before(() => {
        //runs before all tests inside describe block
        HomePage.loadHomePage()
    })

    beforeEach(() => {
        //runs before each it block
    })

    after(() => {
        //after all tests are done
        //test cleanup
    })

    afterEach(() => {
        //runs after each it block
    })

    //will skip this it block 
    it.skip('should scroll down and up on the page 1', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    //will only run this it block
    it.only('should scroll down and up on the page 2', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it('should scroll down and up on the page 3', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})