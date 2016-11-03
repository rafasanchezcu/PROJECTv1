/*
@autor Antonio Cortés

*/

//definicion de la clase y le asignamos el constructor
var itinerarios=function() {
                  this.rutas=[];
                  this.nRutas=0;
                  this.disponible=[0,1,2,3,4];

                  //definimos el constructor
                  function agregarRecorrido(recorridos) {
                    this.rutas.push(recorridos);
                  }
                  function eliminarRecorrido(recorridos) {
                    this.rutas.push(recorridos);
                  }
                };
