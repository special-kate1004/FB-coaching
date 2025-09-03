var options = {
    chart: {
        type: 'bar',
        with: '100%',
        height: 510,
        toolbar: { show: false }
    },
    colors: [
        '#E5CB84', '#E5CB84', '#E5CB84', '#E5CB84',
        '#84E5D3', '#84E5D3', '#84E5D3', '#84E5D3', '#84E5D3', '#84E5D3', '#84E5D3', '#84E5D3', '#84E5D3', '#84E5D3',
        '#A88CF5', '#A88CF5', '#A88CF5', '#A88CF5',
        '#EDA76A', '#EDA76A', '#EDA76A', '#EDA76A', '#EDA76A', '#EDA76A',
        '#E58485', '#E58485', '#E58485', '#E58485', '#E58485', '#E58485'
    ],
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '48%',
            distributed: true
        }
    },
    grid: {
        yaxis: { lines: { show: false } },
        xaxis: { lines: { show: false } }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Number of Injuries',
        data: [1, 2, 1, 2, 6, 11, 10, 9, 7, 5, 4, 6, 12, 15, 14, 8, 7, 6, 5, 6, 4, 2, 3, 6, 10, 12, 11, 13, 14, 11, 0]
    }],
    xaxis: {
        categories: [
            '0.75','0.80','0.85','0.90','0.95','1.00','1.05','1.10','1.15','1.20',
            '1.25','1.30','1.35','1.40','1.45','1.50','1.55','1.60','1.65','1.70',
            '1.75','1.80','1.85','1.90','1.95','2.00','2.05','2.10','2.15','2.20','2.30'
        ],
        labels: {
            style: {
                colors: '#999',
                fontSize: '12px'
            }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    yaxis: {
        stepSize: 2,
        title: {
            text: 'NUMBER OF INJURIES',
            style: {
                color: '#A2A2A2',
                fontSize: '12px',
                fontWeight: 400
            }
        },
        labels: {
            style: {
                colors: '#999',
                fontSize: '12px'
            }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    legend: {
        show: false
    },
    annotations: {
        xaxis: [
        {
            x: '0',
            x2: '0.95',
            fillColor: '#FBF7EC',
            opacity: 0.5,
        },
        {
            x: '0.95',
            x2: '1.40',
            fillColor: '#ECFBF8',
            opacity: 0.5,
        },
        {
            x: '1.40',
            x2: '1.60',
            fillColor: '#EEECFB',
            opacity: 0.5,
        },
        {
            x: '1.60',
            x2: '1.90',
            fillColor: '#FBF3EC',
            opacity: 0.5,
        },
        {
            x: '1.90',
            x2: '2.30',
            fillColor: '#FBECEC',
            opacity: 0.5,
        },
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#bar-apexchart-alldata"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#bar-apexchart-games"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#bar-apexchart-training"), options);
chart.render();

var miniOptions = {
    chart: {
        type: 'bar',
        with: '100%',
        height: 408,
        toolbar: { show: false }
    },
    colors: ['#84E5D3'],
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '30%',
            borderRadiusApplication: 'around',
            distributed: true
        }
    },
    grid: {
        yaxis: { lines: { show: false } },
        xaxis: { lines: { show: false } }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Number of Injuries',
        data: [9, 3, 7, 4, 8, 9.5, 10.5, 10, 4, 4.5]
    }],
    xaxis: {
        categories: [
            '0-10','10-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90+'
        ],
        labels: {
            style: {
                colors: '#999',
                fontSize: '12px'
            }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    yaxis: {
        stepSize: 1,
        labels: {
            style: {
                colors: '#999',
                fontSize: '12px'
            },
            formatter: function (val) {
                return Number.isInteger(val) ? val : '';
            }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    legend: {
        show: false
    },
    annotations: {
        yaxis: [{
            y: 11,
            borderColor: '#F5CFD0',
            strokeDashArray: 0
        }],
        points: [
            {
                x: 0, // First category
                y: 11,
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

document.querySelectorAll('.mini-card-bar-chart').forEach(function(el) {
    var chart = new ApexCharts(el, miniOptions);
    chart.render();
});