describe('Comprobación de idioma', function () {
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

    it('Selección de Clubes en Inglés', () =>{
        // Verificar si la página contiene el texto "Select a preferred club"
        cy.visit('https://www.pricesmart.com/site/cr/es');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').click();
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/ul/li[1]/a').click();
        cy.get('button[id="clubLocationHeader"]').click();
        cy.get('#clubLocationPickerLabel').contains(' Select a preferred club ')
    }); 

    it('Sección de Lo nuevo en Inglés', () => {
        // Verificar si la página contiene el texto "Might find your new favorites"
        cy.visit('https://www.pricesmart.com/site/cr/es');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').click();
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/ul/li[1]/a').click();
        cy.xpath('/html/body/section/section/div/div/div[4]/div/div/div/div/div[5]/a/div/div/div').click();
        cy.get('#hero-banner > div.banner-main-cont.banner-centered.p-3.p-md-5 > section > div > div.banner-cont-body.col-12 > div').contains('Might find your new favorites');
    });

    it('Inicio de sesión en Inglés', () => {
        // Verificar si la página contiene el texto "Sign in to get the most from your membership"
        cy.visit('https://www.pricesmart.com/site/cr/es');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').click();
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/ul/li[1]/a').click();
        cy.get('#dropdownMenuButton > img').click();
        cy.get('#login-button').click();
        cy.get('#marketplace-login-box > p:nth-child(3)').contains('Sign in to get the most from your membership');
    });

    it('Página Principal en Español', () => {
        // Verificar si la página contiene el texto "Explorá Nuestras Categorías Destacadas"
        cy.visit('https://www.pricesmart.com/site/cr/es');
        cy.xpath('/html/body/section/section/div/div/div[3]/div/div/section/div/div[1]/div/div/div/h2').contains('Explorá Nuestras Categorías Destacadas');
    });

    it('Selección de países en Español', () => {
        // Verificar si la página contiene el texto "Con presencia en 13 países y la confianza de millones de personas."
        cy.visit('https://www.pricesmart.com/site/es/seleccionar-pais');
        cy.xpath('/html/body/section/section/section[1]/div/div[3]/p').contains('Con presencia en 13 países y la confianza de millones de personas.');
    });

    it('Productos y Categorías en Español', () => {
        // Verificar si la página contiene el texto "Electrónicos."
        cy.visit('https://www.pricesmart.com/site/cr/es');
        cy.get('.navbar-toggler-icon').click();
        cy.get('#categories-dropdown > .btn').click();
        cy.get('#Electrónicos').contains('Electrónicos');
    });
});

describe('Cambio de idioma disponible en Español', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        
    });

    afterEach(function () {
        cy.reload();
    });

    it('Página Principal', () => {
        cy.visit('https://www.pricesmart.com/site/cr/es');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');
    });

    it('Lo nuevo', () => {
        cy.visit('https://www.pricesmart.com/site/cr/es/lo-nuevo');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');
    });

    it('Selección de países', () => {
        cy.visit('https://www.pricesmart.com/site/es/seleccionar-pais');
        cy.xpath('/html/body/section/section/section[1]/div/div[1]/div/li/div/button').should('be.visible');

    });

    it('Compra de la membresía', () => {
        cy.visit('https://www.pricesmart.com/site/cr/es/membrecia');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');
    });

    it('Beneficios de la membresía', () => {
        cy.visit('https://www.pricesmart.com/site/cr/es/beneficios-membrecia');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');

    });
    
});

describe('Cambio de idioma disponible en Inglés', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        
    });

    afterEach(function () {
        cy.reload();
    });

    it('Página Principal', () => {
        cy.visit('https://www.pricesmart.com/site/cr/en');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');
    });

    it('Lo nuevo', () => {
        cy.visit('https://www.pricesmart.com/site/cr/en/new-arrivals');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');
    });

    it('Selección de países', () => {
        cy.visit('https://www.pricesmart.com/site/en/country-picker');
        cy.xpath('/html/body/section/section/section[1]/div/div[1]/div/li/div/button').should('be.visible');

    });

    it('Compra de la membresía', () => {
        cy.visit('https://www.pricesmart.com/site/cr/en/membership');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');
    });

    it('Beneficios de la membresía', () => {
        cy.visit('https://www.pricesmart.com/site/cr/en/membership-benefits');
        cy.xpath('/html/body/section/section/section[2]/footer/div/div[3]/div/div/div[2]/button').should('be.visible');

    });
});