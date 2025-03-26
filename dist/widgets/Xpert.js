"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _reactRedux = require("react-redux");
var _thunks = require("../data/thunks");
var _ToggleXpertButton = _interopRequireDefault(require("../components/ToggleXpertButton"));
var _Sidebar = _interopRequireDefault(require("../components/Sidebar"));
var _optimizely = require("../data/optimizely");
var _experiments = require("../experiments");
var _context = require("../context");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const XpertDisplay = _ref => {
  let {
    courseId,
    contentToolsEnabled,
    unitId,
    isUpgradeEligible,
    sidebarIsOpen,
    setSidebarIsOpen
  } = _ref;
  const [decision] = (0, _experiments.useAuditTrialExperimentDecision)();
  const {
    enabled: experimentEnabled,
    variationKey
  } = decision || {};

  // Any user should see xpert unless they are an audit learner not part of the experiment or part of the control.
  const shouldDisplayXpert = !(variationKey === _optimizely.OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_VARIATION_KEYS.CONTROL && isUpgradeEligible) && !(!experimentEnabled && isUpgradeEligible);
  const XpertSidebar = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleXpertButton.default, {
      courseId: courseId,
      isOpen: sidebarIsOpen,
      setIsOpen: setSidebarIsOpen,
      contentToolsEnabled: contentToolsEnabled
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Sidebar.default, {
      courseId: courseId,
      isOpen: sidebarIsOpen,
      setIsOpen: setSidebarIsOpen,
      unitId: unitId
    })]
  });
  return shouldDisplayXpert ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_experiments.ExperimentsProvider, {
    children: XpertSidebar
  }) : null;
};
XpertDisplay.propTypes = {
  courseId: _propTypes.default.string.isRequired,
  contentToolsEnabled: _propTypes.default.bool.isRequired,
  unitId: _propTypes.default.string.isRequired,
  isUpgradeEligible: _propTypes.default.bool.isRequired,
  sidebarIsOpen: _propTypes.default.func.isRequired,
  setSidebarIsOpen: _propTypes.default.func.isRequired
};
const Xpert = _ref2 => {
  let {
    courseId,
    contentToolsEnabled,
    unitId,
    isUpgradeEligible
  } = _ref2;
  const dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(() => {
    dispatch((0, _thunks.getLearningAssistantChatSummary)(courseId));
  }, [dispatch, courseId]);
  const courseInfo = (0, _react.useMemo)(() => ({
    courseId,
    unitId,
    isUpgradeEligible
  }), [courseId, unitId, isUpgradeEligible]);
  const {
    isEnabled,
    sidebarIsOpen
  } = (0, _reactRedux.useSelector)(state => state.learningAssistant);
  const setSidebarIsOpen = isOpen => {
    dispatch((0, _thunks.updateSidebarIsOpen)(isOpen));
  };
  return isEnabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_context.CourseInfoProvider, {
    value: courseInfo,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_experiments.ExperimentsProvider, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(XpertDisplay, {
        courseId: courseId,
        contentToolsEnabled: contentToolsEnabled,
        unitId: unitId,
        isUpgradeEligible: isUpgradeEligible,
        sidebarIsOpen: sidebarIsOpen,
        setSidebarIsOpen: setSidebarIsOpen
      })
    })
  }) : null;
};
Xpert.propTypes = {
  courseId: _propTypes.default.string.isRequired,
  contentToolsEnabled: _propTypes.default.bool.isRequired,
  unitId: _propTypes.default.string.isRequired,
  isUpgradeEligible: _propTypes.default.bool.isRequired
};
var _default = exports.default = Xpert;
//# sourceMappingURL=Xpert.js.map