import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function ChevronUpIcon(_a) {
    var className = _a.className;
    return (jsxs("svg", __assign({ className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, { children: ["  ", jsx("polyline", { points: "18 15 12 9 6 15" })] })));
}

function UserRoundedIcon(_a) {
    var className = _a.className, _b = _a.strokeWidth, strokeWidth = _b === void 0 ? "2" : _b;
    return (jsx("svg", __assign({ className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: strokeWidth, d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) })));
}

var CheckIncon = function (_a) {
    var className = _a.className;
    return (jsx("svg", __assign({ className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, { children: jsx("polyline", { points: "20 6 9 17 4 12" }) })));
};

var DropdownSelector = function (_a) {
    var options = _a.options, formGroupWidth = _a.formGroupWidth, selectedOption = _a.selectedOption, setSelectedOption = _a.setSelectedOption, labelText = _a.labelText, hintText = _a.hintText, _b = _a.emptyMessage, emptyMessage = _b === void 0 ? "No hay opciones disponibles" : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isError, isError = _d === void 0 ? false : _d;
    var _e = useState(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var _f = useState([]), sortedOptions = _f[0], setSortedOptions = _f[1];
    var _g = useState(null), selectingItem = _g[0], setSelectingItem = _g[1];
    var _h = useState(null), hoveredItemValue = _h[0], setHoveredItemValue = _h[1];
    var _j = useState(null), defaultValue = _j[0], setDefaultValue = _j[1];
    var containerRef = useRef(null);
    var inputRef = useRef(null);
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
    useEffect(function () {
        //add listerner on mount
        document.addEventListener('mousedown', handleClickOutside);
        //clean listerner on unmount
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);
    useEffect(function () {
        if (isDropdownOpen && defaultValue) {
            sortOptions(); //only puts the selected item at the top of the list when the dropdown is open again
        }
        else {
            setSortedOptions(__spreadArray([], options, true).sort(function (a, b) { return a.label.localeCompare(b.label); }));
        }
    }, [options, isDropdownOpen, defaultValue]);
    useEffect(function () {
        var _a;
        // if the options are closed, blur the input to delete all :focus styles
        if (!isDropdownOpen) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }, [isDropdownOpen]);
    return (jsxs("div", __assign({ className: "relative px-2 mt-5 bg-white ".concat(formGroupWidth), ref: containerRef }, { children: [jsxs("div", __assign({ className: "form--group", onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } }, { children: [jsx("input", { type: "text", className: "input ".concat(inputStyles), placeholder: " ", value: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) && (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label), readOnly: true, id: "custom-dropdown", ref: inputRef, disabled: isDisabled }), labelText && jsx("label", __assign({ className: labelStyles, htmlFor: "custom-dropdown" }, { children: labelText })), jsx("div", __assign({ className: "right-2.5 absolute-center-y" }, { children: jsx(ChevronUpIcon, { className: "".concat(toggleIconInput, " w-4 h-4 cursor-pointer") }) }))] })), hintText && !isDropdownOpen && jsx("span", __assign({ className: "mt-1 ml-1 | ".concat(hintStyles, " text-xs") }, { children: hintText })), isDropdownOpen && (jsx("ul", __assign({ className: "options scrollbar-hide" }, { children: sortedOptions.length > 0
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
                        return (jsxs("li", __assign({ className: selectedItemStyles, onClick: optionValue ? function () { return handleSelect(optionValue, optionLabel); } : undefined, onMouseEnter: function () { return setHoveredItemValue(index); }, onMouseLeave: function () { return setHoveredItemValue(null); } }, { children: [jsxs("div", __assign({ className: 'justify-start' }, { children: [jsx(UserRoundedIcon, { className: "w-4 h-4", strokeWidth: isHoveringItem }), jsx("span", { children: optionLabel })] })), jsx(CheckIncon, { className: checkIconStyles })] }), "".concat(optionValue, "-").concat(index)));
                    })
                    : jsx("li", __assign({ className: 'text-gray-300 flex-centered' }, { children: emptyMessage })) })))] })));
};

var SearchDropdown = function (_a) {
    var _b;
    var options = _a.options, formGroupWidth = _a.formGroupWidth, selectedOption = _a.selectedOption, setSelectedOption = _a.setSelectedOption, labelText = _a.labelText, hintText = _a.hintText, _c = _a.emptyMessage, emptyMessage = _c === void 0 ? "No hay opciones disponibles" : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.isError, isError = _e === void 0 ? false : _e;
    var _f = useState(false), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];
    var _g = useState([]), sortedOptions = _g[0], setSortedOptions = _g[1];
    var _h = useState(null), selectingItem = _h[0], setSelectingItem = _h[1];
    var _j = useState(null), hoveredItemValue = _j[0], setHoveredItemValue = _j[1];
    var _k = useState(null), defaultValue = _k[0], setDefaultValue = _k[1];
    var _l = useState(''), inputValue = _l[0], setInputValue = _l[1];
    var containerRef = useRef(null);
    var inputRef = useRef(null);
    var toggleIconInput = isDropdownOpen ? 'rotate-0' : 'rotate-180 text-gray-600';
    var inputStyles = isDisabled ? ' input--disabled' : isError ? ' input--error' : ' input--default';
    var labelStyles = isError ? ' label label--error' : ' label label--default';
    var hintStyles = isError ? 'text-error' : 'text-gray-600';
    var handleSelect = function (value, label) {
        setSelectingItem({ isSelecting: true, value: value }); //set the selecting item to animate the selection
        setSelectedOption({ value: value, label: label }); //set the selected option
        setInputValue(label); // set the input value to the selected option label
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
    // Filter the options based on the input value
    var filterOptions = function (inputValue) {
        return sortedOptions.filter(function (option) {
            return option.label.toLowerCase().includes(inputValue.toLowerCase());
        });
    };
    //handle click outside the container
    var handleClickOutside = function (event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };
    useEffect(function () {
        //add listerner on mount
        document.addEventListener('mousedown', handleClickOutside);
        //clean listerner on unmount
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);
    useEffect(function () {
        if (isDropdownOpen && defaultValue) {
            sortOptions(); //only puts the selected item at the top of the list when the dropdown is open again
        }
        else {
            setSortedOptions(__spreadArray([], options, true).sort(function (a, b) { return a.label.localeCompare(b.label); }));
        }
    }, [options, isDropdownOpen, defaultValue]);
    useEffect(function () {
        var _a;
        // if the options are closed, blur the input to delete all :focus styles
        if (!isDropdownOpen) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }, [isDropdownOpen]);
    useEffect(function () {
        // if the dropdown is closed and the selected option is not null, set the input value to the selected option label
        if (selectedOption && !isDropdownOpen) {
            setInputValue(selectedOption.label);
        }
    }, [isDropdownOpen]);
    return (jsxs("div", __assign({ className: "relative px-2 mt-5 bg-white ".concat(formGroupWidth), ref: containerRef }, { children: [jsxs("div", __assign({ className: "form--group", onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } }, { children: [jsx("input", { type: "text", className: "input ".concat(inputStyles), placeholder: " ", value: inputValue, onChange: function (e) { return setInputValue(e.target.value); }, id: "custom-dropdown", ref: inputRef, disabled: isDisabled }), labelText && jsx("label", __assign({ className: labelStyles, htmlFor: "custom-dropdown" }, { children: labelText })), jsx("div", __assign({ className: "right-2.5 absolute-center-y" }, { children: jsx(ChevronUpIcon, { className: "".concat(toggleIconInput, " w-4 h-4 cursor-pointer") }) }))] })), hintText && !isDropdownOpen && jsx("span", __assign({ className: "mt-1 ml-1 | ".concat(hintStyles, " text-xs") }, { children: hintText })), isDropdownOpen && (jsx("ul", __assign({ className: "options scrollbar-hide" }, { children: filterOptions(inputValue).length > 0
                    ? (_b = filterOptions(inputValue)) === null || _b === void 0 ? void 0 : _b.map(function (option, index) {
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
                        return (jsxs("li", __assign({ className: selectedItemStyles, onClick: optionValue ? function () { return handleSelect(optionValue, optionLabel); } : undefined, onMouseEnter: function () { return setHoveredItemValue(index); }, onMouseLeave: function () { return setHoveredItemValue(null); } }, { children: [jsxs("div", __assign({ className: 'justify-start' }, { children: [jsx(UserRoundedIcon, { className: "w-4 h-4", strokeWidth: isHoveringItem }), jsx("span", { children: optionLabel })] })), jsx(CheckIncon, { className: checkIconStyles })] }), "".concat(optionValue, "-").concat(index)));
                    })
                    : jsx("li", __assign({ className: 'text-gray-300 flex-centered' }, { children: emptyMessage })) })))] })));
};

export { DropdownSelector, SearchDropdown };
//# sourceMappingURL=index.esm.js.map
