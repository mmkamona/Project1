//identifying cypress 
/// <reference types="cypress" />

//create test case function 1.1
describe('signup with correct info', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa40@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa40@candidate.manatal.com')
        cy.get('#password').type('Test@Pass123')
        cy.get('.vti__input').type('+971585220877')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})

//create test case function 1.2
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

//create test case function 1.3
describe('signup with an exisiting email', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa19@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa19@candidate.manatal.com')
        cy.get('#password').type('Test@Pass123')
        cy.get('.vti__input').type('+971585220877')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})

//create test case function 1.4
describe('signup without setting a password', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa19@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa19@candidate.manatal.com')
        cy.get('.vti__input').type('+971585220877')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})

//create test case function 1.5
describe('signup with an invalid email', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa@invalid')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa@invalid')
        cy.get('#password').type('Test@Pass123')
        cy.get('.vti__input').type('+971585220877')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})

//create test case function 1.6
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

//create test case function 1.7
describe('signup with an incorrect phone number', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa36@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa36@candidate.manatal.com')
        cy.get('#password').type('Test@Pass123')
        cy.get('.vti__input').type('+97155')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})

//create test case function 1.8
describe('signup without entering a phone number', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa41@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa41@candidate.manatal.com')
        cy.get('#password').type('Test@Pass123')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})

//create test case function 1.9
describe('signup using characters in the phone number field', () => {
    it('signup test', function () {

        //access the form link
        cy.visit('https://jb-app-frontend-staging.herokuapp.com/signup/')

        //enter test data
        cy.get('#name').type('Mohamed Mostafa')
        cy.get('#organization_name').type('Manatal')
        cy.get('#company').click()
        cy.get('#company_email_address').type('mohamed.mostafa35@candidate.manatal.com')
        cy.get('#confirm_company_email_address').type('mohamed.mostafa35@candidate.manatal.com')
        cy.get('#password').type('Test@Pass123')
        cy.get('.vti__input').type('abc')

        //agree to policy
        cy.get('#agree').check()

        //submit data and signup
        cy.get('.signup-material-button-contained').click()

    })
})