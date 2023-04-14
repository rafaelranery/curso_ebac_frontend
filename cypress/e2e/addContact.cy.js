/// <reference types="cypress" /> 

describe('Test for the Contact Add page', () => {
    beforeEach(() => {
        cy.visit('https://phone-book-react.vercel.app/')
        cy.get('.sc-beqWaB').click()
    })
    afterEach(() => {
        cy.screenshot()
    })

    it('Should navegate to the Contact Add page', () => {
        cy.get('.sc-beqWaB').first().should('contain.text', 'Return')
    })
    it('Should add contact', () => {
        cy.get('#name').type('Editing name test')
        cy.get('#email').type('editing@email.test')
        cy.get('#telephone').type('Editing telephone test')
        cy.get('.sc-beqWaB.sc-ktEKTO.elpBtX.kMtWNY').click()

        cy.get('.sc-kFuwaP > li').should('have.length', 7)
        cy.get('.sc-kFuwaP input[type="text"]').last().should('contain.value', 'Editing name test')
        cy.get('.sc-kFuwaP input[type="email"]').last().should('contain.value', 'editing@email.test')
        cy.get('.sc-kFuwaP input[type="tel"]').last().should('contain.value', 'Editing telephone test')
    })
    it('Should not add a contact with no name', () => {
        cy.get('.sc-beqWaB.sc-ktEKTO.elpBtX.kMtWNY').click()

        cy.on('window:alert', (a) => {
            expect(a).contain('Please, complete de "Name" field to add a contact.')
        })
    })
})