var options = {
    chart: {
        type: 'radar',
        height: 731,
        toolbar: {
            show: false
        }
    },
    series: [
        {
            name: 'Player 1',
            data: [80, 70, 50, 76, 96, 60, 100, 70] // Total Distance, Top Speed, etc.
        },
        {
            name: 'Player 2',
            data: [40, 60, 80, 48, 80, 40, 52, 80]
        },
        {
            name: 'Player 3',
            data: [98, 22, 38, 70, 40, 96, 40, 32]
        },
        {
            name: 'Player 4',
            data: [60, 20, 60, 92, 54, 70, 20, 40]
        }
    ],
    labels: [
        'Total Distance',
        'Top Speed',
        'Metres per Minute',
        'High Speed Runs',
        'ACWR',
        'Sprint Distance',
        'Decelerations',
        'Accelerations',
    ],
    colors: [
        '#F9F2E0',
        '#D5CEF5',
        '#CEF5ED',
        '#F3C6C7'
    ],
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.3
    },
    markers: {
        size: 0
    },
    legend: {
        position: 'top',
        show: false
    },
    yaxis: {
        show: false
    }
};

document.querySelectorAll('.radar-chart').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});