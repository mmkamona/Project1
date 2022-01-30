//identifying cypress 
/// <reference types="cypress" />

//create test case function
describe('signup without ticking the agree box', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa3@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa3@candidate.manatal.com')
        cy.get('#password').type('Test@Pass123')
        cy.get('.vti__input').type('+971585220877')

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})