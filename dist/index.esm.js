import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef, createElement, useState, useEffect, useRef } from 'react';

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignJustify = createLucideIcon("AlignJustify", [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeCheck = createLucideIcon("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeInfo = createLucideIcon("BadgeInfo", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }],
  ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleUserRound = createLucideIcon("CircleUserRound", [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EyeOff = createLucideIcon("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LoaderCircle = createLucideIcon("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Loader$1 = createLucideIcon("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

var ListDropdown = function (_a) {
    var setSelectedOption = _a.setSelectedOption, options = _a.options, inputRef = _a.inputRef, selectedOption = _a.selectedOption, emptyMessage = _a.emptyMessage, isDropdownOpen = _a.isDropdownOpen, setIsDropdownOpen = _a.setIsDropdownOpen, searchTerm = _a.searchTerm;
    var _b = useState([]), sortedOptions = _b[0], setSortedOptions = _b[1];
    var _c = useState(null), selectingItem = _c[0], setSelectingItem = _c[1];
    var _d = useState(null), hoveredItemValue = _d[0], setHoveredItemValue = _d[1];
    var _e = useState(null), defaultValue = _e[0], setDefaultValue = _e[1];
    var sortAndFilterOptions = function () {
        var sortedList = __spreadArray([], options, true).sort(function (a, b) { return a.label.localeCompare(b.label); })
            .filter(function (option) {
            return option.label.toLowerCase().includes(searchTerm.toLowerCase());
        });
        if (defaultValue) {
            var index = sortedList.findIndex(function (option) { return option.label === defaultValue.label; });
            if (index > -1) {
                var selectedItem = sortedList.splice(index, 1)[0];
                sortedList.unshift(selectedItem);
            }
        }
        setSortedOptions(sortedList);
    };
    var handleSelect = function (value, label) {
        setSelectingItem({ isSelecting: true, value: value });
        setSelectedOption({ value: value, label: label });
        setTimeout(function () {
            setSelectingItem(null);
            setHoveredItemValue(null);
            setIsDropdownOpen(false);
            setDefaultValue({ value: value, label: label });
        }, 400);
    };
    useEffect(function () {
        if (isDropdownOpen && defaultValue) {
            sortAndFilterOptions();
        }
        else {
            setSortedOptions(__spreadArray([], options, true).sort(function (a, b) { return a.label.localeCompare(b.label); })
                .filter(function (option) {
                return option.label.toLowerCase().includes(searchTerm.toLowerCase());
            }));
        }
    }, [options, isDropdownOpen, defaultValue, searchTerm]);
    useEffect(function () {
        var _a;
        if (!isDropdownOpen) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }, [isDropdownOpen]);
    if (!isDropdownOpen)
        return null;
    return (jsx("ul", __assign({ className: "options scrollbar-hide" }, { children: sortedOptions.length > 0 ? (sortedOptions.map(function (option, index) {
            var optionValue = option.value;
            var optionLabel = option.label;
            var isHoveredItem = hoveredItemValue === index;
            var isCurrentItem = optionValue === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) && !selectingItem;
            var isSelectingItem = (selectingItem === null || selectingItem === void 0 ? void 0 : selectingItem.value) === optionValue && selectingItem.isSelecting;
            var isHoveringItem = isHoveredItem || isCurrentItem ? '3' : '2';
            return (jsxs("li", __assign({ className: clsx('options__item justify-between', {
                    'options__item--hovered': isCurrentItem || isSelectingItem,
                    'cursor-pointer': option === null || option === void 0 ? void 0 : option.value
                }), onClick: optionValue ? function () { return handleSelect(optionValue, optionLabel); } : undefined, onMouseEnter: function () { return setHoveredItemValue(index); }, onMouseLeave: function () { return setHoveredItemValue(null); } }, { children: [jsxs("div", __assign({ className: "justify-start" }, { children: [jsx(CircleUserRound, { className: "w-4 h-4", strokeWidth: isHoveringItem }), jsx("span", __assign({ className: "text-gray-900" }, { children: optionLabel }))] })), jsx(Check, { size: 12, color: isCurrentItem || isSelectingItem ? 'var(--color-success)' : 'var(--color-white)' })] }), "".concat(optionValue, "-").concat(index)));
        })) : (jsx("li", __assign({ className: "text-gray-300 flex-centered" }, { children: emptyMessage }))) })));
};

var DropdownSelector = function (_a) {
    var options = _a.options, formGroupWidth = _a.formGroupWidth, selectedOption = _a.selectedOption, setSelectedOption = _a.setSelectedOption, labelText = _a.labelText, hintText = _a.hintText, _b = _a.emptyMessage, emptyMessage = _b === void 0 ? "No hay opciones disponibles" : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isError, isError = _d === void 0 ? false : _d;
    var _e = useState(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var _f = useState(''), inputValue = _f[0], setInputValue = _f[1];
    var containerRef = useRef(null);
    var inputRef = useRef(null);
    var handleInputChange = function (e) {
        setInputValue(e.target.value);
        if (!isDropdownOpen) {
            setIsDropdownOpen(true);
        }
    };
    var handleDropdownSelect = function () {
        if (!isDisabled) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    var handleClickOutside = function (event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };
    useEffect(function () {
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);
    useEffect(function () {
        if (!isDropdownOpen && selectedOption) {
            setInputValue(selectedOption.label || '');
        }
    }, [isDropdownOpen, selectedOption]);
    return (jsxs("div", __assign({ className: clsx('relative px-2 mt-5 bg-white', formGroupWidth), ref: containerRef }, { children: [jsxs("div", __assign({ className: "form--group" }, { children: [jsx("input", { type: "text", className: clsx('input', {
                            'input--disabled': isDisabled,
                            'input--error': isError,
                            'input--default': !isDisabled && !isError
                        }), placeholder: " ", value: inputValue, onChange: handleInputChange, onClick: handleDropdownSelect, id: "custom-dropdown", ref: inputRef, disabled: isDisabled }), labelText && (jsx("label", __assign({ className: clsx('label', {
                            'label--error': isError,
                            'label--default': !isError
                        }), htmlFor: "custom-dropdown" }, { children: labelText }))), jsx("div", __assign({ className: "right-2.5 absolute-center-y" }, { children: jsx(ChevronUp, { className: clsx('w-4 h-4', {
                                'rotate-0': isDropdownOpen,
                                'rotate-180': !isDropdownOpen,
                                'cursor-pointer': !isDisabled,
                                'cursor-not-allowed': isDisabled,
                                'text-gray-400': isDisabled,
                                'text-gray-600': !isDisabled
                            }) }) }))] })), hintText && !isDropdownOpen && (jsx("span", __assign({ className: clsx('mt-1 ml-1 text-xs', {
                    'text-error': isError,
                    'text-gray-600': !isError
                }) }, { children: hintText }))), jsx(ListDropdown, { setSelectedOption: setSelectedOption, selectedOption: selectedOption, options: options, inputRef: inputRef, emptyMessage: emptyMessage, isDropdownOpen: isDropdownOpen, setIsDropdownOpen: setIsDropdownOpen, searchTerm: inputValue })] })));
};

var OutlinedButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, icon = _a.icon, endIcon = _a.endIcon, full = _a.full, roundedFull = _a.roundedFull, children = _a.children, _c = _a.size, size = _c === void 0 ? 'normal' : _c, extraPadding = _a.extraPadding, loading = _a.loading, props = __rest(_a, ["color", "icon", "endIcon", "full", "roundedFull", "children", "size", "extraPadding", "loading"]);
    return (jsxs("button", __assign({ className: clsx('flex px-2 items-center justify-center  text-sm font-medium shadow-md hover:shadow-lg lg:text-base  ', !!icon || !!endIcon ? 'flex' : 'inline-flex', extraPadding && size === 'small' && 'px-4', extraPadding && size === 'normal' && 'px-6', extraPadding && size === 'large' && 'px-8', !extraPadding && size === 'small' && 'px-2', !extraPadding && size === 'normal' && 'px-4', !extraPadding && size === 'large' && 'px-6', color === 'primary' && "text-primary  border-primary border-2 ", color === 'secondary' && "text-secondary  border-secondary border-2 ", color === 'info' && 'border-blue-600 text-blue-600 border-2 ', color === 'error' && 'border-danger text-danger border-2', color === 'gray' && 'border-gray-400 text-gray-700 border-2', size === 'small' && 'py-1 text-sm', size === 'normal' && 'text-normal py-2', size === 'medium' && 'flex items-center justify-center py-3 text-base', size === 'large' && 'flex w-full items-center justify-center py-4 text-lg', full && 'h-full w-full', roundedFull && 'rounded-full', !roundedFull && 'rounded-md') }, props, { children: [!!icon && jsx("div", __assign({ className: "mr-1" }, { children: icon })), jsx("div", { children: children }), loading && (jsx("div", __assign({ className: "ml-1" }, { children: jsx(Loader$1, { className: "w-6 h-6 animate-spin" }) })))] })));
};

var ContainedButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, children = _a.children, extraPadding = _a.extraPadding, icon = _a.icon, endIcon = _a.endIcon, full = _a.full, loading = _a.loading, _c = _a.size, size = _c === void 0 ? 'normal' : _c, roundedFull = _a.roundedFull, disabled = _a.disabled, centerText = _a.centerText, shadowDisabled = _a.shadowDisabled, props = __rest(_a, ["color", "children", "extraPadding", "icon", "endIcon", "full", "loading", "size", "roundedFull", "disabled", "centerText", "shadowDisabled"]);
    return (jsxs("button", __assign({ className: clsx('items-center hover:shadow-lg', !!icon || !!endIcon ? 'flex' : 'inline-flex', !shadowDisabled && 'shadow-md', centerText && 'justify-center text-center', size === 'small' && 'py-1 text-sm', size === 'normal' && 'text-normal py-2', size === 'medium' && 'flex items-center justify-center py-3 text-base', size === 'large' && 'flex w-full items-center justify-center py-4 text-lg', extraPadding && size === 'small' && 'px-4', extraPadding && size === 'normal' && 'px-6', extraPadding && size === 'medium' && 'px-6', extraPadding && size === 'large' && 'px-8', !extraPadding && size === 'small' && 'px-2', !extraPadding && size === 'normal' && 'px-4', !extraPadding && size === 'medium' && 'px-5', !extraPadding && size === 'large' && 'px-6', color === 'primary' && !disabled && 'bg-primary text-white', color === 'secondary' && "bg-secondary text-white", color === 'info' && "bg-blue-600 text-white", color === 'error' && !disabled && 'bg-red-500 text-white', color === 'gray' && !disabled && 'bg-gray-400 text-white', full && 'h-full w-full', roundedFull && 'rounded-full', !roundedFull && 'rounded-lg', disabled && 'cursor-not-allowed bg-gray-300 text-white', loading && 'bg-opacity-75') }, props, { children: [icon && jsx("div", __assign({ className: "mr-1" }, { children: icon })), children, endIcon && !loading && jsx("div", __assign({ className: "ml-1" }, { children: endIcon })), loading && (jsx("div", __assign({ className: "ml-1" }, { children: jsx(Loader$1, { className: "w-6 h-6 animate-spin" }) })))] })));
};

var Alert = function (_a) {
    var _b = _a.message, message = _b === void 0 ? "Alert " : _b, _c = _a.type, type = _c === void 0 ? 'info' : _c;
    var icon;
    switch (type) {
        case 'info':
            icon = jsx(BadgeInfo, {});
            break;
        case 'warning':
            icon = jsx(CircleAlert, {});
            break;
        case 'error':
            icon = jsx(X, {});
            break;
        case 'success':
            icon = jsx(BadgeCheck, {});
            break;
    }
    return (jsxs("div", __assign({ className: clsx('p-4 rounded-lg text-white flex items-center gap-3 text-xl', type === 'info' && 'bg-blue-500', type === 'warning' && 'bg-yellow-500', type === 'error' && 'bg-danger', type === 'success' && 'bg-success') }, { children: [icon, jsx("p", __assign({ className: "m-0" }, { children: message }))] })));
};

var Card = function (_a) {
    var _b = _a.padding, padding = _b === void 0 ? 'normal' : _b, _c = _a.center, center = _c === void 0 ? false : _c, className = _a.className, onClick = _a.onClick, bordered = _a.bordered, children = _a.children;
    return (jsx("div", __assign({ className: clsx('rounded-lg bg-white shadow-md', padding === 'small' && 'p-2', padding === 'normal' && 'p-4', padding === 'large' && 'p-8', center && 'flex flex-col items-center justify-center', !!onClick && 'cursor-pointer', bordered && 'border border-zinc-50', className), onClick: onClick }, { children: children })));
};

var Input = forwardRef(function (_a, ref) {
    _a.variant; var _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, disabled = _a.disabled, endIcon = _a.endIcon, label = _a.label, error = _a.error; _a.placeholder; var isError = _a.isError, isInvalid = _a.isInvalid, _d = _a.type, type = _d === void 0 ? 'text' : _d, hint = _a.hint, readOnly = _a.readOnly, onClickEndICon = _a.onClickEndICon, actionEndIcon = _a.actionEndIcon, onActionEndIcon = _a.onActionEndIcon, showIconAction = _a.showIconAction, width = _a.width; _a.padding; var defaultValue = _a.defaultValue, props = __rest(_a, ["variant", "fullWidth", "disabled", "endIcon", "label", "error", "placeholder", "isError", "isInvalid", "type", "hint", "readOnly", "onClickEndICon", "actionEndIcon", "onActionEndIcon", "showIconAction", "width", "padding", "defaultValue"]);
    return (jsxs("div", __assign({ className: clsx('relative px-2 mt-5 bg-white', fullWidth && 'w-full', width && width) }, { children: [jsxs("div", __assign({ className: "form--group" }, { children: [jsx("input", __assign({ type: type, ref: ref }, props, { placeholder: " ", className: clsx('input', {
                            'input--disabled': disabled || readOnly,
                            'input--error': (error || isError) || isInvalid,
                            'input--default': !disabled && !readOnly && !error && !isError && !isInvalid
                        }), defaultValue: defaultValue, readOnly: disabled || readOnly })), label && (jsx("label", __assign({ className: clsx('label', {
                            'label--error': error || isError || isInvalid,
                            'label--default': !error && !isError && !isInvalid
                        }) }, { children: label }))), jsxs("div", __assign({ className: "flex absolute right-2.5 top-1/2 -translate-y-1/2" }, { children: [!!endIcon && !hint && (jsx("div", __assign({ className: "flex" }, { children: jsx("div", __assign({ className: "flex justify-center pr-3 text-xl text-gray-500 cursor-pointer", onClick: onClickEndICon }, { children: endIcon })) }))), showIconAction && (jsx("div", __assign({ className: "flex justify-center pr-3 text-xl text-gray-500 cursor-pointer", onClick: onActionEndIcon }, { children: actionEndIcon })))] }))] })), (hint && !error) && (jsx("span", __assign({ className: clsx('mt-1 ml-1 text-xs text-gray-600') }, { children: hint }))), error && (jsx("div", __assign({ className: "mt-1 ml-1 text-xs text-danger" }, { children: error })))] })));
});

var LetterInput = forwardRef(function InputWithRef(_a, ref) {
    var allowSpaces = _a.allowSpaces, props = __rest(_a, ["allowSpaces"]);
    var onKeyPress = function (event) {
        if ((!allowSpaces || event.key !== ' ') && !/[ñÑa-zA-Z]/.test(event.key)) {
            event.preventDefault();
        }
    };
    var onChange = function (e) {
        var _a;
        if (allowSpaces) {
            var newValue = e.target.value.replace(/ +/g, ' ');
            if (newValue !== e.target.value)
                e.target.value = newValue;
        }
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    var onPaste = function (event) {
        var pastedValue = event.clipboardData.getData('Text');
        if (!/^[ñÑa-zA-Z\s]/.test(pastedValue)) {
            event.preventDefault();
        }
        return false;
    };
    return jsx(Input, __assign({ ref: ref }, props, { onChange: onChange, onKeyPress: onKeyPress, onPaste: onPaste }));
});

var onKeyPress = function (event, decimal) {
    if (decimal === void 0) { decimal = false; }
    if (decimal) {
        var theEvent = event || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var value = Number(event.target.value) + Number(key);
        var regex = /^\d{0,9}$|(?=^.{0,9}$)^\d+\.\d{0,9}$/; // Decimal
        if (regex.test(String(value)))
            return;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
            theEvent.preventDefault();
        }
        return;
    }
    if (!/[0-9]/g.test(event.key)) {
        event.preventDefault();
    }
};
var onPaste = function (event) {
    var pastedValue = event.clipboardData.getData('Text');
    if (isNaN(+pastedValue)) {
        event.preventDefault();
    }
    return false;
};
var NumberInput = forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.decimal, decimal = _b === void 0 ? false : _b, props = __rest(_a, ["decimal"]);
    return jsx(Input, __assign({ ref: ref }, props, { onKeyPress: function (event) { return onKeyPress(event, decimal); }, onPaste: onPaste }));
});

var PasswordInput = forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, isInvalid = _a.isInvalid, disabled = _a.disabled, label = _a.label, error = _a.error, hint = _a.hint; _a.placeholder; var props = __rest(_a, ["fullWidth", "isInvalid", "disabled", "label", "error", "hint", "placeholder"]);
    var _c = useState(true), hiddenPassword = _c[0], setHiddenPassword = _c[1];
    return (jsxs("div", __assign({ className: clsx('relative px-2 mt-5 bg-white', fullWidth && 'w-full') }, { children: [jsxs("div", __assign({ className: "form--group" }, { children: [jsx("input", __assign({ type: hiddenPassword ? 'password' : 'text', ref: ref, className: clsx('input', {
                            'input--disabled': disabled,
                            'input--error': isInvalid || error,
                            'input--default': !disabled && !isInvalid && !error
                        }), placeholder: " ", disabled: disabled }, props)), label && (jsx("label", __assign({ className: clsx('label', {
                            'label--error': isInvalid || error,
                            'label--default': !isInvalid && !error
                        }) }, { children: label }))), jsx("div", __assign({ className: "absolute right-2.5 top-1/2 -translate-y-1/2" }, { children: jsx("div", __assign({ className: clsx('flex items-center justify-center w-14', {
                                'cursor-pointer': !disabled,
                                'cursor-not-allowed': disabled,
                                'text-gray-400': disabled,
                                'text-gray-500': !disabled
                            }), onClick: function () { return !disabled && setHiddenPassword(!hiddenPassword); } }, { children: hiddenPassword ? (jsx(EyeOff, { size: 24 })) : (jsx(Lock, { size: 24 })) })) }))] })), (hint && !error) && (jsx("span", __assign({ className: "mt-1 ml-1 text-xs text-gray-600" }, { children: hint }))), error && (jsx("div", __assign({ className: "mt-1 ml-1 text-xs text-danger" }, { children: error })))] })));
});

var Checkbox = forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.full, full = _c === void 0 ? false : _c, id = _a.id, hint = _a.hint, _d = _a.centerCheckbox, centerCheckbox = _d === void 0 ? false : _d, _e = _a.hideCheckbox, hideCheckbox = _e === void 0 ? false : _e, endIcon = _a.endIcon, _f = _a.color, color = _f === void 0 ? 'primary' : _f, props = __rest(_a, ["label", "full", "id", "hint", "centerCheckbox", "hideCheckbox", "endIcon", "color"]);
    return (jsx("label", __assign({ htmlFor: id, className: clsx('inline-block cursor-pointer text-gray-900', full && 'w-full') }, { children: jsxs("div", __assign({ className: clsx('flex gap-x-2 p-2', centerCheckbox && 'items-center') }, { children: [jsx("div", __assign({ className: "flex items-center h-6" }, { children: jsx("input", __assign({ ref: ref }, props, { id: id, type: "checkbox", className: clsx('appearance-none h-4 w-4 cursor-pointer rounded border-2 bg-white focus:ring-2 checked:bg-no-repeat checked:bg-center', hideCheckbox && 'hidden', color === 'primary' && 'checked:bg-primary checked:border-primary focus:ring-primary ', color === 'secondary' && 'checked:bg-secondary checked:border-secondary focus:ring-secondary '), style: {
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '14px'
                        } })) })), jsx("div", __assign({ className: "flex items-start" }, { children: jsxs("div", { children: [jsx("div", __assign({ className: "text-gray-700" }, { children: label })), !!hint && !endIcon && (jsx("div", __assign({ id: "helper-checkbox-text", className: "text-xs font-normal text-gray-500" }, { children: hint })))] }) }))] })) })));
});

var Radio = forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.full, full = _c === void 0 ? false : _c, id = _a.id, hint = _a.hint, name = _a.name, value = _a.value, onChange = _a.onChange, _d = _a.centerRadio, centerRadio = _d === void 0 ? false : _d, _e = _a.hideRadio, hideRadio = _e === void 0 ? false : _e, _f = _a.color, color = _f === void 0 ? 'primary' : _f, props = __rest(_a, ["label", "full", "id", "hint", "name", "value", "onChange", "centerRadio", "hideRadio", "color"]);
    return (jsx("label", __assign({ htmlFor: id, className: clsx('inline-block cursor-pointer font-medium text-gray-900', full && 'w-full') }, { children: jsxs("div", __assign({ className: clsx('flex gap-x-2 p-2', centerRadio && 'items-center') }, { children: [jsx("div", __assign({ className: "flex items-center h-6" }, { children: jsx("input", __assign({ ref: ref }, props, { id: id, type: "radio", name: name, value: value, className: clsx('appearance-none h-4 w-4  rounded-full cursor-pointer border-2 bg-white focus:ring-2 checked:bg-no-repeat checked:bg-center', hideRadio && 'hidden', color === 'primary' && 'focus:ring-primary focus:ring-offset-2 checked:border-primary checked:bg-primary', color === 'secondary' && 'focus:ring-secondary focus:ring-offset-2 checked:border-secondary checked:bg-secondary checked:ring-secondary'), onChange: function (event) {
                            if (onChange)
                                onChange(event);
                        } })) })), jsxs("div", { children: [jsx("div", __assign({ className: "text-gray-700" }, { children: label })), !!hint && (jsx("div", __assign({ id: "helper-radio-text", className: "text-xs font-normal text-gray-500" }, { children: hint })))] })] })) })));
});

var Loader = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Cargando' : _b;
    return (jsxs("div", __assign({ className: "flex flex-col items-center justify-center w-full h-full my-12" }, { children: [jsx(LoaderCircle, { size: 40, className: "w-10 h-10 mb-4 animate-spin text-primary" }), jsxs("span", __assign({ className: "text-xs" }, { children: [label, "..."] }))] })));
};

var Header = function (_a) {
    var logo = _a.logo, navLinks = _a.navLinks;
    var _b = useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    return (jsxs(Fragment, { children: [jsxs("div", __assign({ className: clsx('relative flex items-center justify-between p-4 mx-2 bg-white border-b-2 border-b-gray-100') }, { children: [logo, jsx("button", __assign({ className: "text-3xl text-primary md:bg-transparent md:hidden", onClick: function () { return setMenuOpen(!menuOpen); } }, { children: jsx(AlignJustify, {}) })), jsx("div", __assign({ className: "hidden gap-4 text-lg font-medium lg:items-center lg:justify-end lg:w-1/2 text-primary lg:flex" }, { children: navLinks }))] })), menuOpen && (jsxs("div", __assign({ className: "fixed inset-0 z-50 pt-10 bg-white" }, { children: [jsx("div", __assign({ className: "absolute top-4 right-4" }, { children: jsx("button", __assign({ className: "text-2xl text-primary", onClick: function () { return setMenuOpen(false); } }, { children: jsx(X, {}) })) })), jsx("div", __assign({ className: "flex flex-col items-center justify-center text-lg font-medium text-primary" }, { children: navLinks }))] })))] }));
};

export { Alert, Card, ContainedButton, DropdownSelector, Header, Checkbox as InputCheckbox, Radio as InputRadio, LetterInput, Loader, NumberInput, OutlinedButton, PasswordInput };
//# sourceMappingURL=index.esm.js.map
