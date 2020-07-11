const modulo = {
  prop: 'mi prop',
  config: {
    language: 'es',
    cache: true
  },
  setConfig: (conf) => { //nos permite actualizar la configuracion
    modulo.config = conf;
  },
  isCacheEnabled: () => { //saber el estado del modulo
    console.log(modulo.config.cache ? 'si' : 'no');
  }
}