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
var CheckIncon = function (_a) {
    var className = _a.className;
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "20 6 9 17 4 12" }) })));
};
exports.default = CheckIncon;
