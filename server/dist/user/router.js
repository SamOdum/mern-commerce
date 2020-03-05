"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = require('express').Router();

router.get('/profile', function (req, res) {
  res.send(req.user);
});
router.post('/profile', _controller["default"].updateProfile);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.js.map