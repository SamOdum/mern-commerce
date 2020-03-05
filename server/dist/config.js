"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDB = exports.mongoURL = exports.jwt_secret = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

if (process.env.NODE_ENV != 'production') {
  _dotenv["default"].config({
    path: _path["default"].resolve(__dirname, '.env')
  });
}

var jwt_secret = process.env.JWT_SECRET || 'unsafe_jwt_secret';
exports.jwt_secret = jwt_secret;
var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/base-mern';
exports.mongoURL = mongoURL;

var connectDB = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(mongoURL, {
              useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true,
              useFindAndModify: false
            }, function () {
              return console.log("MongoDB is connected...");
            });

          case 3:
            _context.next = 9;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0.message);
            process.exit(1);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();

exports.connectDB = connectDB;
var _default = connectDB;
exports["default"] = _default;
//# sourceMappingURL=config.js.map