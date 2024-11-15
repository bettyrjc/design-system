'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default["default"].createContext && /*#__PURE__*/React__default["default"].createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React__default["default"].createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React__default["default"].createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React__default["default"].createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React__default["default"].createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React__default["default"].createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function HiCheckCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiExclamationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiInformationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiXCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiOutlineUserCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"1.5","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},"child":[]}]})(props);
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var ListDropdown = function (_a) {
    var setSelectedOption = _a.setSelectedOption, options = _a.options, inputRef = _a.inputRef, selectedOption = _a.selectedOption, emptyMessage = _a.emptyMessage, isDropdownOpen = _a.isDropdownOpen, setIsDropdownOpen = _a.setIsDropdownOpen, searchTerm = _a.searchTerm;
    var _b = React.useState([]), sortedOptions = _b[0], setSortedOptions = _b[1];
    var _c = React.useState(null), selectingItem = _c[0], setSelectingItem = _c[1];
    var _d = React.useState(null), hoveredItemValue = _d[0], setHoveredItemValue = _d[1];
    var _e = React.useState(null), defaultValue = _e[0], setDefaultValue = _e[1];
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
    React.useEffect(function () {
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
    React.useEffect(function () {
        var _a;
        if (!isDropdownOpen) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }, [isDropdownOpen]);
    if (!isDropdownOpen)
        return null;
    return (jsxRuntime.jsx("ul", __assign({ className: "options scrollbar-hide" }, { children: sortedOptions.length > 0 ? (sortedOptions.map(function (option, index) {
            var optionValue = option.value;
            var optionLabel = option.label;
            var isHoveredItem = hoveredItemValue === index;
            var isCurrentItem = optionValue === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) && !selectingItem;
            var isSelectingItem = (selectingItem === null || selectingItem === void 0 ? void 0 : selectingItem.value) === optionValue && selectingItem.isSelecting;
            var isHoveringItem = isHoveredItem || isCurrentItem ? '3' : '2';
            return (jsxRuntime.jsxs("li", __assign({ className: clsx('options__item justify-between', {
                    'options__item--hovered': isCurrentItem || isSelectingItem,
                    'cursor-pointer': option === null || option === void 0 ? void 0 : option.value
                }), onClick: optionValue ? function () { return handleSelect(optionValue, optionLabel); } : undefined, onMouseEnter: function () { return setHoveredItemValue(index); }, onMouseLeave: function () { return setHoveredItemValue(null); } }, { children: [jsxRuntime.jsxs("div", __assign({ className: "justify-start" }, { children: [jsxRuntime.jsx(HiOutlineUserCircle, { className: "w-4 h-4", strokeWidth: isHoveringItem }), jsxRuntime.jsx("span", __assign({ className: "text-gray-900" }, { children: optionLabel }))] })), jsxRuntime.jsx(HiCheck, { className: clsx('w-4 h-4', {
                            'text-success': isCurrentItem || isSelectingItem,
                            'hidden': !isCurrentItem && !isSelectingItem
                        }) })] }), "".concat(optionValue, "-").concat(index)));
        })) : (jsxRuntime.jsx("li", __assign({ className: "text-gray-300 flex-centered" }, { children: emptyMessage }))) })));
};

var DropdownSelector = function (_a) {
    var options = _a.options, formGroupWidth = _a.formGroupWidth, selectedOption = _a.selectedOption, setSelectedOption = _a.setSelectedOption, labelText = _a.labelText, hintText = _a.hintText, _b = _a.emptyMessage, emptyMessage = _b === void 0 ? "No hay opciones disponibles" : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isError, isError = _d === void 0 ? false : _d;
    var _e = React.useState(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var _f = React.useState(''), inputValue = _f[0], setInputValue = _f[1];
    var containerRef = React.useRef(null);
    var inputRef = React.useRef(null);
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
    React.useEffect(function () {
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);
    React.useEffect(function () {
        if (!isDropdownOpen && selectedOption) {
            setInputValue(selectedOption.label || '');
        }
    }, [isDropdownOpen, selectedOption]);
    return (jsxRuntime.jsxs("div", __assign({ className: clsx('relative px-2 mt-5 bg-white', formGroupWidth), ref: containerRef }, { children: [jsxRuntime.jsxs("div", __assign({ className: "form--group" }, { children: [jsxRuntime.jsx("input", { type: "text", className: clsx('input', {
                            'input--disabled': isDisabled,
                            'input--error': isError,
                            'input--default': !isDisabled && !isError
                        }), placeholder: " ", value: inputValue, onChange: handleInputChange, onClick: handleDropdownSelect, id: "custom-dropdown", ref: inputRef, disabled: isDisabled }), labelText && (jsxRuntime.jsx("label", __assign({ className: clsx('label', {
                            'label--error': isError,
                            'label--default': !isError
                        }), htmlFor: "custom-dropdown" }, { children: labelText }))), jsxRuntime.jsx("div", __assign({ className: "right-2.5 absolute-center-y" }, { children: jsxRuntime.jsx(HiChevronUp, { className: clsx('w-4 h-4', {
                                'rotate-0': isDropdownOpen,
                                'rotate-180': !isDropdownOpen,
                                'cursor-pointer': !isDisabled,
                                'cursor-not-allowed': isDisabled,
                                'text-gray-400': isDisabled,
                                'text-gray-600': !isDisabled
                            }) }) }))] })), hintText && !isDropdownOpen && (jsxRuntime.jsx("span", __assign({ className: clsx('mt-1 ml-1 text-xs', {
                    'text-error': isError,
                    'text-gray-600': !isError
                }) }, { children: hintText }))), jsxRuntime.jsx(ListDropdown, { setSelectedOption: setSelectedOption, selectedOption: selectedOption, options: options, inputRef: inputRef, emptyMessage: emptyMessage, isDropdownOpen: isDropdownOpen, setIsDropdownOpen: setIsDropdownOpen, searchTerm: inputValue })] })));
};

// THIS FILE IS AUTO GENERATED
function RiLoader4Line (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"},"child":[]}]})(props);
}

var OutlinedButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, icon = _a.icon, endIcon = _a.endIcon, full = _a.full, roundedFull = _a.roundedFull, children = _a.children, _c = _a.size, size = _c === void 0 ? 'normal' : _c, extraPadding = _a.extraPadding, loading = _a.loading, props = __rest(_a, ["color", "icon", "endIcon", "full", "roundedFull", "children", "size", "extraPadding", "loading"]);
    return (jsxRuntime.jsxs("button", __assign({ className: clsx('flex px-2 items-center justify-center  text-sm font-medium shadow-md hover:shadow-lg lg:text-base  ', !!icon || !!endIcon ? 'flex' : 'inline-flex', extraPadding && size === 'small' && 'px-4', extraPadding && size === 'normal' && 'px-6', extraPadding && size === 'large' && 'px-8', !extraPadding && size === 'small' && 'px-2', !extraPadding && size === 'normal' && 'px-4', !extraPadding && size === 'large' && 'px-6', color === 'primary' && "text-primary  border-primary border-2 ", color === 'secondary' && "text-secondary  border-secondary border-2 ", color === 'info' && 'border-blue-600 text-blue-600 border-2 ', color === 'error' && 'border-danger text-danger border-2', color === 'gray' && 'border-gray-400 text-gray-700 border-2', size === 'small' && 'py-1 text-sm', size === 'normal' && 'text-normal py-2', size === 'medium' && 'flex items-center justify-center py-3 text-base', size === 'large' && 'flex w-full items-center justify-center py-4 text-lg', full && 'h-full w-full', roundedFull && 'rounded-full', !roundedFull && 'rounded-md') }, props, { children: [!!icon && jsxRuntime.jsx("div", __assign({ className: "mr-1" }, { children: icon })), jsxRuntime.jsx("div", { children: children }), loading && (jsxRuntime.jsx("div", __assign({ className: "ml-1" }, { children: jsxRuntime.jsx(RiLoader4Line, { className: "w-6 h-6 animate-spin" }) })))] })));
};

var ContainedButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, children = _a.children, extraPadding = _a.extraPadding, icon = _a.icon, endIcon = _a.endIcon, full = _a.full, loading = _a.loading, _c = _a.size, size = _c === void 0 ? 'normal' : _c, roundedFull = _a.roundedFull, disabled = _a.disabled, centerText = _a.centerText, shadowDisabled = _a.shadowDisabled, props = __rest(_a, ["color", "children", "extraPadding", "icon", "endIcon", "full", "loading", "size", "roundedFull", "disabled", "centerText", "shadowDisabled"]);
    return (jsxRuntime.jsxs("button", __assign({ className: clsx('items-center hover:shadow-lg', !!icon || !!endIcon ? 'flex' : 'inline-flex', !shadowDisabled && 'shadow-md', centerText && 'justify-center text-center', size === 'small' && 'py-1 text-sm', size === 'normal' && 'text-normal py-2', size === 'medium' && 'flex items-center justify-center py-3 text-base', size === 'large' && 'flex w-full items-center justify-center py-4 text-lg', extraPadding && size === 'small' && 'px-4', extraPadding && size === 'normal' && 'px-6', extraPadding && size === 'medium' && 'px-6', extraPadding && size === 'large' && 'px-8', !extraPadding && size === 'small' && 'px-2', !extraPadding && size === 'normal' && 'px-4', !extraPadding && size === 'medium' && 'px-5', !extraPadding && size === 'large' && 'px-6', color === 'primary' && !disabled && 'bg-primary text-white', color === 'secondary' && "bg-secondary text-white", color === 'info' && "bg-blue-600 text-white", color === 'error' && !disabled && 'bg-red-500 text-white', color === 'gray' && !disabled && 'bg-gray-400 text-white', full && 'h-full w-full', roundedFull && 'rounded-full', !roundedFull && 'rounded-lg', disabled && 'cursor-not-allowed bg-gray-300 text-white', loading && 'bg-opacity-75') }, props, { children: [icon && jsxRuntime.jsx("div", __assign({ className: "mr-1" }, { children: icon })), children, endIcon && !loading && jsxRuntime.jsx("div", __assign({ className: "ml-1" }, { children: endIcon })), loading && (jsxRuntime.jsx("div", __assign({ className: "ml-1" }, { children: jsxRuntime.jsx(RiLoader4Line, { className: "w-6 h-6 animate-spin" }) })))] })));
};

var Alert = function (_a) {
    var _b = _a.message, message = _b === void 0 ? "Alert " : _b, _c = _a.type, type = _c === void 0 ? 'info' : _c;
    var icon;
    switch (type) {
        case 'info':
            icon = jsxRuntime.jsx(HiInformationCircle, {});
            break;
        case 'warning':
            icon = jsxRuntime.jsx(HiExclamationCircle, {});
            break;
        case 'error':
            icon = jsxRuntime.jsx(HiXCircle, {});
            break;
        case 'success':
            icon = jsxRuntime.jsx(HiCheckCircle, {});
            break;
    }
    return (jsxRuntime.jsxs("div", __assign({ className: clsx('p-4 rounded-lg text-white flex items-center gap-3 text-xl', type === 'info' && 'bg-blue-500', type === 'warning' && 'bg-yellow-500', type === 'error' && 'bg-danger', type === 'success' && 'bg-success') }, { children: [icon, jsxRuntime.jsx("p", __assign({ className: "m-0" }, { children: message }))] })));
};

var Card = function (_a) {
    var _b = _a.padding, padding = _b === void 0 ? 'normal' : _b, _c = _a.center, center = _c === void 0 ? false : _c, className = _a.className, onClick = _a.onClick, bordered = _a.bordered, children = _a.children;
    return (jsxRuntime.jsx("div", __assign({ className: clsx('rounded-lg bg-white shadow-md', padding === 'small' && 'p-2', padding === 'normal' && 'p-4', padding === 'large' && 'p-8', center && 'flex flex-col items-center justify-center', !!onClick && 'cursor-pointer', bordered && 'border border-zinc-50', className), onClick: onClick }, { children: children })));
};

var Input = React.forwardRef(function (_a, ref) {
    _a.variant; var _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, disabled = _a.disabled, endIcon = _a.endIcon, label = _a.label, error = _a.error; _a.placeholder; var isError = _a.isError, isInvalid = _a.isInvalid, _d = _a.type, type = _d === void 0 ? 'text' : _d, hint = _a.hint, readOnly = _a.readOnly, onClickEndICon = _a.onClickEndICon, actionEndIcon = _a.actionEndIcon, onActionEndIcon = _a.onActionEndIcon, showIconAction = _a.showIconAction, width = _a.width; _a.padding; var defaultValue = _a.defaultValue, props = __rest(_a, ["variant", "fullWidth", "disabled", "endIcon", "label", "error", "placeholder", "isError", "isInvalid", "type", "hint", "readOnly", "onClickEndICon", "actionEndIcon", "onActionEndIcon", "showIconAction", "width", "padding", "defaultValue"]);
    return (jsxRuntime.jsxs("div", __assign({ className: clsx('relative px-2 mt-5 bg-white', fullWidth && 'w-full', width && width) }, { children: [jsxRuntime.jsxs("div", __assign({ className: "form--group" }, { children: [jsxRuntime.jsx("input", __assign({ type: type, ref: ref }, props, { placeholder: " ", className: clsx('input', {
                            'input--disabled': disabled || readOnly,
                            'input--error': (error || isError) || isInvalid,
                            'input--default': !disabled && !readOnly && !error && !isError && !isInvalid
                        }), defaultValue: defaultValue, readOnly: disabled || readOnly })), label && (jsxRuntime.jsx("label", __assign({ className: clsx('label', {
                            'label--error': error || isError || isInvalid,
                            'label--default': !error && !isError && !isInvalid
                        }) }, { children: label }))), jsxRuntime.jsxs("div", __assign({ className: "flex absolute right-2.5 top-1/2 -translate-y-1/2" }, { children: [!!endIcon && !hint && (jsxRuntime.jsx("div", __assign({ className: "flex" }, { children: jsxRuntime.jsx("div", __assign({ className: "flex justify-center pr-3 text-xl text-gray-500 cursor-pointer", onClick: onClickEndICon }, { children: endIcon })) }))), showIconAction && (jsxRuntime.jsx("div", __assign({ className: "flex justify-center pr-3 text-xl text-gray-500 cursor-pointer", onClick: onActionEndIcon }, { children: actionEndIcon })))] }))] })), (hint && !error) && (jsxRuntime.jsx("span", __assign({ className: clsx('mt-1 ml-1 text-xs text-gray-600') }, { children: hint }))), error && (jsxRuntime.jsx("div", __assign({ className: "mt-1 ml-1 text-xs text-danger" }, { children: error })))] })));
});

var LetterInput = React.forwardRef(function InputWithRef(_a, ref) {
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
    return jsxRuntime.jsx(Input, __assign({ ref: ref }, props, { onChange: onChange, onKeyPress: onKeyPress, onPaste: onPaste }));
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
var NumberInput = React.forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.decimal, decimal = _b === void 0 ? false : _b, props = __rest(_a, ["decimal"]);
    return jsxRuntime.jsx(Input, __assign({ ref: ref }, props, { onKeyPress: function (event) { return onKeyPress(event, decimal); }, onPaste: onPaste }));
});

// THIS FILE IS AUTO GENERATED
function HiMenu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiOutlineEyeOff (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"},"child":[]}]})(props);
}function HiOutlineEye (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},"child":[]}]})(props);
}

var PasswordInput = React.forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, isInvalid = _a.isInvalid, disabled = _a.disabled, label = _a.label, error = _a.error, hint = _a.hint; _a.placeholder; var props = __rest(_a, ["fullWidth", "isInvalid", "disabled", "label", "error", "hint", "placeholder"]);
    var _c = React.useState(true), hiddenPassword = _c[0], setHiddenPassword = _c[1];
    return (jsxRuntime.jsxs("div", __assign({ className: clsx('relative px-2 mt-5 bg-white', fullWidth && 'w-full') }, { children: [jsxRuntime.jsxs("div", __assign({ className: "form--group" }, { children: [jsxRuntime.jsx("input", __assign({ type: hiddenPassword ? 'password' : 'text', ref: ref, className: clsx('input', {
                            'input--disabled': disabled,
                            'input--error': isInvalid || error,
                            'input--default': !disabled && !isInvalid && !error
                        }), placeholder: " ", disabled: disabled }, props)), label && (jsxRuntime.jsx("label", __assign({ className: clsx('label', {
                            'label--error': isInvalid || error,
                            'label--default': !isInvalid && !error
                        }) }, { children: label }))), jsxRuntime.jsx("div", __assign({ className: "absolute right-2.5 top-1/2 -translate-y-1/2" }, { children: jsxRuntime.jsx("div", __assign({ className: clsx('flex items-center justify-center w-14', {
                                'cursor-pointer': !disabled,
                                'cursor-not-allowed': disabled,
                                'text-gray-400': disabled,
                                'text-gray-500': !disabled
                            }), onClick: function () { return !disabled && setHiddenPassword(!hiddenPassword); } }, { children: hiddenPassword ? (jsxRuntime.jsx(HiOutlineEyeOff, { className: "w-6 h-6" })) : (jsxRuntime.jsx(HiOutlineEye, { className: "w-6 h-6" })) })) }))] })), (hint && !error) && (jsxRuntime.jsx("span", __assign({ className: "mt-1 ml-1 text-xs text-gray-600" }, { children: hint }))), error && (jsxRuntime.jsx("div", __assign({ className: "mt-1 ml-1 text-xs text-danger" }, { children: error })))] })));
});

var Checkbox = React.forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.full, full = _c === void 0 ? false : _c, id = _a.id, hint = _a.hint, _d = _a.centerCheckbox, centerCheckbox = _d === void 0 ? false : _d, _e = _a.hideCheckbox, hideCheckbox = _e === void 0 ? false : _e, endIcon = _a.endIcon, _f = _a.color, color = _f === void 0 ? 'primary' : _f, props = __rest(_a, ["label", "full", "id", "hint", "centerCheckbox", "hideCheckbox", "endIcon", "color"]);
    return (jsxRuntime.jsx("label", __assign({ htmlFor: id, className: clsx('inline-block cursor-pointer text-gray-900', full && 'w-full') }, { children: jsxRuntime.jsxs("div", __assign({ className: clsx('flex gap-x-2 p-2', centerCheckbox && 'items-center') }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex items-center h-6" }, { children: jsxRuntime.jsx("input", __assign({ ref: ref }, props, { id: id, type: "checkbox", className: clsx('appearance-none h-4 w-4 cursor-pointer rounded border-2 bg-white focus:ring-2 checked:bg-no-repeat checked:bg-center', hideCheckbox && 'hidden', color === 'primary' && 'checked:bg-primary checked:border-primary focus:ring-primary ', color === 'secondary' && 'checked:bg-secondary checked:border-secondary focus:ring-secondary '), style: {
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '14px'
                        } })) })), jsxRuntime.jsx("div", __assign({ className: "flex items-start" }, { children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", __assign({ className: "text-gray-700" }, { children: label })), !!hint && !endIcon && (jsxRuntime.jsx("div", __assign({ id: "helper-checkbox-text", className: "text-xs font-normal text-gray-500" }, { children: hint })))] }) }))] })) })));
});

var Radio = React.forwardRef(function InputWithRef(_a, ref) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.full, full = _c === void 0 ? false : _c, id = _a.id, hint = _a.hint, name = _a.name, value = _a.value, onChange = _a.onChange, _d = _a.centerRadio, centerRadio = _d === void 0 ? false : _d, _e = _a.hideRadio, hideRadio = _e === void 0 ? false : _e, _f = _a.color, color = _f === void 0 ? 'primary' : _f, props = __rest(_a, ["label", "full", "id", "hint", "name", "value", "onChange", "centerRadio", "hideRadio", "color"]);
    return (jsxRuntime.jsx("label", __assign({ htmlFor: id, className: clsx('inline-block cursor-pointer font-medium text-gray-900', full && 'w-full') }, { children: jsxRuntime.jsxs("div", __assign({ className: clsx('flex gap-x-2 p-2', centerRadio && 'items-center') }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex items-center h-6" }, { children: jsxRuntime.jsx("input", __assign({ ref: ref }, props, { id: id, type: "radio", name: name, value: value, className: clsx('appearance-none h-4 w-4  rounded-full cursor-pointer border-2 bg-white focus:ring-2 checked:bg-no-repeat checked:bg-center', hideRadio && 'hidden', color === 'primary' && 'focus:ring-primary focus:ring-offset-2 checked:border-primary checked:bg-primary', color === 'secondary' && 'focus:ring-secondary focus:ring-offset-2 checked:border-secondary checked:bg-secondary checked:ring-secondary'), onChange: function (event) {
                            if (onChange)
                                onChange(event);
                        } })) })), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", __assign({ className: "text-gray-700" }, { children: label })), !!hint && (jsxRuntime.jsx("div", __assign({ id: "helper-radio-text", className: "text-xs font-normal text-gray-500" }, { children: hint })))] })] })) })));
});

// THIS FILE IS AUTO GENERATED
function AiOutlineLoading3Quarters (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},"child":[]}]})(props);
}

var Loader = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Cargando' : _b;
    return (jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center justify-center w-full h-full my-12" }, { children: [jsxRuntime.jsx(AiOutlineLoading3Quarters, { className: "w-10 h-10 mb-4 animate-spin text-primary" }), jsxRuntime.jsxs("span", __assign({ className: "text-xs" }, { children: [label, "..."] }))] })));
};

var Header = function (_a) {
    var logo = _a.logo, navLinks = _a.navLinks;
    var _b = React.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", __assign({ className: clsx('relative flex items-center justify-between p-4 mx-2 bg-white border-b-2 border-b-gray-100') }, { children: [logo, jsxRuntime.jsx("button", __assign({ className: "text-3xl text-primary md:bg-transparent md:hidden", onClick: function () { return setMenuOpen(!menuOpen); } }, { children: jsxRuntime.jsx(HiMenu, {}) })), jsxRuntime.jsx("div", __assign({ className: "hidden gap-4 text-lg font-medium lg:items-center lg:justify-end lg:w-1/2 text-primary lg:flex" }, { children: navLinks }))] })), menuOpen && (jsxRuntime.jsxs("div", __assign({ className: "fixed inset-0 z-50 pt-10 bg-white" }, { children: [jsxRuntime.jsx("div", __assign({ className: "absolute top-4 right-4" }, { children: jsxRuntime.jsx("button", __assign({ className: "text-2xl text-primary", onClick: function () { return setMenuOpen(false); } }, { children: jsxRuntime.jsx(HiX, {}) })) })), jsxRuntime.jsx("div", __assign({ className: "flex flex-col items-center justify-center text-lg font-medium text-primary" }, { children: navLinks }))] })))] }));
};

exports.Alert = Alert;
exports.Card = Card;
exports.ContainedButton = ContainedButton;
exports.DropdownSelector = DropdownSelector;
exports.Header = Header;
exports.InputCheckbox = Checkbox;
exports.InputRadio = Radio;
exports.LetterInput = LetterInput;
exports.Loader = Loader;
exports.NumberInput = NumberInput;
exports.OutlinedButton = OutlinedButton;
exports.PasswordInput = PasswordInput;
//# sourceMappingURL=index.cjs.js.map
