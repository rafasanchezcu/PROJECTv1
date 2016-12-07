
/*
Author: Antonio Cortes
esta clase se usa para dministrar los recorridos, cuando solo se cuenta con una ruta
*/
function Itinerario(disEE,paradas) {
  var nEstaciones=paradas.length;
      agregarCabecera(nEstaciones,paradas);
  var caja = $(".caja"), //raiz para la creacion de las lineas de tiempo para los buses
      retorno = crearEstructura(),
      timeline = retorno[0],
      timelineWidth = retorno[1],
      estBus = retorno[2],
      busesAceptados = [];
      //agregando todos los buses de los que se dispone y ocultandolos para usarlos cuando sea necesario

      /*
      Estas funciones se encargan de permitir el desplazamiento horizontal en la linea de tiempo
      */

      //agregarRecorridosFaltantes(nBuses);


  // timeline.addClass('loaded');
function crearEstructura() {
  caja.append("<div class=timeline0><div class=line><ol class=linei id=recorrido></ol> </div> <div class=datos>hora"+0+" de salida</div></div>");
  timeline0 = $(".timeline0"),
  datos = timeline0.children(".datos"),
  line = timeline0.children(".line"),
  lineG = line.children(".linei"),
  estaciones = [],
  lineasContol = [],
  retorno = [];
  //agregamos las lineas de estaciones, se les asigno la clase estacione1 para poder manejar unos estylos diferente (css)
  for (var i = 0; i < nEstaciones; i++) {
    estaciones.push("<li class=estacion1></li>")
    //lineG.append("<li class=estacion1></li>")
  }
  lineG.append(estaciones.join(""));
  //creamos las lineas de control que nos indicaran de forma parcial el estado del recorrido
  for (var i = 0; i < nEstaciones; i++) {
    lineasContol.push("<div class=lineT style=left:"+disEE*i+"px></div>")
    //lineG.append("<li class=estacion1></li>")
  }
    lineG.append(lineasContol.join(""));
  // se hace la nueva llamada desde este lugar debido a que en la anteror linea se estaban agregando las estaciones
  // y en ese momento no se contaba con esos elementos en el DOM
  var lineLi=lineG.children(".estacion1");
    for (var i = 0; i < nEstaciones; i++) {
          setPosTimelineE(i,disEE,lineLi.eq(i));
        }
      retorno.push($('.timeline'));
      retorno.push(setTimelineWidth(disEE,retorno[0],nEstaciones));
      retorno.push($('#recorrido').html());
      timeline0.remove();

 return retorno;
}
//parte de este codigo es extraido de la pagina https://codyhouse.co/gem/horizontal-timeline/
 //detect click on the next arrow
timeline.find('.mover').on('click', '.next', function(event){
  event.preventDefault();
  updateSlide(timeline, timelineWidth, 'next');
  timeline0=$('.timeline0');
  for (var i = 0; i < timeline0.length; i++) {
      updateSlide(timeline0.eq(i), timelineWidth, 'next');

  }
});
 //detect click on the prev arrow
timeline.find('.mover').on('click', '.prev', function(event){
  event.preventDefault();
  updateSlide(timeline, timelineWidth, 'prev');
  for (var i = 0; i < timeline0.length; i++) {
      updateSlide(timeline0.eq(i), timelineWidth, 'prev');
  }

});

/*

*/
//funciones de los botones
$("#btn1").click(function(){
    it.agregarRecorrido("hola todos");
    timeline0=caja.children(".timeline0");
});
$("#btn2").click(function(){
    it.eliminarRecorrido(0);
    timeline0=caja.children(".timeline0");
});
$("#btn3").click(function(){
    $('.bus').eq(0).css('background-image','url(../img/bus-markerv.svg)');
});
a=0;
$("#btn4").click(function(){
    $('.lineT').eq(a).css('background-color','#FF5252');
    $('.lineT').eq(a).css('width',disEE+'px');
    a++;
});
$("#btn5").click(function(){
    $('.lineT').eq(a).css('background-color','#1BCE7C');
    $('.lineT').eq(a).css('width',disEE+'px');
    a++;
});
$("#btn6").click(function(){
    $('.lineT').eq(a).css('background-color','#3F51B5');
    $('.lineT').eq(a).css('width',disEE+'px');
    a++;
});



//funciopn encarga de mostrar los nombre de las estaciones
  function agregarCabecera(nEstaciones,estaciones){
    var nombreEstaciones=[];
    //creamos las estaciones de la cabecera
    for (var i = 0; i < nEstaciones; i++) {
      nombreEstaciones.push("<div class=estacion>"+paradas[i].nombre+"</div>")
      //lineG.append("<li class=estacion1></li>")
    }
    $("body").append("<div class=cajaP><div class=timeline><div class=line><ol style=background-color:transparent class=linei>"+nombreEstaciones.join("")+"</ol></div><ul class=mover><li><a href=#0 class=prev class=inactive>Anterior</a></li><li><a href=#0 class=next>Siguiente</a></li></ul></div><div class=caja></div></div>");
    $(".prev").addClass("inactive");
    var line=$(".estacion");
      for (var i = 0; i < nEstaciones; i++) {
            setPosTimelineE(i,disEE,line.eq(i));
          }

  }
  //se encarga de agregar los siguientes recorridos faltantes
  function agregarRecorridosFaltantes(nBuses){
    var recorridos=[];
    //se guarda primero la informacion del DOM en un array debido al costo computacion elevado de la funcion "append" de jQuery
    for (var i = 0; i < nBuses-1; i++) {
      recorridos.push("<div class=timeline0 id=recorrido"+buses+"><div class=line><ol class=linei style=width:"+timelineWidth+"px;>"+estBus+"<li class=bus>id tyo</li></div> <div class=datos>hora de salida: <br>"+(i+1)+"</div><div class=cerrar onclick=it.eliminarRecorrido(recorrido"+idBus+")>x</div></div>");
      buses++
    }
    caja.append(recorridos.join(''));
    }
  //se encarga de agregar un recorrido al final, info se refiere a la hora de salida del bus
  this.agregarRecorrido = function(id, horaS, idBus){
    buses = caja.append("<div class=timeline0 id=recorrido"+id+"><div class=line><ol class=linei style=width:"+timelineWidth+"px;>"+estBus+"<li class=bus>"+idBus+"</li></div> <div class=datos>hora de salida:</br>"+horaS+"</div><div class=cerrar onclick=it.removeRecorrido("+id+")>x</div></div>");
    console.log(id);
    busesAceptados.push(id);

  }
  this.getRecorridos = function () {
    return caja;
  }
  //Se usa el id del recorrido para eliminar el bus de la ruta primero se le modifica la altura, para que ese recorrido no desaparesca
  //de forma abrupta
  this.removeRecorrido = function(id) {
    index = busesAceptados.indexOf(""+id);
    if (busesAceptados.indexOf(""+id) > -1) {
    busesAceptados.splice(busesAceptados.indexOf(""+id), 1);
    }
    bus = caja.find("#recorrido"+id);
    //bus.css('height','0px');
    //eliminamos el bus, del DOM
    bus.remove();
    caja = $(".caja");
  }
  this.getBusesAceptados = function () {
    return busesAceptados;
  }
  this.getVectorIndices = function (buses) {
    indices = [];

    for (var i = 0; i < busesAceptados.length; i++) {
      indice = buses.indexOf(busesAceptados[i]);

      if (indice > -1) {
          indices.push(indice);
        }
    }
    return indices;
  }

  //creamos un listeners que espera cuando el usuario haga click sobre la x del recorrido
  //llenado para seleccion de una unica ruta
/*
  caja.find(".cerra").on('click','div',function () {
    t =  $(this);
    console.log(t);
  });*/
  function setTimelineWidth(disEE,timeline,length) {
    //el ancho esta definido por el numero de estaciones, se estima 120px estre cada estacion, los cuales seran distibuidos
    //de forma uniforme entre las estaciones (en estudio: de acuerdo a la distancia real, genreando una perseccion de la distacia real.)

    totalWidth=(length*disEE+disEE);
    (timeline.children('.line')).children('.linei').css('width', totalWidth+'px');
    return totalWidth;
  }




}


  //funcion encargada de calcular a partir de la distacia de la estacion o el bus, la posicion de este en el timeline
  //modificamos la posicion de las estaciones en la linea de tiempo y se transladan -50% en x para lograr un centrado relativo
  function setPosTimelineE(i,disEE,elemento) {
      /*  var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
          distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;*/
          //console.log(i);
          disNormal=Math.round(i*disEE+disEE);
          //console.log(disNormal);
          elemento.css('left', disNormal+'px');
          elemento.css('transform','translateX(-50%)');
  }
  //modificamos la posicion de los buses en la linea de tiempo y se transladan -50% en x para lograr un centrado relativo
  function setPosTimelineB(elemento,distancia) {
      /*  var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
          distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;*/

          dis=Math.round(distancia);
          //console.log(distancia +"left "+dis);
          //console.log("bus"+disNormal);
          elemento.css('left', dis+'px');
          elemento.css('transform','translateX(-50%)');
          elemento.css('transition','left 1s linear');
  }


  function updateSlide(timeline, timelineTotWidth, string) {
    var line=timeline.children('.line'),
        lineG=line.children('.linei');
    //retrieve translateX value of timelineComponents['eventsWrapper']
    var translateValue = getTranslateValue(lineG),
      wrapperWidth = Number(line.css('width').replace('px', ''));
    //translate the timeline to the left('next')/right('prev')
    (string == 'next')
      ? translateTimeline(timeline, translateValue - wrapperWidth, wrapperWidth - timelineTotWidth)
      : translateTimeline(timeline, translateValue + wrapperWidth);
  }

  function getTranslateValue(timeline) {
    var timelineStyle = window.getComputedStyle(timeline.get(0), null),
      timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
            timelineStyle.getPropertyValue("-moz-transform") ||
            timelineStyle.getPropertyValue("-ms-transform") ||
            timelineStyle.getPropertyValue("-o-transform") ||
            timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
          var timelineTranslate = timelineTranslate.split('(')[1];
        timelineTranslate = timelineTranslate.split(')')[0];
        timelineTranslate = timelineTranslate.split(',');
        var translateValue = timelineTranslate[4];
        } else {
          var translateValue = 0;
        }

        return Number(translateValue);
  }

  function translateTimeline(timeline, value, totWidth) {
    var lineG = (timeline.children('.line')).children('.linei').get(0),
        mover=timeline.find('.mover');
    value = (value > 0) ? 0 : value; //only negative translate value
    value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
    setTransformValue(lineG, 'translateX', value+'px');
    //update navigation arrows visibility
    (value == 0 ) ? mover.find('.prev').addClass('inactive') : mover.find('.prev').removeClass('inactive');
    (value == totWidth ) ? mover.find('.next').addClass('inactive') : mover.find('.next').removeClass('inactive');
  }

  function setTransformValue(element, property, value) {
    element.style["-webkit-transform"] = property+"("+value+")";
    element.style["-moz-transform"] = property+"("+value+")";
    element.style["-ms-transform"] = property+"("+value+")";
    element.style["-o-transform"] = property+"("+value+")";
    element.style["transform"] = property+"("+value+")";
  }
