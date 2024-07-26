/*! For license information please see modules-dropdown-Dropdown-stories.d499ad59.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[74],{"./src/modules/dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomEmptyMessage:()=>CustomEmptyMessage,CustomParentWidth:()=>CustomParentWidth,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ChevronUpIcon(_ref){let{className}=_ref;return(0,jsx_runtime.jsxs)("svg",{className,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:["  ",(0,jsx_runtime.jsx)("polyline",{points:"18 15 12 9 6 15"})]})}const icons_ChevronUpIcon=ChevronUpIcon;function UserRoundedIcon(_ref){let{className,strokeWidth="2"}=_ref;return(0,jsx_runtime.jsx)("svg",{className,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}ChevronUpIcon.__docgenInfo={description:"",methods:[],displayName:"ChevronUpIcon",props:{className:{required:!0,tsType:{name:"string"},description:""}}};const icons_UserRoundedIcon=UserRoundedIcon;UserRoundedIcon.__docgenInfo={description:"",methods:[],displayName:"UserRoundedIcon",props:{className:{required:!0,tsType:{name:"string"},description:""},strokeWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"2"',computed:!1}}}};const CheckIncon=_ref=>{let{className}=_ref;return(0,jsx_runtime.jsx)("svg",{className,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,jsx_runtime.jsx)("polyline",{points:"20 6 9 17 4 12"})})},icons_CheckIncon=CheckIncon;CheckIncon.__docgenInfo={description:"",methods:[],displayName:"CheckIncon",props:{className:{required:!0,tsType:{name:"string"},description:""}}};const DropdownSelector=_ref=>{let{options,formGroupWidth,selectedOption,setSelectedOption,labelText,hintText,emptyMessage="No hay opciones disponibles",isDisabled=!1,isError=!1}=_ref;const[isDropdownOpen,setIsDropdownOpen]=(0,react.useState)(!1),[sortedOptions,setSortedOptions]=(0,react.useState)([]),[selectingItem,setSelectingItem]=(0,react.useState)(null),[hoveredItemValue,setHoveredItemValue]=(0,react.useState)(null),[defaultValue,setDefaultValue]=(0,react.useState)(null),containerRef=(0,react.useRef)(null),inputRef=(0,react.useRef)(null),toggleIconInput=isDropdownOpen?"rotate-0":"rotate-180 text-gray-600",inputStyles=isDisabled?" input--disabled":isError?" input--error":" input--default",labelStyles=isError?" label label--error":" label label--default",hintStyles=isError?"text-error":"text-gray-600",handleClickOutside=event=>{containerRef.current&&!containerRef.current.contains(event.target)&&setIsDropdownOpen(!1)};return(0,react.useEffect)((()=>(document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)})),[containerRef]),(0,react.useEffect)((()=>{isDropdownOpen&&defaultValue?(()=>{let sortedList=[...options].sort(((a,b)=>a.label.localeCompare(b.label)));if(defaultValue){const index=sortedList.findIndex((option=>option.label===defaultValue.label));if(index>-1){const[selectedItem]=sortedList.splice(index,1);sortedList.unshift(selectedItem)}}setSortedOptions(sortedList)})():setSortedOptions([...options].sort(((a,b)=>a.label.localeCompare(b.label))))}),[options,isDropdownOpen,defaultValue]),(0,react.useEffect)((()=>{var _inputRef$current;isDropdownOpen||(null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.blur())}),[isDropdownOpen]),(0,jsx_runtime.jsxs)("div",{className:"relative px-2 mt-5 bg-white ".concat(formGroupWidth),ref:containerRef,children:[(0,jsx_runtime.jsxs)("div",{className:"form--group",onClick:()=>setIsDropdownOpen(!isDropdownOpen),children:[(0,jsx_runtime.jsx)("input",{type:"text",className:"input ".concat(inputStyles),placeholder:" ",value:(null==selectedOption?void 0:selectedOption.label)&&(null==selectedOption?void 0:selectedOption.label),readOnly:!0,id:"custom-dropdown",ref:inputRef,disabled:isDisabled}),labelText&&(0,jsx_runtime.jsx)("label",{className:labelStyles,htmlFor:"custom-dropdown",children:labelText}),(0,jsx_runtime.jsx)("div",{className:"right-2.5 absolute-center-y",children:(0,jsx_runtime.jsx)(icons_ChevronUpIcon,{className:"".concat(toggleIconInput," w-4 h-4 cursor-pointer")})})]}),hintText&&!isDropdownOpen&&(0,jsx_runtime.jsx)("span",{className:"mt-1 ml-1 | ".concat(hintStyles," text-xs"),children:hintText}),isDropdownOpen&&(0,jsx_runtime.jsx)("ul",{className:"options scrollbar-hide",children:sortedOptions.length>0?null==sortedOptions?void 0:sortedOptions.map(((option,index)=>{const optionValue=option.value,optionLabel=option.label,isHoveredItem=hoveredItemValue===index,isCurrentItem=optionValue===(null==selectedOption?void 0:selectedOption.value)&&!selectingItem,isSelectingItem=(null==selectingItem?void 0:selectingItem.value)===optionValue&&selectingItem.isSelecting,isHoveringItem=isHoveredItem||isCurrentItem?"3":"2",selectedItemStyles=isCurrentItem||isSelectingItem?"options__item--hovered  options__item justify-between ".concat((null==option?void 0:option.value)&&"cursor-pointer"):"options__item justify-between ".concat((null==option?void 0:option.value)&&"cursor-pointer"),checkIconStyles=isCurrentItem||isSelectingItem?"w-4 h-4 text-green-600":"hidden ";return(0,jsx_runtime.jsxs)("li",{className:selectedItemStyles,onClick:optionValue?()=>{return label=optionLabel,setSelectingItem({isSelecting:!0,value:value=optionValue}),setSelectedOption({value,label}),void setTimeout((()=>{setSelectingItem(null),setHoveredItemValue(null),setIsDropdownOpen(!1),setDefaultValue({value,label})}),400);var value,label}:void 0,onMouseEnter:()=>setHoveredItemValue(index),onMouseLeave:()=>setHoveredItemValue(null),children:[(0,jsx_runtime.jsxs)("div",{className:"justify-start",children:[(0,jsx_runtime.jsx)(icons_UserRoundedIcon,{className:"w-4 h-4",strokeWidth:isHoveringItem}),(0,jsx_runtime.jsx)("span",{children:optionLabel})]}),(0,jsx_runtime.jsx)(icons_CheckIncon,{className:checkIconStyles})]},"".concat(optionValue,"-").concat(index))})):(0,jsx_runtime.jsx)("li",{className:"text-gray-300 flex-centered",children:emptyMessage})})]})},dropdown_DropdownSelector=DropdownSelector;DropdownSelector.__docgenInfo={description:"",methods:[],displayName:"DropdownSelector",props:{name:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  value: string | null;\n  label: string;\n}",signature:{properties:[{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"OptionsType[]"},description:""},labelText:{required:!1,tsType:{name:"string"},description:""},hintText:{required:!1,tsType:{name:"string"},description:""},formGroupWidth:{required:!1,tsType:{name:"string"},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"No hay opciones disponibles"',computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedOption:{required:!0,tsType:{name:"union",raw:"OptionsType | null",elements:[{name:"signature",type:"object",raw:"{\n  value: string | null;\n  label: string;\n}",signature:{properties:[{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"null"}]},description:""},setSelectedOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: OptionsType | null) => void",signature:{arguments:[{type:{name:"union",raw:"OptionsType | null",elements:[{name:"signature",type:"object",raw:"{\n  value: string | null;\n  label: string;\n}",signature:{properties:[{key:"value",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}}};const userDataMock=[{value:"1",label:"Victor Díaz"},{value:null,label:"Max Mendex"},{value:null,label:"Jesús Millán"},{value:null,label:"Nicholas Yepes"},{value:null,label:"Santiago Aceves"},{value:null,label:"Sebastian"},{value:null,label:"Axel rose"}],Dropdown_stories={title:"DropdownSelector",component:dropdown_DropdownSelector},renderDropdown=args=>{const[selectedOption,setSelectedOption]=(0,react.useState)(null);return(0,jsx_runtime.jsx)(dropdown_DropdownSelector,{...args,selectedOption,setSelectedOption})},Default={args:{options:userDataMock,labelText:"Elige un usuario",hintText:"Solo podrás elegir a Victor para continuar"},render:renderDropdown},CustomParentWidth={args:{options:userDataMock,labelText:"Elige un usuario",hintText:"Solo podrás elegir a Victor para continuar",formGroupWidth:"w-full lg:w-1/2"},render:renderDropdown},CustomEmptyMessage={args:{options:[],labelText:"Elige un usuario",hintText:"Solo podrás elegir a Victor para continuar",emptyMessage:"No hay usuarios disponibles"},render:renderDropdown},Disabled={args:{options:[],labelText:"Elige un usuario",isDisabled:!0},render:renderDropdown},Error={args:{options:userDataMock,labelText:"Elige un usuario",hintText:"Solo podrás elegir a Victor para continuar",isError:!0},render:renderDropdown},__namedExportsOrder=["Default","CustomParentWidth","CustomEmptyMessage","Disabled","Error"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    options: userDataMock,\n    labelText: "Elige un usuario",\n    hintText: "Solo podrás elegir a Victor para continuar"\n  },\n  render: renderDropdown\n}',...Default.parameters?.docs?.source}}},CustomParentWidth.parameters={...CustomParentWidth.parameters,docs:{...CustomParentWidth.parameters?.docs,source:{originalSource:'{\n  args: {\n    options: userDataMock,\n    labelText: "Elige un usuario",\n    hintText: "Solo podrás elegir a Victor para continuar",\n    formGroupWidth: "w-full lg:w-1/2"\n  },\n  render: renderDropdown\n}',...CustomParentWidth.parameters?.docs?.source}}},CustomEmptyMessage.parameters={...CustomEmptyMessage.parameters,docs:{...CustomEmptyMessage.parameters?.docs,source:{originalSource:'{\n  args: {\n    options: [],\n    labelText: "Elige un usuario",\n    hintText: "Solo podrás elegir a Victor para continuar",\n    emptyMessage: "No hay usuarios disponibles"\n  },\n  render: renderDropdown\n}',...CustomEmptyMessage.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    options: [],\n    labelText: "Elige un usuario",\n    isDisabled: true\n  },\n  render: renderDropdown\n}',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    options: userDataMock,\n    labelText: "Elige un usuario",\n    hintText: "Solo podrás elegir a Victor para continuar",\n    isError: true\n  },\n  render: renderDropdown\n}',...Error.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);