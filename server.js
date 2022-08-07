const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Create Server Successfull :::');
})

server.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running at http://localhost:3000");
});