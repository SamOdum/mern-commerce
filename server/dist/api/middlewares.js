"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("../user/model"));

var _token = _interopRequireDefault(require("../util/token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  loginRequired: function loginRequired(req, res, next) {
    if (!req.header('Authorization')) return res.status(401).send({
      message: 'Please make sure your request has an Authorization header.'
    }); // Validate jwt

    var try_token = req.header('Authorization').split(' ')[0];

    _token["default"].verifyToken(try_token, function (err, payload) {
      if (err) return res.status(401).send(err);

      _model["default"].findById(payload.sub).exec(function (err, user) {
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
exports["default"] = _default;
//# sourceMappingURL=middlewares.js.map