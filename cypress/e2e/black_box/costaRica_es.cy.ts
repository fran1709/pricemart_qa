import 'cypress-xpath';

describe('Costa Rica - Español', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        cy.visit('https://www.pricesmart.com/site/es/seleccionar-pais');
         
        
        //Vista seleccionar Pais.
        cy.xpath('/html/body/section/section/section[1]/div/div[5]/div/div/div[1]/div/ul/li[6]/a').click().then(function () {            
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
        //Cambia de Santa Ana a Zapote
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[1]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Escazu
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click()
        
    });
    it('Caso de Prueba #2', function(){
        //Cambia de Santa Ana a Escazu 
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
        //Selecciona Heredia
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #3', function(){
        //Cambia de Santa Ana a Heredia
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[3]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Llorente
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[4]/div[1]/div[3]/div[1]/button').click()
    });

    it('Caso de Prueba #4', function(){
        //Cambia de Santa Ana a Llorente
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[4]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Alajuela
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[5]/div[1]/div[3]/div[1]/button').click()
    });

    it('Caso de Prueba #5', function(){
        //Cambia de Santa Ana a Alajuela
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[5]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Tres Rios
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[6]/div[1]/div[3]/div[1]/button').click()
    });

    it('Caso de Prueba #6', function(){
        //Cambia de Santa Ana a Tres Rios
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[6]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Santa Ana
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[7]/div[1]/div[3]/div[1]/button').click()
    });


    //Hay que revisar este caso, la solucion funciona pero no es lo mas optimo
    it('Caso de Prueba #7', function(){
        //Cierra la ventana de cambio de sede, por defecto esta en Santa Ana
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
        //Selecciona Liberia
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[8]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #8', function(){
        //Cambia de Santa Ana a Liberia
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[8]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Escazu
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div[1]/button').click()
    });
});