"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function UserRoundedIcon(_a) {
    var className = _a.className, _b = _a.strokeWidth, strokeWidth = _b === void 0 ? "2" : _b;
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: strokeWidth, d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) })));
}
exports.default = UserRoundedIcon;
