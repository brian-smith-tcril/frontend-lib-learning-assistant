"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuditTrialExperimentDecision = useAuditTrialExperimentDecision;
exports.usePromptExperimentDecision = usePromptExperimentDecision;
var _auth = require("@edx/frontend-platform/auth");
var _reactSdk = require("@optimizely/react-sdk");
var _optimizely = require("../data/optimizely");
// eslint-disable-next-line import/prefer-default-export
function usePromptExperimentDecision() {
  const {
    userId
  } = (0, _auth.getAuthenticatedUser)();
  const [decision] = (0, _reactSdk.useDecision)(_optimizely.OPTIMIZELY_PROMPT_EXPERIMENT_KEY, {
    overrideUserId: userId.toString()
  } // This override is just to make sure the userId is up to date.
  );
  return [decision];
}

// eslint-disable-next-line import/prefer-default-export
function useAuditTrialExperimentDecision() {
  const {
    userId
  } = (0, _auth.getAuthenticatedUser)();
  const [decision] = (0, _reactSdk.useDecision)(_optimizely.OPTIMIZELY_AUDIT_TRIAL_LENGTH_EXPERIMENT_KEY, {
    overrideUserId: userId.toString()
  } // This override is just to make sure the userId is up to date.
  );
  return [decision];
}
//# sourceMappingURL=experimentHooks.js.map