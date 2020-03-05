'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    generateToken: function generateToken(user) {
        var timeStamp = new Date().getTime();
        var payload = {
            sub: user.id,
            iat: timeStamp
        };
        return _jsonwebtoken2.default.encode(payload, _config2.default.jwt_secret);
    },
    verifyToken: function verifyToken(token, cb) {
        var decode = _jsonwebtoken2.default.decode(token, _config2.default.jwt_secret);
        if (!decode) return cb(new Error('Token is not verified.'));
        cb(null, decode);
    }
};
//# sourceMappingURL=token.js.map