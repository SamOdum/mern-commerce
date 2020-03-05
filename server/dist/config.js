'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDB = exports.mongoURL = exports.jwt_secret = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('regenerator-runtime/runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

if (process.env.NODE_ENV != 'production') {
  _dotenv2.default.config({ path: _path2.default.resolve(__dirname, '.env') });
}

var jwt_secret = exports.jwt_secret = process.env.JWT_SECRET || 'unsafe_jwt_secret';
var mongoURL = exports.mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/base-mern';
var connectDB = exports.connectDB = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose2.default.connect(mongoURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, function () {
              return console.log("MongoDB is connected...");
            });

          case 3:
            _context.next = 9;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0.message);
            process.exit(1);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 5]]);
  }));

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = connectDB;
//# sourceMappingURL=config.js.map