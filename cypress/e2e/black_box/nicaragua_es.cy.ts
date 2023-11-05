import 'cypress-xpath';

describe('Nicaragua - Español', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        cy.visit('https://www.pricesmart.com/site/es/seleccionar-pais');
        // Seleccion de pais
        cy.xpath('/html/body/section/section/section[1]/div/div[5]/div/div/div[1]/div/ul/li[5]/a/div[2]').then(element => {
            if (Cypress.$(element).text().includes('Nicaragua')) {
                cy.wrap(element).click();
            } else {
                cy.xpath('/html/body/section/section/section[1]/div/div[5]/div/div/div[1]/div/ul/li[4]/a').click();
            }
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
            cy.wait(200);
        });
    });
    afterEach(function () {
        //Continuar comprando
        cy.xpath('/html/body/section/section/div/div/div[2]/div[1]/div/div/div/div/div/div/a/p/u').click().then(function (){
            cy.wait(200);
        })
        // Verifica que el valor numerico del carrito sea 0
        cy.get('section nav section div div div:nth-child(5) ul li div div span').should('contain', '0');
        cy.reload();
    });
    it('Caso de Prueba #19', function(){
        //Cierra la ventana de cambio de sede
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[1]/button').wait(200).click().then(function (){
            cy.wait(300);
        });;
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz')
        //Seleccion arroz tio pelón
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[6]').click()
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click()
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click()
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click()
        //Selecciona Masaya
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #20', function(){
        //Cambia de Managua a Masaya
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click()
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz')
        //Seleccion arroz tio pelón
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[6]').click()
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click()
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click()
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click()
        //Selecciona Managua
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div[1]/button').click()
    });
});