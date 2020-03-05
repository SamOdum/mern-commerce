"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./config"));

var _middlewares = _interopRequireDefault(require("./api/middlewares"));

var _authentication = _interopRequireDefault(require("./api/authentication"));

var _router = _interopRequireDefault(require("./user/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//** Check that an environmental variable is initialized **
if (!process.env.JWT_SECRET) {
  var err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/samodum/base-mern#prepare-your-secret');
  console.error(err);
} //** Initialize express **


var app = (0, _express["default"])(); //** Hookup Database **

(0, _config["default"])(); //** Setup App ** 

app.use((0, _cors["default"])({
  origin: ['https://www.samodum.com', 'http://localhost:3000']
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json({
  extended: false
})); //** Define Routes **

app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.get('/', function (req, res) {
  return res.json({
    'source': 'https://github.com/samodum/base-mern'
  });
});
app.post('/signup', _authentication["default"].signup);
app.post('/signin', _authentication["default"].signin);
app.get('/auth-ping', _middlewares["default"].loginRequired, function (req, res) {
  return res.send('connected');
});
app.use('/user', _middlewares["default"].loginRequired, _router["default"]); // app.use((err, req, res, next) => {
//     console.log('Error:', err.message);
//     res.status(422).json(err.message);
// });

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("\x1B[32m", "Server started on port ".concat(PORT), "\x1B[32m");
});
//# sourceMappingURL=index.js.map