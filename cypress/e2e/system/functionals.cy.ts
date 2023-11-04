describe('Costa Rica - Español', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        
    });

    afterEach(function () {
        cy.reload();
    });

    it('Compra membresia en español', () => {

        // Verificar si la página contiene el texto "Renovar"
        cy.visit('https://www.pricesmart.com/site/cr/es/membrecia?changeLanguage=true');
        cy.get('#membershipRenew-cta > button').should('be.visible').contains('Renovar');
    })

    it('Beneficios membresia en español', () => {

        // Verificar si la página contiene el texto "Membrecía"
        cy.visit('https://www.pricesmart.com/site/cr/es/beneficios-membrecia');
        cy.get('#home > div > div:nth-child(5) > div > div > div:nth-child(1) > div > div.banner-cont-body.col-12.col-lg-6.px-0.d-flex > h2')
        .should('be.visible').contains('Membrecía');
    })


    it('Carrito en español', () => {

        // Verificar si la página contiene el texto "CONTINUAR COMPRANDO"
        cy.visit('https://www.pricesmart.com/site/cr/es/carrito');
        cy.get('#home > div > div > div:nth-child(2) > div.row > div > div > div > div > div > div > h3')
        .should('be.visible').contains('CONTINUAR COMPRANDO');
    })
});
