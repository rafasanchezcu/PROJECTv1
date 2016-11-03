  jQuery(document).ready(function($){
    $.getJSON("http://localhost:8080/docs/api/ULTIMAVERSION/data/rutas.json").
      success(function(data) {
      $.rutas = data;

    var disEE=120, //esta variable define la distancia entre estaciones en pixeles
        paradas=data[0].paradas, //el indice marca la ruta, en este caso se selecciona la primera ruta del json
        nombreRuta=data[0].nombre,
        nEstaciones=paradas.length;

    //parametros necesarios(obligatorios), hora de salida, numero de buses, distancia entre estaciones, vector de paradas
    //ese vector viene del .json tiene un formato especifico, y un id del numero del recorrido segun el día
    it =new Recorridos(nombreRuta,disEE,paradas,0);
    it1 =new Recorridos(data[1].nombre,disEE,data[1].paradas,1);
    it2 =new Recorridos(data[2].nombre,disEE,data[2].paradas,2);
    it3 =new Recorridos(data[2].nombre,disEE,data[2].paradas,3);




                  $.getJSON("http://localhost:8080/docs/api/ULTIMAVERSION/data/busesR1.json").
                             success(function(dataB) {
                               $.bus = dataB;
                               it.agregarBuses(3);
                               it1.agregarBuses(3);
                               it2.agregarBuses(3);
                    var b=0,
                        z=0,
                        vectorBuses=$(".bus");

            setInterval(function () {

                         if (b<dataB[0].distancia.length) {


                           //console.log(data[0].Nombre);
                           //recorremos el
                           for (var i = 0; i < dataB.length; i++) {
                             setPosTimelineB(vectorBuses.eq(i),dataB[i].distancia[b]);
                             setPosTimelineB(vectorBuses.eq(3+i),dataB[i].distancia[b]);
                             setPosTimelineB(vectorBuses.eq(6+i),dataB[i].distancia[b]);
                           }
                       b++;
                     }else {
                       b=0;
                     }
             },1000);
                 });
});
   })
