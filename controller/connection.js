//creando una instancia de factory, para crear a partir de ella indefinidos marker de estaciones y rutas
var factory = new markerPaqueteFactory(),
    mapa = new initMap();
jQuery(document).ready(function($){

       $.getJSON("http://localhost:8000/data/coordenadas.json").
           success(function(data) {
            $.coordenadas = data;
            mapa.graficarEstaciones(data);
          });

  });




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
