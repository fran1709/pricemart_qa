import 'cypress-xpath';
describe('Login', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://www.pricesmart.com/site/es/seleccionar-pais');

        //Vista seleccionar Pais.
        cy.xpath('/html/body/section/section/section[1]/div/div[5]/div/div/div[1]/div/ul/li[1]/a/div[1]').click().then(function () {            
            cy.wait(200);
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
        cy.reload();
    });

    it('Caso prueba #1', function () {
        
        //Cambia de Santa Ana a Liberia
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[8]/div[1]/div[3]/div[1]/button').click().then(function () {
            cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            cy.wait(200);
        });;
        //Seleccion arroz tio pelón
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[6]').click().then(function (){
            cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
            cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
            cy.wait(200);
        })
        //Selecciona Zapote
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div[1]/button').click().then(function (){
            cy.wait(200);
        })
        
    });
});