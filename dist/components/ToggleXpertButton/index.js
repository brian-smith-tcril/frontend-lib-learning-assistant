"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _analytics = require("@edx/frontend-platform/analytics");
var _auth = require("@edx/frontend-platform/auth");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _optimizely = require("../../data/optimizely");
var _xpertLogo = require("../../assets/xpert-logo.svg");
require("./index.scss");
var _experiments = require("../../experiments");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ToggleXpert = _ref => {
  let {
    isOpen,
    setIsOpen,
    courseId,
    contentToolsEnabled
  } = _ref;
  const [hasDismissedCTA, setHasDismissedCTA] = (0, _react.useState)(false);
  const [isModalOpen, setIsModalOpen] = (0, _react.useState)(true);
  const [target, setTarget] = (0, _react.useState)(null);
  const {
    userId
  } = (0, _auth.getAuthenticatedUser)();
  const [decision] = (0, _experiments.usePromptExperimentDecision)();
  const {
    enabled,
    variationKey
  } = decision || {};
  const experimentPayload = enabled ? {
    experiment_name: _optimizely.OPTIMIZELY_PROMPT_EXPERIMENT_KEY,
    variation_key: variationKey
  } : {};
  const handleClick = event => {
    // log event if the tool is opened
    if (!isOpen) {
      (0, _analytics.sendTrackEvent)('edx.ui.lms.learning_assistant.launch', _objectSpread({
        course_id: courseId,
        user_id: userId,
        source: event.target.id === 'toggle-button' ? 'toggle' : 'cta'
      }, experimentPayload));
    }
    setIsModalOpen(false);
    localStorage.setItem('completedLearningAssistantTour', 'true');
    setIsOpen(!isOpen);
  };
  const handleDismiss = event => {
    // prevent default and propagation to prevent sidebar from opening
    event.preventDefault();
    event.stopPropagation();
    setHasDismissedCTA(true);
    localStorage.setItem('dismissedLearningAssistantCallToAction', 'true');
    (0, _analytics.sendTrackEvent)('edx.ui.lms.learning_assistant.dismiss_action_message', _objectSpread({
      course_id: courseId
    }, experimentPayload));
  };
  const handleModalClose = () => {
    localStorage.setItem('completedLearningAssistantTour', 'true');
    setIsModalOpen(false);
    (0, _analytics.sendTrackEvent)('edx.ui.lms.learning_assistant.launch', _objectSpread({
      course_id: courseId,
      user_id: userId,
      source: 'product-tour'
    }, experimentPayload));
  };
  const shouldDisplayCTA = !localStorage.getItem('dismissedLearningAssistantCallToAction') && !hasDismissedCTA && (localStorage.getItem('completedLearningAssistantTour') || !isModalOpen);
  const chatMargin = contentToolsEnabled ? 'mb-5' : 'mb-3';
  return !isOpen && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: `toggle position-fixed closed d-flex flex-column justify-content-end align-items-end mx-3 border-0
           ${chatMargin}`,
    "data-testid": "xpert-toggle",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "position-fixed learning-assistant-popup-modal mb-7",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalPopup, {
        hasArrow: true,
        placement: "left",
        positionRef: target,
        isOpen: isModalOpen && !localStorage.getItem('completedLearningAssistantTour'),
        onClose: handleModalClose,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: `bg-white p-3 rounded shadow border ${chatMargin}`,
          style: {
            textAlign: 'start'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            "data-testid": "modal-message",
            children: ["Xpert is a new part of your learning experience.", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "You can ask questions and get tutoring help during your course."]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "d-flex justify-content-start",
            style: {
              gap: '10px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalCloseButton, {
              variant: "outline-primary",
              "data-testid": "close-button",
              children: "Close"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
              variant: "primary",
              className: "mie-2",
              onClick: handleClick,
              "data-testid": "check-button",
              children: "Check it out"
            })]
          })]
        })
      })
    }), shouldDisplayCTA && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex justify-content-end flex-row ",
      "data-testid": "action-message",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
        src: _icons.Close,
        iconAs: _paragon.Icon,
        alt: "dismiss",
        onClick: handleDismiss,
        variant: "light",
        className: "dismiss-button mx-2 mt-1 bg-gray",
        size: "sm",
        "data-testid": "dismiss-button"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "action-message open-negative-margin p-3 mb-4.5",
        "data-testid": "message-button",
        onClick: handleClick,
        "aria-label": "Can I answer any questions for you?",
        type: "button",
        id: "cta-button",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "Hi there! \uD83D\uDC4B I'm Xpert, an AI-powered assistant from edX who can help you with questions about this course."
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      className: "toggle button-icon",
      "data-testid": "toggle-button",
      onClick: handleClick,
      id: "toggle-button",
      ref: setTarget,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_xpertLogo.ReactComponent, {})
    })]
  });
};
ToggleXpert.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  setIsOpen: _propTypes.default.func.isRequired,
  courseId: _propTypes.default.string.isRequired,
  contentToolsEnabled: _propTypes.default.bool.isRequired
};
var _default = exports.default = ToggleXpert;
//# sourceMappingURL=index.js.map