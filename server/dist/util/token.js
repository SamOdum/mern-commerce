"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  generateToken: function generateToken(user) {
    var timeStamp = new Date().getTime();
    var payload = {
      sub: user.id,
      iat: timeStamp
    };
    return _jsonwebtoken["default"].encode(payload, _config["default"].jwt_secret);
  },
  verifyToken: function verifyToken(token, cb) {
    var decode = _jsonwebtoken["default"].decode(token, _config["default"].jwt_secret);

    if (!decode) return cb(new Error('Token is not verified.'));
    cb(null, decode);
  }
};
exports["default"] = _default;
//# sourceMappingURL=token.js.map