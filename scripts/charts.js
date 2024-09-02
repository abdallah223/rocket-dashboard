// Donut chart 
new Chartist.Pie('#traffic-share', {
  series: [30, 70]
}, {
  donut: true,
  donutWidth: 20,
  donutSolid: true,
  startAngle: 45,
  showLabel: false,
});
new Chartist.Pie('#traffic-share2', {
  series: [51.5,29.40,9.10,6.50,3.50]
}, {
  donut: true,
  donutWidth: 40,
  donutSolid: true,
  startAngle: 0,
  showLabel: false,
});
new Chartist.Pie('#traffic-distro', {
  series: [{meta: '30%',value:30}, 50,20],
  labels: ['30%','50%','20%']
}, {
  donut: true,
  donutWidth: 55,
  donutSolid: true,
  startAngle: 45,
  showLabel: true,
});
new Chartist.Pie('#traffic-source', {
  series: [80, 15,10],
  labels: ['75%','15%','10%']
}, {
  donut: false,
  startAngle: 0,
  showLabel: false,
});


new Chartist.Bar('#app-rank',{
labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
series: [
    [5, 4, 3, 7, 5,6,4],
    [3, 2, 9, 5, 4,7,6]
]},
{
  seriesBarDistance: 15,
  axisX: {
    offset: 15
  },
  axisY: {
    offset: 15
  }
},
[
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 10,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    } 
  }]
]
);

// line chart 
new Chartist.Line('#sales', {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [0, 10000, 30000, 50000, 80000, 50000, 30000,]
  ]
}, {
  showArea: true,
  fullWidth: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value / 1000) + 'k';
    }
  },
});
// multi line chart 
new Chartist.Line('#multi-lines', {
  labels: ["Mar","Apr","May","Jun","Jul","Aug","Sep"],
  series: [
    [2,6,2,3,4,6,8],
    [5,6,5,8,12,32,28],
    [7,12,7,3,2,7,14],
    [10,15,13,17,14,18,20],
    [16,18,18,20,20,20,23]
  ]
}, {
  high: 35,
  low: 0,
  fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    onlyInteger: true,
    offset: 30,
    labelInterpolationFnc: function(value) {
      return value + 'M';
    }
  }
});


// Geo Chart 
new Chartist.Pie('#traffic-distro2', {
  series: [{meta: '30%',value:30}, 50,20],
  labels: ['30%','50%','20%']
}, {
  donut: true,
  donutWidth: 55,
  donutSolid: true,
  startAngle: 45,
  showLabel: true,
});