//pegar valores do json
async function obterDados() {
    const resposta = await fetch('./expenses-chart-component-main/data.json');
    const dados = await resposta.json();
    return dados;
}

//criar grafico com o chart e os valores do json
async function grafico() {
    const dados = await obterDados();

    const labels = dados.map(item => item.day);
    const valores = dados.map(item => item.amount);

    const ctx = document.getElementById('meuGrafico').getContext('2d');

    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{

                data: valores,
                backgroundColor: '#e6745f',
                borderColor: '#e6745f',
                borderRadius: '6',
                borderWidth: 1,
                hoverBackgroundColor: '#fa9a88',
                hoverBorderColor: '#fa9a88'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    }
                }
            }
        }
    })
}

grafico();



$(document).ready(() => {

    let balanco = $('#input')
    const saldo = $('#saldo')
    
    $('#botao').click(function () { 
        calculo()
        
    });

    function calculo(){
        let novoBalanco = parseFloat(balanco.value)
        const novoSaldo = saldo

        console.log()
    }

    calculo()
})  