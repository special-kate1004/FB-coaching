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
  colors: ['#E5CB84']     // turquoise/cyan like the image
};

document.querySelectorAll('.mini-warning-chart').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});

document.querySelectorAll('.mini-warning-xl-chart').forEach(function(el) {
    var xl_Opts = JSON.parse(JSON.stringify(options)); // deep clone
    xl_Opts.chart.width = 120;
    xl_Opts.chart.height = 120;

    var chart = new ApexCharts(el, xl_Opts);
    chart.render();
});