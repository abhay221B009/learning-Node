const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
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
