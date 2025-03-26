"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _Message = _interopRequireDefault(require("../Message"));
require("./ChatBox.scss");
var _MessageDivider = _interopRequireDefault(require("../MessageDivider"));
var _scroll = require("../../utils/scroll");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}

// container for all of the messages
const ChatBox = () => {
  const firstRender = (0, _react.useRef)(true);
  const messageContainerRef = (0, _react.useRef)();
  const {
    messageList,
    apiIsLoading
  } = (0, _reactRedux.useSelector)(state => state.learningAssistant);
  const messagesBeforeToday = messageList.filter(m => !isToday(new Date(m.timestamp)));
  const messagesToday = messageList.filter(m => isToday(new Date(m.timestamp)));
  (0, _react.useEffect)(() => {
    if (firstRender.current) {
      (0, _scroll.scrollToBottom)(messageContainerRef);
      firstRender.current = false;
      return;
    }
    (0, _scroll.scrollToBottom)(messageContainerRef, true);
  }, [messageList.length]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "xpert-chat-scroller",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "messages-list d-flex flex-column",
      ref: messageContainerRef,
      "data-testid": "messages-container",
      children: [messagesBeforeToday.map(_ref => {
        let {
          role,
          content,
          timestamp
        } = _ref;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Message.default, {
          variant: role,
          message: content
        }, timestamp);
      }), messageList.length !== 0 && messagesBeforeToday.length !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MessageDivider.default, {
        text: "Today"
      }), messagesToday.map(_ref2 => {
        let {
          role,
          content,
          timestamp
        } = _ref2;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Message.default, {
          variant: role,
          message: content
        }, timestamp);
      }), apiIsLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "loading",
        children: "Xpert is thinking"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "separator separator--top"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "separator separator--bottom"
    })]
  });
};
var _default = exports.default = ChatBox;
//# sourceMappingURL=index.js.map