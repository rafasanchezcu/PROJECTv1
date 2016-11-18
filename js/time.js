

  jQuery(document).ready(function($){

    //capturamos la url, y obtenemos los valores de las rutas que el usuario desea monitorizar
    var rutasSeleccionada = window.location.search.split("=")[1];
    console.log(rutasSeleccionada);



    $.getJSON("http://localhost:8000/data/rutas.json").
      success(function(data) {
      $.rutas = data;

    var disEE = 120, //esta variable define la distancia entre estaciones en pixeles
        paradas=data[0].paradas, //el indice marca la ruta, en este caso se selecciona la primera ruta del json
        nEstaciones=paradas.length;
/*
    for (var j = 0; j < data.length; j++) {
      console.log(data.length+"   "+rutasSeleccionada+"    "+data[j].nombre);
      if (rutasSeleccionada == data[j].nombre ) {
        itinerarios.push(new Recorridos(data[j].nombre,disEE,data[j].paradas,nRutas));
      }*/

        //hacemos este llamado para capturar l número de buses iniciales
        $.getJSON("http://localhost:8000/data/busesR1.json").
             success(function(dataB) {
             $.bus = dataB;
              var nBuses=dataB.length;

                  it =new Itinerario(nBuses,disEE,paradas);

});

});

                  $.getJSON("http://localhost:8000/data/busesR1.json").
                             success(function(dataB) {
                               $.bus = dataB;

                    b=0;
            setInterval(function () {

                         if (b<dataB[0].distancia.length) {
                           //console.log(data[0].Nombre);
                           //recorremos el
                           for (var i = 0; i < dataB.length; i++) {
                             setPosTimelineB($(".bus").eq(i),dataB[i].distancia[b]);
                           }
                       b++;
                     }else {
                       b=0;
                     }
             },1000);
                 });

   })
