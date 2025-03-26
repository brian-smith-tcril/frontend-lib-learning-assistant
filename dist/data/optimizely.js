"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptimizely = exports.OPTIMIZELY_PROMPT_EXPERIMENT_VARIATION_KEYS = exports.OPTIMIZELY_PROMPT_EXPERIMENT_KEY = exports.OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_VARIATION_KEYS = exports.OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_KEY = void 0;
var _reactSdk = require("@optimizely/react-sdk");
var _frontendPlatform = require("@edx/frontend-platform");
(0, _frontendPlatform.ensureConfig)(['OPTIMIZELY_FULL_STACK_SDK_KEY'], 'Frontend Lib Learning Assistant Optimizely module');

/**
 * Initializing the Optimizely instance at the top-level will not work, because it may be initialized before
 * the OPTIMIZELY_FULL_STACK_SDK_KEY is available and will not be reinitialized afterward. Wrapping the initialization
 * in a function allows components to request the instance as-needed.
 */
let instance = null;
const getOptimizely = () => {
  const OPTIMIZELY_SDK_KEY = (0, _frontendPlatform.getConfig)().OPTIMIZELY_FULL_STACK_SDK_KEY;
  if (!instance && OPTIMIZELY_SDK_KEY) {
    instance = (0, _reactSdk.createInstance)({
      sdkKey: OPTIMIZELY_SDK_KEY
    });
  }
  return instance;
};
exports.getOptimizely = getOptimizely;
const OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_KEY = exports.OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_KEY = 'xpert_audit_trial_experiment';
const OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_VARIATION_KEYS = exports.OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_VARIATION_KEYS = {
  CONTROL: 'control',
  XPERT_AUDIT_14_DAY_TRIAL: 'xpert_audit_14_day_trial',
  XPERT_AUDIT_28_DAY_TRIAL: 'xpert_audit_28_day_trial'
};
const OPTIMIZELY_PROMPT_EXPERIMENT_KEY = exports.OPTIMIZELY_PROMPT_EXPERIMENT_KEY = '_cosmo__xpert_gpt_4_0_prompt';
const OPTIMIZELY_PROMPT_EXPERIMENT_VARIATION_KEYS = exports.OPTIMIZELY_PROMPT_EXPERIMENT_VARIATION_KEYS = {
  UPDATED_PROMPT: 'updated_prompt'
};
//# sourceMappingURL=optimizely.js.map