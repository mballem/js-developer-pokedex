/* https://apexcharts.com/ */

function getBarChart(keys, values, colorBars) {
    var options = {
        series: [{
            name: 'Basic Stats',
            data: values
        }],
        chart: {
            type: 'bar',
            height: 280
        },
        colors: [getColor(colorBars)],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#282a36;']
            },
            offsetX: 50
        },
        xaxis: {
            categories: keys,
        }
    };

    let chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

function getColor(type) {
    if (type === 'normal') return '#a6a877'
    if (type === 'grass') return '#77c850';
    if (type === 'fire') return '#ee7f30';
    if (type === 'water') return '#678fee';
    if (type === 'electric') return '#f7cf2e';
    if (type === 'ice') return '#98d5d7';
    if (type === 'ground') return '#dfbf69';
    if (type === 'flying') return '#a98ff0';
    if (type === 'poison') return '#a040a0';
    if (type === 'fighting') return '#bf3029';
    if (type === 'psychic') return '#f65687';
    if (type === 'dark') return '#725847';
    if (type === 'rock') return '#b8a137';
    if (type === 'bug') return '#a8b720';
    if (type === 'ghost') return '#6e5896';
    if (type === 'steel') return '#b9b7cf';
    if (type === 'dragon') return '#6f38f6';
    if (type === 'fairy') return '#f9aec7';
}