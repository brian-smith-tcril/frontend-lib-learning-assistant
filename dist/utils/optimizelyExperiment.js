"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackUpgradeButtonClickedOptimizely = exports.trackChatBotMessageOptimizely = void 0;
var _optimizely = require("../data/optimizely");
const trackChatBotMessageOptimizely = function (userId) {
  let userAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const optimizelyInstance = (0, _optimizely.getOptimizely)();
  if (!optimizelyInstance || Object.keys(optimizelyInstance).length === 0) {
    return;
  }
  optimizelyInstance.onReady().then(() => {
    optimizelyInstance.track('learning_assistant_chat_message', userId, userAttributes);
  });
};
exports.trackChatBotMessageOptimizely = trackChatBotMessageOptimizely;
const trackUpgradeButtonClickedOptimizely = function (userId) {
  let userAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const optimizelyInstance = (0, _optimizely.getOptimizely)();
  if (!optimizelyInstance || Object.keys(optimizelyInstance).length === 0) {
    return;
  }
  optimizelyInstance.onReady().then(() => {
    optimizelyInstance.track('upgrade_button_click', userId, userAttributes);
  });
};
exports.trackUpgradeButtonClickedOptimizely = trackUpgradeButtonClickedOptimizely;
//# sourceMappingURL=optimizelyExperiment.js.map