var server = require('./server');
var router = require('./router');
var handler = require('./requestHandler');

handler['/'] = handler.start;
handler['/start'] = handler.start;
handler['/lesson'] = handler.lesson;

server.start(handler,router.route);