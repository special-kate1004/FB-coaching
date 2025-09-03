var options = {
    series: [25, 2, 50, 23],
    chart: {
    width: '100%',
    height: '100%',
    type: 'donut'
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '80%',
        labels: {
          show: false,
          total: {
            showAlways: true,
            show: true,
          }
        }
      }
    }
  },
  labels: ["Midfielder", "Goalkeeper", "Defender", "Forward"],
  colors: ['#e58485', '#84e5d3', '#9684e5', '#e8d192'],
  dataLabels: {
    enabled: false,
    dropShadow: {
      blur: 3,
      opacity: 1
    }
  },
  stroke: {
    width: 1,          // make arc thick like radialBar
    colors: ['#fff'],   // inner border color
    lineCap: 'butt'     // disable rounded ends
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  legend: {
    show: false,
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 153,
      },
      legend: {
        show: false
      }
    }
  }]
};

document.querySelectorAll('.pie-apexchart').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});