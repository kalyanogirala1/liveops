(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5901)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,a=i(2648).Z,r=i(1598).Z,l=i(7273).Z,s=r(i(7294)),o=a(i(2636)),c=i(7757),d=i(3735),u=i(3341);i(4210);var f=a(i(7746));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,a,r,l,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&l(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,r=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}function x(e){let[t,i]=s.version.split("."),n=parseInt(t,10),a=parseInt(i,10);return n>18||18===n&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let v=s.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:a,widthInt:r,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:f,fetchPriority:h,fill:m,placeholder:g,loading:v,srcString:w,config:b,unoptimized:y,loader:j,onLoadRef:E,onLoadingCompleteRef:_,setBlurComplete:N,setShowAltText:S,onLoad:C,onError:k}=e,z=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return v=f?"lazy":v,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,x(h),{loading:v,width:r,height:a,decoding:"async","data-nimg":m?"fill":"1",className:c,style:n({},d,u)},i,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&p(e,w,g,E,_,N,y))},[w,g,E,_,N,k,y,t]),onLoad:e=>{let t=e.currentTarget;p(t,w,g,E,_,N,y)},onError:e=>{S(!0),"blur"===g&&N(!0),k&&k(e)}})))}),w=s.forwardRef((e,t)=>{let i,a;var r,{src:p,sizes:w,unoptimized:b=!1,priority:y=!1,loading:j,className:E,quality:_,width:N,height:S,fill:C,style:k,onLoad:z,onLoadingComplete:I,placeholder:P="empty",blurDataURL:O,fetchPriority:R,layout:B,objectFit:M,objectPosition:L,lazyBoundary:A,lazyRoot:D}=e,T=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(u.ImageConfigContext),W=s.useMemo(()=>{let e=h||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[F]),q=T,G=q.loader||f.default;delete q.loader;let J="__next_img_default"in G;if(J){if("custom"===W.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:i}=t,n=l(t,["config"]);return e(n)}}if(B){"fill"===B&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[B];e&&(k=n({},k,e));let t={responsive:"100vw",fill:"100vw"}[B];t&&!w&&(w=t)}let V="",Y=g(N),Z=g(S);if("object"==typeof(r=p)&&(m(r)||void 0!==r.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,a=e.blurHeight,O=O||e.blurDataURL,V=e.src,!C){if(Y||Z){if(Y&&!Z){let t=Y/e.width;Z=Math.round(e.height*t)}else if(!Y&&Z){let t=Z/e.height;Y=Math.round(e.width*t)}}else Y=e.width,Z=e.height}}let U=!y&&("lazy"===j||void 0===j);(!(p="string"==typeof p?p:V)||p.startsWith("data:")||p.startsWith("blob:"))&&(b=!0,U=!1),W.unoptimized&&(b=!0),J&&p.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(b=!0),y&&(R="high");let[X,H]=s.useState(!1),[$,K]=s.useState(!1),Q=g(_),ee=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:L}:{},$?{}:{color:"transparent"},k),et="blur"===P&&O&&!X?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Y,heightInt:Z,blurWidth:i,blurHeight:a,blurDataURL:O,objectFit:ee.objectFit}),'")')}:{},ei=function(e){let{config:t,src:i,unoptimized:n,width:a,quality:r,sizes:l,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:a}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let r=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:r,kind:"x"}}(t,a,l),d=o.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:o.map((e,n)=>"".concat(s({config:t,src:i,quality:r,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:i,quality:r,width:o[d]})}}({config:W,src:p,unoptimized:b,width:Y,quality:Q,sizes:w,loader:G}),en=p,ea=s.useRef(z);s.useEffect(()=>{ea.current=z},[z]);let er=s.useRef(I);s.useEffect(()=>{er.current=I},[I]);let el=n({isLazy:U,imgAttributes:ei,heightInt:Z,widthInt:Y,qualityInt:Q,className:E,imgStyle:ee,blurStyle:et,loading:j,config:W,fetchPriority:R,fill:C,unoptimized:b,placeholder:P,loader:G,srcString:en,onLoadRef:ea,onLoadingCompleteRef:er,setBlurComplete:H,setShowAltText:K},q);return s.default.createElement(s.default.Fragment,null,s.default.createElement(v,Object.assign({},el,{ref:t})),y?s.default.createElement(o.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src,imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:q.crossOrigin},x(R)))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:a,blurDataURL:r,objectFit:l}=e,s=n||t,o=a||i,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},5901:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var n=i(5893),a=i(5675),r=i.n(a),l=i(7294);function s(){let[e,t]=(0,l.useState)(!1),[i,a]=(0,l.useState)(!1),[s,o]=(0,l.useState)(!1),c=()=>{t(!0)},d=e=>{e.preventDefault(),a(!0)},u=()=>{t(!1)};return(0,l.useEffect)(()=>{let e=document.getElementById("spotlight"),t=document.getElementById("spotlight-child"),i=document.getElementById("main");function n(i){let n,a;i.preventDefault(),n=i.clientX-200,a=i.clientY-350,e.style.left=n+"px",e.style.top=a+"px",t.style.left=n+"px",t.style.top=a+"px"}i.addEventListener("mousemove",n),i.addEventListener("touchmove",n)}),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"min-h-screen main",id:"main",children:[(0,n.jsx)("div",{className:"header",children:(0,n.jsx)(r(),{src:"/logo-dark.svg",width:160,height:80,className:" mx-9 mt-4 h-20 "})}),(0,n.jsxs)("div",{className:"main-content-section md:w-4/5 w-full text-center m-auto relative",children:[(0,n.jsxs)("div",{className:"middleware font-bold ",children:[(0,n.jsx)("div",{className:"child-1 text-center rounded-br w-fit m-auto",children:(0,n.jsxs)("h1",{className:"flex rounded-br p-p20 mix-blend-darken bg-mainBg text-white leaading-160 align-middle",children:["100",(0,n.jsx)("span",{className:"inline-block text-white",children:"x"})]})}),(0,n.jsx)("p",{className:"child-2 text-68 text-white mt-8",children:"your release process"})]}),e?(0,n.jsx)("div",{className:"email_inputarea",children:(0,n.jsxs)("form",{className:"flex rounded-3xl align-middle bg-mainBg justify-around",onSubmit:d,children:[(0,n.jsx)("input",{onBlur:u,placeholder:"kalyankool56@gmail.com",className:"text-white pl-3 bg-transparent text-base"}),(0,n.jsx)("button",{className:"join_emai",children:"Join"})]})}):(0,n.jsx)("button",{onClick:c,className:"box",children:"Join the beta"}),i&&(0,n.jsxs)("div",{className:" w-full fixed top-0 left-0 bg-mainBg h-screen flex justify-center align-middle greetings",children:[(0,n.jsx)("p",{className:"flex align-middle justify-center md:text-100 text-68 text-white mb-3",children:"Thank you"}),(0,n.jsx)("span",{className:"child_2 text-white text-24",children:"You won't regret it. Trust us"})]})]}),(0,n.jsx)("div",{className:"cursor-box",id:"spotlight",children:(0,n.jsx)("div",{className:"cursor-box-child ",id:"spotlight-child"})}),(0,n.jsx)("div",{className:"highlighted_spotlight fixed top-0 left-0 w-screen h-screen ",children:(0,n.jsxs)("div",{className:"highlighted_spotlight_child w-full h-full ",children:[(0,n.jsx)("video",{loop:!0,muted:!0,autoPlay:!0,controls:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg",src:"/gradient.mp4"}),(0,n.jsx)("h2",{className:" text-600 text-white bg-mainBg font-bold leading-450",children:"LIVEOPS"})]})})]})})}},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);