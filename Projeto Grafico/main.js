/* $(document).ready(() =>{

    async function obterDados(){
        const resposta = await fetch('./expenses-chart-component-main/data.json');
        const dados = await resposta.json();
        return dados.dias;
    }

    async function grafico(){
        const dados = await obterDados();

        const labels = dados.map(item => item.day); 
        const valores = dados.map(item => item.amount);

        const ctx = $('#meuGrafico').getContext('2d');

        const grafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Valores por dias',
                    data: valores,
                    backgroundcolor: 'black'
                }]
            }
        })
    }

    grafico();
}) */