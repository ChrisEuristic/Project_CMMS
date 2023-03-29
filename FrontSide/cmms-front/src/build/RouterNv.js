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
const react_router_dom_1 = require("react-router-dom");
require("./standard.css");
require("./logo.svg");
const RouterNv = () => {
    const navigator = (0, react_router_dom_1.useNavigate)();
    return (React.createElement("div", { className: 'navbar' },
        React.createElement("div", { className: 'main-logo' },
            React.createElement("svg", { width: "50", height: "50", viewBox: "0 0 120 120", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M42.2681 117.32C28.6195 113.098 16.9254 104.144 9.28936 92.0692C1.65329 79.9943 -1.42355 65.591 0.612308 51.45C2.64816 37.3091 9.66309 24.3586 20.3952 14.9283C31.1274 5.49786 44.8723 0.206477 59.1577 0.00591268C73.443 -0.194652 87.3311 4.70877 98.3238 13.8341C109.316 22.9595 116.692 35.7079 119.124 49.7861C121.556 63.8644 118.885 78.3484 111.591 90.6329C104.297 102.917 92.8588 112.196 79.3341 116.8L69.1897 86.9973C75.618 84.8091 81.0547 80.3989 84.5216 74.56C87.9885 68.7211 89.2582 61.8368 88.1022 55.1453C86.9463 48.4538 83.4405 42.3944 78.2156 38.057C72.9907 33.7196 66.3896 31.389 59.5996 31.4843C52.8097 31.5796 46.2766 34.0947 41.1755 38.577C36.0745 43.0594 32.7402 49.2148 31.7725 55.9361C30.8049 62.6574 32.2673 69.5035 35.8968 75.2427C39.5263 80.982 45.0846 85.2378 51.5719 87.2447L42.2681 117.32Z", fill: "white" }),
                React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M50.8984 52.0168C50.8953 49.7732 51.7114 47.6056 53.1934 45.9211C54.6755 44.2366 56.7215 43.1511 58.9472 42.8685C61.173 42.5858 63.4254 43.1255 65.2814 44.386C67.1374 45.6466 68.4694 47.5414 69.0272 49.7146C69.1494 50.1877 69.0785 50.6899 68.8304 51.1108C68.5822 51.5316 68.177 51.8367 67.7039 51.9588C67.2308 52.0809 66.7286 52.0101 66.3077 51.7619C65.8868 51.5138 65.5818 51.1086 65.4597 50.6355C65.1253 49.3312 64.3262 48.194 63.2124 47.4373C62.0987 46.6807 60.747 46.3568 59.4113 46.5264C58.0756 46.696 56.8478 47.3475 55.9586 48.3585C55.0693 49.3695 54.5798 50.6704 54.582 52.0168V57.5422H70.0531C71.6739 57.5422 73 58.8683 73 60.4891V73.3817C73 75.8129 71.0109 77.802 68.5797 77.802H51.6351C49.204 77.802 47.2148 75.8129 47.2148 73.3817V60.4891C47.2148 58.8683 48.5409 57.5422 50.1617 57.5422H50.8984V52.0168ZM60.1074 61.6863C59.375 61.6855 58.6642 61.9342 58.092 62.3914C57.5198 62.8486 57.1204 63.4871 56.9596 64.2016C56.7987 64.9162 56.8861 65.6642 57.2072 66.3224C57.5282 66.9807 58.064 67.51 58.7261 67.8231V72.2766C58.7261 72.643 58.8716 72.9943 59.1306 73.2534C59.3897 73.5124 59.741 73.658 60.1074 73.658C60.4738 73.658 60.8251 73.5124 61.0842 73.2534C61.3432 72.9943 61.4888 72.643 61.4888 72.2766V67.8231C62.1509 67.51 62.6866 66.9807 63.0077 66.3224C63.3287 65.6642 63.4161 64.9162 63.2552 64.2016C63.0944 63.4871 62.695 62.8486 62.1228 62.3914C61.5506 61.9342 60.8398 61.6855 60.1074 61.6863Z", fill: "white" }))),
        React.createElement("div", { className: 'nav-body' },
            React.createElement("button", { onClick: () => navigator("/") }, "\uD648"),
            React.createElement("button", { onClick: () => navigator("/") }, "\uC0DD\uC0B0"),
            React.createElement("button", { onClick: () => navigator("/") }, "\uD488\uC9C8"),
            React.createElement("button", { onClick: () => navigator("/") }, "\uC7AC\uACE0"),
            React.createElement("button", { onClick: () => navigator("/") }, "\uC124\uBE44")),
        React.createElement("div", { className: 'nav-rear' },
            React.createElement("button", { onClick: () => navigator("/login") }, "\uB85C\uADF8\uC778"),
            React.createElement("button", { onClick: () => navigator("/join") }, "\uD68C\uC6D0\uAC00\uC785"))));
};
exports.default = RouterNv;
