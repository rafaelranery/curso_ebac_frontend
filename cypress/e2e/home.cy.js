/// <reference types="cypress" />

describe('Tests for home page', () => {
    beforeEach(() => {
        cy.visit('https://phone-book-react.vercel.app/')
    })
    afterEach(() => {
        cy.screenshot()
    })

    it('Should render correctly', () => {
        cy.get('.sc-kFuwaP > li').should('have.length', 6)
    })
    it('Should edit a contact', () => {
        cy.get('.sc-fsQiph.aQCpL').first().click()
        cy.get('.sc-kFuwaP input[type="text"]').first().clear().type('Editing name test')
        cy.get('input[type="email"]').first().clear().type('Editingemail@test')
        cy.get('input[type="tel"]').first().clear().type('Editing telephone test')
        cy.get('.sc-qRumB').first().click()

        cy.get('.sc-kFuwaP input[type="text"]').first().should('contain.value', 'Editing name test')
        cy.get('.sc-kFuwaP input[type="email"]').first().should('contain.value', 'Editingemail@test')
        cy.get('.sc-kFuwaP input[type="tel"]').first().should('contain.value', 'Editing telephone test')
    })
    it('Should not left an edited contacts field in blank', () => {
        cy.get('.sc-fsQiph.aQCpL').first().click()
        cy.get('.sc-kFuwaP input[type="text"]').first().clear()
        cy.get('.sc-qRumB').first().click()
        cy.on('window:alert', (a) => {
            expect(a).contain('You cannot assign a edited contact field as "black"')
        })
    })
    it('Should remove a contact from the list', () => {
        cy.get('.sc-iAEyYk').first().click()
        cy.get('.sc-kFuwaP > li').should('have.length', 5)
    })
    
})