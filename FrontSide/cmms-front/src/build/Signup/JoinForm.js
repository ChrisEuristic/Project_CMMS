"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
require("./signup.css");
//import { useRef } from 'react';
const JoinForm = () => {
    const memberType = React.useRef(null);
    return (React.createElement("form", { action: "http://localhost:8086/member", method: "post" },
        React.createElement("label", { htmlFor: 'type' }, "\uD68C\uC6D0 \uC720\uD615"),
        React.createElement("div", { className: 'inline-flex' },
            React.createElement("input", { ref: memberType, type: "radio", name: "type", value: "\uAC1C\uBC1C\uC790" }),
            "\uAC1C\uBC1C\uC790",
            React.createElement("br", null),
            React.createElement("input", { ref: memberType, type: "radio", name: "type", value: "\uC0AC\uC5C5\uC790" }),
            "\uC0AC\uC5C5\uC790",
            React.createElement("br", null),
            React.createElement("input", { ref: memberType, type: "radio", name: "type", value: "\uC791\uC5C5\uC790" }),
            "\uC791\uC5C5\uC790",
            React.createElement("br", null),
            React.createElement("input", { ref: memberType, type: "radio", name: "type", value: "\uAE30\uC220\uC790" }),
            "\uAE30\uC220\uC790"),
        React.createElement("br", null),
        React.createElement("label", { htmlFor: 'id' }, "\uC544\uC774\uB514"),
        React.createElement("input", { type: "text", name: "id", placeholder: "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 \uC785\uB825" }),
        React.createElement("br", null),
        React.createElement("label", { htmlFor: 'password' }, "\uBE44\uBC00\uBC88\uD638"),
        React.createElement("input", { type: "password", name: "password", placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825" }),
        React.createElement("br", null),
        React.createElement("label", { htmlFor: 'name' }, "\uC774\uB984"),
        React.createElement("input", { type: "text", name: "name", placeholder: "\uC774\uB984 \uC785\uB825" }),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", value: "\uAC00\uC785\uD558\uAE30" })));
};
exports.default = JoinForm;
