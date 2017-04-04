/*function validateForm(){}*/
	/* Escribe tú código aquí */

  //function validateForm(){
  	/* Escribe tú código aquí */

  var formulario = document.getElementById("formulario");
  var botón = document.getElementById("botón");

  //expresiones para cada input
  var números = /[0-9]/;
  var minúsculas =  /^[a-z]/;
  var arroba = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  validarNombre = function(){
    if(formulario.name.value == 0){
    document.getElementById("span1").innerHTML = "ingrese su nombre";
  }
    else if(números.test(formulario.name.value)){
    document.getElementById("span20").innerHTML = "ingrese solo letras";
    //alert("no ingrese números");
    }
    else{
    }
  };

  validarApellido = function(){
    if(formulario.lastname.value == 0){
      document.getElementById("span2").innerHTML = "ingrese su apellido";
      //alert("ingrese su apellido");

    }
      else if(formulario.lastname.value.toUpperCase(charAt(0))){
        alert("ingrese la primera letra en mayúscula");
      }else{
      }
  };

  validarCorreo = function(){
    if(formulario.correo.value == 0){
    document.getElementById("span3").innerHTML = "ingrese un correo";
      //alert("Ingrese su email");
    }else if(arroba.test(formulario.correo.value)){
    }else{
      document.getElementById("span4").innerHTML = "ingrese un correo válido";
      //alert("escribe un correo válido");
    }
  };

  validarContraseña = function(){

    if(formulario.contraseña.value == 0){
      alert("ingrese su contraseña");
    }
    else if(formulario.contraseña.value.length < 7){
  alert("ingrese una contraseña de 6 digitos como máximo");
    }else if(formulario.contraseña.value == 123456 || formulario.contraseña.value == 098754){
      alert("no es permitido");
  }else{};
  };


  var validar = function(){
  validarNombre();
  validarApellido();
  validarCorreo();
  validarContraseña();
  };

  formulario.addEventListener("submit", validar);
