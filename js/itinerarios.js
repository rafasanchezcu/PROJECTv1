/*
@autor Antonio Cortés

*/

//definicion de la clase y le asignamos el constructor
var itinerarios=function() {
                  this.rutas=[];
                  this.nRutasDisponibles=5;
                  this.disponible=[0,1,2,3,4];

                  //definimos el constructor
                  function agregarRecorrido(recorridos) {
                    if (disponible.length==0) {
                      console.log("Ha llegado al número maximo de rutas que puede monitorear de forma simultanea");
                    } else {
                      this.rutas.push(recorridos);
                    }

                  }
                  function eliminarRecorrido(recorridos) {
                    this.rutas.push(recorridos);
                  }

                };
