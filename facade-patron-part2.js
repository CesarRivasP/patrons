// -- PATRON FACADE --
const https = require('https');


const get = (url) => {
  return new Promise((resolve, reject) => {
    const comp = url.split('/');
    const host = comp.shift(); // va a sacar el primer elemento del array y se lo va a agregar a host

    const options = {
      hostname: host,
      path: `/${comp.join('/')}`, //hay que unirlo mediante un /
      method: 'GET'
    };

    const request = https.request(options, (response) => {
      response.setEncoding('utf-8');
    
      let body = '';
    
      response.on('data', (data) => {
        body += data;
      });
    
      response.on('end', (d) => {
        const parsed = JSON.parse(body);

        resolve(parsed);
      });
    });
    
    request.on('error', (e) => {
      console.error(e);
      reject(e);
    });
    
    request.end();
  });
}

const main = async() => {
  const response = await get('jsonplaceholder.typicode.com/users');
  console.log(response);
};

main();

//se esta simplificando el uso de la libreria https que nos exige que se deben utilizar muchas lineas para poder
//utilizar una operacion sencilla como un GET 
// Por lo que este patron se basa en que vamos a tomar una implementacion un poco mas compleja, y la vamos a simplificar 
// usando un wrapper encima de esta