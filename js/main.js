var api = AIzaSyADRjgYqBMCQPX9NAMLocWzOcl4RI5sww0;

function initMap() {
  var latLng = {
      lat: 20.6772885,
      lng: -103.3856328
  }
    var map = new google.maps.Map(document.getElementById('mapa'), {
    'center': latLng,
    'zoom': 14
  });
}


(function(){
    "use strict";//para que javascript se ejecute en modo estricto
    //para cuando se cargue el documento se dispare todo el codigo que se va a poner dentro
    
    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded',function(){
        // campos datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //Botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');
        
        //Extras
        var camisas = document.getElementById('camisa_evento'); 
        var etiquetas = document.getElementById('etiquetas'); 

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur',mostrarDias);
        pase_completo.addEventListener('blur',mostrarDias);

        nombre.addEventListener('blur',validarCampos);
        apellido.addEventListener('blur',validarCampos);
        email.addEventListener('blur',validarCampos);
        email.addEventListener('blur',validarMail);

        function validarCampos(){
            if(this.value == ''){
                errorDiv.style.display='block';
                errorDiv.innerHTML="este campo es obligatorio";
                this.style.border = "1px solid red";
                errorDiv.style.border = '1px solid red';
            }else{
                errorDiv.style.display = "none";
                this.style.border = "1px solid #ccc";
            }
        }
        function validarMail(){
            if(this.value.indexOf("@")> -1){
                errorDiv.style.display = "none";
                this.style.border = "1px solid #ccc";
            }else{
                errorDiv.style.display='block';
                errorDiv.innerHTML="No es un correo electrónico, por favor verificar su Email";
                this.style.border = "1px solid red";
                errorDiv.style.border = '1px solid red';
            }
        }

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }else{
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2dias = parseInt(pase_dosdias.value,10) || 0,
                    boletoCompleto = parseInt(pase_completo.value,10) || 0,
                    cantCamisas = parseInt(camisas.value,10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value,10) || 0;

                var totalPagar = (boletosDia * 30) + (boletos2dias * 45) + (boletoCompleto * 50) + ((cantCamisas*10)* .93) + (cantEtiquetas * 2);

                var listadoProductos = [];
                if(boletosDia >= 1){
                    listadoProductos.push(boletosDia + ' Pases por día');
                }
                if(boletos2dias >= 1){
                    listadoProductos.push(boletos2dias + ' Pases por  2 días');
                }
                if(boletoCompleto >= 1){
                    listadoProductos.push(boletoCompleto + ' Pases completos');
                }
                if(cantCamisas >= 1){
                    listadoProductos.push(cantCamisas + ' Camisas');
                }
                if(cantEtiquetas >= 1){
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }
                
                lista_productos.style.display="block";
                lista_productos.innerHTML = ''; //un vacio para que no vuelva a imprimir todo
                for (var i=0; i<listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }
                suma.innerHTML =  "$ "+ totalPagar.toFixed(2);
            }
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
            boletos2dias = parseInt(pase_dosdias.value,10) || 0,
            boletoCompleto = parseInt(pase_completo.value,10) || 0;

            var diasElegidos = [];

            if(boletosDia > 0){
                diasElegidos.push('viernes');
            }
            if(boletos2dias > 0){
                diasElegidos.push('viernes','sabado');
            }
            if(boletoCompleto>0){
                diasElegidos.push('viernes','sabado','domingo');
            }
            for(var i = 0; i<diasElegidos.length;i++){
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
        }
    });// DOM CONTENT LOADED
})();