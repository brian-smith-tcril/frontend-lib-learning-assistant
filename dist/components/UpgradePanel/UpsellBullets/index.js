"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _UpsellBullets = require("./UpsellBullets");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UpsellContent = _ref => {
  let {
    isFBE
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "list",
    className: "pl-4 text-white pt-0 my-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_UpsellBullets.XpertAccessBullet, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UpsellBullets.VerifiedCertBullet, {}), isFBE && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_UpsellBullets.UnlockGradedBullet, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UpsellBullets.FullAccessBullet, {})]
    })]
  });
};
UpsellContent.defaultProps = {
  isFBE: false
};
UpsellContent.propTypes = {
  isFBE: _propTypes.default.bool
};
var _default = exports.default = UpsellContent;
//# sourceMappingURL=index.js.map