"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./MessageDivider.scss");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageDivider = _ref => {
  let {
    text
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "message-divider",
    children: text
  });
};
MessageDivider.propTypes = {
  text: _propTypes.default.string.isRequired
};
var _default = exports.default = MessageDivider;
//# sourceMappingURL=index.js.map