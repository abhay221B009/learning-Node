const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
// }

//http module has provided us an inbuilld module to create server .createServer

// http.createServer(requestListener);

//the above code can be written as below aslo in modern way

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  //routing requests
  if (req.url === "/") {
    //sending response back to client
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write("<body><h1>Welcome to home</h1></body>");
    res.write("</html>");
    // res.end();
    // return;
    return res.end();
  } else if (req.url === "/products") {
    //sending response back to client
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body><h1>You are in products section</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    //sending response back to client
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  }

  // process.exit();
});

//we have created server hence we need a listener to those requests

// server.listen(3000);

//other method
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
  //  process.exit();  //=>this helps to exit from the event loop
});
