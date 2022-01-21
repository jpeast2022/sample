//used http module
const http = require('http')
// create a server
const server = http.createServer( (req,res) => {
    //check url
    if(req.url === '/'){
    res.end('welcome to home page')
   }
    
   if(req.url === '/about'){
       res.end('here is the short history')
   }
   res.end(`
    <h1>Oops!</h1>
    <p>We cant seem t find the page</p>
    <a href="/">Back to home</a>
   `)
})
// custom port
server.listen(5000)