function calcularResultados(resultadosDiv) {
  var nome = document.getElementById("nome").value;
  var sexo = document.getElementById("sexo").value;
  var idade = parseFloat(document.getElementById("idade").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value) / 100;
  var supino = parseFloat(document.getElementById("supino").value);
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
    var classificacaoFlexibilidade = calcularFlexibilidade(sexo, flexibilidade);
    html += `<p>Teste de Flexibilidade: ${flexibilidade} cm (${classificacaoFlexibilidade})</p>`;
  }

  if (!isNaN(distanciaVO2)) {
    var resultadoVO2 = calcularVO2Maximo(idade, distanciaVO2, sexo);
    html += `<p>Teste de VO2 Máximo: ${resultadoVO2.vo2Max.toFixed(
      2
    )} mL/kg/min (${resultadoVO2.classificacao})</p>`;
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
    } else if (idade >= 31 && idade <= 49) {
      classificacao = classificarPorFaixa(distancia, 60, 50, 40);
    } else if (idade >= 50 && idade <= 59) {
      classificacao = classificarPorFaixa(distancia, 50, 40, 30);
    } else if (idade >= 60 && idade <= 69) {
      classificacao = classificarPorFaixa(distancia, 40, 30, 20);
    } else if (idade >= 70 && idade <= 79) {
      classificacao = classificarPorFaixa(distancia, 30, 20, 10);
    } else if (idade >= 80) {
      classificacao = classificarPorFaixa(distancia, 20, 15, 10);
    }
  } else if (sexo === "feminino") {
    if (idade >= 18 && idade <= 30) {
      classificacao = classificarPorFaixa(distancia, 60, 50, 40);
    } else if (idade >= 31 && idade <= 49) {
      classificacao = classificarPorFaixa(distancia, 50, 40, 30);
    } else if (idade >= 50 && idade <= 59) {
      classificacao = classificarPorFaixa(distancia, 40, 30, 20);
    } else if (idade >= 60 && idade <= 69) {
      classificacao = classificarPorFaixa(distancia, 30, 20, 10);
    } else if (idade >= 70 && idade <= 79) {
      classificacao = classificarPorFaixa(distancia, 20, 15, 10);
    } else if (idade >= 80) {
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

function classificarPorFaixa(valor, excelente, bom, medio) {
  if (valor > excelente) {
    return "Excelente";
  } else if (valor >= bom && valor <= excelente) {
    return "Bom";
  } else if (valor >= medio && valor < bom) {
    return "Médio";
  } else {
    return "Ruim";
  }
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

function calcularFlexibilidade(sexo, alcance) {
  var classificacao = "";

  if (sexo === "masculino") {
    if (alcance < 20) {
      classificacao = "Muito Ruim";
    } else if (alcance >= 20 && alcance <= 29) {
      classificacao = "Ruim";
    } else if (alcance >= 30 && alcance <= 39) {
      classificacao = "Médio";
    } else if (alcance >= 40 && alcance <= 49) {
      classificacao = "Bom";
    } else if (alcance > 50) {
      classificacao = "Excelente";
    }
  } else if (sexo === "feminino") {
    if (alcance < 25) {
      classificacao = "Muito Ruim";
    } else if (alcance >= 25 && alcance <= 34) {
      classificacao = "Ruim";
    } else if (alcance >= 35 && alcance <= 44) {
      classificacao = "Médio";
    } else if (alcance >= 45 && alcance <= 54) {
      classificacao = "Bom";
    } else if (alcance > 55) {
      classificacao = "Excelente";
    }
  }
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

function gerarResultados() {
  var resultadosDiv = document.createElement("div");
  calcularResultados(resultadosDiv);

  var modal = document.getElementById("modal");
  modal.style.display = "block";

  document.getElementById("resultados").innerHTML = resultadosDiv.innerHTML;

  document.getElementById("baixarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    html2canvas(document.getElementById("resultados"))
      .then(function (canvas) {
        const pdf = new jsPDF();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 10;

        // Adicionar logo
        const logo = new Image();
        logo.src = "logo.jpeg";
        logo.onload = function () {
          const logoWidth = 50;
          const logoHeight = (logo.height / logo.width) * logoWidth;
          pdf.addImage(logo, "JPEG", margin, margin, logoWidth, logoHeight);

          // Adicionar conteúdo paginado
          const imgData = canvas.toDataURL("image/png");
          const imgWidth = pageWidth - margin * 2;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          let yPosition = logoHeight + margin * 2; // Começar abaixo do logo
          let remainingHeight = imgHeight;

          while (remainingHeight > 0) {
            const heightToDraw = Math.min(
              pageHeight - yPosition - margin,
              remainingHeight
            );

            pdf.addImage(
              imgData,
              "PNG",
              margin,
              yPosition,
              imgWidth,
              heightToDraw,
              0,
              canvas.height - remainingHeight // Posição da imagem para recortar
            );

            remainingHeight -= heightToDraw;

            if (remainingHeight > 0) {
              pdf.addPage();
              yPosition = margin; // Resetar posição para nova página
            }
          }

          pdf.save("resultados.pdf");
        };
      })
      .catch(function (error) {
        console.error("Erro ao gerar o PDF:", error);
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
