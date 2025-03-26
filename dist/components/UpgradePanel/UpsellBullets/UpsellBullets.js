"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XpertAccessBullet = exports.VerifiedCertBullet = exports.UnlockGradedBullet = exports.FullAccessBullet = void 0;
var _react = _interopRequireDefault(require("react"));
var _icons = require("@openedx/paragon/icons");
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CheckmarkBullet = () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
  src: _icons.Check,
  className: "xpert-value-prop-check"
});
const VerifiedCertBullet = () => {
  const verifiedCertLink = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    className: "inline-link-underline font-weight-bold text-white",
    rel: "noopener noreferrer",
    target: "_blank",
    href: `${(0, _frontendPlatform.getConfig)().MARKETING_SITE_BASE_URL}/verified-certificate`,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "advertisements.upsell.verifiedCertBullet.verifiedCert",
      defaultMessage: "verified certificate",
      description: "Bolded words 'verified certificate', which is the name of credential the learner receives."
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
    direction: "horizontal",
    gap: 3,
    role: "listitem",
    className: "align-items-start xpert-value-prop",
    "data-testid": "verified-cert-bullet",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CheckmarkBullet, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "advertisements.upsell.verifiedCertBullet",
        defaultMessage: "Earn a {verifiedCertLink} of completion to showcase on your resum\xE9",
        description: "Bullet showcasing benefit of earned credential.",
        values: {
          verifiedCertLink
        }
      })
    })]
  });
};
exports.VerifiedCertBullet = VerifiedCertBullet;
const UnlockGradedBullet = () => {
  const gradedAssignmentsInBoldText = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "font-weight-bold",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "advertisements.upsell.unlockGradedBullet.gradedAssignments",
      defaultMessage: "graded assignments",
      description: "Bolded words 'graded assignments', which are the bolded portion of a bullet point highlighting that course content is unlocked when purchasing an upgrade. Graded assignments are any course content that is graded and are unlocked by upgrading to verified certificates."
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
    direction: "horizontal",
    gap: 3,
    role: "listitem",
    className: "align-items-start xpert-value-prop",
    "data-testid": "unlock-graded-bullet",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CheckmarkBullet, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "advertisements.upsell.unlockGradedBullet",
        defaultMessage: "Unlock your access to all course activities, including {gradedAssignmentsInBoldText}",
        description: "Bullet showcasing benefit of additional course material.",
        values: {
          gradedAssignmentsInBoldText
        }
      })
    })]
  });
};
exports.UnlockGradedBullet = UnlockGradedBullet;
const FullAccessBullet = () => {
  const fullAccessInBoldText = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "font-weight-bold",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "advertisements.upsell.fullAccessBullet.fullAccess",
      defaultMessage: "Full access",
      description: "Bolded phrase 'Full access', which is the bolded portion of a bullet point highlighting that access to course content will not have time limits."
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
    direction: "horizontal",
    gap: 3,
    role: "listitem",
    className: "align-items-start xpert-value-prop",
    "data-testid": "full-access-bullet",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CheckmarkBullet, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "advertisements.upsell.fullAccessBullet",
        defaultMessage: "{fullAccessInBoldText} to course content and materials, even after the course ends",
        description: "Bullet showcasing upgrade lifts access durations.",
        values: {
          fullAccessInBoldText
        }
      })
    })]
  });
};
exports.FullAccessBullet = FullAccessBullet;
const XpertAccessBullet = () => {
  const xpertLearningAssistantInBoldText = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "font-weight-bold",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "advertisements.upsell.xpertAccessBullet.xpertLearningAssistant",
      defaultMessage: "Xpert Learning Assistant",
      description: "Bolded phrase 'Xpert Learning Assistant', which is the bolded portion of a bullet point highlighting that access to the Xpert Learning Assistant after purchasing an upgrade."
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
    direction: "horizontal",
    gap: 3,
    role: "listitem",
    className: "align-items-start xpert-value-prop",
    "data-testid": "xpert-access-bullet",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CheckmarkBullet, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "advertisements.upsell.xpertAccessBullet",
        defaultMessage: "Gain full access to {xpertLearningAssistantInBoldText}",
        description: "Bullet showcasing benefit of Xpert Learning Assistant.",
        values: {
          xpertLearningAssistantInBoldText
        }
      })
    })]
  });
};
exports.XpertAccessBullet = XpertAccessBullet;
//# sourceMappingURL=UpsellBullets.js.map