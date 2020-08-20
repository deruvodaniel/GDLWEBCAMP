(function () {
   "use strict";

    var regalo = document.getElementById ('regalo'); 

    
   document.addEventListener ('DOMContentLoaded', function(){


    // var map = L.map('map').setView([-34.612725, -58.360662], 13);

    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);

    //     L.marker([-34.612725, -58.360662]).addTo(map)
    //         .bindPopup('GDLAWEBCAMP 2020<br> Tickets Disponibles')
    //         .openPopup();

    //  Campos Datos Usuario   
    var nombre = document.getElementById ('nombre');
    var apellido = document.getElementById ('apellido');
    var email = document.getElementById ('email');
    
    // Capos Pases

    var pase_dia = document.getElementById ('pase_dia');
    var pase_dosdias = document.getElementById ('pase_dosdias');
    var pase_completo = document.getElementById ('pase_completo');

    // Botones y divs

    var calcular = document.getElementById ('calcular');
    var errorDiv = document.getElementById ('error');
    var botonRegistro = document.getElementById ('btn-registro');
    var listaProductos = document.getElementById ('lista-productos');
    var suma = document.getElementById ('suma-total')

    // Extras

    var etiquetas = document.getElementById ('etiquetas');
    var camisas = document.getElementById ('camisa_evento');

    calcular.addEventListener ('click', calcularMontos);
    pase_dia.addEventListener ('blur', mostrarDias);
    pase_dosdias.addEventListener ('blur', mostrarDias);
    pase_completo.addEventListener ('blur', mostrarDias);
    
    nombre.addEventListener ('blur', validarCampos);
    apellido.addEventListener ('blur', validarCampos);
    email.addEventListener ('blur', validarCampos);
    email.addEventListener ('blur', validarMail);

    function validarCampos() {
        if (this.value == '') {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = "Este campo es obligatorio";
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
        }
        else {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid #cccccc';
        }
        
        
    }

    function validarMail() {
        if (this.value.indexOf("@") > -1){
            errorDiv.style.display = 'none';
            this.style.border = '1px solid #cccccc';
        }
        else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = "Ingrese una dirección valida de E-mail";
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';

        }
    }
        


    function calcularMontos(event) {
        event.preventDefault ();
        console.log('has hecho click en calcular');
        if(regalo.value === '') {
            alert("Debes elegir un regalo");
            regalo.focus ();
        } 
        
        else {

            var boletosDia = parseInt(pase_dia.value, 10)|| 0;
            var boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0;
            var boletoCompleto = parseInt(pase_completo.value, 10)|| 0;
            var cantCamisas = parseInt(camisas.value, 10)|| 0;
            var cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;
            
            var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) +(boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

            var listadoProductos = [];

            if (boletosDia >=1) {
                listadoProductos.push (boletosDia + ' Pases por Día');
            }
            if (boletos2Dias >=1) {
                listadoProductos.push (boletos2Dias + ' Pases por 2 Días');
            }
            if (boletoCompleto >=1) {
                listadoProductos.push (boletoCompleto + ' Pases Completos');  
            }
            if (cantCamisas >=1) {
                listadoProductos.push (cantCamisas + ' Camisas');  
            }
            if (cantEtiquetas >=1) {
                listadoProductos.push (cantEtiquetas + ' Etiquetas');  
            }
            
            listaProductos.style.display = "block";
            listaProductos.innerHTML = '';
            for ( var i = 0; i < listadoProductos.length; i++) {
                listaProductos.innerHTML += listadoProductos[i] + '<br/>';
            }

            suma.innerHTML = "$" + totalPagar.toFixed(2);

        }

    }

    function mostrarDias() {
        var boletosDia = parseInt(pase_dia.value, 10)|| 0;
        var boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0;
        var boletoCompleto = parseInt(pase_completo.value, 10)|| 0;
        
        var diasElegidos = [];
        if (boletosDia > 0) {
            diasElegidos.push('viernes');
        }
        if (boletos2Dias > 0) {
            diasElegidos.push('viernes', 'sabado');
        }
        if (boletoCompleto > 0) {
            diasElegidos.push('viernes', 'sabado', 'domingo');
        }

        for (var i=0; i < diasElegidos.length; i++) {
            document.getElementById(diasElegidos[i]).style.display = "block"; 
        }
    }

   });  //    DOM CONTENT LOADED
})();


$(function(){

    // Lettering
    $('.nombre-sitio').lettering();

    //Menu Fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura + 'px'});
        }
        else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }

    });

    // Programa de Conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });

    // Animaciones para los Números
    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 7200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 7200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 7500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 7500);

    // Cuenta regresiva

    $('.cuenta-regresiva').countdown('2020/12/10 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
});

