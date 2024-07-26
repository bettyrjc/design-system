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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-restricted-globals */
var react_1 = require("react");
var ChevronUpIcon_1 = __importDefault(require("../../assets/icons/ChevronUpIcon"));
var UserRoundedIcon_1 = __importDefault(require("../../assets/icons/UserRoundedIcon"));
var CheckIncon_1 = __importDefault(require("../../assets/icons/CheckIncon"));
var DropdownSelector = function (_a) {
    var options = _a.options, formGroupWidth = _a.formGroupWidth, selectedOption = _a.selectedOption, setSelectedOption = _a.setSelectedOption, labelText = _a.labelText, hintText = _a.hintText, _b = _a.emptyMessage, emptyMessage = _b === void 0 ? "No hay opciones disponibles" : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isError, isError = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var _f = (0, react_1.useState)([]), sortedOptions = _f[0], setSortedOptions = _f[1];
    var _g = (0, react_1.useState)(null), selectingItem = _g[0], setSelectingItem = _g[1];
    var _h = (0, react_1.useState)(null), hoveredItemValue = _h[0], setHoveredItemValue = _h[1];
    var _j = (0, react_1.useState)(null), defaultValue = _j[0], setDefaultValue = _j[1];
    var containerRef = (0, react_1.useRef)(null);
    var inputRef = (0, react_1.useRef)(null);
    var toggleIconInput = isDropdownOpen ? 'rotate-0' : 'rotate-180 text-gray-600';
    var inputStyles = isDisabled ? ' input--disabled' : isError ? ' input--error' : ' input--default';
    var labelStyles = isError ? ' label label--error' : ' label label--default';
    var hintStyles = isError ? 'text-error' : 'text-gray-600';
    var handleSelect = function (value, label) {
        setSelectingItem({ isSelecting: true, value: value }); //set the selecting item to animate the selection
        setSelectedOption({ value: value, label: label }); //set the selected option
        //close the options after the 400 ms
        setTimeout(function () {
            setSelectingItem(null);
            setHoveredItemValue(null);
            setIsDropdownOpen(false);
            setDefaultValue({ value: value, label: label });
        }, 400);
    };
    // Sort the options alphabetically and handle the selected option
    var sortOptions = function () {
        var sortedList = __spreadArray([], options, true).sort(function (a, b) { return a.label.localeCompare(b.label); });
        if (defaultValue) {
            var index = sortedList.findIndex(function (option) { return option.label === defaultValue.label; });
            if (index > -1) {
                var selectedItem = sortedList.splice(index, 1)[0];
                sortedList.unshift(selectedItem);
            }
        }
        setSortedOptions(sortedList);
    };
    //handle click outside the container
    var handleClickOutside = function (event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };
    (0, react_1.useEffect)(function () {
        //add listerner on mount
        document.addEventListener('mousedown', handleClickOutside);
        //clean listerner on unmount
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);
    (0, react_1.useEffect)(function () {
        if (isDropdownOpen && defaultValue) {
            sortOptions(); //only puts the selected item at the top of the list when the dropdown is open again
        }
        else {
            setSortedOptions(__spreadArray([], options, true).sort(function (a, b) { return a.label.localeCompare(b.label); }));
        }
    }, [options, isDropdownOpen, defaultValue]);
    (0, react_1.useEffect)(function () {
        var _a;
        // if the options are closed, blur the input to delete all :focus styles
        if (!isDropdownOpen) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }, [isDropdownOpen]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative px-2 mt-5 bg-white ".concat(formGroupWidth), ref: containerRef }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "form--group", onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "input ".concat(inputStyles), placeholder: " ", value: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) && (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label), readOnly: true, id: "custom-dropdown", ref: inputRef, disabled: isDisabled }), labelText && (0, jsx_runtime_1.jsx)("label", __assign({ className: labelStyles, htmlFor: "custom-dropdown" }, { children: labelText })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "right-2.5 absolute-center-y" }, { children: (0, jsx_runtime_1.jsx)(ChevronUpIcon_1.default, { className: "".concat(toggleIconInput, " w-4 h-4 cursor-pointer") }) }))] })), hintText && !isDropdownOpen && (0, jsx_runtime_1.jsx)("span", __assign({ className: "mt-1 ml-1 | ".concat(hintStyles, " text-xs") }, { children: hintText })), isDropdownOpen && ((0, jsx_runtime_1.jsx)("ul", __assign({ className: "options scrollbar-hide" }, { children: sortedOptions.length > 0
                    ? sortedOptions === null || sortedOptions === void 0 ? void 0 : sortedOptions.map(function (option, index) {
                        var optionValue = option.value;
                        var optionLabel = option.label;
                        var isHoveredItem = hoveredItemValue === index; //validate if the item by index is hover
                        var isCurrentItem = optionValue === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) && !selectingItem; //selected item by value 
                        var isSelectingItem = (selectingItem === null || selectingItem === void 0 ? void 0 : selectingItem.value) === optionValue && selectingItem.isSelecting; // selecting item, the current action of the user is doing
                        var isHoveringItem = isHoveredItem || isCurrentItem ? '3' : '2'; //stroke width of the icon is the item is hovered or selected
                        var selectedItemStyles = isCurrentItem || isSelectingItem
                            ? "options__item--hovered  options__item justify-between ".concat((option === null || option === void 0 ? void 0 : option.value) && 'cursor-pointer')
                            : "options__item justify-between ".concat((option === null || option === void 0 ? void 0 : option.value) && 'cursor-pointer');
                        var checkIconStyles = isCurrentItem || isSelectingItem // only show when item have been selected
                            ? 'w-4 h-4 text-green-600'
                            : 'hidden ';
                        return ((0, jsx_runtime_1.jsxs)("li", __assign({ className: selectedItemStyles, onClick: optionValue ? function () { return handleSelect(optionValue, optionLabel); } : undefined, onMouseEnter: function () { return setHoveredItemValue(index); }, onMouseLeave: function () { return setHoveredItemValue(null); } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'justify-start' }, { children: [(0, jsx_runtime_1.jsx)(UserRoundedIcon_1.default, { className: "w-4 h-4", strokeWidth: isHoveringItem }), (0, jsx_runtime_1.jsx)("span", { children: optionLabel })] })), (0, jsx_runtime_1.jsx)(CheckIncon_1.default, { className: checkIconStyles })] }), "".concat(optionValue, "-").concat(index)));
                    })
                    : (0, jsx_runtime_1.jsx)("li", __assign({ className: 'text-gray-300 flex-centered' }, { children: emptyMessage })) })))] })));
};
exports.default = DropdownSelector;
