var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.exporter']);

var rutaSeleccionada = window.location.search.split("=")[1];
    console.log(rutaSeleccionada);

app.controller('MainCtrl', ['$scope', '$http','i18nService', function ($scope, $http, i18nService ) {

 /*$scope.deleteRow = function(row) {
    var index = $scope.gridOptions.data.indexOf(row.entity);  
    $scope.gridOptions.data.splice(index, 1);
  };
*/

 $scope.cellClicked = function (row, col){
  alert('Hora LLegada Estimada: '+row.entity.HorarioEstimado.ST2 +'\n'+  'Hora LLegada Real: '+ row.entity.HorarioReal.ST2);
  };
  
    
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
      {field: 'HoraSalidaEstimada', name:'H.S.E', width: '7%'},
      {field: 'HoraSalidaReal', name:'H.S.R', width: '7%'},
      {field: 'HorarioEstimado.ST1', name:'H.E-est1', visible:false, width: '8%'},
      {field: 'HorarioReal.ST1', name:'HR-est1', width: '8%',
        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST1) {
            return 'red';
          }
        }
      },
      {field: 'HorarioEstimado.ST2', name:'H.E-est2', visible: false, width: '8%'},
      {field: 'HorarioReal.ST2', name:'HR-est2', width: '8%',
      cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST2) {
            return 'red';
          }
        }, 
        cellTemplate:'<div ng-click="grid.appScope.cellClicked(row,col)"  class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      },
      {field: 'HorarioEstimado.ST3', name:'H.E-est3', visible: false, width: '8%'},
      {field: 'HorarioReal.ST3', name:'HR-est3', width: '8%',
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST3) {
            return 'red';
          }
        }
      },
      {field: 'HorarioEstimado.ST4', name:'H.E-est4', visible: false, width: '8%'},
      {field: 'HorarioReal.ST4', name:'HR-est4', width: '8%', 
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST1) {
            return 'red';
          }
        }
      },
      {field: 'HorarioEstimado.ST5', name:'H.E-est5', visible: false, width: '8%'},
      {field: 'HorarioReal.ST5', name:'HR-est5', width: '8%', 
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) > row.entity.HorarioEstimado.ST1) {
            return 'red';
          }
        }
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
  $http.get("../data/Tabla"+rutaSeleccionada+".json")
    .success(function(data) {
      $scope.gridOptions.data = data;
    });  
  };
  window.setInterval(refrescarTiempo,5000);
}]);


