(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{275:function(e,t,r){Promise.resolve().then(r.bind(r,5862))},9862:function(e,t,r){"use strict";var o=r(7437),n=r(8219);t.Z=e=>{let{title:t,description:r,children:i}=e;return(0,o.jsx)(n.B6,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)(n.ql,{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"description",content:r})]}),i]})})}},4008:function(e,t,r){"use strict";var o=r(7437);r(2265);var n=r(5843),i=r(1975);let l=(0,n.ZP)(e=>(0,o.jsx)(i.Z,{...e}))(e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"0.8"},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.grey[200]}}});t.Z=l},2600:function(e,t,r){"use strict";var o=r(7437),n=r(1396),i=r.n(n),l=r(5843),a=r(6691),s=r.n(a);let c=(0,l.ZP)(i())(()=>({height:"70px",width:"180px",overflow:"hidden",display:"block"}));t.Z=()=>(0,o.jsx)(c,{href:"/",children:(0,o.jsx)(s(),{src:"/images/logos/logo-dark.svg",alt:"logo",height:70,width:174,priority:!0})})},5862:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return es}});var o=r(7437),n=r(1396),i=r.n(n),l=r(6507),a=r(8874),s=r(5133),c=r(3226),d=r(8075),u=r(9862),p=r(2600),h=r(2265),m=r(791),x=r(3428),b=r(7042),f=r(5600),Z=r(5843),v=r(7927),g=r(6520),j=r(5702);function k(e){return(0,j.Z)("MuiFormGroup",e)}(0,g.Z)("MuiFormGroup",["root","row","error"]);var y=r(9592),w=r(4379);let C=["className","row"],P=e=>{let{classes:t,row:r,error:o}=e;return(0,f.Z)({root:["root",r&&"row",o&&"error"]},k,t)},F=(0,Z.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.row&&t.row]}})(({ownerState:e})=>(0,x.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),R=h.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiFormGroup"}),{className:n,row:i=!1}=r,l=(0,m.Z)(r,C),a=(0,y.Z)(),s=(0,w.Z)({props:r,muiFormControl:a,states:["error"]}),c=(0,x.Z)({},r,{row:i,error:s.error}),d=P(c);return(0,o.jsx)(F,(0,x.Z)({className:(0,b.Z)(d.root,n),ownerState:c,ref:t},l))});var S=r(8702);function M(e){return(0,j.Z)("MuiFormControlLabel",e)}let I=(0,g.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],N=e=>{let{classes:t,disabled:r,labelPlacement:o,error:n,required:i}=e,l={root:["root",r&&"disabled",`labelPlacement${(0,S.Z)(o)}`,n&&"error",i&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return(0,f.Z)(l,M,t)},$=(0,Z.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${I.label}`]:t.label},t.root,t[`labelPlacement${(0,S.Z)(r.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>(0,x.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${I.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${I.label}`]:{[`&.${I.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),L=(0,Z.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${I.error}`]:{color:(e.vars||e).palette.error.main}})),B=h.forwardRef(function(e,t){var r,n;let i=(0,v.Z)({props:e,name:"MuiFormControlLabel"}),{className:l,componentsProps:a={},control:s,disabled:u,disableTypography:p,label:f,labelPlacement:Z="end",required:g,slotProps:j={}}=i,k=(0,m.Z)(i,z),C=(0,y.Z)(),P=null!=(r=null!=u?u:s.props.disabled)?r:null==C?void 0:C.disabled,F=null!=g?g:s.props.required,R={disabled:P,required:F};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===s.props[e]&&void 0!==i[e]&&(R[e]=i[e])});let S=(0,w.Z)({props:i,muiFormControl:C,states:["error"]}),M=(0,x.Z)({},i,{disabled:P,labelPlacement:Z,required:F,error:S.error}),I=N(M),B=null!=(n=j.typography)?n:a.typography,O=f;return null==O||O.type===c.Z||p||(O=(0,o.jsx)(c.Z,(0,x.Z)({component:"span"},B,{className:(0,b.Z)(I.label,null==B?void 0:B.className),children:O}))),(0,o.jsxs)($,(0,x.Z)({className:(0,b.Z)(I.root,l),ownerState:M,ref:t},k,{children:[h.cloneElement(s,R),F?(0,o.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[O,(0,o.jsxs)(L,{ownerState:M,"aria-hidden":!0,className:I.asterisk,children:[" ","*"]})]}):O]}))});var O=r(9975),W=r(8496),q=r(6659);function E(e){return(0,j.Z)("PrivateSwitchBase",e)}(0,g.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);let D=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],H=e=>{let{classes:t,checked:r,disabled:o,edge:n}=e,i={root:["root",r&&"checked",o&&"disabled",n&&`edge${(0,S.Z)(n)}`],input:["input"]};return(0,f.Z)(i,E,t)},_=(0,Z.ZP)(q.Z)(({ownerState:e})=>(0,x.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),G=(0,Z.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),V=h.forwardRef(function(e,t){let{autoFocus:r,checked:n,checkedIcon:i,className:l,defaultChecked:a,disabled:s,disableFocusRipple:c=!1,edge:d=!1,icon:u,id:p,inputProps:h,inputRef:f,name:Z,onBlur:v,onChange:g,onFocus:j,readOnly:k,required:w=!1,tabIndex:C,type:P,value:F}=e,R=(0,m.Z)(e,D),[S,M]=(0,W.Z)({controlled:n,default:!!a,name:"SwitchBase",state:"checked"}),I=(0,y.Z)(),z=s;I&&void 0===z&&(z=I.disabled);let N="checkbox"===P||"radio"===P,$=(0,x.Z)({},e,{checked:S,disabled:z,disableFocusRipple:c,edge:d}),L=H($);return(0,o.jsxs)(_,(0,x.Z)({component:"span",className:(0,b.Z)(L.root,l),centerRipple:!0,focusRipple:!c,disabled:z,tabIndex:null,role:void 0,onFocus:e=>{j&&j(e),I&&I.onFocus&&I.onFocus(e)},onBlur:e=>{v&&v(e),I&&I.onBlur&&I.onBlur(e)},ownerState:$,ref:t},R,{children:[(0,o.jsx)(G,(0,x.Z)({autoFocus:r,checked:n,defaultChecked:a,className:L.input,disabled:z,id:N?p:void 0,name:Z,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;M(t),g&&g(e,t)},readOnly:k,ref:f,required:w,ownerState:$,tabIndex:C,type:P},"checkbox"===P&&void 0===F?{}:{value:F},h)),S?i:u]}))});var A=r(9782),T=(0,A.Z)((0,o.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=(0,A.Z)((0,o.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Y=(0,A.Z)((0,o.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function J(e){return(0,j.Z)("MuiCheckbox",e)}let K=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),Q=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],X=e=>{let{classes:t,indeterminate:r,color:o}=e,n={root:["root",r&&"indeterminate",`color${(0,S.Z)(o)}`]},i=(0,f.Z)(n,J,t);return(0,x.Z)({},t,i)},ee=(0,Z.ZP)(V,{shouldForwardProp:e=>(0,Z.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,S.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,x.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,O.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${K.checked}, &.${K.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${K.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),et=(0,o.jsx)(U,{}),er=(0,o.jsx)(T,{}),eo=(0,o.jsx)(Y,{}),en=h.forwardRef(function(e,t){var r,n;let i=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=et,color:a="primary",icon:s=er,indeterminate:c=!1,indeterminateIcon:d=eo,inputProps:u,size:p="medium",className:f}=i,Z=(0,m.Z)(i,Q),g=c?d:s,j=c?d:l,k=(0,x.Z)({},i,{color:a,indeterminate:c,size:p}),y=X(k);return(0,o.jsx)(ee,(0,x.Z)({type:"checkbox",inputProps:(0,x.Z)({"data-indeterminate":c},u),icon:h.cloneElement(g,{fontSize:null!=(r=g.props.fontSize)?r:p}),checkedIcon:h.cloneElement(j,{fontSize:null!=(n=j.props.fontSize)?n:p}),ownerState:k,ref:t,className:(0,b.Z)(y.root,f)},Z,{classes:y}))});var ei=r(5551),el=r(4008),ea=e=>{let{title:t,subtitle:r,subtext:n}=e;return(0,o.jsxs)(o.Fragment,{children:[t?(0,o.jsx)(c.Z,{fontWeight:"700",variant:"h2",mb:1,children:t}):null,n,(0,o.jsxs)(d.Z,{children:[(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(c.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"username",mb:"5px",children:"Username"}),(0,o.jsx)(el.Z,{variant:"outlined",fullWidth:!0})]}),(0,o.jsxs)(l.Z,{mt:"25px",children:[(0,o.jsx)(c.Z,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"password",mb:"5px",children:"Password"}),(0,o.jsx)(el.Z,{type:"password",variant:"outlined",fullWidth:!0})]}),(0,o.jsxs)(d.Z,{justifyContent:"space-between",direction:"row",alignItems:"center",my:2,children:[(0,o.jsx)(R,{children:(0,o.jsx)(B,{control:(0,o.jsx)(en,{defaultChecked:!0}),label:"Remeber this Device"})}),(0,o.jsx)(c.Z,{component:i(),href:"/",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Forgot Password ?"})]})]}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(ei.Z,{color:"primary",variant:"contained",size:"large",fullWidth:!0,component:i(),href:"/",type:"submit",children:"Sign In"})}),r]})},es=()=>(0,o.jsx)(u.Z,{title:"Login",description:"this is Login page",children:(0,o.jsx)(l.Z,{sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:(0,o.jsx)(a.ZP,{container:!0,spacing:0,justifyContent:"center",sx:{height:"100vh"},children:(0,o.jsx)(a.ZP,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:(0,o.jsxs)(s.Z,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:[(0,o.jsx)(l.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,o.jsx)(p.Z,{})}),(0,o.jsx)(ea,{subtext:(0,o.jsx)(c.Z,{variant:"subtitle1",textAlign:"center",color:"textSecondary",mb:1,children:"Your Social Campaigns"}),subtitle:(0,o.jsxs)(d.Z,{direction:"row",spacing:1,justifyContent:"center",mt:3,children:[(0,o.jsx)(c.Z,{color:"textSecondary",variant:"h6",fontWeight:"500",children:"New to Spike?"}),(0,o.jsx)(c.Z,{component:i(),href:"/authentication/register",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Create an account"})]})})]})})})})})}},function(e){e.O(0,[370,760,935,812,447,874,396,691,971,596,744],function(){return e(e.s=275)}),_N_E=e.O()}]);