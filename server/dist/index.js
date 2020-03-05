'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _middlewares = require('./api/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _authentication = require('./api/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _router = require('./user/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//** Check that an environmental variable is initialized **
if (!process.env.JWT_SECRET) {
    var err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/samodum/base-mern#prepare-your-secret');
    console.error(err);
}

//** Initialize express **
var app = (0, _express2.default)();

//** Hookup Database **
(0, _config2.default)();

//** Setup App ** 
app.use((0, _cors2.default)({ origin: ['https://www.samodum.com', 'http://localhost:3000'] }));
app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json({ extended: false }));

//** Define Routes **
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/', function (req, res) {
    return res.json({ 'source': 'https://github.com/samodum/base-mern' });
});
app.post('/signup', _authentication2.default.signup);
app.post('/signin', _authentication2.default.signin);
app.get('/auth-ping', _middlewares2.default.loginRequired, function (req, res) {
    return res.send('connected');
});
app.use('/user', _middlewares2.default.loginRequired, _router2.default);

// app.use((err, req, res, next) => {
//     console.log('Error:', err.message);
//     res.status(422).json(err.message);
// });

var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    return console.log('\x1B[32m', 'Server started on port ' + PORT, '\x1B[32m');
});
//# sourceMappingURL=index.js.map