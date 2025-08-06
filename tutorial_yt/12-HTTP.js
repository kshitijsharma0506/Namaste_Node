const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Home page")
    }
    if(req.url === '/about'){
        res.end("About page")
    } 
    res.end(`
            <h1>OPPs</h1>
            <p>Wrong Page</p>
            <a href="/">home page</a>
        `);
})

server.listen(5000);

