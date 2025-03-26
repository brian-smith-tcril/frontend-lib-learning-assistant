"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _thunks = require("../../data/thunks");
var _hooks = require("../../hooks");
var _experiments = require("../../experiments");
require("./MessageForm.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageForm = _ref => {
  let {
    courseId,
    shouldAutofocus,
    unitId
  } = _ref;
  const {
    upgradeable
  } = (0, _hooks.useCourseUpgrade)();
  const {
    apiIsLoading,
    currentMessage,
    apiError
  } = (0, _reactRedux.useSelector)(state => state.learningAssistant);
  const dispatch = (0, _reactRedux.useDispatch)();
  const inputRef = (0, _react.useRef)();
  const [decision] = (0, _experiments.usePromptExperimentDecision)();
  const {
    enabled,
    variationKey
  } = decision || {};
  const promptExperimentVariationKey = enabled ? variationKey : undefined;
  (0, _react.useEffect)(() => {
    if (inputRef.current && !apiError && !apiIsLoading && shouldAutofocus) {
      inputRef.current.focus();
    }
  }, [apiError, apiIsLoading, shouldAutofocus]);
  const handleSubmitMessage = event => {
    event.preventDefault();
    if (currentMessage) {
      dispatch((0, _thunks.acknowledgeDisclosure)(true));
      dispatch((0, _thunks.addChatMessage)('user', currentMessage, courseId, promptExperimentVariationKey));
      dispatch((0, _thunks.getChatResponse)(courseId, unitId, upgradeable, promptExperimentVariationKey));
    }
  };
  const handleUpdateCurrentMessage = event => {
    dispatch((0, _thunks.updateCurrentMessage)(event.target.value));
  };
  const getSubmitButton = () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
    "aria-label": "submit",
    disabled: apiIsLoading,
    onClick: handleSubmitMessage,
    size: "inline",
    variant: "tertiary",
    "data-testid": "message-form-submit",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Send
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form, {
    className: "message-form w-100",
    onSubmit: handleSubmitMessage,
    "data-testid": "message-form",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
      "data-hj-suppress": true,
      disabled: apiIsLoading,
      floatingLabel: "Write a message",
      onChange: handleUpdateCurrentMessage,
      trailingElement: getSubmitButton(),
      value: currentMessage,
      ref: inputRef,
      className: "send-message-input"
    })
  });
};
MessageForm.propTypes = {
  courseId: _propTypes.default.string.isRequired,
  unitId: _propTypes.default.string.isRequired,
  shouldAutofocus: _propTypes.default.bool
};
MessageForm.defaultProps = {
  shouldAutofocus: false
};
var _default = exports.default = MessageForm;
//# sourceMappingURL=index.js.map