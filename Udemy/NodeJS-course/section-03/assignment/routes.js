
const runningServer = ((req, res) => {
  const url = req.url;
  console.log(url);
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<h1>hi</h1>");
    res.write(
      "<ul><li>user1</li><li>user2</li></ul>"
    );
    res.write("</html>");
      return res.end()
  }
  if(url === '/create-user'){
    res.write("<html>");
    res.write(
      "<form method='POST' action='create-user'><input name='username'><button type='submit'>Login</button></form>"
    );
    res.write("</html>");
  }
  if(url === '/create-user' && method === 'POST'){
    req.on('data', (chunk) => {
      console.log(chunk);
    })
  }
})

exports.runningServer =  runningServer