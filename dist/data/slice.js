"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSidebarIsOpen = exports.setMessageList = exports.setIsEnabled = exports.setDisclosureAcknowledged = exports.setCurrentMessage = exports.setAuditTrialLengthDays = exports.setAuditTrial = exports.setApiIsLoading = exports.setApiError = exports.resetApiError = exports.reducer = exports.learningAssistantSlice = exports.initialState = exports.clearCurrentMessage = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _uuid = require("uuid");
/* eslint-disable no-param-reassign */

const initialState = exports.initialState = {
  currentMessage: '',
  messageList: [],
  apiError: false,
  apiIsLoading: false,
  conversationId: (0, _uuid.v4)(),
  disclosureAcknowledged: false,
  sidebarIsOpen: false,
  isEnabled: false,
  auditTrial: {},
  auditTrialLengthDays: null
};
const learningAssistantSlice = exports.learningAssistantSlice = (0, _toolkit.createSlice)({
  name: 'learning-assistant',
  initialState,
  reducers: {
    setCurrentMessage: (state, _ref) => {
      let {
        payload
      } = _ref;
      state.currentMessage = payload.currentMessage;
    },
    clearCurrentMessage: state => {
      state.currentMessage = '';
    },
    setMessageList: (state, _ref2) => {
      let {
        payload
      } = _ref2;
      state.messageList = payload.messageList;
    },
    setApiError: state => {
      state.apiError = true;
    },
    resetApiError: state => {
      state.apiError = false;
    },
    setApiIsLoading: (state, _ref3) => {
      let {
        payload
      } = _ref3;
      state.apiIsLoading = payload;
    },
    setDisclosureAcknowledged: (state, _ref4) => {
      let {
        payload
      } = _ref4;
      state.disclosureAcknowledged = payload;
    },
    setSidebarIsOpen: (state, _ref5) => {
      let {
        payload
      } = _ref5;
      state.sidebarIsOpen = payload;
    },
    setIsEnabled: (state, _ref6) => {
      let {
        payload
      } = _ref6;
      state.isEnabled = payload;
    },
    setAuditTrial: (state, _ref7) => {
      let {
        payload
      } = _ref7;
      state.auditTrial = payload;
    },
    setAuditTrialLengthDays: (state, _ref8) => {
      let {
        payload
      } = _ref8;
      state.auditTrialLengthDays = payload;
    }
  }
});
const {
  setCurrentMessage,
  clearCurrentMessage,
  setMessageList,
  setApiError,
  setApiIsLoading,
  resetApiError,
  setDisclosureAcknowledged,
  setSidebarIsOpen,
  setIsEnabled,
  setAuditTrial,
  setAuditTrialLengthDays
} = learningAssistantSlice.actions;
exports.setAuditTrialLengthDays = setAuditTrialLengthDays;
exports.setAuditTrial = setAuditTrial;
exports.setIsEnabled = setIsEnabled;
exports.setSidebarIsOpen = setSidebarIsOpen;
exports.setDisclosureAcknowledged = setDisclosureAcknowledged;
exports.resetApiError = resetApiError;
exports.setApiIsLoading = setApiIsLoading;
exports.setApiError = setApiError;
exports.setMessageList = setMessageList;
exports.clearCurrentMessage = clearCurrentMessage;
exports.setCurrentMessage = setCurrentMessage;
const {
  reducer
} = learningAssistantSlice;
exports.reducer = reducer;
//# sourceMappingURL=slice.js.map