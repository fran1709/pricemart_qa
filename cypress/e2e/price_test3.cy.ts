import 'cypress-xpath';

describe('Panamá - Español', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        cy.visit('https://www.pricesmart.com/site/es/seleccionar-pais');
         
        //Vista seleccionar Pais.
        cy.xpath('/html/body/section/section/section[1]/div/div[5]/div/div/div[1]/div/ul/li[5]/a').click().then(function () {            
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
    
    it('Caso de prueba #51', function () {
        //Cierra la ventana de cambio de sede, por defecto esta en Vía Brasil
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[1]/button').wait(200).click().then(function (){
            cy.wait(300);
        });;
        
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div/span/input').type('arroz').then(function (){
            cy.wait(200);
        });;
        //Seleccion arroz arrosísimo
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[7]').click().then(function (){
            //cy.wait(200);
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
        //Selecciona Escazu
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click().then(function (){
            cy.wait(200);
        })
        
    }); 
    it('Caso de Prueba #52', function(){
        //Cambia de Vía Brasil a El Dorado 
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz arrosísimo
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[7]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona David
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
    it('Caso de Prueba #53', function(){
        //Cambia de Vía Brasil a David
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[3]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz arrosísimo
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[7]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona Brisas
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[4]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
    it('Caso de Prueba #54', function(){
        //Cambia de Vía Brasil a Brisas
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[4]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz arrosísimo
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[7]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona Costa Verde
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[5]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
    it('Caso de Prueba #55', function(){
        //Cambia de Vía Brasil a Costa Verde
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[5]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz arrosísimo
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[7]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona Santiago de Veraguas
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[6]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
    it('Caso de Prueba #56', function(){
        //Cambia de Vía Brasil a Santiago de Veraguas
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[6]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz arrosísimo
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[7]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona Metro Park
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[7]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
    it('Caso de Prueba #55', function(){
        //Cambia de Vía Brasil a Metro Park
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[7]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz arrosísimo
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[7]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona Vía Brasil
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
    
   
});

describe('Honduras - Inglés', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        cy.visit('https://www.pricesmart.com/site/en/country-picker');         
        //Vista seleccionar Pais.
        cy.xpath('/html/body/section/section/section[1]/div/div[5]/div/div/div[1]/div/ul/li[3]/a').click().then(function () {            
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
    
    it('Caso de prueba #58', function () {
        //Cierra la ventana de cambio de sede, por defecto esta en Florencia
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[1]/button').wait(200).click().then(function (){
            cy.wait(300);
        });;
        
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div/span/input').type('arroz').then(function (){
            cy.wait(200);
        });;
        //Seleccion arroz progreso
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[6]').click().then(function (){
            //cy.wait(200);
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
        //Selecciona San Pedro Sula
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click().then(function (){
            cy.wait(200);
        })
        
    }); 
    it('Caso de Prueba #59', function(){
        //Cambia de Florencia a San Pedro Sula
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz progreso
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[6]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona El Sauce
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
    it('Caso de Prueba #60', function(){
        //Cambia de Florencia a El Sauce
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[3]/div[1]/div[3]/div[1]/button').click().then(function () {
            //cy.wait(200);
        });
        //Selecciona el input txt y Escribe arroz en el input
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[1]/span/input').type('arroz').then(function (){
            //cy.wait(200);
        });;
        //Seleccion arroz progreso
        cy.xpath('/html/body/section/section/nav/section/div/div/div[3]/div/div/form/div[2]/ul/li[6]').click().then(function (){
            //cy.wait(200);
        });
        //Añade al carrito el arroz
        cy.xpath('/html/body/section/section/section[2]/div/section/section[2]/div/div[3]/div[2]/div[6]/div[2]/div/div[2]/div/form/input[10]').click().then(function() {
            //cy.wait(300);
        });
        //Selecciona cambiar de club
        cy.get('button[id="clubLocationHeader"]').click().then(function () {
           // cy.wait(200);
        });
        //Seleccion continuar
        cy.xpath('/html/body/form/div/div/div/div/div[1]/div/div[2]/div/div/a[1]').click().then(function (){
           // cy.wait(200);
        })
        //Selecciona Florencia
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div[1]/button').click().then(function (){
           // cy.wait(200);
        })
    });
});