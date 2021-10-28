function resposta1(perg) {
    switch (perg) {
        case 1:
            {

                var respRetono = "Ola, bom dia";
                var retorno1 = "Central bom dia, em que posso ajudar?";
                document.getElementById('pergRetorno1').innerText = respRetono;
                document.getElementById('resposta1').innerText = retorno1;
                document.getElementById('pergunta1').className = 'ocultar';
                document.getElementById('pergunta2').className = 'exibir';
                break;
            }
        case 2:
            {
                var respRetono = "Opa";
                var retorno2 = "Central bom dia, em que posso ajudar o senhor?";

                document.getElementById('pergRetorno1').innerText = respRetono;
                document.getElementById('resposta1').innerText = retorno2;
                document.getElementById('pergunta1').className = 'ocultar';
                document.getElementById('pergunta2').className = 'exibir';
                break;
            }
    }
}

function resposta2(perg) {
    switch (perg) {
        case 1:
            {
                var respRetono = "Eu gostaria de cancelar meu plano telefônico.";
                var retorno1 = "entendo, e por qual motivo o senhor deseja cancelar seu plano?"

                document.getElementById('pergRetorno2').innerText = respRetono;
                document.getElementById('resposta2').innerText = retorno1;
                document.getElementById('pergunta2').className = 'ocultar';
                document.getElementById('pergunta3').className = 'exibir';
                break;
            }
        case 2:
            {
                var respRetono = "Eu quero cancelar meu plano porque não aguento mais vocês me ligando";
                var retorno2 = "entendo, mas o senhor vai ficar sem poder utilizar os beneficios do seu plano, mesmo assim deseja cancelar?"

                document.getElementById('pergRetorno2').innerText = respRetono;
                document.getElementById('resposta2').innerText = retorno2;
                document.getElementById('pergunta2').className = 'ocultar';
                document.getElementById('pergunta3').className = 'exibir';
                break;
            }
    }
}

function resposta3(perg) {
    switch (perg) {
        case 1:
            {
                var respRetono = "O plano esta caro, eu tenho poucos benefios e vocês sempre ligam incomodando.";
                var retorno1 = "entendo, eu verifiquei no meu sistema que o senhor é um cliente a muito tempo, esta com a gente a quase dois meses já" +
                    " e seu plano tem bastante internet, estou vendo que o senhor tem direito a 500mb, e muitos minutos pra ligar pra outas operadoras em um total de 15 min, e o Senhor cancelando vai perder todos esses beneficios, você tem certeza?";
                document.getElementById('pergRetorno3').innerText = respRetono;
                document.getElementById('resposta3').innerText = retorno1;
                document.getElementById('pergunta3').className = 'ocultar';
                document.getElementById('pergunta4').className = 'exibir';
                break;
            }
        case 2:
            {
                var respRetono = "Eu quase não uso meu plano, ja tenho outro com outra operadora.";
                var retorno2 = "Entendi, eu vi aqui no meu sistemas que o senhor tem feito uma boa utilização, no ultimo mes falou por 10 min com um numero de outra operadora, e cncelando o senhor entende que vai perder ese e outros beneficios desse plano?";
                document.getElementById('pergRetorno3').innerText = respRetono;
                document.getElementById('resposta3').innerText = retorno2;
                document.getElementById('pergunta3').className = 'ocultar';
                document.getElementById('pergunta4').className = 'exibir';
                break;
            }
    }
}

function resposta4(perg) {
    switch (perg) {
        case 1:
            {
                var respRetono = "Tenho certeza sim.";
                var retorno1 = "Entendo, como o senhor é um cliente a bastante tempo, eu consigo baixar o plano do senhor dando 10% na fatura mensal, o senhor aceitando pode usufruir por 12 meses com a gente em um contrato exclusivo de fidelidade.";
                document.getElementById('pergRetorno4').innerText = respRetono;
                document.getElementById('resposta4').innerText = retorno1;
                document.getElementById('pergunta4').className = 'ocultar';
                document.getElementById('pergunta5').className = 'exibir';
                break;
            }
        case 2:
            {
                var respRetono = "Verdade, parece que tenho muitos beneficios.";
                var retorno2 = " Olha, eu consigo aqui caso continue com plano aumentar os benefios passando de 500mb de internet para 750mg, pra usar a vontade, e só vai ter uma pequena alteração na fatura com pequeno acrescimo de 50 reais durante um ano de fidlização garantindo seus direitos.";
                document.getElementById('pergRetorno4').innerText = respRetono;
                document.getElementById('resposta4').innerText = retorno2;
                document.getElementById('pergunta4').className = 'ocultar';
                document.getElementById('pergunta5').className = 'exibir';
                break;
            }
    }
}

function resposta5(perg) {
    switch (perg) {
        case 1:
            {
                var respRetono = "Mesmo assim quero cancelar.";
                var retorno1 = "entendi...vou pedir pro senhor aguardar enquanto eu faço os procedimentos. qualquer duvida só me perguntar que tiro suas duvidas.";
                document.getElementById('pergRetorno5').innerText = respRetono;
                document.getElementById('resposta5').innerText = retorno1;
                document.getElementById('pergunta5').className = 'ocultar';
                document.getElementById('pergunta6').className = 'exibir';
                break;
            }
        case 2:
            {
                var respRetono = "Vou cancelar,e não demora não porque tenho que ir na rua.";
                var retorno2 = "Entendo Senhor, então vou pedir pro senhor aguardar um pouquinho enquanto faço os procedimentos de cncelamento.";
                document.getElementById('pergRetorno5').innerText = respRetono;
                document.getElementById('resposta5').innerText = retorno2;
                document.getElementById('pergunta5').className = 'ocultar';
                document.getElementById('pergunta6').className = 'exibir';
                break;
            }
    }
}

function resposta6(perg) {
    switch (perg) {
        case 1:
            {
                var respRetono = "JA esta cancelado?";
                var retorno1 = "Só mais uns minutos por favor.";
                document.getElementById('pergRetorno6').innerText = respRetono;
                document.getElementById('resposta6').innerText = retorno1;
                document.getElementById('pergunta6').className = 'ocultar';
                document.getElementById('pergunta7').className = 'exibir';
                break;
            }
        case 2:
            {
                var respRetono = "Terei que sair pode andar mais rapido.";
                var retorno2 = "So mais dois a tres minutos por favor...";
                document.getElementById('pergRetorno6').innerText = respRetono;
                document.getElementById('resposta6').innerText = retorno2;
                document.getElementById('pergunta6').className = 'ocultar';
                document.getElementById('pergunta7').className = 'exibir';
                break;
            }
    }
}

function resposta7(perg) {
    switch (perg) {
        case 1:
            {
                var respRetono = "Tudo bem.";
                var retorno1 = "Pronto. seu sistema foi cancelado com sucesso, o numero do protocolo é 123.456.789, o senhor deseja mais alguma coisa?";
                document.getElementById('pergRetorno7').innerText = respRetono;
                document.getElementById('resposta7').innerText = retorno1;
                document.getElementById('pergunta7').className = 'ocultar';
                document.getElementById('pergunta8').className = 'exibir';
                break;
            }
        case 2:
            {
                var respRetono = "ta bom mas não demora.";
                var retorno2 = "Tudo certo, nas proximas 24 hrs sua linha sera cancelada, o numero do protocolo é 987.654.321., o senhor deseja mais alguma coisa ?";
                document.getElementById('pergRetorno7').innerText = respRetono;
                document.getElementById('resposta7').innerText = retorno2;
                document.getElementById('pergunta7').className = 'ocultar';
                document.getElementById('pergunta8').className = 'exibir';
                break;
            }
    }
}

function resposta8(perg) {
    var respRetono = "Não obrigado, parabéns pelo atendimento.";
    var retorno1 = "Eu que agradeço pela paciência e caso o senhor mude de ideia estaremos de portas abertas para te-lo como cliente novamente. Tenha um ótimo dia.";
    document.getElementById('pergRetorno8').innerText = respRetono;
    document.getElementById('resposta8').innerText = retorno1;
    document.getElementById('pergunta8').className = 'ocultar';

}