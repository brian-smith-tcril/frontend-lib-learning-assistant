"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _courseInfoContext = require("./course-info-context");
Object.keys(_courseInfoContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _courseInfoContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _courseInfoContext[key];
    }
  });
});
//# sourceMappingURL=index.js.map