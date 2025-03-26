"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToBottom = void 0;
/* eslint-disable import/prefer-default-export */

const scrollToBottom = function (containerRef) {
  let smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  setTimeout(() => {
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: smooth ? 'smooth' : 'instant'
    });
  });
};
exports.scrollToBottom = scrollToBottom;
//# sourceMappingURL=scroll.js.map