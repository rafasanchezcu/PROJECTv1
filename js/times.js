  jQuery(document).ready(function($){
    //capturamos la url, y obtenemos los valores de las rutas que el usuario desea monitorizar
    var rutasSeleccionadas = window.location.search.split("=")[1].split(",");
    console.log(rutasSeleccionadas);

    $.getJSON("http://localhost:8000/data/rutas.json").
      success(function(data) {
      $.rutas = data;

    var disEE=120, //esta variable define la distancia entre estaciones en pixeles
        paradas = data[0].paradas, //el indice marca la ruta, en este caso se selecciona la primera ruta del json
        nombreRuta = data[0].nombre,
        nEstaciones = paradas.length,
        itinerarios = [], //alacenamos cada una delas rutas
        idRutas = 0;
  /*En el siguiente for miramos y agregamos cuales de las rutas que selecciono el usuario son las que se deben mostrar
  */
    for (var i = 0; i < rutasSeleccionadas.length; i++) {
      for (var j = 0; j < data.length; j++) {
        //console.log(data.length+"   "+rutasSeleccionadas[i]+"    "+data[j].nombre);
        if (rutasSeleccionadas[i] == data[j].nombre ) {
          itinerarios.push(new Recorridos(data[j].nombre,disEE,data[j].paradas,idRutas));
          idRutas++;

        }

      }
    }//*/
    //parametros necesarios(obligatorios), hora de salida, numero de buses, distancia entre estaciones, vector de paradas
    //ese vector viene del .json tiene un formato especifico, y un id del numero del recorrido segun el día
/*
    it =new Recorridos(nombreRuta,disEE,paradas,0);
    it1 =new Recorridos(data[1].nombre,disEE,data[1].paradas,1);
    it2 =new Recorridos(data[2].nombre,disEE,data[2].paradas,2);
    it3 =new Recorridos(data[2].nombre,disEE,data[2].paradas,3);*/




      $.getJSON("http://localhost:8000/data/busesR1.json").
                 success(function(dataB) {
                   $.bus = dataB;
                   for (var i = itinerarios.length - 1; i >= 0; i--) {
                     itinerarios[i].agregarBuses(3);
                   };
       
        var b=0,
            z=0,
            vectorBuses=$(".bus");

            setInterval(function () {

                         if (b<dataB.recorridos[0].distancia.length) {

                           //console.log(data[0].Nombre);
                           //recorremos el
                           for (var i = 0; i < dataB.recorridos.length; i++) {
                             setPosTimelineB(vectorBuses.eq(i),dataB.recorridos[i].distancia[b]);
                             setPosTimelineB(vectorBuses.eq(3+i),dataB.recorridos[i].distancia[b]);
                             setPosTimelineB(vectorBuses.eq(6+i),dataB.recorridos[i].distancia[b]);
                           }
                       b++;
                     }else {
                       b=0;
                     }
             },1000);
                 });
});
   })
