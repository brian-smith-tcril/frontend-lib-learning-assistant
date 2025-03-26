"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _auth = require("@edx/frontend-platform/auth");
var _surveyMonkey = _interopRequireDefault(require("../../utils/surveyMonkey"));
var _APIError = _interopRequireDefault(require("../APIError"));
var _ChatBox = _interopRequireDefault(require("../ChatBox"));
var _Disclosure = _interopRequireDefault(require("../Disclosure"));
var _MessageForm = _interopRequireDefault(require("../MessageForm"));
var _UpgradePanel = _interopRequireDefault(require("../UpgradePanel"));
var _hooks = require("../../hooks");
var _xpertLogo = require("../../assets/xpert-logo.svg");
var _optimizelyExperiment = require("../../utils/optimizelyExperiment");
require("./Sidebar.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Sidebar = _ref => {
  let {
    courseId,
    isOpen,
    setIsOpen,
    unitId
  } = _ref;
  const {
    apiError,
    disclosureAcknowledged,
    messageList
  } = (0, _reactRedux.useSelector)(state => state.learningAssistant);
  const {
    upgradeable,
    upgradeUrl,
    auditTrialExpired,
    auditTrialDaysRemaining
  } = (0, _hooks.useCourseUpgrade)();
  const {
    track
  } = (0, _hooks.useTrackEvent)();
  const handleClick = () => {
    setIsOpen(false);
    if (messageList.length >= 2) {
      (0, _surveyMonkey.default)();
    }
  };
  const getMessageForm = () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_MessageForm.default, {
    courseId: courseId,
    shouldAutofocus: true,
    unitId: unitId
  });
  const handleUpgradeLinkClick = () => {
    const {
      userId
    } = (0, _auth.getAuthenticatedUser)();
    (0, _optimizelyExperiment.trackUpgradeButtonClickedOptimizely)(userId.toString());
    track('edx.ui.lms.learning_assistant.days_remaining_banner_upgrade_click');
    track('edx.bi.ecommerce.upsell_links_clicked', {
      linkCategory: 'xpert_learning_assistant',
      linkName: 'xpert_days_remaining_banner',
      linkType: 'button',
      pageName: 'in_course'
    });
  };
  const getUpgradeLink = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    onClick: handleUpgradeLinkClick,
    target: "_blank",
    href: upgradeUrl,
    rel: "noreferrer",
    "data-testid": "days_remaining_banner_upgrade_link",
    children: "Upgrade"
  });
  const getDaysRemainingMessage = () => auditTrialDaysRemaining === 1 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    "data-testid": "trial-ends-today-message",
    children: ["Your trial ends today! ", getUpgradeLink(), " for full access to Xpert."]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    "data-testid": "days-remaining-message",
    children: [auditTrialDaysRemaining, " days remaining. ", getUpgradeLink(), " for full access to Xpert."]
  });
  const getDaysRemainingHeader = () => {
    if (!upgradeable || auditTrialDaysRemaining < 1) {
      return null;
    }
    const shouldShowSpinner = !auditTrialDaysRemaining;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: `trial-header ${shouldShowSpinner ? 'has-spinner' : ''}`,
      "data-testid": "get-days-remaining-message",
      children: shouldShowSpinner ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
        animation: "border",
        className: "spinner",
        "data-testid": "days-remaining-spinner",
        screenReaderText: "loading"
      }) : getDaysRemainingMessage()
    });
  };
  const getSidebar = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-column h-100",
    "data-testid": "sidebar-xpert",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "sidebar-header",
      "data-testid": "sidebar-xpert-header",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_xpertLogo.ReactComponent, {})
    }), getDaysRemainingHeader(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChatBox.default, {
      messageList: messageList
    }), apiError && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "d-flex flex-column p-3 mt-auto",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_APIError.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "sidebar-footer",
      children: getMessageForm()
    })]
  });
  const getPanel = () => {
    const showUpgrade = upgradeable && auditTrialExpired;
    if (showUpgrade) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_UpgradePanel.default, {});
    }
    return disclosureAcknowledged ? getSidebar() : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Disclosure.default, {
      children: getMessageForm()
    });
  };
  return isOpen && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "sidebar position-fixed",
    "data-testid": "sidebar",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
      className: "chat-close position-absolute border-0",
      src: _icons.Close,
      iconAs: _paragon.Icon,
      onClick: handleClick,
      alt: "close",
      "aria-label": "close",
      variant: "primary",
      invertColors: true,
      "data-testid": "close-button"
    }), getPanel()]
  });
};
Sidebar.propTypes = {
  courseId: _propTypes.default.string.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  setIsOpen: _propTypes.default.func.isRequired,
  unitId: _propTypes.default.string.isRequired
};
var _default = exports.default = Sidebar;
//# sourceMappingURL=index.js.map