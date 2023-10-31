describe('Colombia - Español', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport('iphone-x')  
        cy.visit('https://www.pricesmart.com/site/es/seleccionar-pais');
        //Vista seleccionar Pais.
        cy.xpath('/html/body/section/section/section[1]/div/div[5]/div/div/div[5]/div/ul/li/a').click().then(function () {            
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
    it('Caso de Prueba #39', function(){
        //Cambia de Barranquilla a Bucaramanga
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
        //Selecciona Barranquilla
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #40', function(){
        //Cierra la ventana de cambio de sede, por defecto esta en Barranquilla
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
        //Selecciona Cali Canasgordas
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #41', function(){
        //Cambia de Barranquilla a Cali Canasgordas 
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
        //Selecciona Cali Menga
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[4]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #42', function(){
        //Cambia de Barranquilla a Cali Menga
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
        //Selecciona Pereira
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[5]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #43', function(){
        //Cambia de Barranquilla a Pereira
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
        //Selecciona Bogota Salitre
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[6]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #44', function(){
        //Cambia de Barranquilla a Bogota Salitre
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
        //Selecciona Bogota Usaquen
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[9]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #45', function(){
        //Cambia de Barranquilla a Bogota Usaquen
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[9]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Medellin
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[7]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #46', function(){
        //Cambia de Barranquilla a Medellin
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[7]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Chia
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[8]/div[1]/div[3]/div[1]/button').click()
    });
    it('Caso de Prueba #47', function(){
        //Cambia de Barranquilla a Chia
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
        //Selecciona El Poblado
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[10]/div[1]/div[3]/div[1]/button').click()
    });

    it('Caso de Prueba #48', function(){
        //Cambia de Barranquilla a El Poblado
        cy.xpath('/html/body/form/div/div/div/div/div/div/div[2]/div/div[10]/div[1]/div[3]/div[1]/button').click()
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
        //Selecciona Barranquilla
        cy.xpath('/html/body/form/div/div/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div[3]/div[1]/button').click()
    });
});