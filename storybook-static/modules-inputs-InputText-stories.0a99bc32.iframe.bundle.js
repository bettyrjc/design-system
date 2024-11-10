"use strict";(self.webpackChunkmusa_design_system=self.webpackChunkmusa_design_system||[]).push([[778],{"./src/modules/inputs/InputText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputText:()=>InputText_stories_InputText,InputTextEndIcon:()=>InputTextEndIcon,InputTextError:()=>InputTextError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputText_stories});var react=__webpack_require__("./node_modules/react/index.js"),InputText=__webpack_require__("./src/modules/inputs/InputText.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LetterInput=(0,react.forwardRef)((function InputWithRef(_ref,ref){let{allowSpaces,...props}=_ref;return(0,jsx_runtime.jsx)(InputText.A,{ref,...props,onChange:e=>{var _props$onChange;if(allowSpaces){const newValue=e.target.value.replace(/ +/g," ");newValue!==e.target.value&&(e.target.value=newValue)}null===(_props$onChange=props.onChange)||void 0===_props$onChange||_props$onChange.call(props,e)},onKeyPress:event=>{allowSpaces&&" "===event.key||/[ñÑa-zA-Z]/.test(event.key)||event.preventDefault()},onPaste:event=>{const pastedValue=event.clipboardData.getData("Text");return/^[ñÑa-zA-Z\s]/.test(pastedValue)||event.preventDefault(),!1}})})),inputs_LetterInput=LetterInput;LetterInput.__docgenInfo={description:"",methods:[],displayName:"LetterInput"};var ri=__webpack_require__("./node_modules/react-icons/ri/index.mjs");const InputText_stories={title:"Input/LetterInput",component:inputs_LetterInput},renderInputText=args=>(0,jsx_runtime.jsx)(inputs_LetterInput,{onChange:()=>{},variant:"normal",label:"Input label",placeholder:"Input placeholder",...args}),InputText_stories_InputText={args:{variant:"normal",fullWidth:!0,disabled:!1,isError:!1,isInvalid:!1,error:""},render:renderInputText},InputTextError={args:{fullWidth:!0,disabled:!1,isError:!0,isInvalid:!0,error:"Error message"},render:renderInputText},InputTextEndIcon={args:{fullWidth:!0,disabled:!1,endIcon:(0,jsx_runtime.jsx)(ri.XJr,{})},render:renderInputText},__namedExportsOrder=["InputText","InputTextError","InputTextEndIcon"];InputText_stories_InputText.parameters={...InputText_stories_InputText.parameters,docs:{...InputText_stories_InputText.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "normal",\n    fullWidth: true,\n    disabled: false,\n    isError: false,\n    isInvalid: false,\n    error: ""\n  },\n  render: renderInputText\n}',...InputText_stories_InputText.parameters?.docs?.source}}},InputTextError.parameters={...InputTextError.parameters,docs:{...InputTextError.parameters?.docs,source:{originalSource:'{\n  args: {\n    fullWidth: true,\n    disabled: false,\n    isError: true,\n    isInvalid: true,\n    error: "Error message"\n  },\n  render: renderInputText\n}',...InputTextError.parameters?.docs?.source}}},InputTextEndIcon.parameters={...InputTextEndIcon.parameters,docs:{...InputTextEndIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    fullWidth: true,\n    disabled: false,\n    endIcon: <RiLockLine />\n  },\n  render: renderInputText\n}",...InputTextEndIcon.parameters?.docs?.source}}}},"./src/modules/inputs/InputText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{variant="normal",fullWidth=!1,disabled,endIcon,label,error,placeholder,isError,isInvalid,type="text",hint,readOnly,onClickEndICon,actionEndIcon,onActionEndIcon,showIconAction,width,padding,defaultValue,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("relative px-2 mt-5 bg-white",fullWidth&&"w-full",width&&width),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"form--group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type,ref,...props,placeholder:" ",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("input",{"input--disabled":disabled||readOnly,"input--error":error||isError||isInvalid,"input--default":!(disabled||readOnly||error||isError||isInvalid)}),defaultValue,readOnly:disabled||readOnly}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("label",{"label--error":error||isError||isInvalid,"label--default":!error&&!isError&&!isInvalid}),children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex absolute right-2.5 top-1/2 -translate-y-1/2",children:[!!endIcon&&!hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex justify-center pr-3 text-xl text-gray-500 cursor-pointer",onClick:onClickEndICon,children:endIcon})}),showIconAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex justify-center pr-3 text-xl text-gray-500 cursor-pointer",onClick:onActionEndIcon,children:actionEndIcon})]})]}),hint&&!error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("mt-1 ml-1 text-xs text-gray-600"),children:hint}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mt-1 ml-1 text-xs text-danger",children:error})]})})),__WEBPACK_DEFAULT_EXPORT__=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{defaultValue:{value:"'normal'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}}}}]);