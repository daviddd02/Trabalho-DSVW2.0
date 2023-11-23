document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var idade = parseFloat(document.getElementById('idade').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value) / 100;

    var imc = peso / (altura * altura);
    // planos da operadora A
    var planoBasicoA = 100 + (idade * 10 * (imc / 10));
    var planoStandardA = (150 + (idade * 15)) * (imc / 10);
    var planoPremiumA = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

    // planos da operadora B
    var fatorComorbidade;
    if (imc < 18.5) {
        fatorComorbidade = 10;
    } else if (imc >= 18.5 && imc < 25) {
        fatorComorbidade = 1;
    } else if (imc >= 25 && imc < 30) {
        fatorComorbidade = 6;
    } else if (imc >= 30 && imc < 35) {
        fatorComorbidade = 10;
    } else if (imc >= 35 && imc < 40) {
        fatorComorbidade = 20;
    } else {
        fatorComorbidade = 30;
    }

    var planoBasicoB = 100 + (fatorComorbidade * 10 * (imc / 10));
    var planoStandardB = (150 + (fatorComorbidade * 15)) * (imc / 10);
    var planoPremiumB = (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);

    // Determinação do plano mais vantajoso
    var planosA = [planoBasicoA, planoStandardA, planoPremiumA];
    var planosB = [planoBasicoB, planoStandardB, planoPremiumB];
    var nomesPlanos = ['Plano Básico', 'Plano Standard', 'Plano Premium'];
    var melhorPlanoA = nomesPlanos[planosA.indexOf(Math.min(...planosA))];
    var melhorPlanoB = nomesPlanos[planosB.indexOf(Math.min(...planosB))];

    // Exibição dos resultados
    var resultado = '<h2>Resultados</h2>';
    resultado += '<h3>Operadora A</h3>';
    resultado += '<p>Plano Básico: ' + planoBasicoA.toFixed(2) + '</p>';
    resultado += '<p>Plano Standard: ' + planoStandardA.toFixed(2) + '</p>';
    resultado += '<p>Plano Premium: ' + planoPremiumA.toFixed(2) + '</p>';
    resultado += '<p>Melhor Plano: ' + melhorPlanoA + '</p>';
    resultado += '<h3>Operadora B</h3>';
    resultado += '<p>Plano Básico: ' + planoBasicoB.toFixed(2) + '</p>';
    resultado += '<p>Plano Standard: ' + planoStandardB.toFixed(2) + '</p>';
    resultado += '<p>Plano Premium: ' + planoPremiumB.toFixed(2) + '</p>';
    resultado += '<p>Melhor Plano: ' + melhorPlanoB + '</p>';

    document.getElementById('resultado').innerHTML = resultado;
});
