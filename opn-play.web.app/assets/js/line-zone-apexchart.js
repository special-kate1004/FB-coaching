var alert_Options = {
    chart: {
        type: 'area',
        height: 80,
        sparkline: { enabled: true }
    },
    grid: {
        padding: {
            bottom: 1,
        }
        },
    series: [{
        name: 'CMJ',
        data: [1.8, 2.1, 1.8, 2.0, 1.9, 2.2, 1.75]
    }],
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#EF5350']
    },
    fill: {
        type: 'solid',
        opacity: 0.2,
        colors: ['#E58485']
    },
    tooltip: {
        enabled: false
    }
};

var success_Options = {
    chart: {
        type: 'area',
        height: 80,
        sparkline: { enabled: true }
    },
    grid: {
        padding: {
            bottom: 1,
        }
        },
    series: [{
        name: 'CMJ',
        data: [1.8, 2.1, 1.8, 2.0, 1.9, 2.2, 1.75]
    }],
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#84E5D3']
    },
    fill: {
        type: 'solid',
        opacity: 0.2,
        colors: ['#F3FCFB']
    },
    tooltip: {
        enabled: false
    }
};

var lg_Alert_Optioins = {
    chart: {
        type: 'area',
        height: 196,
        sparkline: { enabled: false }, // disabled for annotations to show
        toolbar: { show: false }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: -20,
            right: 0
        },
        show: false
    },
    series: [{
        name: 'CMJ',
        data: [1.8, 2.1, 1.8, 2.0, 1.9, 2.2, 1.75]
    }],
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#EF5350']
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 0,
            stops: [0, 100],
            colorStops: [
                {
                    offset: 0,
                    color: "#E58485",
                    opacity: 0.3
                },
                {
                    offset: 100,
                    color: "#E5848599",
                    opacity: 0
                }
            ]
        }
    },
    tooltip: {
        enabled: false
    },
    yaxis: {
        min: 1.5,
        max: 2.5,
        tickAmount: 0,
        labels: { show: false }
    },
    xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
    },
    annotations: {
        yaxis: [
            {
                y: 2.2,
                borderColor: '#F5CFD0',
                strokeDashArray: 0,
                label: {
                    text: 'Max',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    offsetX: 0,
                    offsetY: -5,
                    style: {
                        color: '#F5CFD0',
                        fontSize: '14px',
                        fontWeight: 500
                    }
                }
            },
            {
                y: 1.9,
                borderColor: '#F5CFD0',
                strokeDashArray: 0,
                label: {
                    text: 'Average',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    offsetX: 0,
                    offsetY: -5,
                    style: {
                        color: '#F5CFD0',
                        fontSize: '14px',
                        fontWeight: 500
                    }
                }
            }
        ]
    }
};

document.querySelectorAll('.alert-line-apexchart').forEach(function(el) {
    var chart = new ApexCharts(el, alert_Options);
    chart.render();
});

document.querySelectorAll('.success-line-apexchart').forEach(function(el) {
    var chart = new ApexCharts(el, success_Options);
    chart.render();
});

document.querySelectorAll('.lg-alert-line-apexchart').forEach(function(el) {
    var chart = new ApexCharts(el, lg_Alert_Optioins);
    chart.render();
});