angular.module('myApp', [])

var linksp = $(".tabs_links");
var links = linksp.find('a');
var items = $('.items');
links.eq(0).add(items.eq(0)).addClass("active");
linksp.on('click','a',function() {
  var t =$(this);
  var i = t.index();
  t.add(items.eq(i)).addClass('active').siblings().removeClass('active');

});


$('#container').highcharts({
  colors: ['#FF8000', '#585858', '#00FFFF', '#000000', '#29088A', '#D7DF01', '#DF013A'],
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Contraste de hipóstesis ideal'
    },
    xAxis: {
        categories: ['Hipótesis ideal', 'Simulación 1<br>Hora salida: 6:00', 'Simulación 2<br>Hora salida: 6:20']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Tiempo total de recorrido [s]'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [
       {  
        name: 'Estación Rosita',
        data: [5,0,0]
      },{
        color: '#00FF00',
        name: 'Hacia estación Rosita',
        data: [5,0,0]
      },{
        name: 'Estación La Isla',
        data: [5,0,0]
      },{
        color: '#00FF00',
        name: 'Hacia Estación la Isla',
        data: [5,0,0]
      },{
        name: 'Estación Diamante',
        data: [5,0,0]
      },{
        color: '#00FF00',
        name: 'Hacia Estación Diamante',
        data: [5,0,0]
      },{
        name: 'Estación Provenza',
        data: [5,0,0]
      },{
        color: '#00FF00',
        name: 'Hacia Estación Provenza',
        data: [10,0,0]
      },{
        name: 'Estación Payador',
        data: [5,0,0]
      },{
        color: '#00FF00',
        name: 'Hacia Estación Payador',
        data: [15,0,0]
      },{
          name: 'Estación Cañaveral',
          data: [5, 0,0]
      },{
        color: '#00FF00',
          name: 'Hacia Estación Cañaveral',
          data: [10, 0,0]
      },{         
          name: 'Estación Lagos',
          data: [5, 0, 0]
      }
      ]
});
var chart = $('#container').highcharts();


/*
.controller('FirstCtrl', ['$scope', function($scope) {
   console.log("entro a mi controller");
}]);
*/
/*
function Ruta($scope, $http) {
    $http.get('http://localhost:8001/data/coordenadas.json').
        success(function(data) {
            $scope.coordenadas = data;
            console.log(data[0].Nombre);
        });
}
*/
/*
myApp.controller('FirstCtrl', function($scope,$http) {
$http.get('http://localhost:8001/data/coordenadas.json').
    success(function(data) {
        $scope.coordenadas = data;
        console.log(data[0].Nombre);
    });
});
*/

/*
function Ruta($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}
*/
