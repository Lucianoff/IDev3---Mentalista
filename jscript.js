var numeroCerto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas != 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  if (numeroCerto == chute){
    alert("Acertou!!!")
    document.write("<h3>" + numeroCerto + "</h3>")
    break
  }else if (numeroCerto < chute) {
    alert ("O número secreto é menor")
    tentativas = tentativas -1
  }else if (numeroCerto > chute) {
    alert ("O número secreto é maior")
    tentativas = tentativas -1
  }
}if (tentativas == 0) {
  alert ("Errou, O número secreto irá se escrever na página.")
  document.write("<h3>" + numeroCerto + "</h3>")
  }
