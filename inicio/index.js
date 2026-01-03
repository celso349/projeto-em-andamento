import entradaDados from 'readline-sync';

// dados salario....................................
let salarioMinimo = [
    {ano: 2010, salario: 510 },
    {ano: 2011, salario: 545 },
    {ano: 2012, salario: 622 },
    {ano: 2013, salario: 678 },
    {ano: 2014, salario: 724 },
    {ano: 2015, salario: 788 },
    {ano: 2016, salario: 880 },
    {ano: 2017, salario: 937 },
    {ano: 2018, salario: 954 },
    {ano: 2019, salario: 998 },
    {ano: 2020, salario: 1045},
    {ano: 2021, salario: 1100},
    {ano: 2022, salario: 1212},
    {ano: 2023, salario: 1320},
    {ano: 2024, salario: 1412},
    {ano: 2025, salario: 1518},
];
// dados inflação...................................

let inflação_ipca = [
    {ano: 2010, inflacao: 5.91},
    {ano: 2011, inflacao: 6.5},
    {ano: 2012, inflacao: 5.84},
    {ano: 2013, inflacao: 5.91},
    {ano: 2014, inflacao: 6.41},
    {ano: 2015, inflacao: 10.67},
    {ano: 2016, inflacao: 6.29},
    {ano: 2017, inflacao: 2.95},
    {ano: 2018, inflacao: 3.75},
    {ano: 2019, inflacao: 4.31},
    {ano: 2020, inflacao: 4.52},
    {ano: 2021, inflacao: 10.06},
    {ano: 2022, inflacao: 5.79},
    {ano: 2023, inflacao: 4.62},
    {ano: 2024, inflacao: 4.83},
    {ano: 2025, inflacao: 4.32},
]

// entrada do usuario ---------------------------
let entrada = 0;
let sair = false;

// Inicip do loop do menu

do {

    console.log('\n');    
    console.log('----------------------------------')
    console.log('---Aplicação Salário x Inflação---')
    console.log('-----------------------------------' + '\n')

    console.log('Escolha uma das opções abaixo:');
    console.log('Digite 1 - Listar o historico do salário minimo.');
    console.log('Digite 2 - Listar o historico da taxa IPCA (inflação).');
    console.log('Digite 3 - Comparar e listar a porcentagem de crescimento salarial com a inflacao(IPCA).');
    console.log('Digite 4 - Sair da aplicação.');

    
    entrada = Number(entradaDeDados.question('Escolha uma das opcoes listadas: '));

// Apos obter a entrada do usuario, executa a operação desejada --------------------------------------- 

    switch (entrada) {
        case 1: // caso 1, ano e valor do salario -----------------------------------------------------
            console.log('\n');  
            console.log('Listando o historico do salário minimo de 2010 a 2025.');
            for (let listaDeSalarios of salario) {
                let anoSalario = listaDeSalarios.ano;
                let valorSalario = listaDeSalarios.salario;

                console.log('\n');
                console.log('Ano: '.padEnd(30, '.') + anoSalario);
                console.log('Salário mínimo: '.padEnd(30, '.') + 'R$ ' + valorSalario.toFixed(2));
            }
            break;
        case 2: //caso 2 ano e valor da inflação -------------------------------------------------------
            console.log('\n');  
            console.log('Listando o historico do índice IPCA de 2010 a 2025.');
            for (let listaDeInflacao of inflacao_ipca) {
                let anoInflacao = listaDeInflacao.ano;
                let valorInflacao = listaDeInflacao.inflacao;

                console.log('\n');
                console.log('Ano: '.padEnd(30, '.') + anoInflacao);
                console.log('Ínflacao IPCA: '.padEnd(30, '.') + valorInflacao.toFixed(2) + '%');
            }
            break;
        case 3: // caso 3, ano, valor do salario, taxa do crescimento salarial e valor da inflação ------
            console.log('\n');
            console.log('Listando o crescimento salarial de 2010 a 2025.');
            console.log('\n');

// executa o primeiro item fora do loop -----------------------------------------------------------------

            console.log('Ano: '.padEnd(30, '.') + salario[0].ano);
            console.log('Salário mínimo: '.padEnd(30, '.') + 'R$ ' + salario[0].salario.toFixed(2));
            console.log('Crescimento Slararial: '.padEnd(30, '.') + '-');
            console.log('Ínflacao IPCA: '.padEnd(30, '.') + inflacao_ipca[0].inflacao.toFixed(2) + '%');
            console.log('\n');

// inicio do loop, itera sobre todos os indices a partir do contador para pegar os salarios de cada ano --

            for (let contador = 1; contador <= 10; contador++) {
                let salarioAtual = salario[contador].salario;
                let salarioAnterior = salario[(contador - 1)].salario;
                let valorInflacao = inflacao_ipca[contador].inflacao;

                let diferença = salarioAtual - salarioAnterior;
                let crescimentoSalarial = (diferença/salarioAnterior) * 100;


                console.log('Ano: '.padEnd(30, '.') + salario[contador].ano);
                console.log('Salário mínimo: '.padEnd(30, '.') + 'R$ ' + salarioAtual.toFixed(2));
                console.log('Crescimento Slararial: '.padEnd(30, '.') + crescimentoSalarial.toFixed(2));
                console.log('Ínflacao IPCA: '.padEnd(30, '.') + valorInflacao.toFixed(2) + '%');
                console.log('\n');

            }
            break;
        case 4: // encerra a plicação -----------------------------------------------------------------------
            console.log('\n');
            console.log('Encerrando a Aplicação.');
            sair = true;
            break;
        default:
            console.log('Opcao Invalida...');
            break;
    }
} while (sair == false); // condição, enquanto não for atendida, continua exibindo o menu -------------------


// mensagem de encerramento da aplicação --------------------------------------------------------------------
    console.log('\n');    
    console.log('----------------------------------')
    console.log('-------Aplicação Encerrada--------')
    console.log('-----------------------------------' + '\n')