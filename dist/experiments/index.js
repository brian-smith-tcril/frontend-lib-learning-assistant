"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ExperimentsProvider: true
};
Object.defineProperty(exports, "ExperimentsProvider", {
  enumerable: true,
  get: function () {
    return _ExperimentsProvider.default;
  }
});
var _ExperimentsProvider = _interopRequireDefault(require("./ExperimentsProvider"));
var _experimentHooks = require("./experimentHooks");
Object.keys(_experimentHooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _experimentHooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _experimentHooks[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map