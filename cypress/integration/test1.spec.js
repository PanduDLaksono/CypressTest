/// <reference types="cypress" />

describe('test pertama form layout', () => {
    it('check visit', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    })

    it('di Inline Form', () =>{
        cy.get('[placeholder="Jane Doe"]')
            .type('Pandu Dwi Laksono')
            .should('have.value', 'Pandu Dwi Laksono');
        cy.get('[data-cy="email-pertama"]')
            .type('pandu.d.laksono@gmail.com')
            .should('have.value', 'pandu.d.laksono@gmail.com');
        cy.get('[data-cy="checkbox-pertama"]').click();
    })

    it('di Using The Grid',  () => {
        cy.get('#inputEmail1')
            .type('pandu.d.laksono@gmail.com')
            .should('have.value', 'pandu.d.laksono@gmail.com');
        cy.get('#inputPassword2')
            .type('sisio123')
            .should('have.value', 'sisio123');
    })

    it('di Basic Form', () => {
        cy.get('#exampleInputEmail1')
            .type('pandu.d.laksono@gmail.com')
            .should('have.value', 'pandu.d.laksono@gmail.com');
        cy.get('#exampleInputPassword1')
            .type('sisio123')
            .should('have.value', 'sisio123');
    })

    it('di Form With Labels', () => {
        cy.get('[placeholder="Recipients"]')
            .type('Pandu Dwi Laksono')
            .should('have.value', 'Pandu Dwi Laksono');
        cy.get('[placeholder="Subject"]')
            .type('Test Cypress')
            .should('have.value', 'Test Cypress');
        cy.get('[placeholder="Message"]')
            .type('Test file menggunakan cypress')
            .should('have.value', 'Test file menggunakan cypress');
    })

    it('di Block Form', () => {
        cy.get('#inputFirstName')
            .type('Pandu')
            .should('have.value', 'Pandu');
        cy.get('#inputLastName')
            .type('Laksono')
            .should('have.value', 'Laksono');
        cy.get('#inputEmail')
            .type('pandu.d.laksono@gmail.com')
            .should('have.value', 'pandu.d.laksono@gmail.com');
        cy.get('#inputWebsite')
            .type('https://github.com/PanduDLaksono')
            .should('have.value', 'https://github.com/PanduDLaksono');  
    })
    
    it('di Horizontal Form', () =>{
        cy.get('#inputEmail3')
            .type('pandu.d.laksono@gmail.com')
            .should('have.value', 'pandu.d.laksono@gmail.com');
        cy.get('#inputPassword3')
            .type('sisio123')
            .should('have.value', 'sisio123');
    })
})