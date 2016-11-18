//google map custom marker icon - .png fallback for IE11
var marker_bus0 = 'img/bus-markern.svg',
  	marker_bus1 = 'img/bus-markerv.svg',
  	marker_bus2 = 'img/bus-markerm.svg',
  	marker_estacion = 'img/bus-stop.svg',
    flecha = $('.flecha'),
    flecha0 = flecha.children("a"),
    izquierda = $('.izquierda'),
    estado = true
    opcionesRutas = undefined,
    rutas = undefined,
    cajam1s = $(".cajam1s"),
    cajamm = undefined,
    cajam2s = $(".cajam2s"),
    cajamu = undefined,
    multipleM = $(".multipleM"),
    unica = $(".unica");
//funcion que devuelve los elementos de un vector si repetir
    Array.prototype.unique=function(a){
      return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
    });

    //funcion encargada de inicializar el reconocimiento de las ventanas modales por parte de los botones
    $('.modal-trigger').leanModal(open);
    //funcion encargada de abrir la ventana modal de monitoreo al cargarse la pagina web
    //$('#modal1').openModal();
    //funcion encargada de cargar las librerias graficas asosciadas a materialize
    $('select').material_select();

    //funcion encargada de procesar las categorias, devolver y graficar
    function agregarRutas(rutas) {
      this.rutas =rutas;
      individualizarCategorias();
      var opcionesSelect = [];
      agregarCategoriaModal(opcionesRutas);

        for (var i = 0; i < opcionesRutas.length; i++) {
          opcionesSelect.push("<option value="+i+">"+opcionesRutas[i]+"</option>");
        }
        $('#filtrar').append(opcionesSelect.join(" "));
        generarOpciones(rutas);
        $('select').material_select();

        //funcion que devuelve un array de objetos con las rutas seleccionas, despues de realizar el filtrado
        eleccion = $("#filtrar").change(function() {
            //rutasSeleccionadas = buscarCoincidencias(opcionesRutas[eleccion.val()])
            generarOpciones(buscarCoincidencias(opcionesRutas[eleccion.val()]));
        });
    }




/*
    botonMonitoreo.click( function () {
      modalM.openModal();
      /*
      izquierda.css('left','-314px');
      flecha0.css('transform','rotateZ(180deg)');

    });
    botonMonitoreoT.click( function () {
      modalT.openModal();
      /*
      izquierda.css('left','-314px');
      flecha0.css('transform','rotateZ(180deg)');

    });
*/
//uncion encargada de ocultar y mostrar el menu ubiado en la parte lateral izquierda
    flecha.click( function () {
      if (estado) {
        estado=false;
        izquierda.css('left','-330px');
        flecha0.css('transform','rotateZ(180deg)');
      }else {
        estado=true;
        izquierda.css('left','0px');
        flecha0.css('transform','rotateZ(0deg)');
      }

    });

//funcion que recive las rutas, buca el vector categoria de cada ruta, los concatena y obtine las categorias
//sin repetir y retorna un vector con las categorias sin repetir
function individualizarCategorias() {
  var opcionesRutas = ["Todas las rutas"];
  for (var i = 0; i < rutas.length; i++) {
    opcionesRutas = opcionesRutas.concat(rutas[i].categoria);
  }
  this.opcionesRutas = opcionesRutas.unique();
}
//funcion que agrega los criterios de clasificacion a las ventanas modales
function agregarCategoriaModal() {
  opcionesSelectm=[],
  opcionesSelectu=[];

  for (var i = 0; i < opcionesRutas.length; i++) {
    opcionesSelectm.push("Ver rutas<div class=cajar> "+opcionesRutas[i]+" </div>");
    opcionesSelectu.push("Ver rutas<div class=cajar> "+opcionesRutas[i]+"</div>");
  }
  cajam1s.append(opcionesSelectm.join(" "));
  cajamm = cajam1s.find(".cajar");
  //cajamm.eq(0).addClass("active");
  cajam2s.append(opcionesSelectu.join(" "));
  cajamu = cajam2s.find(".cajar");
  //cajamu.eq(0).addClass("active");
}
//llenado para seleccion de multiples rutas
cajam1s.on('click','div',function () {
  t =  $(this);
  console.log(t.index());
  t.addClass('active').siblings().removeClass('active');
  generarOpcionesM(buscarCoincidencias(opcionesRutas[t.index()]));
})
/*
function multiples(indice) {
  generarOpcionesM(buscarCoincidenciasN(indice));
}*/
//genera las opciones para multiples rutas en la ventana modal
function generarOpcionesM(rutasSeleccionadas) {
  cuadroRutas = [];
  for (var i = 0; i < rutasSeleccionadas.length; i++) {
    cuadroRutas.push("<p><input type=checkbox name=rutas value="+rutasSeleccionadas[i].nombre+" id="+rutasSeleccionadas[i].nombre+" /><label for="+rutasSeleccionadas[i].nombre+">"+rutasSeleccionadas[i].nombre+"</label></p>");
  }
  multipleM.children().remove();
  multipleM.append(cuadroRutas.join(" "));

}
//llenado para seleccion de una unica ruta
cajam2s.on('click','div',function () {
  t =  $(this);
  console.log(t.index());
  t.addClass('active').siblings().removeClass('active');
  generarOpcionesU(buscarCoincidencias(opcionesRutas[t.index()]));
});
//genera las opciones para multiples rutas en la ventana modal
function generarOpcionesU(rutasSeleccionadas) {
  cuadroRutas = [];
    cuadroRutas.push("<p><input name=group1 value="+rutasSeleccionadas[0].nombre+" type=radio id=u"+rutasSeleccionadas[0].nombre+" class=with-gap checked/><label for=u"+rutasSeleccionadas[0].nombre+">"+rutasSeleccionadas[0].nombre+"</label></p>");
  for (var i = 1; i < rutasSeleccionadas.length; i++) {
    cuadroRutas.push("<p><input name=group1 value="+rutasSeleccionadas[i].nombre+" type=radio id=u"+rutasSeleccionadas[i].nombre+" class=with-gap /><label for=u"+rutasSeleccionadas[i].nombre+">"+rutasSeleccionadas[i].nombre+"</label></p>");
  }
  unica.children().remove();
  unica.append(cuadroRutas.join(" "));
};

//genera las opciones para una unica ruta en la ventana modal
function generarOpciones(rutasSeleccionadas) {
  cuadroRutas = [];
  for (var i = 0; i < rutasSeleccionadas.length; i++) {
    cuadroRutas.push("<div class=caja3> <div class=logo style=background:#"+rutasSeleccionadas[i].color+";>"+rutasSeleccionadas[i].nombre+"</div>  <div class=texto>"+rutasSeleccionadas[i].descripcion+"</div><div class=switch><label><input type=checkbox><span class=lever></span></label></div></div>");
  }
  $(".bloque4").children().remove();
  $(".bloque4").append(cuadroRutas.join(" "));

};

//funcion que busca coincidencias en una categoria a partir de una palabra
function buscarCoincidencias(palabra) {
  elegidos=[];
  if (palabra == "Todas las rutas") {
    elegidos=rutas;
  }else {
    for (var i = 0; i < rutas.length; i++) {
      if (rutas[i].categoria.indexOf(palabra) !== -1) {
          elegidos.push(rutas[i]);
      }
    }
  }
  return elegidos;
};
/*
//funcion que busca coincidencias en una categoria a partir de un indice
function buscarCoincidenciasN(indice) {
  palabra=opcionesRutas[indice];
  elegidos=[];
  if (palabra == "Todas las rutas") {
    elegidos=rutas;
  }else {
    for (var i = 0; i < rutas.length; i++) {
      if (rutas[i].categoria.indexOf(palabra) !== -1) {
          elegidos.push(rutas[i]);
      }
    }
  }
  return elegidos;
};*/

//funcion que captura el click del modal que permite motirozar las rutas en lineas de tiempo
$('.amodal1').click(function () {
  seleccionadasC=[]
  //funcion que se encarga de capturar las opciones seleccionadas por el usuario
  $('input:checkbox[name=rutas]').each(function()
    {
        if($(this).is(':checked'))
        //alacenamos las rutas seleccionadas
          seleccionadasC.push($(this).val());

    });
  //en caso de que el usuario no seleccione ninguna opcion
  if (seleccionadasC.length == 0) {
    Materialize.toast('¡Porfavor, Seleccione almenos una ruta!', 5000);
  }//en caso de que el usuario solo desee monitorizar una ruta
  else if(seleccionadasC.length == 1){
    window.open('view/unicaRuta.html?ruta='+seleccionadasC.join(""));
  }//en caso de que el usuario desee monitorizar una o mas rutas
  else {
      window.open('view/multiplesRutas.html?rutas='+seleccionadasC.join(","));
    }
});
//funcion que captura el click del modal que permite motirozar una ruta en una tabla
$('.amodal2').click(function () {
  seleccionada=undefined;
  //funcion que se encarga de capturar las opciones seleccionadas por el usuario
  seleccionada=$('input[name=group1]:checked').val();
  //en caso de que el usuario no seleccione ninguna opcion
  if (seleccionada == undefined) {
    Materialize.toast('¡Porfavor, Seleccione almenos una ruta!', 5000);
  }//en caso de que el usuario desee monitorizar una tabla
  else {
    //defina la ruta de la tabla
    window.open('view/indextabla.html?ruta='+seleccionada);
    Materialize.toast('¡La ruta seleccionada es: '+seleccionada+'!', 5000);
  }
});

/*
<div class="caja3">
  <div class="logo">R1</div>
  <div class="texto">hola</div>
  <div class="switch right-align">
    <label>
      <input type="checkbox"/><span class="lever"></span>
    </label>
  </div>
</div>
/*
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
         name: 'Hacia estación cañaveral',
         data: [39,0,0]
       },{
           name: 'Estación lagos',
           data: [10, 0,0]
       },{
           name: 'Hacia estación lagos',
           data: [10, 0,0]
       },{
           name: 'Estación cañaveral',
           data: [10, 0, 0]
       }]
 });

var chart = $('#container').highcharts();
*/

//Patron factory implementado para crear los marker en el mapa
function markerPaqueteFactory(){
    this.crearPaqueteMarker = function(type,map,n){
        switch (type) {
        	case "estacion":
						console.log("Se creo un marker para una estacion");
						return markerEstacion(map,n);
						break;
					case "R1":
						console.log("Se creo un recorrido de la ruta R1");
            console.log(paqueteMarkerR1(map,n));
						return paqueteMarkerR1(map,n);
        		break;
					case "R2":
						console.log("Se creo un recorrido de la ruta R2");
						return paqueteMarkerR2(map,n);
        		break;
					case "R3":
						console.log("Se creo un recorrido de la ruta R3");
						return paqueteMarkerR3(map,n);
        		break;
        	default:
        		console.log("Nombre de la Ruta no esta definido en la funcion markerPaqueteFactory()");
        }
    }
    function markerEstacion(map,n){
      var R=[];
      for (var i = 0; i < n; i++) {
        R.push(new google.maps.Marker({
            map: map,
            icon: marker_estacion,
  					zIndex: 2,
          }));
      }
			return R;
    }
		function paqueteMarkerR1(map,n) {
      var R=[];
      for (var i = 0; i < n; i++) {
        R.push(new google.maps.Marker({
            map: map,
            icon: marker_bus0,
          }));
      }
      return R;
		}
		function paqueteMarkerR2(map,n) {
      var R=[];
      for (var i = 0; i < n; i++) {
        R.push(new google.maps.Marker({
            map: map,
            icon: marker_bus1,
          }));
      }
      return R;
		}
		function paqueteMarkerR3(map,n) {
      var R=[];
      for (var i = 0; i < n; i++) {
        R.push(new google.maps.Marker({
            map: map,
            icon: marker_bus2,
          }));
      }
      return R;
		}
};
 // fin del Patron factory

 var linksp = $(".tabs_links");
 var links = linksp.find('a');
 var items = $('.items');
 links.eq(0).add(items.eq(0)).addClass("active");
 linksp.on('click','a',function() {
   var t =$(this);
   var i = t.index();
   t.add(items.eq(i)).addClass('active').siblings().removeClass('active');
 });

function h() {
  function x() {
    console.log('hola');
  }

}
z = new h()


function initMap() {

var h=function hola() {
  console.log('hola');
}

	//set your google maps parameters
	var latitude = 7.09,
		longitude = -73.11,
		map_zoom = 13;


	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#2d313f',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style=[{
        'stylers': [{
            'lightness': 3
        }, {
            'saturation': -60
        }]
    }, {
        'featureType': 'road.local',
        'stylers': [{
            'lightness': -20
        }, {
            'hue': '#2d313f'
        }]
    }, {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [{
            'visibility': 'simplified'
        }, {
            'lightness': -20
        }, {
            'gamma': 2.15
        }, {
            'hue': '#2d313f'
        }]
    }, {
        'featureType': 'water',
        'stylers': [{
            'gamma': 0.51
        }, {
            'saturation': 17
        }, {
            'lightness': -7
        }, {
            'hue': '#0066ff'
        }]
    }, {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [{
            'lightness': -21
        }, {
            'hue': '#2d313f'
        }]
    }, {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [{
            'visibility': 'simplified'
        }, {
            'saturation': -82
        }, {
            'lightness': -20
        }, {
            'hue': '#2d313f'
        }]
    }, {
        'featureType': 'road.arterial',
        'elementType': 'labels',
        'stylers': [{
            'saturation': -90
        }, {
            'lightness': 1
        }, {
            'hue': '#2d313f'
        }]
    }, {
        'featureType': 'transit.station.bus',
        'stylers': [{
            'visibility': 'off'
        }]
    }, {
        'featureType': 'transit.station.rail',
        'stylers': [{
            'visibility': 'off'
        }]
    }, {
        'featureType': 'administrative.land_parcel',
        'elementType': 'labels',
        'stylers': [{
            'visibility': 'off'
        }]
    }, {
        'featureType': 'poi',
        'elementType': 'labels',
        'stylers': [{
            'visibility': 'off'
        }]
    }];

	//set google map options
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,

      	styles: style,
    }
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('map'), map_options);




  //funcion encargada de colocar los marcadores de todas las estaciones sobre el mapa
  this.graficarEstaciones =function graficarEstaciones(arrayEstaciones) {
    //creamos un paquete de Marker
   	 var m=factory.crearPaqueteMarker("estacion",map,arrayEstaciones.length);
     for (var i = 0; i < arrayEstaciones.length; i++) {
				 m[i].setPosition(new google.maps.LatLng(arrayEstaciones[i].latitud,arrayEstaciones[i].longitud));
         infoW(arrayEstaciones[i].Nombre,m[i]);
     }
  }



//agrega un mensaje al
function infoW(texto,marker) {
	var infowindow = new google.maps.InfoWindow({
		content:texto
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
			});
}

	//cuadro de informacion al hacer click en el marcado, para informacion dinamica con un solo cuadro
	var infowindow = new google.maps.InfoWindow({
			content:null
			});
	function infoWD(texto,marker) {
	 infowindow.setContent(texto)

		google.maps.event.addListener(marker, 'click', function() {
	    infowindow.open(map,marker);
	    });
}










/*
//marcador para capturar coordenadas
 function openInfoWindow(marker10) {
    var markerLatLng = marker10.getPosition();
    infoWindow1.setContent([
        '"latitud":',
        markerLatLng.lat(),
        ',"longitud":',
        markerLatLng.lng(),
        ''
    ].join(''));
    infoWindow1.open(map, marker10);
 }

infoWindow1 = new google.maps.InfoWindow();

 var marker10 = new google.maps.Marker({
 		position: new google.maps.LatLng(7.071729,-73.107195),
 		map: map,
		draggable: true,
 		visible: true,
 });

 google.maps.event.addListener(marker10, 'click', function(){
        openInfoWindow(marker10);
    });
*/
var R2=factory.crearPaqueteMarker("R2",map,5);

timer=setInterval(asi,1000);
var b=0;
//variable para almacenar valores de posicion conceptual y poder saber si ubo un camio de posicion
var ant=[];
function asi() {
		$.getJSON("http://localhost:8000/data/ruta1.json", function(datos) {
				$.coordenadas=datos;
        //if para resetear la b cuando se llegue al final de la prueba
        if(b<datos[0].coordenadas.length)
        {

          //recorremos todos los datos de la ruta especifica
        for (var i = 0; i < datos.length; i++) {
/*
          if (ant[i]==undefined || (ant[i]-datos[i].coordenadas[b].id)>0 ) {
            for (var j = 0; j < chart.series.length; j++) {
              chart.series[j].data[i+1].update(0);
              }

          }
*/
          moverMarker(datos[i].coordenadas[b],R2[i]);

          //recorridosGrafica(datos[i].coordenadas[b],i);

          ant[i]=datos[i].coordenadas[b].id;

          }	b++
        }else {
          b=0
        }
}

)};
/*
function construir(data, b) {
  //if para resetear la b cuando se llegue al final de la prueba
  if(b<datos[0].coordenadas.length)
  {
    //recorremos todos los datos de la ruta especifica
  for (var i = 0; i < datos.length; i++) {

    if (ant[i]==undefined || (ant[i]-datos[i].coordenadas[b].id)>0 ) {
      for (var j = 0; j < chart.series.length; j++) {
        chart.series[j].data[i+1].update(0);
        }

    }

    moverMarker(datos[i].coordenadas[b],R2[i]);

    recorridosGrafica(datos[i].coordenadas[b],i);

    ant[i]=datos[i].coordenadas[b].id;

    }	b++
  }else {
    b=0
  }
};

*/


function moverMarker(recorrido,marker) {
	marker.setPosition(new google.maps.LatLng(recorrido.latitud,recorrido.longitud));
	};
/*
function recorridosGrafica(rutas,posicion) {
	switch (posicion) {
		case 0:
          chart.series[-rutas.id+3].data[posicion+1].update(chart.series[-rutas.id+3].data[posicion+1].y+=1);

			break;
		case 1:

				chart.series[-rutas.id+3].data[posicion+1].update(chart.series[-rutas.id+3].data[posicion+1].y+=1);

			break;
		default:

	}
}
*/

//esperamos a que se modifique el valor seleccionado de la lista desplegable y lo capturamos
var select=$("#lista").change(function() {
	//detenemos el Intervalo de tiempo de la funcion setInterval
	clearInterval(timer);
	//tomamos el valor obtenido de la lista desplegable y modificamos el intervalo de tiempo de actualizacion
	switch (select.val()) {
		case "1":
			//actualizacion de 1/10 de segundo
      //Nota: cuando el número es 200 ocurre un erro el cual he solucionado cambiando este número por 100
      //aunque no aparece el error es aconsesaje realizar mas pruebas
			timer = setInterval(asi, 100);
			break;
		case "2":
			//actualizacion de 1 segundo
			timer = setInterval(asi, 1000);
			break;
		case "3":
			//actualizacion de 5 segundos
			timer = setInterval(asi, 5000);
			break;
		default:
			//por defecto el valor es 1 segundo
			timer = setInterval(asi, 1000);
	}

});







	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
	  	var controlUIzoomIn= document.getElementById('map-zoom-in'),
	  		controlUIzoomOut= document.getElementById('map-zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//insert the zoom div on the top left of the map
  	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);

	google.maps.event.addDomListener(window, "resize", function() {
	    var center = map.getCenter();
	    google.maps.event.trigger(map, "resize");
	    map.setCenter(center);
});



};
