"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _auth = require("@edx/frontend-platform/auth");
var _hooks = require("../../hooks");
var _optimizelyExperiment = require("../../utils/optimizelyExperiment");
require("./UpgradeButton.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UpgradeButton = _ref => {
  let {
    includeLockIcon,
    trackingEventName
  } = _ref;
  const {
    upgradeUrl
  } = (0, _hooks.useCourseUpgrade)();
  const {
    track
  } = (0, _hooks.useTrackEvent)();
  const handleClick = () => {
    const {
      userId
    } = (0, _auth.getAuthenticatedUser)();
    (0, _optimizelyExperiment.trackUpgradeButtonClickedOptimizely)(userId.toString());
    track(trackingEventName);
    track('edx.bi.ecommerce.upsell_links_clicked', {
      linkCategory: 'xpert_learning_assistant',
      linkName: 'xpert_upgrade_panel',
      linkType: 'button',
      pageName: 'in_course'
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Button, {
    onClick: handleClick,
    target: "_blank",
    href: upgradeUrl,
    className: "trial-upgrade mt-3",
    variant: "brand",
    "data-testid": "upgrade-cta",
    block: true,
    children: [includeLockIcon ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.LockOpen,
      className: "my-0 mx-2",
      "data-testid": "lock-icon"
    }) : null, "Upgrade now"]
  });
};
UpgradeButton.propTypes = {
  includeLockIcon: _propTypes.default.bool,
  trackingEventName: _propTypes.default.string.isRequired
};
UpgradeButton.defaultProps = {
  includeLockIcon: false
};
var _default = exports.default = UpgradeButton;
//# sourceMappingURL=index.js.map