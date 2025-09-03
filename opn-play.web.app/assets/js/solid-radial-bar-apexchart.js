var options = {
    chart: {
        type: 'radialBar',
        width: '100%',
        height: 220,
        sparkline: { enabled: true },
    },
    grid: {
        padding: {
            top: -10,
            bottom: 10,
            left: -25,
            right: -25
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
                margin: 0,
                size: '60%',
            },
            track: {
                background: "#E6FAF6",
                strokeWidth: "100%",
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    offsetY: -35,
                    fontSize: '20px',
                    fontWeight: 500,
                    fontFamily: 'SUSE',
                    color: '#000',
                    formatter: function (val) {
                        return '10,096'; // or dynamic value
                    }
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    series: [25], // 67% of max, customize as needed
    labels: [''],
    colors: ['#84E5D3'] // teal; adjust per stat
};


document.querySelectorAll('.solid-radial-success-apexchart').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});

document.querySelectorAll('.solid-radial-alert-apexchart').forEach(function(el) {
    var alertOptions = JSON.parse(JSON.stringify(options)); // deep clone
    alertOptions.plotOptions.radialBar.track.background = '#FAE6E7';
    alertOptions.colors = ['#E58485'];
    alertOptions.plotOptions.radialBar.dataLabels.value.formatter = function () {
        return '10,096';
    };
    var chart = new ApexCharts(el, alertOptions);
    chart.render();
});

document.querySelectorAll('.solid-radial-warning-apexchart').forEach(function(el) {
    var alertOptions = JSON.parse(JSON.stringify(options)); // deep clone
    alertOptions.plotOptions.radialBar.track.background = '#FAF5E6';
    alertOptions.colors = ['#E5CB84'];
    alertOptions.plotOptions.radialBar.dataLabels.value.formatter = function () {
        return '10,096';
    };
    var chart = new ApexCharts(el, alertOptions);
    chart.render();
});