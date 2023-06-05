// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

let ano_2020 = document.getElementById("2020");
let ano_2022 = document.getElementById("2022");

ano_2020.addEventListener("click", function() {drawChart(this);});
ano_2022.addEventListener("click", function() {drawChart(this);});
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart(ano) {
// Create the data table.
// Depends of the year selected.
  if (ano.id === "2020") {
    var data = google.visualization.arrayToDataTable([
      ['Dia', 'Preço (R$)', { role: 'style' }],
      ["01/04/2020", 24.74, 'color: red'], 
      ["02/04/2020", 25.51, 'color: red'], 
      ["03/04/2020", 23.86, 'color: red'], 
      ["06/04/2020", 26.14, 'color: red'], 
      ["07/04/2020", 27.36, 'color: red'], 
      ["08/04/2020", 27.73, 'color: red'], 
      ["09/04/2020", 27.58, 'color: red'], 
      ["13/04/2020", 28.29, 'color: red'], 
      ["14/04/2020", 28.20, 'color: red'], 
      ["15/04/2020", 26.92, 'color: red'], 
      ["16/04/2020", 25.88, 'color: red'], 
      ["17/04/2020", 26.50, 'color: red'], 
      ["20/04/2020", 25.95, 'color: red'], 
      ["22/04/2020", 25.40, 'color: red'], 
      ["23/04/2020", 25.03, 'color: red'], 
      ["24/04/2020", 23.44, 'color: red'], 
      ["27/04/2020", 24.46, 'color: red'], 
      ["28/04/2020", 27.22, 'color: red'], 
      ["29/04/2020", 28.22, 'color: red'], 
      ["30/04/2020", 27.00, 'color: red'], 
      ["04/05/2020", 25.74, 'color: red'], 
      ["05/05/2020", 25.14, 'color: red'], 
      ["06/05/2020", 24.91, 'color: red'], 
      ["07/05/2020", 23.91, 'color: red'], 
      ["08/05/2020", 24.43, 'color: red'], 
      ["11/05/2020", 24.69, 'color: red'], 
      ["12/05/2020", 23.24, 'color: red'], 
      ["13/05/2020", 22.98, 'color: red'], 
      ["14/05/2020", 23.94, 'color: red'], 
      ["15/05/2020", 22.96, 'color: red'], 
      ["18/05/2020", 24.54, 'color: red'], 
      ["19/05/2020", 23.51, 'color: red'], 
      ["20/05/2020", 23.77, 'color: red'], 
      ["21/05/2020", 25.05, 'color: red'], 
      ["22/05/2020", 24.61, 'color: red'], 
      ["25/05/2020", 25.91, 'color: red'], 
      ["26/05/2020", 25.14, 'color: red'], 
      ["27/05/2020", 25.90, 'color: red'], 
      ["28/05/2020", 25.23, 'color: red'], 
      ["29/05/2020", 25.18, 'color: red']
    ]);
    // Set chart options
    var options = {
      title:'Preço da ação do Santander (R$) x Dia 2020',
      width:750,
      height:300,
      legend: 'none', 
      vAxis: {
        format: 'currency',
        minValue: 20,
        maxValue: 40,
      }
    };
  } else {
    if (ano.id === "2022") {
      var data = google.visualization.arrayToDataTable([
        ['Dia', 'Preço (R$)', { role: 'style' }],
        ["01/04/2022", 36.89, 'color: red'], 
        ["04/04/2022", 36.21, 'color: red'], 
        ["05/04/2022", 35.39, 'color: red'], 
        ["06/04/2022", 35.49, 'color: red'], 
        ["07/04/2022", 36.15, 'color: red'], 
        ["08/04/2022", 35.77, 'color: red'], 
        ["11/04/2022", 35.56, 'color: red'], 
        ["12/04/2022", 35.09, 'color: red'], 
        ["13/04/2022", 35.07, 'color: red'], 
        ["14/04/2022", 34.90, 'color: red'], 
        ["18/04/2022", 35.29, 'color: red'], 
        ["19/04/2022", 35.13, 'color: red'], 
        ["20/04/2022", 35.04, 'color: red'], 
        ["22/04/2022", 33.94, 'color: red'], 
        ["25/04/2022", 33.63, 'color: red'], 
        ["26/04/2022", 32.10, 'color: red'], 
        ["27/04/2022", 31.97, 'color: red'], 
        ["28/04/2022", 31.78, 'color: red'], 
        ["29/04/2022", 31.75, 'color: red'], 
        ["02/05/2022", 31.55, 'color: red'], 
        ["03/05/2022", 31.80, 'color: red'], 
        ["04/05/2022", 32.61, 'color: red'], 
        ["05/05/2022", 31.98, 'color: red'], 
        ["06/05/2022", 32.97, 'color: red'], 
        ["09/05/2022", 33.27, 'color: red'], 
        ["10/05/2022", 32.60, 'color: red'], 
        ["11/05/2022", 32.88, 'color: red'], 
        ["12/05/2022", 32.75, 'color: red'], 
        ["13/05/2022", 32.70, 'color: red'], 
        ["16/05/2022", 33.54, 'color: red'], 
        ["17/05/2022", 33.95, 'color: red'], 
        ["18/05/2022", 33.01, 'color: red'], 
        ["19/05/2022", 32.72, 'color: red'], 
        ["20/05/2022", 33.02, 'color: red'], 
        ["23/05/2022", 33.85, 'color: red'], 
        ["24/05/2022", 34.33, 'color: red'], 
        ["25/05/2022", 33.43, 'color: red'], 
        ["26/05/2022", 33.33, 'color: red'], 
        ["27/05/2022", 33.67, 'color: red'], 
        ["30/05/2022", 33.49, 'color: red'], 
      ]);
      // Set chart options
      var options = {
        title:'Preço da ação do Santander (R$) x Dia 2022',
        width:750,
        height:300,
        legend: 'none', 
        vAxis: {
          format: 'currency',
          minValue: 20,
          maxValue: 40,
        }
      };
    }
  }

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  
  chart.draw(data, options);
}