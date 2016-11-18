var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.exporter']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  
 $scope.deleteRow = function(row) {
    var index = $scope.gridOptions.data.indexOf(row.entity);  
    $scope.gridOptions.data.splice(index, 1);
  };

    $scope.gridOptions = {
    enableHorizontalScrollbar: 0,
    enableSorting: true,
    columnDefs: [
      
      {name: 'Eliminar', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.deleteRow(row)">Eliminar</button>'},
      {field: 'Clave'},
      {field: 'Conductor'},
      {field: 'Placa'},
      {field: 'Ruta'},
      {field: 'HoraSalidaEstimada', name:'H.S.E'},
      {field: 'HoraSalidaReal', name:'H.S.R'},
      {field: 'HorarioEstimado.ST1', name:'H.E-est1'},
      {field: 'HorarioReal.ST1', name:'H.R-est1',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > '12:15:00') {
            return 'red';
          }
        }
      },
      {field: 'HorarioEstimado.ST2', name:'H.E-est2'},
      {field: 'HorarioReal.ST2', name:'H.R-est2'},
      {field: 'HorarioEstimado.ST3', name:'H.E-est3'},
      {field: 'HorarioReal.ST3', name:'H.R-est3'},
      {field: 'HorarioEstimado.ST4', name:'H.E-est4'},
      {field: 'HorarioReal.ST4', name:'H.R-est4'},
      {field: 'HorarioEstimado.ST5', name:'H.E-est5'},
      {field: 'HorarioReal.ST5', name:'H.R-est5'}
    ],
    
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

  $http.get('../data/Tabla.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
}]);


