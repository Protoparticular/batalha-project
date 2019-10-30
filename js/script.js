window.onload = function() {

  var formulario = document.getElementById('formulario');
  var opcaoUsuario = document.getElementById('opcao-usuario');
  var tipoUsuario = opcaoUsuario.options[opcaoUsuario.selectedIndex].value;

  document.getElementById('visor-provisorio').innerHTML = tipoUsuario;

  opcaoUsuario.onchange = function() {

    tipoUsuario = opcaoUsuario.options[opcaoUsuario.selectedIndex].value;
    formulario.action = tipoUsuario + ".html";

  };
}
