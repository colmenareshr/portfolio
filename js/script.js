function validarEmail(e) {
   let field = e.target;
   let fieldValue = field.value;
   if(fieldValue.search('@') == -1){
      displayError('Upss, parece que el email no es válido', field);
   }else {
      clearError(field);
   } 
}
function validateNotEmpty(e) {
   let field = e.target;
   let fieldValue = field.value;
   if(fieldValue = ''){
      displayError('Upss, campor nao pode ser vazio', field);
   }else {
      clearError(field);
   }
}

function mostrarError(mensaje, field) {
      clearError(field)
      field.classList.add('is-invalid');
}


document.querySelectorAll('input').forEach(el => el.classList.add('not-validated'));
document.querySelectorAll('input.email').forEach(el => el.addEventListener('keyup', validarEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener('keyup', validateNotEmpty));