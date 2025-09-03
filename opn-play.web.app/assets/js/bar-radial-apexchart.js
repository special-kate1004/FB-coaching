var value = 7.5;

var options = {
    series: [100],
    chart: {
        width: '150%',
        type: 'radialBar'
    },
    plotOptions: {
        radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
            show: false,
            value: {
                offsetY: -30,
                fontSize: '20px',
                color: '#A2A2A2',
                formatter: function (val) {
                        return val / 10 + "/10";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal',
            gradientToColors: ['#4CDCC3', '#FFF177', '#FFC76D', '#EF1D90', '#68E0C9'], // Final blend
            stops: [0, 25, 50, 75, 100],
            colorStops: [
                {
                    offset: 0,
                    color: '#42e695', // green
                    opacity: 1
                },
                {
                    offset: 50,
                    color: '#FFD700', // yellow
                    opacity: 1
                },
                {
                    offset: 100,
                    color: '#FF6B6B', // red
                    opacity: 1
                }]
            }
        },
    stroke: {
        dashArray: 1
    },
    labels: [''],
};


if(document.querySelector("#raidal-bar-chart")) {
    var chart = new ApexCharts(document.querySelector("#raidal-bar-chart"), options);
    chart.render();

    const angle = (value / 10) * 180 - 90; // Map 0–100 to -90 to +90
    $("#needle-container").css("transform", `translateX(-50%) rotate(${angle}deg)`);
}