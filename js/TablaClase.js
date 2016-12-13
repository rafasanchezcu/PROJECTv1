var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.exporter']);

var rutaSeleccionada = window.location.search.split("=")[1];
    console.log(rutaSeleccionada);

app.controller('MainCtrl', ['$scope', '$http','i18nService', function ($scope, $http, i18nService ) {

  
 $scope.deleteRow = function(row) {
    var index = $scope.gridOptions.data.indexOf(row.entity);  
    $scope.gridOptions.data.splice(index, 1);
  };

  
    
    $scope.gridOptions = {
    
    enableSorting: true,
    minimumColumnSize: 90,
     showGridFooter:true,
    columnDefs: [
      
      {name: 'Eliminar', width: '7%', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.deleteRow(row)">Eliminar</button>'},
      {field: 'Clave', width: '6%'},
      {field: 'Conductor', width: '8%'},
      {field: 'Placa', width: '7%'},
      {field: 'Ruta', width: '6%'},
      {field: 'HoraSalidaEstimada', name:'H.S.E', width: '7%'},
      {field: 'HoraSalidaReal', name:'H.S.R', width: '7%'},
      {field: 'HorarioEstimado.ST1', name:'H.E-est1', width: '8%'},
      {field: 'HorarioReal.ST1', name:'H.R-est1', width: '8%',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) < 'HorarioEstimado.ST1') {
            return 'red';
          }
        }
      },
      {field: 'HorarioEstimado.ST2', name:'H.E-est2', width: '8%'},
      {field: 'HorarioReal.ST2', name:'H.R-est2', width: '8%'},
      {field: 'HorarioEstimado.ST3', name:'H.E-est3', width: '8%'},
      {field: 'HorarioReal.ST3', name:'H.R-est3', width: '8%'},
      {field: 'HorarioEstimado.ST4', name:'H.E-est4', width: '8%'},
      {field: 'HorarioReal.ST4', name:'H.R-est4', width: '8%'},
      {field: 'HorarioEstimado.ST5', name:'H.E-est5', width: '8%'},
      {field: 'HorarioReal.ST5', name:'H.R-est5', width: '8%'},
      {field: 'HorarioReal.ST6', name:'H.R-est6', width: '8%'}

    ],
    rowHeight: 35,
    exporterMenuCsv: false,
    enableGridMenu: true,
    enableSelectAll: true,
    //exporterCsvFilename: 'myFile.csv',
    exporterPdfDefaultStyle: {fontSize: 8},
    exporterPdfTableStyle: {margin: [10, 10, 10, 10]},
    exporterPdfTableHeaderStyle: {fontSize: 9, bold: true, italics: true, color: 'red'},
    exporterPdfHeader: { text: "Ruta:", style: 'headerStyle' },
    exporterPdfFooter: function ( currentPage, pageCount ) {
      return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
    },
    exporterPdfCustomFormatter: function ( docDefinition ) {
      docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
      docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
      return docDefinition;
    },
    exporterPdfOrientation: 'landscape',
    exporterPdfPageSize: 'LETTER',
    exporterPdfMaxGridWidth: 450,
    //exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
    }
  };
  i18nService.setCurrentLang('es');

  function refrescarTiempo() {
  $http.get("../data/Tabla"+rutaSeleccionada+".json")
    .success(function(data) {
      $scope.gridOptions.data = data;
    });  
  };
  window.setInterval(refrescarTiempo,5000);
}]);


