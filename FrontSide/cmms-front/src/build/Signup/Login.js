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
const Login = () => {
    const navigator = (0, react_router_dom_1.useNavigate)();
    const id = React.useRef(null);
    const password = React.useRef(null);
    document.addEventListener("keydown", (event) => {
        var _a, _b;
        if (event.key === "Enter") {
            fetch("http://1.254.141.230:8086/login", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    'id': (_a = id.current) === null || _a === void 0 ? void 0 : _a.value,
                    'password': (_b = password.current) === null || _b === void 0 ? void 0 : _b.value
                })
            }).then(resp => resp.json())
                .then(result => {
                if (result.success) {
                    alert(result.name + "님, 반갑습니다!");
                    navigator("/");
                }
                else {
                    alert("로그인 실패");
                }
            });
        }
    });
    return (React.createElement("div", { className: 'margin-top margin-top2' },
        React.createElement("label", { htmlFor: 'id' }, "\uC544\uC774\uB514"),
        React.createElement("div", { className: 'inline-flex' },
            React.createElement("input", { type: "text", name: "id", placeholder: "\uC544\uC774\uB514 \uC785\uB825", ref: id })),
        React.createElement("br", null),
        React.createElement("label", { htmlFor: 'password' }, "\uBE44\uBC00\uBC88\uD638"),
        React.createElement("div", { className: 'inline-flex' },
            React.createElement("input", { type: "password", name: "password", placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825", ref: password }))));
};
exports.default = Login;
