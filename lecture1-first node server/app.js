const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
// }

//http module has provided us an inbuilld module to create server .createServer

// http.createServer(requestListener);

//the above code can be written as below aslo in modern way

const server = http.createServer((req, res) => {
  console.log(req);
});

//we have created server hence we need a listener to those requests

// server.listen(3000);

//other method
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
