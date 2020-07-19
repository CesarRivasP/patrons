//este ejemplo incluye patron modulo revelador
const Emitter = (() => { //ifi
  const topics = {};
  const hOP = topics.hasOwnProperty

  return {
    on: (topic, listener) => { //subscribir funciones al evento
      if(!hOP.call(topics, topic)) topics[topic] = []

      topics[topic].push(listener)
    },
    emit: (topic, info) => { //despachar los eventos con informacion extra
      if(!hOP.call(topics, topic)) return 
      
      topics[topic].forEach(element => {
        element(info != undefined ? info : {})
      });
    }
  }
})();

Emitter.on('lala', (x) => console.log(x));

Emitter.emit('lala', { lala: 'lolo' });

/*
Al emplear este patron, en todas las partes de nuestra aplicacion vamos a pasar siempre el emitter, y luego en otra parte
de nuestra aplicacion, en otros archivos nos vamos a encargar de suscribirnos a los eventos que a nosotros nos interesan
*/