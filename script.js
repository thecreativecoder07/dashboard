$(document).ready(() => {

   $('#open-sidebar').click(() => {

      // add class active on #sidebar
      $('#sidebar').addClass('active');

      // show sidebar overlay
      $('#sidebar-overlay').removeClass('d-none');

   });


   $('#sidebar-overlay').click(function () {

      // add class active on #sidebar
      $('#sidebar').removeClass('active');

      // show sidebar overlay
      $(this).addClass('d-none');

   });

});

// Chart one
var options = {
   chart: {
      height: 280,
      type: "area"
   },
   dataLabels: {
      enabled: false
   },
   series: [
      {
         name: "Series 1",
         data: [45, 52, 86, 45, 19, 23, 2, 75, 23, 12]
      },
      {
         name: "Series 2",
         data: [12, 26, 35, 86, 23, 21, 54, 12, 24, 33]
      }
   ],
   fill: {
      type: "gradient",
      gradient: {
         shadeIntensity: 1,
         opacityFrom: 0.7,
         opacityTo: 0.9,
         stops: [0, 90, 100]
      }
   },
   colors: ['#a7a7a7', '#A1247C'],  // Colors for series
   stroke: {
      curve: 'smooth',
      width: [1, 1]  // Width of the lines
   },
   xaxis: {
      categories: [
         "Week 1",
         "Week 2",
         "Week 3",
         "Week 4",
         "Week 5",
         "Week 6",
         "Week 7",
         "Week 8",
         "Week 9",
         "Week 10"
      ]
   },
   yaxis: [
      {
         labels: {
            style: {
               colors: "#000",  // Custom color for y-axis 1 labels
               fontSize: '12px',
               fontWeight: 400,
               cssClass: 'apexcharts-yaxis-label',
            },
            formatter: function (value) {
               // Custom labels for y-axis
               if (value === 0 || value === 25 || value === 50 || value === 75 || value === 100) {
                 return value + '%';
               }
               return '';
             }
         },
         title: {
            text: '',
            style: {
               color: '#FF0000'  // Custom color for y-axis 1 title
            }
         }
      }
   ],
   plotOptions: {
      area: {
         fillTo: 'origin'  // Ensure both series fill to the origin
      }
   }
};

// Render the chart
var chartArea = new ApexCharts(document.querySelector("#chart-area"), options);

chartArea.render();


// donut chart
var options = {
   series: [45, 55],
   chart: {
     type: 'donut',
   },
   labels: ['Completed', 'Drafts'], // Custom labels
   colors: ['#A1247C', '#62499D'],  // Custom colors
   responsive: [{
     breakpoint: 480,
     options: {
       chart: {
         width: 200
       },
       legend: {
         position: 'bottom'
       }
     }
   }]
 };
 
 var chartDonut = new ApexCharts(document.querySelector("#chart-donut"), options);
 chartDonut.render();
 


