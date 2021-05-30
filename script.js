// Aguarda o DOM estar pronto para executar os scripts JQuery
$(document).ready(function(){
  $("#loginAluno").submit(function(event){
    if($("#inputUsuario").val() == "root" && $("#inputSenha").val() == "1234"){
      // Se todas as condições forem verdadeiras executa o bloco de código
      // Adicionamos as classes do bootstrap a DIV mensagem
      $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
      // Remove a classe "alert-warning" caso ela exista
      $("#mensagem").removeClass("alert-warning")
      // apresenta a mensagem para o usuário por 3s
      $("#mensagem").text("Usuário Logado!").show().fadeOut(3000)
    } else {
      // Adiciona classes CSS bootstrap a DIV mensagem
      $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")
      // Remove a classe "alert-success"caso ela exista
      $("#mensagem").removeClass("alert-success")
      // apresenta a mensagem para o usuário por 3s
      $("#mensagem").text("usuário ou senha inválida!").show().fadeOut(3000)
      //bloqueia o evento de submit
      event.preventDefault()
    }
  })
})