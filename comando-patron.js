const Commander = (() => {
  const methods = { //object private
    comprar: (x) => {
      console.log(`Comprando ${x}`);
    },
    vender: (x) => {
      console.log(`Vendiendo ${x}`);
    }
  }

  return {
    run: (command, args) => { //metodo publico
      if(!methods[command]){
        console.log('Este comando no existe');

        return;
      }

      methods[command](args);
    } 
  }
})();

Commander.run('comprar', 'Porsche 911');
Commander.run('lala', 'no pasa nada');