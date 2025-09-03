var options = {
    chart: {
        type: 'bar',
        with: '100%',
        height: 510,
        toolbar: {
            show: false
        },
    },
    legend: {
        show: false,
    },
    colors: ['#84E5D3', '#E78D8F'],
    grid: {
        padding: {
            left: 0,
            right: 0
        },
        yaxis: { lines: { show: false } },
        xaxis: { lines: { show: false } }
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
            columnWidth: '48%',
            distributed: false,
            endingShape: 'rounded'
        }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
          show: true,
          width: 2,
          colors: ['#fff']
    },
    series: [
        {
            name: 'Average minutes played that week',
            data: [550, 760, 200, 680, 850, 250, 150, 230, 300, 100, 720, 780, 820, 260, 290, 180]
        },
        {
            name: 'Number of injuries',
            data: [480, 130, 650, 640, 570, 180, 470, 160, 220, 140, 670, 660, 850, 250, 270, 310]
        }
    ],
    xaxis: {
        stepSize: 1,
        labels: {
            style: {
                colors: '#A2A2A2',
                fontSize: '12px'
            },
            offsetY: -5,
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        categories: [
            'Week 1', 'Week 2', 'Week 3', 'Week 4',
            'Week 5', 'Week 6', 'Week 7', 'Week 8',
            'Week 9', 'Week 10', 'Week 11', 'Week 12',
            'Week 13', 'Week 14', 'Week 15', 'Week 16'
        ]
    },
    yaxis: {
        stepSize: 50,
        labels: {
            offsetX: -10,
            style: {
                colors: '#A2A2A2',
                fontSize: '12px'
            },
            formatter: (val) => Number.isInteger(val) ? val : ''
        }
    },
    annotations: {
        yaxis: [{
            y: 620,
            borderColor: '#F5CFD0',
            strokeDashArray: 0
        }],
        points: [
            {
                x: 0, // First category
                y: 620,
                marker: {
                    size: 1,
                    fillColor: '#F5CFD0',
                    strokeColor: '#F5CFD0',
                    strokeWidth: 2,
                    shape: 'circle'
                }
            }
        ]
    }
};

var chart = new ApexCharts(document.querySelector("#bar-group-apexchart-alldata"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#bar-group-apexchart-games"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#bar-group-apexchart-training"), options);
chart.render();