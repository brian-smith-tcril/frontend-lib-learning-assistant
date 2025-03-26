"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _modelStore = require("@src/generic/model-store");
var _auth = require("@edx/frontend-platform/auth");
var _reactSdk = require("@optimizely/react-sdk");
var _i18n = require("@edx/frontend-platform/i18n");
var _optimizely = require("../data/optimizely");
var _context = require("../context");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// eslint-disable-line import/no-unresolved

const ExperimentsProvider = _ref => {
  let {
    children
  } = _ref;
  const {
    courseId
  } = (0, _react.useContext)(_context.CourseInfoContext);
  const {
    userId
  } = (0, _auth.getAuthenticatedUser)();
  const optimizely = (0, _optimizely.getOptimizely)();
  const {
    enrollmentMode
  } = (0, _modelStore.useModel)('coursewareMeta', courseId);
  return optimizely ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSdk.OptimizelyProvider, {
    optimizely: optimizely,
    user: {
      id: userId.toString(),
      attributes: {
        lms_language_preference: (0, _i18n.getLocale)(),
        lms_enrollment_mode: enrollmentMode
      }
    },
    children: children
  }) : children;
};
ExperimentsProvider.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = exports.default = ExperimentsProvider;
//# sourceMappingURL=ExperimentsProvider.js.map