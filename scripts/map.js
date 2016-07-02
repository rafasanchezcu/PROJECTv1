
//Patron factory implementado para crear los marker en el mapa
function markerPaqueteFactory(){
    this.crearPaqueteMarker = function(type,map,n){
        switch (type) {
        	case "estacion":
						console.log("Se creo un marker para una estacion");
						return markerEstacion(map,n);
						break;
					case "T1":
						console.log("Se creo un recorrido de la ruta T1");
            console.log(paqueteMarkerT1(map,n));
						return paqueteMarkerT1(map,n);
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


function initMap() {
	//set your google maps parameters
	var latitude = 7.09,
		longitude = -73.11,
		map_zoom = 14;


	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#2d313f',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style= [
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},
	    {	//poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    },
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		//style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		}
	];
 
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

	//creando una instancia de factory, para crear a partir de ella indefinidos marker de estaciones y rutas
  var factory = new markerPaqueteFactory();
  //funcion encargada de colocar los marcadores de todas las estaciones sobre el mapa
  function graficarEstaciones(arrayEstaciones,map) {
    //creamos un paquete de Marker
   	 var m=factory.crearPaqueteMarker("estacion",map,arrayEstaciones.length);
     for (var i = 0; i < arrayEstaciones.length; i++) {
				 m[i].setPosition(new google.maps.LatLng(arrayEstaciones[i].latitud,arrayEstaciones[i].longitud));
         infoW(arrayEstaciones[i].Nombre,m[i]);
     }
  }

  $.getJSON("http://localhost:8080/docs/api/ProjectSIGMAT/data/coordenadas.json", function(datos) {
     $.coordenadas=datos;
     graficarEstaciones(datos,map);
       })

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

var R2=factory.crearPaqueteMarker("R2",map,5);

timer=setInterval(asi,1000);
var b=0;
//variable para almacenar valores de posicion conceptual y poder saber si ubo un camio de posicion
var ant=[];
function asi() {
		$.getJSON("http://localhost:8080/docs/api/ProjectSIGMAT/data/ruta1.json", function(datos) {
				$.coordenadas=datos;
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
})};

var moverMarker = function(recorrido,marker) {
	marker.setPosition(new google.maps.LatLng(recorrido.latitud,recorrido.longitud));
	};

function recorridosGrafica(rutas,posicion) {
	switch (posicion) {
		case 0:
      
          chart.series[-rutas.id+18].data[posicion+1].update(chart.series[-rutas.id+18].data[posicion+1].y+=1);
        
			break;
		case 1:

				chart.series[-rutas.id+18].data[posicion+1].update(chart.series[-rutas.id+18].data[posicion+1].y+=1);

			break;
		default:

	}
}

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




//esperamos a que se modifique el valor seleccionado de la lista desplegable y lo capturamos
var select=$("#lista").change(function() {
	//detenemos el Intervalo de tiempo de la funcion setInterval
	clearInterval(timer);
	//tomamos el valor obtenido de la lista desplegable y modificamos el intervalo de tiempo de actualizacion
	switch (select.val()) {
		case "1":
			//actualizacion de 1/10 de segundo
			timer = setInterval(asi, 1000);
			break;
		
		case "2":
			//actualizacion de 5 segundos
			timer = setInterval(asi, 5000);
			break;
		default:
			//por defecto el valor es 1 segundo
			timer = setInterval(asi, 1000);
	}

});

}

