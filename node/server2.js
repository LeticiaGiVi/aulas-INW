const {createServer} = require('http');


// ao inves de se usar o sevidor texto pronto se usa um sevidor html
let server = createServer((request, response) =>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(`
    <h1>Hello World</h1>
    <p>Pagina html usando node.js</p>
    `);
    response.end();
});

const port = 8000;
server.listen(port, ()  =>{
    console.log(`usando a porta ${port} na url http://localhost:${port}/`);
});