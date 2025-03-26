"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _hooks = require("../../hooks");
var _UpsellBullets = _interopRequireDefault(require("./UpsellBullets"));
var _UpgradeButton = _interopRequireDefault(require("../UpgradeButton"));
require("./UpgradePanel.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UpgradePanel = () => {
  const {
    isFBE
  } = (0, _hooks.useCourseUpgrade)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "upgrade-panel d-flex flex-column align-items-stretch px-4 py-3",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      className: "text-light-100",
      children: "Upgrade this course"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UpsellBullets.default, {
      isFBE: isFBE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UpgradeButton.default, {
      includeLockIcon: true,
      trackingEventName: "edx.ui.lms.learning_assistant.expired_upgrade_click"
    })]
  });
};
var _default = exports.default = UpgradePanel;
//# sourceMappingURL=index.js.map