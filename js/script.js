//efeito do botão voltar ao Topo
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
//Validação de Login
function login() {
  var logado = 0;
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario == "lucas" && senha == "123456789") {
    window.location = "index.html";
    logado = 1;
  } else logado == 0;
  {
    alert("Dados errados");
  }
}
//Ativar alert no botão cadastrar
