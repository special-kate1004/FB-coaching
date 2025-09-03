var data = [
    { date: 'AUG 28', opponent: 'MORECAMBE', value: 2.3 },
    { date: 'SEP 2', opponent: 'BARROW', value: 2.5 },
    { date: 'SEP 9', opponent: 'CRAWLEY', value: 3.0 },
    { date: 'SEP 12', opponent: 'MANSFIELD', value: 2.0 },
    { date: 'SEP 15', opponent: 'SALFORD', value: 1.9 },
    { date: 'SEP 22', opponent: 'BRADFORD', value: 2.7 },
    { date: 'SEP 29', opponent: 'READING', value: 2.2 },
    { date: 'SEP 30', opponent: 'MANSFIELD', value: 2.3 },
    { date: 'OCT 2', opponent: 'BRADFORD', value: 2.1 },
    { date: 'OCT 9', opponent: 'CRAWLEY', value: 2.8 }
];

var categories = data.map(item => item.date);
var seriesData = data.map(item => item.value);
var opponents = data.map(item => item.opponent);

var options = {
    chart: { 
        type: 'area', 
        height: 107, 
        width: '100%', 
        zoom: { enabled: true }, 
        toolbar: { show: false } 
    },
    series: [{ name: 'CMJ', data: seriesData }],
    xaxis: {
        type: 'category',
        categories: categories,
        floating: true,
        offsetY: -30,
        labels: {
            style: { fontSize: '12px', fontWeight: 500, colors: 'rgba(0, 0, 0, 0.2)' }
        },
        tooltip: { enabled: false },
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    yaxis: { min: 0, max: 3.5, show: false },
    grid: { show: false, padding: { top: 0, bottom: -4, left: 20, right: 0 } },
    stroke: { curve: 'smooth', width: 2, colors: ['#68E0C9'] },
    fill: { type: 'solid', opacity: 0.1, colors: ['#68E0C9'] },
    markers: { 
        size: 3.5, 
        colors: ['#000'], 
        strokeColors: '#000', 
        strokeWidth: 0,
        hover: { sizeOffset: 0 } 
    },
    dataLabels: { 
        enabled: true, 
        offsetY: -5, 
        style: { fontSize: '12px', colors: ['#000'] }, 
        formatter: val => val 
    },
    tooltip: {
        shared: false,
        intersect: true,
        followCursor: true,  // fully floating tooltip with mouse (for your client's request)
        custom: function({ dataPointIndex }) {
            return `<div class="fw-medium text-12 text-uppercase line-height-100 p-6">${opponents[dataPointIndex]}</div>`;
        }
    }
};

document.querySelectorAll('.spark-line-apexchart').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});