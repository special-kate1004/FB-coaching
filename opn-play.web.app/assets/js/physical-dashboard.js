var options1 = {
    chart: {
      type: 'radialBar',
      height: 250,
      width: '100%',
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

var progress_Options = {
  chart: {
    type: 'radialBar',
    height: 80,
    width: 80,
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

var cmj_Options = {
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


$(document).ready(function() {
  var objMinutesPlayedChart = document.querySelector("#chart-load-management-minutes-played");
  if (objMinutesPlayedChart) {
    var minutesPlayedChart = new ApexCharts(objMinutesPlayedChart, options1);
    minutesPlayedChart.render();
  }
  var objTotalDistanceChart = document.querySelector("#chart-load-management-total-distance");
  if (objTotalDistanceChart) {
    var totalDistanceChart = new ApexCharts(objTotalDistanceChart, options1);
    totalDistanceChart.render();
  }
  var objAccelerationsChart = document.querySelector("#chart-load-management-accelerations");
  if (objAccelerationsChart) {
    var accelerationsChart = new ApexCharts(
      objAccelerationsChart,
      {
        ...options1,
        series: [90],
        colors: ['#E58485'],
        plotOptions: {
          radialBar: {
            ...options1.plotOptions?.radialBar, // keep original settings
            track: {
              ...options1.plotOptions?.radialBar?.track,
              background: '#FAE6E7'
            }
          }
        }
      }
    );
    accelerationsChart.render();
  }
  var objDecelerationsChart = document.querySelector("#chart-load-management-decelerations");
  if (objDecelerationsChart) {
    var decelerationsChart = new ApexCharts(objDecelerationsChart, {...options1, colors: ['#E5CB84'], series: ['50'], plotOptions: {
      radialBar: {
        ...options1.plotOptions?.radialBar, // keep original settings
        track: {
          ...options1.plotOptions?.radialBar?.track,
          background: '#FAF5E6'
        }
      }
    }});
    
    decelerationsChart.render();
  }
  var objZonePlayedChart = document.querySelector("#chart-load-management-zone-distance");
  if (objZonePlayedChart) {
    var zonePlayedChart = new ApexCharts(objZonePlayedChart, options1);
    zonePlayedChart.render();
  }
  
  var objHsrDistanceChart = document.querySelector("#chart-load-management-hsr");
  if (objHsrDistanceChart) {
    var hsrDistanceChart = new ApexCharts(objHsrDistanceChart, options1);
    hsrDistanceChart.render();
  }
  
  var objSprintChart = document.querySelector("#chart-load-management-sprint-distance");
  if (objSprintChart) {
    var sprintChart = new ApexCharts(objSprintChart, {...options1, colors: ['#E58485'], series: ['90'],  plotOptions: {
      radialBar: {
        ...options1.plotOptions?.radialBar, // keep original settings
        track: {
          ...options1.plotOptions?.radialBar?.track,
          background: '#FAE6E7'
        }
      }
    }});
    sprintChart.render();
  }
  
  var objMetresChart = document.querySelector("#chart-load-management-metres-per-min");
  if (objMetresChart) {
    var metresChart = new ApexCharts(objMetresChart, {...options1, colors: ['#E58485'], series: ['90'],  plotOptions: {
      radialBar: {
        ...options1.plotOptions?.radialBar, // keep original settings
        track: {
          ...options1.plotOptions?.radialBar?.track,
          background: '#FAE6E7'
        }
      }
    }});
    metresChart.render();
  }

  // progress circle
  var oChart1 = document.querySelector("#progressCircle1");
  if (oChart1) {
    var pChart1 = new ApexCharts(oChart1, progress_Options);
    pChart1.render();
  }
  
  var oChart2 = document.querySelector("#progressCircle2");
  if (oChart2) {
    var pChart2 = new ApexCharts(oChart2, {...progress_Options, colors: ['#68E0C9']});
    pChart2.render();
  }
  
  var oChart3 = document.querySelector("#progressCircle3");
  if (oChart3) {
    var pChart3 = new ApexCharts(oChart3, progress_Options);
    pChart3.render();
  }
  
  var oChart4 = document.querySelector("#progressCircle4");
  if (oChart4) {
    var pChart4 = new ApexCharts(oChart4, progress_Options);
    pChart4.render();
  }
  
  var oChart5 = document.querySelector("#progressCircle5");
  if (oChart5) {
    var pChart5 = new ApexCharts(oChart5, {...progress_Options, colors: ['#E58485']});
    pChart5.render();
  }
  
  var oChart6 = document.querySelector("#progressCircle6");
  if (oChart6) {
    var pChart6 = new ApexCharts(oChart6, progress_Options);
    pChart6.render();
  }
  
  var oChart7 = document.querySelector("#progressCircle7");
  if (oChart7) {
    var pChart7 = new ApexCharts(oChart7, {...progress_Options, colors: ['#68E0C9']});
    pChart7.render();
  }
  
  var oChart8 = document.querySelector("#progressCircle8");
  if (oChart8) {
    var pChart8 = new ApexCharts(oChart8, progress_Options);
    pChart8.render();
  }
  
  var oChart9 = document.querySelector("#progressCircle9");
  if (oChart9) {
    var pChart9 = new ApexCharts(oChart9, progress_Options);
    pChart9.render();
  }
  
  var oChart10 = document.querySelector("#progressCircle10");
  if (oChart10) {
    var pChart10 = new ApexCharts(oChart10, {...progress_Options, colors: ['#E58485']});
    pChart10.render();
  }

  // CMJ chart
  var oCmj1 = document.querySelector("#cmjChart1");
  if (oCmj1) {
    var cmjChart1 = new ApexCharts(oCmj1, cmj_Options);
    cmjChart1.render();
  }

  var oCmj2 = document.querySelector('#cmjChart2');
  if (oCmj2) {
    var cmjChart2 = new ApexCharts(oCmj2, cmj_Options);
    cmjChart2.render();
  }
  
  var oCmj3 = document.querySelector("#cmjChart3");
  if (oCmj3) {
    var cmjChart3 = new ApexCharts(oCmj3, cmj_Options);
    cmjChart3.render();
  }
  
  var oCmj4 = document.querySelector('#cmjChart4');
  if (oCmj4) {
    var cmjChart4 = new ApexCharts(oCmj4, cmj_Options);
    cmjChart4.render();
  }
  
  var oCmj5 = document.querySelector('#cmjChart5');
  if (oCmj5) {
    var cmjChart5 = new ApexCharts(oCmj5, cmj_Options);
    cmjChart5.render();
  }
  
  var oCmj6 = document.querySelector('#cmjChart6');
  if (oCmj6) {
    cmjChart6 = new ApexCharts(oCmj6, cmj_Options);
    cmjChart6.render();
  }
  
  var oCmj7 = document.querySelector('#cmjChart7');
  if (oCmj7) {
    var cmjChart7 = new ApexCharts(oCmj7, cmj_Options);
    cmjChart7.render();
  }
  
  var oCmj8 = document.querySelector('#cmjChart8');
  if (oCmj8) {
    var cmjChart8 = new ApexCharts(oCmj8, cmj_Options);
    cmjChart8.render();
  }
  
  var oSpeedChart = document.querySelector('#speedchart');
  if (oSpeedChart) {
    var speedOption = {
      ...options1,
      fill: {
        type: 'gradient',
        gradient: {
          type: "conic", // this is what gives it the angular/circular effect
          gradientToColors: ["#EF1D90"], // end color
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: "#4CDCC3"
            },
            {
              offset: 50,
              color: "#FFC76D"
            },
            {
              offset: 100,
              color: "#FFF177"
            }
          ]
        }
      },
      plotOptions: {
        radialBar: {
          ...options1.plotOptions?.radialBar,
          dataLabels: {
            ...options1.plotOptions?.radialBar?.dataLabels,
            name: { show: false },
            value: { show: false }
          }
        }
      },
      series: [85]  // Change this value dynamically for speed
    };
    var pSpeedChart = new ApexCharts(oSpeedChart, speedOption);
    pSpeedChart.render();
  }
});
