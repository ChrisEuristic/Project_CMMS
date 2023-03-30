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
    //const memberType = React.useRef<HTMLInputElement>(null);
    const [memberType, setMemberType] = React.useState("");
    const [idPlaceHolder, setIdPlaceHolder] = React.useState("회원 유형 선택");
    const chooseType = (type) => {
        setMemberType(type);
        switch (type) {
            case '개발자':
                setIdPlaceHolder("아무거나 입력");
                break;
            case '사업자':
                setIdPlaceHolder("사업자등록번호 입력");
                break;
            case '작업자':
                setIdPlaceHolder("휴대폰 번호 입력");
                break;
            case '기술자':
                setIdPlaceHolder("영문 + 숫자로 입력");
                break;
            default: break;
        }
        //console.log(memberType.current?.value)
        //console.log(input[type]);
    };
    React.useEffect(() => {
        console.log(memberType, idPlaceHolder);
    }, [memberType]);
    return (React.createElement("div", { className: 'margin-top' },
        React.createElement("form", { action: "http://1.254.141.230:8086/join", method: "post", target: 'hidden_iframe' },
            React.createElement("div", { className: 'label-type' },
                React.createElement("label", { htmlFor: 'type' }, "\uD68C\uC6D0 \uC720\uD615")),
            React.createElement("div", { className: 'type' },
                React.createElement("div", { className: 'inline-flex' },
                    React.createElement("input", { type: "radio", name: "type", id: 'type1', value: '\uAC1C\uBC1C\uC790', onClick: () => { chooseType('개발자'); } }),
                    React.createElement("label", { htmlFor: 'type1' }, "\uAC1C\uBC1C\uC790"),
                    "\u00A0",
                    React.createElement("input", { type: "radio", name: "type", id: 'type2', value: '\uC0AC\uC5C5\uC790', onClick: () => { chooseType('사업자'); } }),
                    React.createElement("label", { htmlFor: 'type2' }, "\uC0AC\uC5C5\uC790")),
                React.createElement("div", { className: 'inline-flex' },
                    React.createElement("input", { type: "radio", name: "type", id: 'type3', value: '\uC791\uC5C5\uC790', onClick: () => { chooseType('작업자'); } }),
                    React.createElement("label", { htmlFor: 'type3' }, "\uC791\uC5C5\uC790"),
                    "\u00A0",
                    React.createElement("input", { type: "radio", name: "type", id: 'type4', value: '\uAE30\uC220\uC790', onClick: () => { chooseType('기술자'); } }),
                    React.createElement("label", { htmlFor: 'type4' }, "\uAE30\uC220\uC790"))),
            React.createElement("br", null),
            React.createElement("label", { htmlFor: 'id' }, "\uC544\uC774\uB514"),
            React.createElement("div", { className: 'inline-flex' },
                React.createElement("input", { type: "text", name: "id", placeholder: idPlaceHolder })),
            React.createElement("br", null),
            React.createElement("label", { htmlFor: 'password' }, "\uBE44\uBC00\uBC88\uD638"),
            React.createElement("div", { className: 'inline-flex' },
                React.createElement("input", { type: "password", name: "password", placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825" })),
            React.createElement("br", null),
            React.createElement("label", { htmlFor: 'name' }, "\uC774\uB984"),
            React.createElement("div", { className: 'inline-flex' },
                React.createElement("input", { type: "text", name: "name", placeholder: "\uC774\uB984 \uC785\uB825" })),
            React.createElement("br", null),
            React.createElement("div", { className: 'inline-flex full-width' },
                React.createElement("input", { type: "reset", value: "\uB2E4\uC2DC\uC791\uC131" }),
                React.createElement("input", { type: "submit", value: "\uAC00\uC785\uD558\uAE30" }))),
        React.createElement("iframe", { name: "hidden_iframe", style: { display: "none" } })));
};
exports.default = JoinForm;
