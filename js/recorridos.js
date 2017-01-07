/*
@autor Antonio Cortés

*/

function Recorridos(nombreRuta,disEE,paradas,nid) {
  var nEstaciones = paradas.length,
      nombreEstaciones = [];
  //creamos las estaciones de la cabecera
  for (var i = 0; i < nEstaciones; i++) {
    nombreEstaciones.push("<div class=estacion>"+paradas[i].nombre+"</div>")
    //lineG.append("<li class=estacion1></li>")
  }
  
  $(".cajaRR").append("<div class=cajaR"+nid+"><div class=timelineM><div id=recorrido class=line><ol class=linei>"+nombreEstaciones.join("")+"</ol> </div> <div class=nombreRuta> <h1>"+nombreRuta+"</h1></div><a href=unicaRuta.html?ruta="+nombreRuta+" target=_blank><i class=material-icons id=detalle >launch</i></a><input id=cerrar type=radio value="+nid+"><label class=cerrar id=cerrar for=cerrar>x</label></div></div></div>");
  $(".prev").addClass("inactive");

  var cajaR = $(".cajaR"+nid);
      this.timelineM = cajaR.children(".timelineM");
  var datos = this.timelineM.children(".datos"),
      line = this.timelineM.children(".line"),
      lineG = line.children(".linei");
      vectorEstaciones = lineG.children(".estacion");
      //console.log(vectorEstaciones);
    for (var i = 0; i < nEstaciones; i++) {
          setPosTimelineE(i,disEE,vectorEstaciones.eq(i));
        }
      estaciones=[];

      //agregamos las lineas de las estaciones, se les asigno la clase estacione1 para poder manejar y modificar sus estilos (css)
      for (var i = 0; i < nEstaciones; i++) {
        estaciones.push("<li class=estacion1></li>")
        //lineG.append("<li class=estacion1></li>")
      }
      //lineG.append(estaciones.join(""));
      // se hace la nueva llamada desde este lugar debido a que en la anteror linea se estaban agregando las estaciones
      // y en ese momento no se contaba con esos elementos en el DOM
    var lineLi=lineG.children(".estacion1");
      for (var i = 0; i < nEstaciones; i++) {
            setPosTimelineE(i,disEE,lineLi.eq(i));
          }

    //agregando todos los buses de los que se dispone y ocultandolos para usarlos cuando sea necesario
    //agregarB(3);


/*
Estas funciones se encargan de permitir el desplazamiento horizontal en la linea de tiempo
*/
var timeline = cajaR.children(".timeline");
    this.timelineM = cajaR.children(".timelineM");
    setTimelineWidth(disEE,timeline,nEstaciones);
    timelineWidth = setTimelineWidth(disEE,this.timelineM,nEstaciones),
    longitudTimeline = timelineWidth; //por algun tipo de conflicto este valor se modifica, por lo que es necesario volverlo a asignar a una variable con diferente nombre

    timeline.addClass('loaded');
//parte de este codigo es extraido de la pagina https://codyhouse.co/gem/horizontal-timeline/
 //detect click on the next arrow

timeline.find('.mover').on('click', '.next', function(event){
  event.preventDefault();
  updateSlide(timeline, longitudTimeline, 'next');
  updateSlide(this.timelineM, longitudTimeline, 'next');

});
 //detect click on the prev arrow
timeline.find('.mover').on('click', '.prev', function(event){
  event.preventDefault();
  updateSlide(timeline, longitudTimeline, 'prev');
  updateSlide(this.timelineM, longitudTimeline, 'prev');
});

/*

*/
//funciones de los botones
//agregamos un nuevo bus
$("#btn1").click(function(){
    it.agregarRecorrido("hola todos");
    this.timelineM=cajaR.children(".timelineM");
});
//eliminamos un bus, el inice 0 indica que se elimina el primero en ser agregado
$("#btn2").click(function(){
    it.eliminarRecorrido(0);
    this.timelineM=cajaR.children(".timelineM");
});
$("#btn3").click(function(){
    $('.bus').eq(0).css('background-image','url(../img/bus-markerv.svg)');
});
a=0;
$("#btn4").click(function(){
    $('.lineT').eq(a).css('background-color','#FF5252');
    $('.lineT').eq(a).css('width','120px');
    a++;
});
$("#btn5").click(function(){
    $('.lineT').eq(a).css('background-color','#00E676');
    $('.lineT').eq(a).css('width','120px');
    a++;
});
$("#btn6").click(function(){
    $('.lineT').eq(a).css('background-color','#3F51B5');
    $('.lineT').eq(a).css('width','120px');
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
    //console.log(nombreEstaciones.join(""));
    var body=$("body");
    body.append("<div class=cajaR"+nid+"><div class=timeline><div class=line><ol style=background-color:transparent class=linei>"+nombreEstaciones.join("")+"</ol></div><ul class=mover><li><a href=#0 class=prev class=inactive>Anterior</a></li><li><a href=#0 class=next>Siguiente</a></li></ul></div></div>");
    $(".prev").addClass("inactive");

    var cajaR=$(".cajaR"+nid),
        timeline=cajaR.children(".timeline"),
        line=timeline.children(".line"),
        lineG=line.children(".linei"),
        vectorEstaciones=lineG.children(".estacion");
        //console.log(vectorEstaciones);
      for (var i = 0; i < nEstaciones; i++) {
            setPosTimelineE(i,disEE,vectorEstaciones.eq(i));
          }
    return cajaR;
  }
  /*
  //se encarga de agregar los siguientes recorridos faltantes
  function agregarRecorridosFaltantes(nBuses){
    var estBus=$('#recorrido').html(),
        recorridos=[];
    //se guarda primero la informacion del DOM en un array debido al costo computacion elevado de la funcion "append" de jQuery
    for (var i = 0; i < nBuses-1; i++) {
      recorridos.push("<div class=timeline0><div class=line>"+estBus+"</div> <div class=datos>hora"+(i+1)+" de salida</div></div>");
    }
    cajaR.append(recorridos.join(''));
    }
    */
    this.agregarBuses = function (n,info) {
      var line = this.timelineM.children(".line"),
          lineG = line.children(".linei");

      if(n==1){
        lineG.append("<li class=bus>"+info+"</li>");
      }
      else if(n >= 2){
        //agregando todos los buses de los que se dispone y ocultandolos para usarlos cuando sea necesario
        var buses = [];
        //se guarda primero la informacion del DOM en un array debido al costo computacion elevado de la funcion "append" de jQuery

          for (var i = 0; i < n; i++) {
            buses.push("<li class=bus>"+info+"</li>");
          }
          lineG.append(buses.join(''));
      }else{
        console.log("El número de buses indicado es invalido");
      }
    }
  //Se encarga de eliminar un recorrido, una vez que el bus ha completado su trayecto y ya no se encuentra en el itinerario
  //se usa un indice para este evento ya que es posible que un bus adelante a otro por lo que no siempre el primero en entrar es el primero en salir
  this.eliminarBus = function (indice) {
    var line=this.timelineM.children(".line"),
        lineG=line.children(".linei"),
        buses=lineG.children(".bus");
    if (buses.length-1<indice) {
      console.log("el sistemas no cuenta con buses");
    }
    else {
      buses[indice].remove();
    }
  }//final de la calse, comienso de los metodos auxiliares de las lineas de tiempo

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
/*
  Funciones extraidas del proyecto Horizontal Timeline
  @autor codyhouse
  https://codyhouse.co/gem/horizontal-timeline/


*/
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
        console.log(lineG);
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
