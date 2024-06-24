(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{8469:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(3428),i=n(791),o=n(2265),l=n(7042),s=n(5600),c=n(5843),u=n(7927),a=n(6520),d=n(5702);function h(e){return(0,d.Z)("MuiCardContent",e)}(0,a.Z)("MuiCardContent",["root"]);var Z=n(7437);let f=["className","component"],x=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},h,t)},m=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),p=o.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:o,component:s="div"}=n,c=(0,i.Z)(n,f),a=(0,r.Z)({},n,{component:s}),d=x(a);return(0,Z.jsx)(m,(0,r.Z)({as:s,className:(0,l.Z)(d.root,o),ownerState:a,ref:t},c))});var v=p},3948:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(3428),i=n(791),o=n(2265);let l=o.createContext(null);function s(){let e=o.useContext(l);return e}let c="function"==typeof Symbol&&Symbol.for;var u=c?Symbol.for("mui.nested"):"__THEME_NESTED__",a=n(7437),d=function(e){let{children:t,theme:n}=e,i=s(),c=o.useMemo(()=>{let e=null===i?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return(0,r.Z)({},e,t)}(i,n);return null!=e&&(e[u]=null!==i),e},[n,i]);return(0,a.jsx)(l.Provider,{value:c,children:t})},h=n(6375),Z=n(4809);let f={};function x(e,t,n,i=!1){return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof n){let l=n(o),s=e?(0,r.Z)({},t,{[e]:l}):l;return i?()=>s:s}return e?(0,r.Z)({},t,{[e]:n}):(0,r.Z)({},t,n)},[e,t,n,i])}var m=function(e){let{children:t,theme:n,themeId:r}=e,i=(0,Z.Z)(f),o=s()||f,l=x(r,i,n),c=x(r,o,n,!0);return(0,a.jsx)(d,{theme:c,children:(0,a.jsx)(h.T.Provider,{value:l,children:t})})},p=n(3469);let v=["theme"];function j(e){let{theme:t}=e,n=(0,i.Z)(e,v),o=t[p.Z];return(0,a.jsx)(m,(0,r.Z)({},n,{themeId:o?p.Z:void 0,theme:o||t}))}},1101:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}}),n(2265);var r=n(5270),i=n(3794),o=n(3469);function l(){let e=(0,r.Z)(i.Z);return e[o.Z]||e}},3848:function(e,t,n){Promise.resolve().then(n.bind(n,670))},9862:function(e,t,n){"use strict";var r=n(7437),i=n(8219);t.Z=e=>{let{title:t,description:n,children:o}=e;return(0,r.jsx)(i.B6,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.ql,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n})]}),o]})})}},3878:function(e,t,n){"use strict";var r=n(7437);n(2265);var i=n(5133),o=n(8469),l=n(3226),s=n(8075),c=n(6507);t.Z=e=>{let{title:t,subtitle:n,children:u,action:a,footer:d,cardheading:h,headtitle:Z,headsubtitle:f,middlecontent:x}=e;return(0,r.jsxs)(i.Z,{sx:{padding:0},elevation:9,variant:void 0,children:[h?(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{variant:"h5",children:Z}),(0,r.jsx)(l.Z,{variant:"subtitle2",color:"textSecondary",children:f})]}):(0,r.jsxs)(o.Z,{sx:{p:"30px"},children:[t?(0,r.jsxs)(s.Z,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",mb:3,children:[(0,r.jsxs)(c.Z,{children:[t?(0,r.jsx)(l.Z,{variant:"h5",children:t}):"",n?(0,r.jsx)(l.Z,{variant:"subtitle2",color:"textSecondary",children:n}):""]}),a]}):null,u]}),x,d]})}},670:function(e,t,n){"use strict";n.r(t);var r=n(7437),i=n(9872),o=n(8874),l=n(6507),s=n(9862),c=n(3878),u=n(5843),a=n(8595),d=n(3948);let h=(0,u.ZP)(i.Z)(e=>{let{theme:t}=e;return{...t.typography.body1,textAlign:"center",color:t.palette.text.secondary,height:60,lineHeight:"60px"}}),Z=(0,a.Z)({palette:{mode:"dark"}}),f=(0,a.Z)({palette:{mode:"light"}});t.default=()=>(0,r.jsx)(s.Z,{title:"Shadow",description:"this is Shadow",children:(0,r.jsx)(c.Z,{title:"Shadow",children:(0,r.jsx)(o.ZP,{container:!0,spacing:2,children:[f,Z].map((e,t)=>(0,r.jsx)(o.ZP,{item:!0,xs:6,children:(0,r.jsx)(d.Z,{theme:e,children:(0,r.jsx)(l.Z,{sx:{p:2,bgcolor:"background.default",display:"grid",gridTemplateColumns:{md:"1fr 1fr"},gap:2},children:[0,1,2,3,4,6,8,12,16,24].map(e=>(0,r.jsx)(h,{elevation:e,children:"elevation=".concat(e)},e))})})},t))})})})}},function(e){e.O(0,[370,760,935,874,971,596,744],function(){return e(e.s=3848)}),_N_E=e.O()}]);