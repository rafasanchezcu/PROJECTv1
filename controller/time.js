

  jQuery(document).ready(function($){
    
    //capturamos la url, y obtenemos los valores de las rutas que el usuario desea monitorizar
    var rutaSeleccionada = window.location.search.split("=")[1];
    console.log(rutaSeleccionada);
    $(".bloque1").html("RUTA "+rutaSeleccionada);
    
    $.getJSON("http://localhost:8000/data/rutas.json").
      success(function(data) {
      $.rutas = data;

      //buscamos la ruta pertenecie en el array de rutas, para obtener la informacion de la ruta seleccionada
      for (var i = 0; i < data.length; i++) {
        if (data[i].nombre == rutaSeleccionada) {
          //alamacenamos los valores la ruta seleccionada, como el nombre de las estaciones
          rutaElegida = data[i];

        }
      }
    var disEE = 100, //esta variable define la distancia entre estaciones en pixeles
        paradas = rutaElegida.paradas; //el indice marca la ruta, en este caso se selecciona la primera ruta del json

        it =new Itinerario(disEE,paradas);
    //creamos un nuevo itinerario, que sera un objeto que contiene todos los recorridos
    //var it = new itinerario(disEE,rutaElegida.paradas)
/*
    for (var j = 0; j < data.length; j++) {
      console.log(data.length+"   "+rutasSeleccionada+"    "+data[j].nombre);
      if (rutasSeleccionada == data[j].nombre ) {
        itinerarios.push(new Recorridos(data[j].nombre,disEE,data[j].paradas,nRutas));
      }*/


});

//hacemos este llamado para capturar l número de buses iniciales
$.getJSON("http://localhost:8000/data/buses"+rutaSeleccionada+".json").
     success(function(dataB) {
     $.bus = dataB;
      var buses = [],
          recorridos = dataB.recorridos;

        for (var i = 0; i < recorridos.length; i++) {
          buses.push(recorridos[i].idRecorrido);
          it.agregarRecorrido(recorridos[i].idRecorrido,recorridos[i].horaSalidaReal,recorridos[i].id);
        }
        console.log(buses);
              b=0;
      setInterval(function () {

         if (b<recorridos[0].distancia.length) {
           //console.log(data[0].Nombre);
           //recorremos el

           indices =it.getVectorIndices(buses)
           //console.log(busesAceptados);

           for (var i = 0; i < indices.length; i++) {
             //console.log(busesAceptados.length);
             actualizarBus($("#recorrido"+recorridos[indices[i]].idRecorrido+" .linei"),recorridos[indices[i]].distancia[b]);
              
           }
       b++;
     }else {
       b=0;
     }
   },1000);// tiempo en milisegundos, cada 1s segundo se hace un request(peticion) al servidor
           });

   })
