const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write("<body><h1>Welcome to home</h1>");

    // Form with correct labels and radio buttons
    res.write("<form>");
    res.write('<input type="text" name="username" placeholder="name"><br><br>');

    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male"> Male </label><br>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female"> Female </label><br><br>');

    res.write('<button type="submit">Submit</button>');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body><h1>Enter your details</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const port = 3001;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
