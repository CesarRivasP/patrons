// async await fue creado para resolver los problemas que tenian las promesas inicialmente
// las promesas se inventaron para poder resolver el problema de los callbacks

// ejemplo del callback hell
const fn = () => {
  ajax(() => {
    ajax(() => {
      ajax(() => {
      
      })
    })
  })
}

// para resolver este problema, se crearon las promesas
const fn1 = () => {
  ajax()
    .then(() => {
      const a = 1;
      return ajax()
    })
    .then(() => {
      return ajax()
    })
    .then(() => {
      return ajax()
    })
    .then(() => {
      console.log(a) //error
      return ajax()
    })
}

//para solucionar el problema anterior, nacio async await

const fn2 = async() => { //codigo limpio
  const result = await ajax();
  const result2 = await ajax();
  const result3 = await ajax();
  const result4 = await ajax();
}