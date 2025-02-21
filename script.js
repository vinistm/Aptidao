function calcularResultados(resultadosDiv) {
  var nome = document.getElementById("nome").value;
  var sexo = document.getElementById("sexo").value;
  var idade = parseFloat(document.getElementById("idade").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value) / 100;
  var supino = parseFloat(document.getElementById("supino").value);
  var agachamento = parseFloat(document.getElementById("agachamento").value);
  var saltoVertical = parseFloat(
    document.getElementById("saltoVertical").value
  );
  var equilibrioD = parseFloat(document.getElementById("equilibrioD").value);
  var equilibrioE = parseFloat(document.getElementById("equilibrioE").value);
  var distanciaVO2 = parseFloat(document.getElementById("distanciaVO2").value);
  var flexibilidade = parseFloat(
    document.getElementById("flexibilidade").value
  );
  var cintura = parseFloat(document.getElementById("cintura").value);
  var sentarLevantar = parseFloat(
    document.getElementById("sentarLevantar").value
  );
  var flexaoCotovelo = parseFloat(
    document.getElementById("flexaoCotovelo").value
  );
  var levantarContornar = parseFloat(
    document.getElementById("levantarContornar").value
  );
  var caminhada6Minutos = parseFloat(
    document.getElementById("caminhada6Minutos").value
  );

  var html = `<h2>Resultados para ${nome}:</h2>`;

  if (!isNaN(peso) && !isNaN(altura)) {
    var imc = peso / (altura * altura);
    var classificacaoIMC = classificarIMC(imc);
    html += `<p>IMC: ${imc.toFixed(2)} (${classificacaoIMC})</p>`;
  }

  if (!isNaN(cintura)) {
    var classificacaoCintura = calcularCinturaAbdominal(sexo, cintura);
    html += `<p>Circunferência Abdominal: ${cintura} cm (${classificacaoCintura})</p>`;
  }

  if (!isNaN(supino)) {
    var resultadoSupino = calcularSupino(idade, peso, supino, sexo);
    html += `<p>Teste de Supino: ${resultadoSupino.percentual}% (${resultadoSupino.classificacao})</p>`;
  }

  if (!isNaN(sentarLevantar)) {
    var classificacaoSentarLevantar = calcularSentarLevantar(
      idade,
      sentarLevantar,
      sexo
    );
    html += `<p>Teste de Sentar e Levantar: ${sentarLevantar} movimentos (${classificacaoSentarLevantar})</p>`;
  }

  if (!isNaN(saltoVertical)) {
    var classificacaoSalto = calcularSaltoVertical(idade, saltoVertical, sexo);
    html += `<p>Teste de Salto Vertical: ${saltoVertical} cm (${classificacaoSalto})</p>`;
  }

  if (!isNaN(equilibrioD)) {
    var classificacaoEquilibrioD = calcularEquilibrioD(equilibrioD);
    html += `<p>Teste de Equilíbrio Perna Direita: ${equilibrioD} segundos (${classificacaoEquilibrioD})</p>`;
  }

  if (!isNaN(equilibrioE)) {
    var classificacaoEquilibrioE = calcularEquilibrioE(equilibrioE);
    html += `<p>Teste de Equilíbrio Perna Esquerda: ${equilibrioE} segundos (${classificacaoEquilibrioE})</p>`;
  }

  if (!isNaN(flexibilidade)) {
    var classificacaoFlexibilidade = calcularFlexibilidade(
      idade,
      sexo,
      flexibilidade
    ); // Adicione a idade aqui
    html += `<p>Teste de Flexibilidade: ${flexibilidade} cm (${classificacaoFlexibilidade})</p>`;
  }
  if (!isNaN(distanciaVO2)) {
    var resultadoVO2 = calcularVO2Maximo(idade, distanciaVO2, sexo);
    html += `<p>Teste de VO2 Máximo: ${resultadoVO2.vo2Max.toFixed(
      2
    )} mL/kg/min (${resultadoVO2.classificacao})</p>`;
  }

  if (!isNaN(flexaoCotovelo)) {
    var classificacaoFlexaoCotovelo = calcularFlexaoCotovelo(
      idade,
      flexaoCotovelo,
      sexo
    );
    html += `<p>Teste de Flexão de Cotovelo: ${flexaoCotovelo} repetições (${classificacaoFlexaoCotovelo})</p>`;
  }
  if (!isNaN(levantarContornar)) {
    var classificacaoLevantarContornar = calcularLevantarContornar(
      idade,
      levantarContornar,
      sexo
    );
    html += `<p>Teste Levantar da Cadeira e Contornar o Cone: ${levantarContornar} segundos (${classificacaoLevantarContornar})</p>`;
  }

  if (!isNaN(caminhada6Minutos)) {
    var classificacaoCaminhada6Minutos = calcularCaminhada6Minutos(
      idade,
      caminhada6Minutos,
      sexo
    );
    html += `<p>Teste de Caminhada de 6 Minutos: ${caminhada6Minutos} metros (${classificacaoCaminhada6Minutos})</p>`;
  }

  if (!isNaN(agachamento)) {
    var resultadoAgachamento = calcularAgachamento(
      idade,
      peso,
      agachamento,
      sexo
    );
    html += `<p>Teste de Agachamento: ${resultadoAgachamento.percentual}% (${resultadoAgachamento.classificacao})</p>`;
  }

  resultadosDiv.innerHTML = html;
}

function classificarIMC(imc) {
  var classificacao = "";

  if (imc < 18.5) {
    classificacao = "Baixo Peso";
  } else if (imc < 25) {
    classificacao = "Normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade Grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade Grau 2";
  } else {
    classificacao = "Obesidade Grau 3";
  }

  return classificacao;
}
function calcularSupino(idade, pesoCorporal, pesoSupino, sexo) {
  var percentualSupino = (pesoSupino / pesoCorporal) * 100;
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      if (percentualSupino < 60) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 80) {
        classificacao = "Ruim";
      } else if (percentualSupino < 100) {
        classificacao = "Médio";
      } else if (percentualSupino < 140) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 31 && idade <= 40) {
      if (percentualSupino < 50) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 70) {
        classificacao = "Ruim";
      } else if (percentualSupino < 90) {
        classificacao = "Médio";
      } else if (percentualSupino < 120) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 41 && idade <= 50) {
      if (percentualSupino < 45) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 65) {
        classificacao = "Ruim";
      } else if (percentualSupino < 80) {
        classificacao = "Médio";
      } else if (percentualSupino < 110) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 51 && idade <= 60) {
      if (percentualSupino < 40) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 55) {
        classificacao = "Ruim";
      } else if (percentualSupino < 70) {
        classificacao = "Médio";
      } else if (percentualSupino < 100) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 61 && idade <= 70) {
      if (percentualSupino < 35) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 50) {
        classificacao = "Ruim";
      } else if (percentualSupino < 65) {
        classificacao = "Médio";
      } else if (percentualSupino < 90) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 80) {
      if (percentualSupino < 30) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 45) {
        classificacao = "Ruim";
      } else if (percentualSupino < 60) {
        classificacao = "Médio";
      } else if (percentualSupino < 80) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      if (percentualSupino < 30) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 50) {
        classificacao = "Ruim";
      } else if (percentualSupino < 60) {
        classificacao = "Médio";
      } else if (percentualSupino < 90) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 31 && idade <= 40) {
      if (percentualSupino < 25) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 45) {
        classificacao = "Ruim";
      } else if (percentualSupino < 55) {
        classificacao = "Médio";
      } else if (percentualSupino < 80) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 41 && idade <= 50) {
      if (percentualSupino < 20) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 40) {
        classificacao = "Ruim";
      } else if (percentualSupino < 50) {
        classificacao = "Médio";
      } else if (percentualSupino < 70) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 51 && idade <= 60) {
      if (percentualSupino < 18) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 35) {
        classificacao = "Ruim";
      } else if (percentualSupino < 45) {
        classificacao = "Médio";
      } else if (percentualSupino < 60) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 61 && idade <= 70) {
      if (percentualSupino < 15) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 30) {
        classificacao = "Ruim";
      } else if (percentualSupino < 40) {
        classificacao = "Médio";
      } else if (percentualSupino < 55) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    } else if (idade >= 80) {
      if (percentualSupino < 12) {
        classificacao = "Muito Ruim";
      } else if (percentualSupino < 25) {
        classificacao = "Ruim";
      } else if (percentualSupino < 35) {
        classificacao = "Médio";
      } else if (percentualSupino < 50) {
        classificacao = "Bom";
      } else {
        classificacao = "Excelente";
      }
    }
  }

  return {
    percentual: percentualSupino.toFixed(2),
    classificacao: classificacao,
  };
}
function calcularSaltoVertical(idade, distancia, sexo) {
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(distancia, 70, 60, 50);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(distancia, 60, 50, 40);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(distancia, 50, 40, 30);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(distancia, 40, 30, 20);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(distancia, 30, 20, 10);
    } else if (idade >= 71) {
      classificacao = classificarPorFaixa(distancia, 20, 15, 10);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(distancia, 60, 50, 40);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(distancia, 50, 40, 30);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(distancia, 40, 30, 20);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(distancia, 30, 20, 10);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(distancia, 20, 15, 10);
    } else if (idade >= 71) {
      classificacao = classificarPorFaixa(distancia, 15, 10, 5);
    }
  }

  return classificacao;
}
function calcularSentarLevantar(idade, movimentos, sexo) {
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 39) {
      classificacao = classificarPorFaixa(movimentos, 33, 27, 20);
    } else if (idade >= 40 && idade <= 49) {
      classificacao = classificarPorFaixa(movimentos, 28, 22, 16);
    } else if (idade >= 50 && idade <= 59) {
      classificacao = classificarPorFaixa(movimentos, 24, 19, 14);
    } else if (idade >= 60 && idade <= 69) {
      classificacao = classificarPorFaixa(movimentos, 22, 17, 12);
    } else if (idade >= 70 && idade <= 79) {
      classificacao = classificarPorFaixa(movimentos, 19, 14, 9);
    } else if (idade >= 80) {
      classificacao = classificarPorFaixa(movimentos, 15, 10, 5);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 39) {
      classificacao = classificarPorFaixa(movimentos, 30, 25, 18);
    } else if (idade >= 40 && idade <= 49) {
      classificacao = classificarPorFaixa(movimentos, 27, 20, 15);
    } else if (idade >= 50 && idade <= 59) {
      classificacao = classificarPorFaixa(movimentos, 23, 17, 12);
    } else if (idade >= 60 && idade <= 69) {
      classificacao = classificarPorFaixa(movimentos, 20, 15, 10);
    } else if (idade >= 70 && idade <= 79) {
      classificacao = classificarPorFaixa(movimentos, 18, 12, 8);
    } else if (idade >= 80) {
      classificacao = classificarPorFaixa(movimentos, 14, 8, 5);
    }
  }

  return classificacao;
}

function calcularEquilibrioD(tempo) {
  if (tempo > 30) {
    return "Excelente";
  } else if (tempo >= 15 && tempo <= 29) {
    return "Médio";
  } else {
    return "Fraco";
  }
}

function calcularEquilibrioE(tempo) {
  if (tempo > 30) {
    return "Excelente";
  } else if (tempo >= 15 && tempo <= 29) {
    return "Médio";
  } else {
    return "Fraco";
  }
}

function calcularVO2Maximo(idade, distancia, sexo) {
  var vo2Max = (distancia - 504.9) / 44.73;
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(vo2Max, 55, 46, 38, 30);
    } else if (idade >= 31 && idade <= 39) {
      classificacao = classificarPorFaixa(vo2Max, 55, 46, 38, 30);
    } else if (idade >= 40 && idade <= 49) {
      classificacao = classificarPorFaixa(vo2Max, 51, 43, 35, 28);
    } else if (idade >= 50 && idade <= 59) {
      classificacao = classificarPorFaixa(vo2Max, 45, 39, 32, 26);
    } else if (idade >= 60 && idade <= 69) {
      classificacao = classificarPorFaixa(vo2Max, 41, 35, 29, 23);
    } else if (idade >= 70 && idade <= 79) {
      classificacao = classificarPorFaixa(vo2Max, 37, 31, 26, 20);
    } else if (idade >= 80) {
      classificacao = classificarPorFaixa(vo2Max, 32, 27, 22, 18);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(vo2Max, 50, 40, 32, 25);
    } else if (idade >= 31 && idade <= 39) {
      classificacao = classificarPorFaixa(vo2Max, 50, 40, 32, 25);
    } else if (idade >= 40 && idade <= 49) {
      classificacao = classificarPorFaixa(vo2Max, 46, 37, 30, 23);
    } else if (idade >= 50 && idade <= 59) {
      classificacao = classificarPorFaixa(vo2Max, 41, 34, 27, 21);
    } else if (idade >= 60 && idade <= 69) {
      classificacao = classificarPorFaixa(vo2Max, 37, 30, 24, 18);
    } else if (idade >= 70 && idade <= 79) {
      classificacao = classificarPorFaixa(vo2Max, 33, 27, 21, 16);
    } else if (idade >= 80) {
      classificacao = classificarPorFaixa(vo2Max, 29, 24, 19, 14);
    }
  }

  return {
    vo2Max: vo2Max,
    classificacao: classificacao,
  };
}

function calcularFlexibilidade(idade, sexo, alcance) {
  var classificacao = "";
  console.log("Idade:", idade, "Alcance:", alcance, "Sexo:", sexo);
  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(alcance, 27, 17, 6, 0);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(alcance, 25, 15, 5, -5);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(alcance, 23, 13, 3, -7);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(alcance, 20, 11, 1, -10);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(alcance, 17, 8, -2, -12);
    } else {
      classificacao = classificarPorFaixa(alcance, 16, 7, -2, -11);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(alcance, 30, 21, 11, 0);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(alcance, 28, 19, 9, 0);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(alcance, 26, 17, 7, -1);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(alcance, 24, 14, 7, -1);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(alcance, 21, 11, 4, -2);
    } else {
      classificacao = classificarPorFaixa(alcance, 20, 10, 3, -2);
    }
  }
  console.log(classificacao);
  return classificacao;
}
function calcularCinturaAbdominal(sexo, cintura) {
  var classificacao = "";

  if (sexo === "masculino") {
    if (cintura <= 90) {
      classificacao = "Normal";
    } else if (cintura > 90 && cintura < 94) {
      classificacao = "Risco Médio";
    } else if (cintura >= 94 && cintura < 102) {
      classificacao = "Risco Alto";
    } else if (cintura >= 102) {
      classificacao = "Risco Altíssimo";
    }
  } else if (sexo === "feminino") {
    if (cintura <= 80) {
      classificacao = "Normal";
    } else if (cintura > 80 && cintura < 84) {
      classificacao = "Risco Médio";
    } else if (cintura >= 84 && cintura < 88) {
      classificacao = "Risco Alto";
    } else if (cintura >= 88) {
      classificacao = "Risco Altíssimo";
    }
  }

  return classificacao;
}
function calcularFlexaoCotovelo(idade, repeticoes, sexo) {
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(repeticoes, 27, 23, 17, 13);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(repeticoes, 26, 22, 16, 12);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(repeticoes, 25, 21, 15, 11);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(repeticoes, 24, 19, 14, 10);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(repeticoes, 22, 18, 13, 9);
    } else {
      // 71+
      classificacao = classificarPorFaixa(repeticoes, 21, 17, 12, 8);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(repeticoes, 24, 20, 14, 10);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(repeticoes, 23, 19, 13, 9);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(repeticoes, 22, 18, 12, 8);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(repeticoes, 21, 17, 11, 7);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(repeticoes, 19, 15, 10, 6);
    } else {
      // 71+
      classificacao = classificarPorFaixa(repeticoes, 18, 14, 9, 5);
    }
  }

  return classificacao;
}
function calcularLevantarContornar(idade, tempo, sexo) {
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarTempo(tempo, 6, 7, 8, 9);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarTempo(tempo, 7, 8, 9, 10);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarTempo(tempo, 8, 9, 10, 11);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarTempo(tempo, 9, 10, 11, 12);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarTempo(tempo, 10, 11, 12, 13);
    } else {
      // 71+
      classificacao = classificarTempo(tempo, 11, 12, 13, 14);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarTempo(tempo, 7, 8, 9, 10);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarTempo(tempo, 8, 9, 10, 11);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarTempo(tempo, 9, 10, 11, 12);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarTempo(tempo, 10, 11, 12, 13);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarTempo(tempo, 11, 12, 13, 14);
    } else {
      // 71+
      classificacao = classificarTempo(tempo, 12, 13, 14, 15);
    }
  }

  return classificacao;
}
function classificarPorFaixa(valor, excelente, bom, medio, ruim) {
  if (valor > excelente) {
    return "Excelente";
  } else if (valor >= bom && valor <= excelente) {
    return "Bom";
  } else if (valor >= medio && valor < bom) {
    return "Médio";
  } else if (valor < medio && valor >= ruim) {
    return "Ruim";
  } else {
    return "Muito Ruim";
  }
}
function classificarTempo(valor, excelente, bom, medio, ruim) {
  if (valor < excelente) {
    return "Excelente";
  } else if (valor >= excelente && valor < bom) {
    return "Bom";
  } else if (valor >= bom && valor < medio) {
    return "Médio";
  } else if (valor >= medio && valor < ruim) {
    return "Ruim";
  } else {
    return "Muito Ruim";
  }
}
function calcularAgachamento(idade, pesoCorporal, pesoAgachamento, sexo) {
  var percentualAgachamento = (pesoAgachamento / pesoCorporal) * 100;
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        200,
        150,
        120,
        80
      );
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        180,
        135,
        110,
        70
      );
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        160,
        125,
        100,
        60
      );
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        140,
        115,
        90,
        50
      );
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        130,
        100,
        75,
        40
      );
    } else {
      // 71+
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        120,
        90,
        65,
        35
      );
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        150,
        100,
        70,
        40
      );
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        130,
        90,
        60,
        35
      );
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        120,
        80,
        55,
        30
      );
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        100,
        70,
        45,
        25
      );
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        90,
        60,
        40,
        20
      );
    } else {
      // 71+
      classificacao = classificarPorcentagem(
        percentualAgachamento,
        75,
        50,
        30,
        15
      );
    }
  }

  return {
    percentual: percentualAgachamento.toFixed(2),
    classificacao: classificacao,
  };
}

function classificarPorcentagem(valor, excelente, bom, medio, ruim) {
  if (valor > excelente) {
    return "Excelente";
  } else if (valor >= bom && valor <= excelente) {
    return "Bom";
  } else if (valor >= medio && valor < bom) {
    return "Médio";
  } else if (valor >= ruim && valor < medio) {
    return "Ruim";
  } else {
    return "Muito Ruim";
  }
}
function calcularCaminhada6Minutos(idade, distancia, sexo) {
  var classificacao = "";

  if (sexo === "masculino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(distancia, 650, 601, 551, 500);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(distancia, 640, 591, 541, 490);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(distancia, 630, 581, 531, 480);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(distancia, 620, 571, 521, 470);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(distancia, 600, 551, 501, 450);
    } else {
      // 71+
      classificacao = classificarPorFaixa(distancia, 580, 531, 481, 430);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(distancia, 630, 581, 531, 480);
    } else if (idade >= 31 && idade <= 40) {
      classificacao = classificarPorFaixa(distancia, 620, 571, 521, 470);
    } else if (idade >= 41 && idade <= 50) {
      classificacao = classificarPorFaixa(distancia, 610, 561, 511, 460);
    } else if (idade >= 51 && idade <= 60) {
      classificacao = classificarPorFaixa(distancia, 600, 551, 501, 450);
    } else if (idade >= 61 && idade <= 70) {
      classificacao = classificarPorFaixa(distancia, 580, 531, 481, 430);
    } else {
      // 71+
      classificacao = classificarPorFaixa(distancia, 560, 511, 461, 410);
    }
  }

  return classificacao;
}
function gerarResultados() {
  var resultadosDiv = document.createElement("div");
  calcularResultados(resultadosDiv);

  var modal = document.getElementById("modal");
  modal.style.display = "block";

  document.getElementById("resultados").innerHTML = resultadosDiv.innerHTML;

  document.getElementById("baixarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Detectar se é mobile
    const isMobile = window.innerWidth <= 768;
    const margin = 10;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const contentHeight = pageHeight - margin * 2;

    // Ajuste de escala para mobile (reduzindo um pouco mais)
    const scale = isMobile ? 0.75 : 1;

    html2canvas(document.getElementById("resultados"), {
      scale: scale,
    }).then(function (canvas) {
      let imgWidth = pageWidth - margin * 2;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Se a altura da imagem for maior que a página, reduzimos mais a escala
      if (imgHeight > contentHeight) {
        const ratio = contentHeight / imgHeight;
        imgWidth *= ratio;
        imgHeight *= ratio;
      }

      const logo = new Image();
      logo.src = "logo.jpeg";

      logo.onload = function () {
        pdf.addImage(logo, "JPEG", margin, margin, 40, 20); // Logo no topo esquerdo

        // Ajustando o espaço para evitar cortes
        const yPosition = 40; // Começa um pouco abaixo do logo
        const paddingBottom = isMobile ? 10 : 5; // Adiciona um pequeno espaço extra na parte inferior

        pdf.addImage(
          canvas.toDataURL("image/png"),
          "PNG",
          margin,
          yPosition,
          imgWidth,
          imgHeight - paddingBottom
        );

        pdf.save("resultados.pdf");
      };
    });
  });

  var fecharModal = document.getElementsByClassName("fechar-modal")[0];
  fecharModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
