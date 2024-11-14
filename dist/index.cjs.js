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
function HiCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z","clipRule":"evenodd"},"child":[]}]})(props);
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

var ContainedButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, children = _a.children, extraPadding = _a.extraPadding, icon = _a.icon, endIcon = _a.endIcon, full = _a.full, loading = _a.loading, _c = _a.size, size = _c === void 0 ? 'normal' : _c, roundedFull = _a.roundedFull, disabled = _a.disabled, centerText = _a.centerText, shadowDisabled = _a.shadowDisabled, props = __rest(_a, ["color", "children", "extraPadding", "icon", "endIcon", "full", "loading", "size", "roundedFull", "disabled", "centerText", "shadowDisabled"]);
    return (jsxRuntime.jsxs("button", __assign({ className: clsx('items-center hover:shadow-lg', !!icon || !!endIcon ? 'flex' : 'inline-flex', !shadowDisabled && 'shadow-md', centerText && 'justify-center text-center', size === 'small' && 'py-1 text-sm', size === 'normal' && 'text-normal py-2', size === 'medium' && 'flex items-center justify-center py-3 text-base', size === 'large' && 'flex w-full items-center justify-center py-4 text-lg', extraPadding && size === 'small' && 'px-4', extraPadding && size === 'normal' && 'px-6', extraPadding && size === 'medium' && 'px-6', extraPadding && size === 'large' && 'px-8', !extraPadding && size === 'small' && 'px-2', !extraPadding && size === 'normal' && 'px-4', !extraPadding && size === 'medium' && 'px-5', !extraPadding && size === 'large' && 'px-6', color === 'primary' && !disabled && 'bg-primary text-white', color === 'secondary' && "bg-secondary text-white", color === 'info' && "bg-blue-600 text-white", color === 'error' && !disabled && 'bg-red-500 text-white', color === 'gray' && !disabled && 'bg-gray-400 text-white', full && 'h-full w-full', roundedFull && 'rounded-full', !roundedFull && 'rounded-lg', disabled && 'cursor-not-allowed bg-gray-300 text-white', loading && 'bg-opacity-75') }, props, { children: [icon && jsxRuntime.jsx("div", __assign({ className: "mr-1" }, { children: icon })), children, endIcon && !loading && jsxRuntime.jsx("div", __assign({ className: "ml-1" }, { children: endIcon })), loading && (jsxRuntime.jsx("div", __assign({ className: "ml-1" }, { children: jsxRuntime.jsx(RiLoader4Line, { className: "w-6 h-6 animate-spin" }) })))] })));
};

var OutlinedButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, icon = _a.icon, endIcon = _a.endIcon, full = _a.full, roundedFull = _a.roundedFull, children = _a.children, _c = _a.size, size = _c === void 0 ? 'normal' : _c, extraPadding = _a.extraPadding, loading = _a.loading, props = __rest(_a, ["color", "icon", "endIcon", "full", "roundedFull", "children", "size", "extraPadding", "loading"]);
    return (jsxRuntime.jsxs("button", __assign({ className: clsx('flex px-2 items-center justify-center  text-sm font-medium shadow-md hover:shadow-lg lg:text-base  ', !!icon || !!endIcon ? 'flex' : 'inline-flex', extraPadding && size === 'small' && 'px-4', extraPadding && size === 'normal' && 'px-6', extraPadding && size === 'large' && 'px-8', !extraPadding && size === 'small' && 'px-2', !extraPadding && size === 'normal' && 'px-4', !extraPadding && size === 'large' && 'px-6', color === 'primary' && "text-primary  border-primary border-2 ", color === 'secondary' && "text-secondary  border-secondary border-2 ", color === 'info' && 'border-blue-600 text-blue-600 border-2 ', color === 'error' && 'border-danger text-danger border-2', color === 'gray' && 'border-gray-400 text-gray-700 border-2', size === 'small' && 'py-1 text-sm', size === 'normal' && 'text-normal py-2', size === 'medium' && 'flex items-center justify-center py-3 text-base', size === 'large' && 'flex w-full items-center justify-center py-4 text-lg', full && 'h-full w-full', roundedFull && 'rounded-full', !roundedFull && 'rounded-md') }, props, { children: [!!icon && jsxRuntime.jsx("div", __assign({ className: "mr-1" }, { children: icon })), jsxRuntime.jsx("div", { children: children }), loading && (jsxRuntime.jsx("div", __assign({ className: "ml-1" }, { children: jsxRuntime.jsx(RiLoader4Line, { className: "w-6 h-6 animate-spin" }) })))] })));
};

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'contained' : _b, onClick = _a.onClick, _c = _a.type, type = _c === void 0 ? 'button' : _c, children = _a.children; _a.style; var props = __rest(_a, ["variant", "onClick", "type", "children", "style"]);
    var handleClick = function (e) {
        if (props.loading || props.disabled) {
            e.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    if (variant === 'outlined' || variant === 'outlined-special') {
        return (jsxRuntime.jsx(OutlinedButton, __assign({ type: type }, props, { onClick: handleClick }, { children: children })));
    }
    return (jsxRuntime.jsx(ContainedButton, __assign({ type: type }, props, { onClick: handleClick }, { children: children })));
};

exports.Button = Button;
exports.DropdownSelector = DropdownSelector;
//# sourceMappingURL=index.cjs.js.map
