const __vite__fileDeps=["static/js/index-Df4smBcs.js","static/js/vendor-COAUpDWz.js","static/js/createSvgIcon-63W_9W2b.js","static/js/index-BLkPfFsf.js","static/js/DashboardViewParams-DnRSqG_L.js","static/js/DashboardWidgets-Bd_rYhaA.js","static/js/DashboardContent-DSoVlerH.js","static/js/Edit-ByX95MPl.js","static/js/index-CNJf7HDz.js","static/js/index-BrZb1t9C.js","static/js/ContentCopy-CTB-bCQn.js","static/css/index-C5isHALn.css","static/js/index-CFjUf3L-.js","static/js/index-By5ZMnyu.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Z=Object.defineProperty;var ee=(e,t,s)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>(ee(e,typeof t!="symbol"?t+"":t,s),s);import{c as H,g as _,u as te,j as r,A as N,a as B,i as re,T as k,b as se,R,r as F,S as oe,B as I,I as ne,C as ie,d as ae,e as ce,f as he,h as T,k as le,l as de,L as ue,m as pe,G as O,F as fe,n as me,o as je,p as xe,q as ye,M as p,D as V,s as _e,t as ge,v as D,z as u,w as Ee,x as ve,y as be,E as Se}from"./vendor-COAUpDWz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const{transitions:P}=H(),y="#ed0500",Ie="#ded5d5",Te=H({shape:{borderRadius:5},palette:{primary:{main:_[900],light:_[200]},secondary:{main:y,dark:"#c10400",light:_[200]},background:{default:"#fff",paper:"#fff"}},components:{MuiLink:{styleOverrides:{root:{transition:P.create("color",{duration:P.duration.enteringScreen}),"&:hover":{color:y}}}},MuiTabs:{styleOverrides:{flexContainer:{gap:"10px"},indicator:{backgroundColor:y}}},MuiButton:{styleOverrides:{contained:{"&:hover":{background:_[800]}},outlined:{"&:hover":{color:y,borderColor:y,background:"#fff"}},text:{"&:hover":{color:y,borderColor:y}}}},MuiTab:{defaultProps:{color:"secondary"},styleOverrides:{root:{fontSize:"1rem",borderRadius:"5px","&:hover":{background:_[200]}}}},MuiIconButton:{styleOverrides:{root:{transition:P.create("color",{duration:P.duration.enteringScreen}),color:_[900],"&:hover":{color:y}}}},MuiSwitch:{defaultProps:{color:"secondary"}},MuiToggleButton:{defaultProps:{color:"secondary"},styleOverrides:{root:{transition:P.create("color",{duration:P.duration.enteringScreen}),color:_[900],"&:hover":{color:y},"&.Mui-disabled":{border:"unset",background:_[100]}}}},MuiToggleButtonGroup:{defaultProps:{color:"secondary"}},MuiLinearProgress:{defaultProps:{color:"secondary"}},MuiPaper:{styleOverrides:{root:{boxShadow:"unset",border:"1px solid",borderColor:Ie}}}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontWeight:"bold",textTransform:"none"}}}),v=()=>{var t;const e=te();return r.jsxs(N,{severity:"error",children:[r.jsx(B,{children:"Something went wrong"}),re(e)&&r.jsxs(r.Fragment,{children:[r.jsx(k,{fontWeight:"bold",children:[`Status: ${e.status}`,typeof((t=e.data)==null?void 0:t.detail)=="string"&&e.data.detail].filter(Boolean).join(", ")}),typeof e.data=="string"&&r.jsx(k,{children:e.data})]}),typeof e=="string"&&r.jsx(k,{fontWeight:"bold",children:e})]})},W=({data:e})=>{const[t,s]=R.useState(!1),n=R.useRef(null);return F.useEffect(()=>{e!=null&&e.error&&(n.current=e.error,s(!0))},[e]),r.jsx(oe,{open:t,onClose:(i,o)=>{o!=="clickaway"&&s(!1)},children:r.jsx(N,{severity:"error",children:r.jsxs(I,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:2,children:[r.jsxs(I,{children:[r.jsx(B,{children:"Something went wrong"}),n.current&&r.jsx(k,{fontWeight:"bold",children:[typeof n.current.status_code=="number"&&`Status: ${n.current.status_code}`,typeof n.current.detail=="string"&&n.current.detail].filter(Boolean).join(", ")})]}),r.jsx(I,{children:r.jsx(ne,{size:"small","aria-label":"close",color:"inherit",onClick:()=>{s(!1)},children:r.jsx(ie,{})})})]})})})},$=()=>{const e=se();return r.jsx(W,{data:e})},Pe=()=>{var s;const t=(s=ae().find(n=>{var i;return!!((i=n.data)!=null&&i.error)}))==null?void 0:s.data;return r.jsx(W,{data:t})},ke={path:"*",Component:()=>r.jsx(I,{display:"flex",justifyContent:"center",children:r.jsx(k,{variant:"h4",children:"Page Not Found"})})},we="modulepreload",Oe=function(e){return"/"+e},G={},E=function(t,s,n){let i=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(s.map(c=>{if(c=Oe(c),c in G)return;G[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const l=document.createElement("link");if(l.rel=f?"stylesheet":we,f||(l.as="script",l.crossOrigin=""),l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),f)return new Promise((j,A)=>{l.addEventListener("load",j),l.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};function d(e){return e!=null&&e.notThrowExc?Le:Ce}const Ce=e=>{const{data:t,error:s,response:n}=e;if(s)throw ce(s,{status:n.status});return t},Le=e=>{const{data:t,error:s,response:n}=e;return s?{error:{...s,status_code:n.status}}:t},De=({api:e})=>({loader:()=>e.GET("/api/version").then(d())}),Ae=he,b=Ae({baseUrl:"/"}),Re="/static/img/logo.png",{loader:Fe}=De({api:b}),Ne={path:"/",lazy:async()=>{const{HomeComponentTemplate:e,...t}=await E(()=>import("./index-Df4smBcs.js"),__vite__mapDeps([0,1,2]));return{Component:()=>r.jsxs(r.Fragment,{children:[r.jsx(Pe,{}),r.jsx(e,{logoSrc:Re})]}),...t}},loader:Fe,ErrorBoundary:v},J=e=>{if(e.id)return{...e,id:e.id};throw`"id" is missing in object: ${JSON.stringify(e)}`},q=e=>{if(e.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})},Be=({api:e})=>({loader:({params:t})=>{const{projectId:s}=t;return T(s),e.GET("/api/projects/{project_id}/info",{params:{path:{project_id:s}}}).then(d()).then(J)}});function U(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}T${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const g={FROM:"date_from",TO:"date_to"},$e=e=>{const t=e.get(g.FROM),s=e.get(g.TO);return{date_from:t,date_to:s}},Me=({dataRanges:e})=>{const[t,s]=ge(),{date_from:n,date_to:i}=$e(t),o=D(n||e.minDate),a=D(i||e.maxDate);return{isCorrectTimeInterval:o.isValid()&&a.isValid()&&(o.isSame(a)||o.isBefore(a)),date_from:o,date_to:a,setSearchParams:s}},jt=({dataRanges:e,isDashboardHideDates:t,setIsDashboardHideDates:s,isShowDateFilter:n})=>{const i=le(),{isCorrectTimeInterval:o,date_from:a,date_to:c,setSearchParams:f}=Me({dataRanges:e}),[h,l]=F.useState({date_from:a,date_to:c}),j=de(h,300),A=o?"":"incorrect time interval";return F.useEffect(()=>{var C,L;if(i)return;const m=(C=j==null?void 0:j.date_to)==null?void 0:C.toDate(),x=(L=j==null?void 0:j.date_from)==null?void 0:L.toDate();f(S=>(S.delete(g.FROM),S.delete(g.TO),x&&S.append(g.FROM,U(x)),m&&S.append(g.TO,U(m)),S),{preventScrollReset:!0,replace:!0})},[j]),r.jsx(ue,{dateAdapter:pe,adapterLocale:"en-gb",children:r.jsxs(O,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",alignItems:"flex-end",children:[r.jsx(O,{item:!0,children:r.jsx(I,{minWidth:180,display:"flex",justifyContent:"center",children:r.jsx(fe,{control:r.jsx(me,{checked:t,onChange:m=>s(m.target.checked)}),label:"Show in order"})})}),n&&r.jsxs(r.Fragment,{children:[r.jsx(O,{item:!0,xs:12,md:2,children:r.jsxs(je,{fullWidth:!0,children:[r.jsx(xe,{children:"Period"}),r.jsxs(ye,{variant:"standard",defaultValue:"",onChange:m=>{const[x,C]=m.target.value.split(",");if(x===""){l({date_from:null,date_to:null});return}const[L,S]=[Number(x),C],M=e.maxDate.subtract(L,S);l({date_from:M.isBefore(e.minDate)?e.minDate:M,date_to:e.maxDate})},children:[r.jsx(p,{value:"",children:r.jsx("em",{children:"None"})}),r.jsx(p,{value:"10,minutes",children:"Last 10 Minutes"}),r.jsx(p,{value:"30,minutes",children:"Last 30 Minutes"}),r.jsx(p,{value:"1,hours",children:"Last 1 Hours"}),r.jsx(p,{value:"2,hours",children:"Last 2 Hours"}),r.jsx(p,{value:"8,hours",children:"Last 8 Hours"}),r.jsx(p,{value:"24,hours",children:"Last 24 Hours"}),r.jsx(p,{value:"7,days",children:"Last 7 Days"}),r.jsx(p,{value:"14,days",children:"Last 14 Days"}),r.jsx(p,{value:"28,days",children:"Last 28 Days"}),r.jsx(p,{value:"60,days",children:"Last 60 Days"})]})]})}),r.jsx(O,{item:!0,children:r.jsxs(I,{display:"flex",alignItems:"center",gap:2,children:[r.jsx(V,{minDate:e.minDate,maxDate:e.maxDate&&c,slotProps:{textField:{variant:"standard"}},label:"From",value:h.date_from,onChange:m=>l(x=>({...x,date_from:m}))}),r.jsx(I,{height:1,display:"flex",alignItems:"center",children:r.jsx(k,{children:" - "})}),r.jsx(V,{minDate:e.minDate&&a,maxDate:e.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:h.date_to,onChange:m=>l(x=>({...x,date_to:m}))})]})}),r.jsx(O,{item:!0,xs:12,children:r.jsx(_e,{unmountOnExit:!0,in:!o,children:r.jsxs(N,{severity:"error",children:[r.jsx(B,{children:"Error"}),A]})})})]})]})})};class Ve{constructor(){w(this,"at",0);w(this,"ch","");w(this,"text","");w(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(t){throw{name:"SyntaxError",message:t,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(t){t!==this.ch&&this.error(`Expected '${t}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var t="";if(this.ch==="-"&&(t="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),Number.NEGATIVE_INFINITY;for(;this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();if(this.ch===".")for(t+=".";this.next()&&this.ch>="0"&&this.ch<="9";)t+=this.ch;if(this.ch==="e"||this.ch==="E")for(t+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(t+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)t+=this.ch,this.next();return+t}string(){var t,s,n="",i;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),n;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(i=0,s=0;s<4&&(t=Number.parseInt(this.next(),16),!!isFinite(t));s++)i=i*16+t;n+=String.fromCharCode(i)}else if(this.escapee[this.ch])n+=this.escapee[this.ch];else break;else n+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),Number.NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),Number.POSITIVE_INFINITY}this.error("Unexpected '"+this.ch+"'")}array(){var t=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),t;for(;this.ch;){if(t.push(this.value()),this.white(),this.ch==="]")return this.check("]"),t;this.check(","),this.white()}}this.error("Bad array")}object(){var t,s={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),s;for(;this.ch;){if(t=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(s,t)&&this.error('Duplicate key "'+t+'"'),s[t]=this.value(),this.white(),this.ch==="}")return this.check("}"),s;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(t,s){let n;return this.text=t,this.at=0,this.ch=" ",n=this.value(),this.white(),this.ch&&this.error("Syntax error"),s!==void 0?function i(o,a){var c,f,h=o[a];if(h&&typeof h=="object")for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(f=i(h,c),f!==void 0?h[c]=f:delete h[c]);return s.call(o,a,h)}({"":n},""):n}}const Y=e=>new Ve().parse(e),Ge=({api:e})=>({loader:({params:t,request:s})=>{T(t.projectId);const{searchParams:n}=new URL(s.url);let i=n.get(g.FROM),o=n.get(g.TO);return i&&!D(i).isValid()&&(i=null),o&&!D(o).isValid()&&(o=null),e.GET("/api/projects/{project_id}/dashboard",{params:{path:{project_id:t.projectId},query:{timestamp_start:i,timestamp_end:o}},parseAs:"text"}).then(d()).then(Y)}}),{loader:Ue}=Ge({api:b}),ze={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:e},{DashboardWidgets:t}]=await Promise.all([E(()=>import("./index-BLkPfFsf.js"),__vite__mapDeps([3,1,4])),E(()=>import("./DashboardWidgets-Bd_rYhaA.js"),__vite__mapDeps([5,1,6,4,2,7]))]);return{Component:()=>r.jsx(e,{Dashboard:({data:{widgets:s}})=>r.jsx(t,{widgets:s})})}},loader:Ue,ErrorBoundary:v},Q={RELOAD_SNAPSHOTS:"reload-snapshots",DELETE_SNAPSHOT:"delete-snapshot"},He=u.object({action:u.literal(Q.RELOAD_SNAPSHOTS)}),We=u.object({action:u.literal(Q.DELETE_SNAPSHOT),snapshotId:u.string().uuid()}),K=e=>async({request:t,params:s})=>{T(s.projectId),q(t);const n=await t.json();if(He.safeParse(n).success)return e.GET("/api/projects/{project_id}/reload",{params:{path:{project_id:s.projectId}}}).then(d({notThrowExc:!0}));const o=We.safeParse(n);return o.success?e.DELETE("/api/projects/{project_id}/{snapshot_id}",{params:{path:{project_id:s.projectId,snapshot_id:o.data.snapshotId}}}).then(d({notThrowExc:!0})):{error:{status_code:!1,detail:"Unknown action"}}},Je=({api:e})=>({loader:({params:t})=>(T(t.projectId),t.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/reports",{params:{path:{project_id:t.projectId}}}).then(d())),action:K(e)}),qe=({api:e})=>({loader:({params:t})=>(T(t.projectId),t.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/test_suites",{params:{path:{project_id:t.projectId}}}).then(d())),action:K(e)}),Ye=({api:e})=>({loader:({params:t})=>{const{projectId:s,snapshotId:n}=t;return T(s),T(n),e.GET("/api/projects/{project_id}/{snapshot_id}/data",{params:{path:{project_id:s,snapshot_id:n}},parseAs:"text"}).then(d()).then(Y)}}),{loader:Qe}=Ye({api:b}),X={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:e,...t}=await E(()=>import("./index-CNJf7HDz.js"),__vite__mapDeps([8,1,6,4,2,7]));return{Component:()=>r.jsx(e,{api:b}),...t}},loader:Qe,ErrorBoundary:v},{loader:Ke,action:Xe}=Je({api:b}),Ze={id:"reports",path:"reports",lazy:async()=>{const{SnapshotsListTemplate:e,...t}=await E(()=>import("./index-BrZb1t9C.js"),__vite__mapDeps([9,1,2,10,11]));return{...t,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx($,{}),r.jsx(e,{type:"reports"})]})}},loader:Ke,action:Xe,ErrorBoundary:v,children:[X]},{loader:et,action:tt}=qe({api:b}),rt={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotsListTemplate:e,...t}=await E(()=>import("./index-BrZb1t9C.js"),__vite__mapDeps([9,1,2,10,11]));return{...t,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx($,{}),r.jsx(e,{type:"test suites"})]})}},loader:et,action:tt,ErrorBoundary:v,children:[X]},{loader:st}=Be({api:b}),ot={path:"projects/:projectId",lazy:()=>E(()=>import("./index-CFjUf3L-.js"),__vite__mapDeps([12,1,10,2])),loader:st,ErrorBoundary:v,children:[ze,Ze,rt]},nt=u.object({action:u.literal("edit-project")}),it=u.object({action:u.literal("create-new-project")}),at=u.object({action:u.literal("delete-project"),projectId:u.string().uuid()}),ct=({api:e})=>({loader:()=>e.GET("/api/projects").then(d()).then(t=>t.map(J)),action:async({request:t})=>{q(t);const s=await t.json();if(it.safeParse(s).success)return e.POST("/api/projects",{body:s}).then(d({notThrowExc:!0}));const n=at.safeParse(s);if(n.success)return e.DELETE("/api/projects/{project_id}",{params:{path:{project_id:n.data.projectId}}}).then(d({notThrowExc:!0}));if(nt.safeParse(s).success)return e.POST("/api/projects/{project_id}/info",{params:{path:{project_id:s.id}},body:s}).then(d({notThrowExc:!0}));throw"Undefined action"}}),{loader:ht,action:lt}=ct({api:b}),dt={index:!0,lazy:()=>E(()=>import("./index-By5ZMnyu.js"),__vite__mapDeps([13,1,2,7])).then(e=>({...e,Component:()=>r.jsxs(r.Fragment,{children:[r.jsx($,{}),r.jsx(e.Component,{})]})})),loader:ht,action:lt,ErrorBoundary:v},ut={...Ne,children:[dt,ot,ke],ErrorBoundary:v},pt=Ee([ut]),z=document.getElementById("root");z&&ve.createRoot(z).render(r.jsx(R.StrictMode,{children:r.jsx(be,{theme:Te,children:r.jsx(Se,{router:pt})})}));export{jt as D,Y as J,d as r};