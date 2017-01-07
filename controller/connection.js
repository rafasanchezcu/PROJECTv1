//creando una instancia de factory, para crear a partir de ella indefinidos marker de estaciones y rutas
var factory = new markerPaqueteFactory();
var factory1 = new eliminarmarkerPaqueteFactory();
var factory2 = new markerPaqueteFactoryestacionesyparadas();
var factory3 = new eliminarmarkerPaqueteFactoryestacionesyparadas();
    mapa = new initMap();
jQuery(document).ready(function($){



      $.getJSON("http://localhost:8000/data/rutas.json").
          success(function(data) {
           $.rutas = data;
            //Agrega las rutas luego de filtrarlas a partir de sus caracteristicas mas relevantes
           agregarRutas(data,data[0].categoria);
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
