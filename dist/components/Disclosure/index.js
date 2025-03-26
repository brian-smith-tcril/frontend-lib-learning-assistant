"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _config = require("@edx/frontend-platform/config");
var _UpgradeButton = _interopRequireDefault(require("../UpgradeButton"));
var _hooks = require("../../hooks");
require("./Disclosure.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _config.ensureConfig)(['PRIVACY_POLICY_URL']);
const Disclosure = _ref => {
  let {
    children
  } = _ref;
  const {
    upgradeable,
    auditTrialLengthDays
  } = (0, _hooks.useCourseUpgrade)();
  const freeDays = auditTrialLengthDays === 1 ? '1 day' : `${auditTrialLengthDays} days`;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    className: "disclosure d-flex flex-column align-items-stretch",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      className: "text-light-100",
      children: "Xpert Learning Assistant"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "info",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "small py-2",
        children: "An AI-powered educational tool"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "text-light-100 d-flex flex-row mb-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
            src: _icons.LightbulbCircle,
            className: "bullet-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: ["Understand a concept", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
              children: "\u201CHow does photosynthesis work?\u201D"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "text-light-100 d-flex flex-row mb-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
            src: _icons.QuestionAnswerOutline,
            className: "bullet-icon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: ["Summarize your learning", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
              children: "\u201CCan you help me review pivot tables?\u201D"
            })]
          })]
        })]
      }), upgradeable ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "trial-period",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "trial-period-content",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "d-flex flex-row text-light-100",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
              src: _icons.AutoAwesome,
              className: "bullet-icon bullet-icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("small", {
              "data-testid": "free-days-label",
              children: ["Free for ", freeDays, ", then upgrade course for full access to Xpert features."]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UpgradeButton.default, {
            trackingEventName: "edx.ui.lms.learning_assistant.disclosure_upgrade_click"
          })]
        })
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        className: "disclaimer small text-light-100 py-3",
        children: ["Note: This chat is AI generated, mistakes are possible. By using it you agree that edX may create a record of this chat. Your personal data will be used as described in our \xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
          className: "privacy-policy-link text-light-100",
          target: "_blank",
          destination: (0, _config.getConfig)().PRIVACY_POLICY_URL,
          children: "privacy policy"
        }), "."]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
      children: children
    })]
  });
};
Disclosure.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = exports.default = Disclosure;
//# sourceMappingURL=index.js.map