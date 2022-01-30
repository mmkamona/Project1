//identifying cypress 
/// <reference types="cypress" />

//create test case function
describe('signup with numbers in name and company fields', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('123')
        cy.get('#organization_name').type('123')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa33@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa33@candidate.manatal.com')
        cy.get('#password').type('Test@Pass123')
        cy.get('.vti__input').type('+971585220877')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

        cy.get(':nth-child(3) > div > :nth-child(1) > a').click()
        cy.get('#name').click()
            .should('contain', 'name')

    })
})