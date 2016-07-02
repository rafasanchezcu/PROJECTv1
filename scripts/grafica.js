//google map custom marker icon - .png fallback for IE11
var marker_bus0 = 'img/busmorado.svg',
  	marker_bus1 = 'img/bus.svg',
  	marker_bus2 = 'img/busverde.svg',
  	marker_estacion = 'img/busestacionazul.svg';
    

//codigo encargado de crear la grafica

 $('#container').highcharts({
     chart: {
         type: 'bar'
     },
     title: {
         text: 'Contraste de hipóstesis ideal'
     },
     xAxis: {
         categories: ['Hipótesis ideal', 'Simulación 1<br>Hora salida: 6:00', 'Simulación 2<br>Hora salida: 6:10']
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
     series: [{
        name: 'Estación quebradaseca',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación quebradaseca',
         data: [5,0,0]
       },{
        name: 'Estación san mateo',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación san mateo',
         data: [5,0,0]
       },{
        name: 'Estación chorreras',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación chorreras',
         data: [10,0,0]
       },{
        name: 'Estación la rosita',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación la rosita',
         data: [10,0,0]
       },{
        name: 'Estación la isla',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación la isla',
         data: [15,0,0]
       },{
        name: 'Estación diamante',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación diamante',
         data: [10,0,0]
       },{
         name: 'Estación provenza',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación provenza',
         data: [10,0,0]
       },{
       	 color: '#8A0868',
         name: 'Estación payador',
         data: [5,0,0]
       },{
       	color: '#00FF00',
         name: 'Hacia estación payador',
         data: [15,0,0]
       },{
       	   color: '#0000FF',
           name: 'Estación cañaveral',
           data: [5, 0,0]
       },{
       	color: '#00FF00',  
           name: 'Hacia estación cañaveral',
           data: [10, 0,0]
       },{
       	   color: '#B40404',  
           name: 'Estación lagos',
           data: [10, 0, 0]
       }]
 });

var chart = $('#container').highcharts();

var linksp = $(".tabs_links");
 var links = linksp.find('a');
 var items = $('.items');
 links.eq(0).add(items.eq(0)).addClass("active");
 linksp.on('click','a',function() {
   var t =$(this);
   var i = t.index();
   t.add(items.eq(i)).addClass('active').siblings().removeClass('active');
 });