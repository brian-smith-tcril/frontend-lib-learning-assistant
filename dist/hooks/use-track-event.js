"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTrackEvent;
var _react = require("react");
var _modelStore = require("@src/generic/model-store");
var _auth = require("@edx/frontend-platform/auth");
var _analytics = require("@edx/frontend-platform/analytics");
var _context = require("../context");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // eslint-disable-line import/no-unresolved
/**
 * @typedef Tracker
 * @type {object}
 * @property {(eventName: string, details?: object)} track Calls sendTrackEvent with user and course context.
 */

/**
 * This hook returns a track method to track events.
 *
 * @returns {Tracker}
 */
function useTrackEvent() {
  const {
    courseId,
    moduleId
  } = (0, _react.useContext)(_context.CourseInfoContext);
  const {
    org
  } = (0, _modelStore.useModel)('courseHomeMeta', courseId);
  const {
    userId
  } = (0, _auth.getAuthenticatedUser)();
  const track = (event, details) => {
    (0, _analytics.sendTrackEvent)(event, _objectSpread({
      course_id: courseId,
      org_key: org,
      user_id: userId,
      module_id: moduleId
    }, details));
  };
  return {
    track
  };
}
//# sourceMappingURL=use-track-event.js.map