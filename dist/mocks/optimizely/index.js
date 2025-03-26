"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDecision = exports.createInstance = exports.OptimizelyProvider = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const useDecision = experimentKey =>
// To mock optimizely for local smoke testing, set the value of "enabled" to "true" and
// replace "replace_me" with the desired value from OPTIMIZELY_PROMPT_EXPERIMENT_VARIATION_KEYS
// which can be found in src/data/optimizely.js
[{
  enabled: true,
  variationKey: 'replace_me'
}];
exports.useDecision = useDecision;
const OptimizelyProvider = _ref => {
  let {
    optimizely,
    user,
    children = null
  } = _ref;
  return children;
};
exports.OptimizelyProvider = OptimizelyProvider;
const createInstance = args => ({});
exports.createInstance = createInstance;
//# sourceMappingURL=index.js.map