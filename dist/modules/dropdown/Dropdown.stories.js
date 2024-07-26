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
exports.Error = exports.Disabled = exports.CustomEmptyMessage = exports.CustomParentWidth = exports.Default = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DropdownSelector_1 = __importDefault(require("./DropdownSelector"));
var userDataMock_1 = require("../../assets/mocks/userDataMock");
// import { fn } from "@storybook/test";
var meta = {
    title: "DropdownSelector",
    component: DropdownSelector_1.default,
};
exports.default = meta;
var renderDropdown = function (args) {
    var _a = (0, react_1.useState)(null), selectedOption = _a[0], setSelectedOption = _a[1];
    return ((0, jsx_runtime_1.jsx)(DropdownSelector_1.default, __assign({}, args, { selectedOption: selectedOption, setSelectedOption: setSelectedOption })));
};
exports.Default = {
    args: {
        options: userDataMock_1.userDataMock,
        labelText: "Elige un usuario",
        hintText: "Solo podrás elegir a Victor para continuar",
    },
    render: renderDropdown,
};
exports.CustomParentWidth = {
    args: {
        options: userDataMock_1.userDataMock,
        labelText: "Elige un usuario",
        hintText: "Solo podrás elegir a Victor para continuar",
        formGroupWidth: "w-full lg:w-1/2",
    },
    render: renderDropdown,
};
exports.CustomEmptyMessage = {
    args: {
        options: [],
        labelText: "Elige un usuario",
        hintText: "Solo podrás elegir a Victor para continuar",
        emptyMessage: "No hay usuarios disponibles",
    },
    render: renderDropdown,
};
exports.Disabled = {
    args: {
        options: [],
        labelText: "Elige un usuario",
        isDisabled: true,
    },
    render: renderDropdown,
};
exports.Error = {
    args: {
        options: userDataMock_1.userDataMock,
        labelText: "Elige un usuario",
        hintText: "Solo podrás elegir a Victor para continuar",
        isError: true,
    },
    render: renderDropdown,
};
