"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _thunks = require("../../data/thunks");
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

const APIError = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const handleClose = () => {
    dispatch((0, _thunks.clearApiError)());
  };
  const alertRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (alertRef.current) {
      alertRef.current.focus();
    }
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Alert, {
    variant: "danger",
    icon: _icons.Info,
    dismissible: true,
    onClose: handleClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: alertRef,
      tabIndex: "0",
      "data-testid": "alert-heading",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Heading, {
        children: "Xpert is unavailable"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: "Please try again by sending another question."
    })]
  });
};
var _default = exports.default = APIError;
//# sourceMappingURL=index.js.map