const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');



const expresiones = {
   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   telefono: /^\d{7,14}$/,


}

const campos = {
	nombre: false,
	email: false,
	telefono: false,

}



const validaForm = (e) => { 
    switch (e.target.name) {
      case "nombre":
         validarCampo(expresiones.nombre, e.target, 'nombre')
         
      break;
      case "email":
         validarCampo(expresiones.email, e.target, 'email');
      
      break;
      case "telefono":
         validarCampo(expresiones.telefono, e.target, 'telefono');
    }
}

const validarCampo = (expresion, input, campo) => {
   if(expresion.test(input.value)){
            document.getElementById(`campo_${campo}`).classList.add('contato_items')
            document.getElementById(`campo_${campo}`).classList.remove('contato_items_incorrecto')
            document.getElementById(`error_${campo}`).classList.add('input_correcto');
            document.getElementById(`error_${campo}`).classList.remove('mensaje_error');
            campos[campo] = true;
         }else{
            document.getElementById(`campo_${campo}`).classList.remove('contato_items')
            document.getElementById(`campo_${campo}`).classList.add('contato_items_incorrecto')
            document.getElementById(`error_${campo}`).classList.remove('input_correcto');
            document.getElementById(`error_${campo}`).classList.add('mensaje_error');
            campos[campo] = false;
         }
}



inputs.forEach((input)=>{
   input.addEventListener('keyup', validaForm );
   input.addEventListener('blur', validaForm );
});

formulario.addEventListener('submit', (e)=>{
   e.preventDefault();

   if(campos.nombre && campos.email && campos.telefono){
      formulario.reset();
   
      
      document.getElementById('mensaje_exito').classList.add('mensaje_exito-activo');
      setTimeout(()=>{
         document.getElementById('mensaje_exito').classList.remove('mensaje_exito-activo')
      },5000);
   }else{
      document.getElementById('error_btn').classList.add('campo_mensaje_error');
      setTimeout(()=>{
         document.getElementById('error_btn').classList.remove('campo_mensaje_error')
      },5000);
   }
});
