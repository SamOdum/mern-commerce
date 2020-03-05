'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = require('../user/model');

var _model2 = _interopRequireDefault(_model);

var _token = require('../util/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  loginRequired: function loginRequired(req, res, next) {
    if (!req.header('Authorization')) return res.status(401).send({ message: 'Please make sure your request has an Authorization header.' });

    // Validate jwt
    var try_token = req.header('Authorization').split(' ')[0];
    _token2.default.verifyToken(try_token, function (err, payload) {
      if (err) return res.status(401).send(err);
      _model2.default.findById(payload.sub).exec(function (err, user) {
        if (err || !user) {
          return res.status(404).send(err || {
            error: 'middleware User not found!!!'
          });
        }
        delete user.password;
        req.user = user;
        next();
      });
    });
  }
};
//# sourceMappingURL=middlewares.js.map