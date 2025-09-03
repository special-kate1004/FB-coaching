const lg_Categories = ["Bromley (H)", "Notts County (A)", "Doncaster (H)", "Bradford City (A)", "Walsall (A)", "Swindon (H)", "MK Dons (H)", "Port Vale (A)", "Fulham", "Harrogate Town (H)", "Grimsbv Town (A)", "Tranmere Rovers (H)", "Morecambe (A)", "Chesterfield (A)", "Gillingham (H)", "Barrow (H)", "AFC Wimbledon (H)", "AFC Wimbledon (H)"];
const xl_Categories = ["GK", "LB", "RB", "CB", "CDM", "CM", "CAM", "LW", "RW", "CF"];
const xl_Label_Colors = ["#84E5D3", "#9684E5", "#9684E5", "#9684E5", "#E5CB84", "#E5CB84", "#E5CB84", "#E58485", "#E58485", "#E58485"];
const xl_Label_Bg_Colors = ["#F5FDFB", "#F6F5FD", "#F6F5FD", "#F6F5FD", "#FDFBF5", "#FDFBF5", "#FDFBF5", "#FDF5F5", "#FDF5F5", "#FDF5F5"];
const xxl_Categories = ["Matchday +1", "Matchday +2", "Matchday +3", "Matchday -3", "Matchday -2", "Matchday -1", "Matchday"];

var options = {
    series: [{
        name: 'Team Output',
        data: [757, 725, 591, 843, 849, 799, 551, 663, 783, 650, 398, 443, 800, 647, 812, 203, 242, 657]
    }],
    chart: {
        width: '100%',
        height: '85%',
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    grid: {
         yaxis: {
            lines: {
                show: false
            }
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 15,
            columnWidth: '50%',
            dataLabels: {
                position: 'top', // top, center, bottom
            },
            colors: {
                ranges: [
                    { from: 0, to: 599, color: '#E78D8F' },
                    { from: 600, to: 10000, color: '#84E5D3' }
                ]
            }
        }
    },
    dataLabels: {
        enabled: true,
        offsetY: -20,
        opacity: 0.2,
        style: {
            fontSize: '12px',
            colors: ["rgba(0, 0, 0, 0.2)"]
        }
    },    
    xaxis: {
        categories: lg_Categories,
        labels: {
            useHTML: true,
            formatter: function (val) {
                const maxLength = 5;  // Or whatever length you want
                return val.length > maxLength ? val.substring(0, maxLength) + '…' : val;
            },
            style: {
                colors: 'rgba(0, 0, 0, 0.2)',  // 50% opacity
                fontSize: '12px'
            }
        },
        position: 'bottom',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        stepSize: 50,
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: true,
            style: {
                colors: 'rgba(0, 0, 0, 0.2)',  // 50% opacity
                fontSize: '12px'
            }
        }
    },
    tooltip: {
        enabled: true,
        x: {
            formatter: function (val, opts) {
                return lg_Categories[opts.dataPointIndex];
            }
        }
    },
    annotations: {
        yaxis: [{
            y: 600,
            borderColor: '#F5CFD0',
            strokeDashArray: 0
        }],
        points: [
            {
                x: 0, // First category
                y: 600,
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

document.querySelectorAll('.column-apexchart-lg').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});

document.querySelectorAll('.column-apexchart-xl').forEach(function(el) {
    var xl_Opts = JSON.parse(JSON.stringify(options)); // deep clone
    xl_Opts.series[0].data = [591, 843, 843, 843, 757, 757, 757, 725, 725, 725];
    xl_Opts.xaxis.categories = xl_Categories;
    xl_Opts.plotOptions.bar.columnWidth = "30%";
    xl_Opts.xaxis.labels.style.colors = xl_Label_Colors;

    var chart = new ApexCharts(el, xl_Opts);
    chart.render();
});

document.querySelectorAll('.column-apexchart-xxl').forEach(function(el) {
    var xxl_Opts = JSON.parse(JSON.stringify(options)); // deep clone
    xxl_Opts.series[0].data = [849, 799, 551, 757, 725, 591, 843];
    xxl_Opts.xaxis.categories = xxl_Categories;
    xxl_Opts.plotOptions.bar.columnWidth = "20%";

    var chart = new ApexCharts(el, xxl_Opts);
    chart.render();
});