const http = require('http');

http.createServer( (req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie' : 'mycooki=test'});
    res.end('Hello Cookie');
})
.listen(8083, () => {
    console.log('8083번 포트에서 대기중 입니다.');
});