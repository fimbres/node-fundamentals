const http = require('http');

const server = http.createServer((request, result) => {
    if(request.url === '/'){
        result.write('<h1>Welcome to home page.</h1>'); 
    }
    else if(request.url === '/about') {
        result.write('<h1>Welcome to about page.</h1>'); 
    }
    else{
        result.write('<h1>Error: not found!</h1>');
    }
    result.end();
})

server.listen(3000);
