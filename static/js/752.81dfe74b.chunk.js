"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[752],{1752:function(e,n,o){o.d(n,{Z:function(){return P}});var t=o(885),i=o(4942),r=o(3366),a=o(7462),l=o(2791),c=o.t(l,2),u=o(8182),s={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},d=o(767),v=o(3967),f=0;var m=c.useId;var p=function(e){if(void 0!==m){var n=m();return null!=e?e:n}return function(e){var n=l.useState(e),o=(0,t.Z)(n,2),i=o[0],r=o[1],a=e||i;return l.useEffect((function(){null==i&&r("mui-".concat(f+=1))}),[i]),a}(e)},h=o(8959).Z,y=o(4036),g=o(3031),Z=o(9479),b=o(9201),S=o(184),x=(0,b.Z)((0,S.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),w=(0,b.Z)((0,S.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),z=o(551),F=o(1020),R=o(4301);function C(e){return(0,R.Z)("MuiRating",e)}var A=(0,o(208).Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),L=["value"],M=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function V(e,n){if(null==e)return e;var o=Math.round(e/n)*n;return Number(o.toFixed(function(e){var n=e.toString().split(".")[1];return n?n.length:0}(n)))}var E=(0,F.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[(0,i.Z)({},"& .".concat(A.visuallyHidden),n.visuallyHidden),n.root,n["size".concat((0,y.Z)(o.size))],o.readOnly&&n.readOnly]}})((function(e){var n,o=e.theme,t=e.ownerState;return(0,a.Z)((n={display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},(0,i.Z)(n,"&.".concat(A.disabled),{opacity:o.palette.action.disabledOpacity,pointerEvents:"none"}),(0,i.Z)(n,"&.".concat(A.focusVisible," .").concat(A.iconActive),{outline:"1px solid #999"}),(0,i.Z)(n,"& .".concat(A.visuallyHidden),s),n),"small"===t.size&&{fontSize:o.typography.pxToRem(18)},"large"===t.size&&{fontSize:o.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"})})),j=(0,F.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,n){return n.label}})((function(e){var n=e.ownerState;return(0,a.Z)({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),I=(0,F.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,n){var o=e.ownerState;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})((function(e){var n=e.theme,o=e.ownerState;return(0,a.Z)({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:n.palette.action.disabled})})),T=(0,F.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return(0,F.Dz)(e)&&"iconActive"!==e},overridesResolver:function(e,n){var o=e.iconActive;return[n.decimal,o&&n.iconActive]}})((function(e){var n=e.iconActive;return(0,a.Z)({position:"relative"},n&&{transform:"scale(1.2)"})}));function N(e){var n=(0,r.Z)(e,L);return(0,S.jsx)("span",(0,a.Z)({},n))}function k(e){var n=e.classes,o=e.disabled,t=e.emptyIcon,i=e.focus,r=e.getLabelText,c=e.highlightSelectedOnly,s=e.hover,d=e.icon,v=e.IconContainerComponent,f=e.isActive,m=e.itemValue,h=e.labelProps,y=e.name,g=e.onBlur,Z=e.onChange,b=e.onClick,x=e.onFocus,w=e.readOnly,z=e.ownerState,F=e.ratingValue,R=c?m===F:m<=F,C=m<=s,A=m<=i,L=m===e.ratingValueRounded,M=p(),V=(0,S.jsx)(I,{as:v,value:m,className:(0,u.Z)(n.icon,R?n.iconFilled:n.iconEmpty,C&&n.iconHover,A&&n.iconFocus,f&&n.iconActive),ownerState:(0,a.Z)({},z,{iconEmpty:!R,iconFilled:R,iconHover:C,iconFocus:A,iconActive:f}),children:t&&!R?t:d});return w?(0,S.jsx)("span",(0,a.Z)({},h,{children:V})):(0,S.jsxs)(l.Fragment,{children:[(0,S.jsxs)(j,(0,a.Z)({ownerState:(0,a.Z)({},z,{emptyValueFocused:void 0}),htmlFor:M},h,{children:[V,(0,S.jsx)("span",{className:n.visuallyHidden,children:r(m)})]})),(0,S.jsx)("input",{className:n.visuallyHidden,onFocus:x,onBlur:g,onChange:Z,onClick:b,disabled:o,value:m,id:M,type:"radio",name:y,checked:L})]})}var H=(0,S.jsx)(x,{fontSize:"inherit"}),O=(0,S.jsx)(w,{fontSize:"inherit"});function B(e){return"".concat(e," Star").concat(1!==e?"s":"")}var P=l.forwardRef((function(e,n){var o=(0,z.Z)({name:"MuiRating",props:e}),i=o.className,c=o.defaultValue,s=void 0===c?null:c,f=o.disabled,m=void 0!==f&&f,b=o.emptyIcon,x=void 0===b?O:b,w=o.emptyLabelText,F=void 0===w?"Empty":w,R=o.getLabelText,A=void 0===R?B:R,L=o.highlightSelectedOnly,I=void 0!==L&&L,P=o.icon,D=void 0===P?H:P,X=o.IconContainerComponent,_=void 0===X?N:X,K=o.max,U=void 0===K?5:K,W=o.name,Y=o.onChange,q=o.onChangeActive,G=o.onMouseLeave,J=o.onMouseMove,Q=o.precision,$=void 0===Q?1:Q,ee=o.readOnly,ne=void 0!==ee&&ee,oe=o.size,te=void 0===oe?"medium":oe,ie=o.value,re=(0,r.Z)(o,M),ae=p(W),le=h({controlled:ie,default:s,name:"Rating"}),ce=(0,t.Z)(le,2),ue=ce[0],se=ce[1],de=V(ue,$),ve=(0,v.Z)(),fe=l.useState({hover:-1,focus:-1}),me=(0,t.Z)(fe,2),pe=me[0],he=pe.hover,ye=pe.focus,ge=me[1],Ze=de;-1!==he&&(Ze=he),-1!==ye&&(Ze=ye);var be=(0,g.Z)(),Se=be.isFocusVisibleRef,xe=be.onBlur,we=be.onFocus,ze=be.ref,Fe=l.useState(!1),Re=(0,t.Z)(Fe,2),Ce=Re[0],Ae=Re[1],Le=l.useRef(),Me=(0,Z.Z)(ze,Le),Ve=(0,Z.Z)(Me,n),Ee=function(e){var n=""===e.target.value?null:parseFloat(e.target.value);-1!==he&&(n=he),se(n),Y&&Y(e,n)},je=function(e){0===e.clientX&&0===e.clientY||(ge({hover:-1,focus:-1}),se(null),Y&&parseFloat(e.target.value)===de&&Y(e,null))},Ie=function(e){we(e),!0===Se.current&&Ae(!0);var n=parseFloat(e.target.value);ge((function(e){return{hover:e.hover,focus:n}}))},Te=function(e){if(-1===he){xe(e),!1===Se.current&&Ae(!1);ge((function(e){return{hover:e.hover,focus:-1}}))}},Ne=l.useState(!1),ke=(0,t.Z)(Ne,2),He=ke[0],Oe=ke[1],Be=(0,a.Z)({},o,{defaultValue:s,disabled:m,emptyIcon:x,emptyLabelText:F,emptyValueFocused:He,focusVisible:Ce,getLabelText:A,icon:D,IconContainerComponent:_,max:U,precision:$,readOnly:ne,size:te}),Pe=function(e){var n=e.classes,o=e.size,t=e.readOnly,i=e.disabled,r=e.emptyValueFocused,a=e.focusVisible,l={root:["root","size".concat((0,y.Z)(o)),i&&"disabled",a&&"focusVisible",t&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[r&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,d.Z)(l,C,n)}(Be);return(0,S.jsxs)(E,(0,a.Z)({ref:Ve,onMouseMove:function(e){J&&J(e);var n,o=Le.current,t=o.getBoundingClientRect(),i=t.right,r=t.left,a=o.firstChild.getBoundingClientRect().width;n="rtl"===ve.direction?(i-e.clientX)/(a*U):(e.clientX-r)/(a*U);var l=V(U*n+$/2,$);l=function(e,n,o){return e<n?n:e>o?o:e}(l,$,U),ge((function(e){return e.hover===l&&e.focus===l?e:{hover:l,focus:l}})),Ae(!1),q&&he!==l&&q(e,l)},onMouseLeave:function(e){G&&G(e);ge({hover:-1,focus:-1}),q&&-1!==he&&q(e,-1)},className:(0,u.Z)(Pe.root,i),ownerState:Be,role:ne?"img":null,"aria-label":ne?A(Ze):null},re,{children:[Array.from(new Array(U)).map((function(e,n){var o=n+1,t={classes:Pe,disabled:m,emptyIcon:x,focus:ye,getLabelText:A,highlightSelectedOnly:I,hover:he,icon:D,IconContainerComponent:_,name:ae,onBlur:Te,onChange:Ee,onClick:je,onFocus:Ie,ratingValue:Ze,ratingValueRounded:de,readOnly:ne,ownerState:Be},i=o===Math.ceil(Ze)&&(-1!==he||-1!==ye);if($<1){var r=Array.from(new Array(1/$));return(0,S.jsx)(T,{className:(0,u.Z)(Pe.decimal,i&&Pe.iconActive),ownerState:Be,iconActive:i,children:r.map((function(e,n){var i=V(o-1+(n+1)*$,$);return(0,S.jsx)(k,(0,a.Z)({},t,{isActive:!1,itemValue:i,labelProps:{style:r.length-1===n?{}:{width:i===Ze?"".concat((n+1)*$*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),i)}))},o)}return(0,S.jsx)(k,(0,a.Z)({},t,{isActive:i,itemValue:o}),o)})),!ne&&!m&&(0,S.jsxs)(j,{className:(0,u.Z)(Pe.label,Pe.labelEmptyValue),ownerState:Be,children:[(0,S.jsx)("input",{className:Pe.visuallyHidden,value:"",id:"".concat(ae,"-empty"),type:"radio",name:ae,checked:null==de,onFocus:function(){return Oe(!0)},onBlur:function(){return Oe(!1)},onChange:Ee}),(0,S.jsx)("span",{className:Pe.visuallyHidden,children:F})]})]}))}))},3967:function(e,n,o){o.d(n,{Z:function(){return r}});o(2791);var t=o(886),i=o(4591);function r(){return(0,t.Z)(i.Z)}},9201:function(e,n,o){o.d(n,{Z:function(){return g}});var t=o(7462),i=o(2791),r=o(3366),a=o(8182),l=o(767),c=o(4036),u=o(551),s=o(1020),d=o(4301);function v(e){return(0,d.Z)("MuiSvgIcon",e)}(0,o(208).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=o(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,"inherit"!==o.color&&n["color".concat((0,c.Z)(o.color))],n["fontSize".concat((0,c.Z)(o.fontSize))]]}})((function(e){var n,o,t,i,r,a,l,c,u,s,d,v,f,m,p,h,y,g=e.theme,Z=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=g.transitions)||null==(o=n.create)?void 0:o.call(n,"fill",{duration:null==(t=g.transitions)||null==(i=t.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(r=g.typography)||null==(a=r.pxToRem)?void 0:a.call(r,20))||"1.25rem",medium:(null==(l=g.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(u=g.typography)||null==(s=u.pxToRem)?void 0:s.call(u,35))||"2.1875"}[Z.fontSize],color:null!=(d=null==(v=g.palette)||null==(f=v[Z.color])?void 0:f.main)?d:{action:null==(m=g.palette)||null==(p=m.action)?void 0:p.active,disabled:null==(h=g.palette)||null==(y=h.action)?void 0:y.disabled,inherit:void 0}[Z.color]}})),h=i.forwardRef((function(e,n){var o=(0,u.Z)({props:e,name:"MuiSvgIcon"}),i=o.children,s=o.className,d=o.color,h=void 0===d?"inherit":d,y=o.component,g=void 0===y?"svg":y,Z=o.fontSize,b=void 0===Z?"medium":Z,S=o.htmlColor,x=o.inheritViewBox,w=void 0!==x&&x,z=o.titleAccess,F=o.viewBox,R=void 0===F?"0 0 24 24":F,C=(0,r.Z)(o,m),A=(0,t.Z)({},o,{color:h,component:g,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:R}),L={};w||(L.viewBox=R);var M=function(e){var n=e.color,o=e.fontSize,t=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,c.Z)(n)),"fontSize".concat((0,c.Z)(o))]};return(0,l.Z)(i,v,t)}(A);return(0,f.jsxs)(p,(0,t.Z)({as:g,className:(0,a.Z)(M.root,s),ownerState:A,focusable:"false",color:S,"aria-hidden":!z||void 0,role:z?"img":void 0,ref:n},L,C,{children:[i,z?(0,f.jsx)("title",{children:z}):null]}))}));h.muiName="SvgIcon";var y=h;function g(e,n){var o=function(o,i){return(0,f.jsx)(y,(0,t.Z)({"data-testid":"".concat(n,"Icon"),ref:i},o,{children:e}))};return o.muiName=y.muiName,i.memo(i.forwardRef(o))}},9479:function(e,n,o){o.d(n,{Z:function(){return r}});var t=o(2791);function i(e,n){"function"===typeof e?e(n):e&&(e.current=n)}var r=function(e,n){return t.useMemo((function(){return null==e&&null==n?null:function(o){i(e,o),i(n,o)}}),[e,n])}},3031:function(e,n,o){o.d(n,{Z:function(){return v}});var t,i=o(2791),r=!0,a=!1,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(r=!0)}function u(){r=!1}function s(){"hidden"===this.visibilityState&&a&&(r=!0)}function d(e){var n=e.target;try{return n.matches(":focus-visible")}catch(o){}return r||function(e){var n=e.type,o=e.tagName;return!("INPUT"!==o||!l[n]||e.readOnly)||"TEXTAREA"===o&&!e.readOnly||!!e.isContentEditable}(n)}var v=function(){var e=i.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",c,!0),n.addEventListener("mousedown",u,!0),n.addEventListener("pointerdown",u,!0),n.addEventListener("touchstart",u,!0),n.addEventListener("visibilitychange",s,!0))}),[]),n=i.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!d(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(a=!0,window.clearTimeout(t),t=window.setTimeout((function(){a=!1}),100),n.current=!1,!0)},ref:e}}},8959:function(e,n,o){o.d(n,{Z:function(){return r}});var t=o(885),i=o(2791);function r(e){var n=e.controlled,o=e.default,r=(e.name,e.state,i.useRef(void 0!==n).current),a=i.useState(o),l=(0,t.Z)(a,2),c=l[0],u=l[1];return[r?n:c,i.useCallback((function(e){r||u(e)}),[])]}}}]);
//# sourceMappingURL=752.81dfe74b.chunk.js.map