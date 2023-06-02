const http = require('http');

const serverUrl = 'http://localhost:3000/api/app'; // Replace with the actual server URL
const payload = JSON.stringify({ key: 'value' }); // Replace with your payload data

const options = {
  hostname: serverUrl,
  path: '/api/sensor-data',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': payload.length,
  },
};

const request = http.request(options, (response) => {
  let responseData = '';

  response.on('data', (chunk) => {
    responseData += chunk;
  });

  response.on('end', () => {
    // Handle the response data
    console.log(responseData);
  });
});

request.on('error', (error) => {
  // Handle the error
  console.error(error);
});

request.write(payload);
request.end();
