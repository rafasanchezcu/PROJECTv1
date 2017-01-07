var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.exporter']);

var rutaSeleccionada = window.location.search.split("=")[1];
    console.log(rutaSeleccionada);

app.controller('MainCtrl', ['$scope', '$http','i18nService', function ($scope, $http, i18nService ) {

 /*$scope.deleteRow = function(row) {
    var index = $scope.gridOptions.data.indexOf(row.entity);  
    $scope.gridOptions.data.splice(index, 1);
  };
*/
 $scope.cellClicked = function (row, col){ alert('Ruta: '+row.entity.Recorrido +'\n'+'Hora Salida Estimada: '+row.entity.HoraSalidaEstimada +'\n'+  'Hora Salida Real: '+ row.entity.HoraSalidaReal);};
 $scope.cellClicked1 = function (row, col){ alert('Ruta: '+row.entity.Recorrido +'\n'+'Hora LLegada Estimada E1: '+row.entity.HorarioEstimado.ST1 +'\n'+  'Hora LLegada Real E1: '+ row.entity.HorarioReal.ST1);};$scope.cellClicked2 = function (row, col){ alert('Ruta: '+row.entity.Recorrido +'\n'+'Hora LLegada Estimada E2: '+row.entity.HorarioEstimado.ST2 +'\n'+  'Hora LLegada Real E2: '+ row.entity.HorarioReal.ST2);};$scope.cellClicked3 = function (row, col){ alert('Ruta: '+row.entity.Recorrido +'\n'+'Hora LLegada Estimada E3: '+row.entity.HorarioEstimado.ST3 +'\n'+  'Hora LLegada Real E3: '+ row.entity.HorarioReal.ST3);};$scope.cellClicked4 = function (row, col){ alert('Ruta: '+row.entity.Recorrido +'\n'+'Hora LLegada Estimada E4: '+row.entity.HorarioEstimado.ST4 +'\n'+  'Hora LLegada Real E4: '+ row.entity.HorarioReal.ST4);};$scope.cellClicked5 = function (row, col){ alert('Ruta: '+row.entity.Recorrido +'\n'+'Hora LLegada Estimada E5: '+row.entity.HorarioEstimado.ST5 +'\n'+  'Hora LLegada Real E5: '+ row.entity.HorarioReal.ST5);};

    
    $scope.gridOptions = {
    
    enableSorting: true,
    minimumColumnSize: 90,
     showGridFooter:true,
    columnDefs: [
      
      // {name: 'Eliminar', width: '7%', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.deleteRow(row)">Eliminar</button>'},
      {field: 'Clave', width: '6%'},
      {field: 'Bus', width: '8%'},
      {field: 'Conductor', width: '9%'},
      {field: 'Recorrido',  name:'Ruta', width: '6%'},
      {field: 'EstaTerminado',  name:'Estado', width: '7%', 
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) == true) {
            return 'red1';
          }
          else {
            return 'green';
          }
        }
      },
      {field: 'HoraSalidaEstimada', name:'H.S.E',  visible:false, width: '7%'},
      {field: 'HoraSalidaReal', name:'H.S.R', width: '7%',
     cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HoraSalidaEstimada) {
            return 'red';
          }
        }, 
        cellTemplate:'<div ng-click="grid.appScope.cellClicked(row,col)"  class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      },
      {field: 'HorarioEstimado.ST1', name:'H.E-est1', visible:false, width: '8%'},
      {field: 'HorarioReal.ST1', name:'H.R.E1', width: '8%',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST1) {
            return 'red';
          }
        },
        cellTemplate:'<div ng-click="grid.appScope.cellClicked1(row,col)"  class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      },
      {field: 'HorarioEstimado.ST2', name:'H.E-est2', visible: false, width: '8%'},
      {field: 'HorarioReal.ST2', name:'H.R.E2', width: '8%',
      cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST2) {
            return 'red';
          }
        }, 
        cellTemplate:'<div ng-click="grid.appScope.cellClicked2(row,col)"  class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      },
      {field: 'HorarioEstimado.ST3', name:'H.E-est3', visible: false, width: '8%'},
      {field: 'HorarioReal.ST3', name:'H.R.E3', width: '8%',
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST3) {
            return 'red';
          }
        },
        cellTemplate:'<div ng-click="grid.appScope.cellClicked3(row,col)"  class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      },
      {field: 'HorarioEstimado.ST4', name:'H.E-est4', visible: false, width: '8%'},
      {field: 'HorarioReal.ST4', name:'H.R.E4', width: '8%', 
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST1) {
            return 'red';
          }
        },
        cellTemplate:'<div ng-click="grid.appScope.cellClicked4(row,col)"  class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      },
      {field: 'HorarioEstimado.ST5', name:'H.E-est5', visible: false, width: '8%'},
      {field: 'HorarioReal.ST5', name:'H.R.E5', width: '8%', 
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST1) {
            return 'red';
          }
        },
        cellTemplate:'<div ng-click="grid.appScope.cellClicked5(row,col)"  class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      }

    ],
    maxWidth:9,
    minWidth:6,
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
  $http.get("http://localhost:8000/data/Tabla"+rutaSeleccionada+".json")
    .success(function(data) {
      $scope.gridOptions.data = data;
    });  
  };
  window.setInterval(refrescarTiempo,5000);
}]);



