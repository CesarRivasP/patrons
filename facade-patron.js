const https = require('https');

// forma habitual de realizar una peticion
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/users',
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
    console.log(parsed);
  });
});

request.on('error', (e) => {
  console.error(e);
});

request.end();



