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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./assets/ui/index.css");
var DropdownSelector_1 = __importDefault(require("./modules/dropdown/DropdownSelector"));
var userDataMock_1 = require("./assets/mocks/userDataMock");
function App() {
    var _a = react_1.default.useState(null), selectedOption = _a[0], setSelectedOption = _a[1];
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "container" }, { children: (0, jsx_runtime_1.jsx)(DropdownSelector_1.default, { selectedOption: selectedOption, setSelectedOption: setSelectedOption, options: userDataMock_1.userDataMock, labelText: 'Elige un usuario', hintText: "Solo podr\u00E1s elegir a Victor para continuar" }) })));
}
exports.default = App;
