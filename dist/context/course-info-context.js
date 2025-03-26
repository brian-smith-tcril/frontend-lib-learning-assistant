"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseInfoProvider = exports.CourseInfoContext = void 0;
var _react = require("react");
const CourseInfoContext = exports.CourseInfoContext = /*#__PURE__*/(0, _react.createContext)({
  courseId: null,
  unitId: null,
  isUpgradeEligible: false
});
const CourseInfoProvider = exports.CourseInfoProvider = CourseInfoContext.Provider;
//# sourceMappingURL=course-info-context.js.map