var options = {
  chart: {
    type: 'radialBar',
    height: 70,
    width: 70,
    sparkline: { enabled: true }
  },
  grid: {
      padding: {
        top: 4,
      }
    },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      track: {
        background: '#f1f1f1',
        strokeWidth: '100%',
      },
      hollow: {
        size: '40%'
      },
      dataLabels: {
        name: { show: false },
        value: {
          show: true,
          fontSize: '12px',
          fontFamily: "SUSE",
          fontWeight: 600,
          offsetY: 3,
          formatter: function (val) {
            return Math.round(val);
          }
        }
      }
    }
  },
  stroke: {
    lineCap: 'butt',      // flat edges
    dashArray: 2         // ✅ creates dash effect
  },
  series: [68],           // value (percentage)
  colors: ['#E58485']     // turquoise/cyan like the image
};

document.querySelectorAll('.mini-alert-chart').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});