(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{60:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=a(94),l=a(54),s=Object(l.a)({palette:{primary:{main:"#fafafa"},secondary:{main:"#ffffff"},icon:{main:"#034f84"},background:{main:"#2a2f36"}}}),m=a(91),d=a(52),u=a(19),p=a(18),v=a(46),h=a.n(v),f=a(47),g=a(48),b=a(56),E=a(49),x=a(57),w=a(15),y=a(38),j=y.a.easeOut,k=["./images/bg1.jpg","./images/bg2.jpg","./images/bg3.jpg","./images/bg4.jpg","./images/bg5.jpg","./images/bg6.jpg"],I=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).start=function(){a.frameId||(a.frameId=requestAnimationFrame(a.animate))},a.stop=function(){cancelAnimationFrame(a.frameId)},a.animate=function(){a.renderScene(),a.frameId=window.requestAnimationFrame(a.animate)},a.renderScene=function(){a.renderer.render(a.scene,a.camera)},a.next=function(){var e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.currentProcess){t.next=2;break}return t.abrupt("return",a.currentProcess);case 2:return e=a.props.sectionIndex,a.mat.uniforms.nextImage.value=a.sliderImages[e],a.mat.uniforms.nextImage.needsUpdate=!0,t.abrupt("return",a.currentProcess=new Promise((function(t,n){y.b.to(a.mat.uniforms.dispFactor,"1.2",{value:1,ease:j,onComplete:function(){a.mat.uniforms.currentImage.value=a.sliderImages[e],a.mat.uniforms.currentImage.needsUpdate=!0,a.mat.uniforms.dispFactor.value=0,a.currentProcess=null,t()}})})));case 6:case"end":return t.stop()}}))},a}return Object(x.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.scene=new w.f,this.camera=new w.c(this.mount.offsetWidth/-2,this.mount.offsetWidth/2,this.mount.offsetHeight/2,this.mount.offsetHeight/-2,1,1e3),this.camera.position.z=1,this.renderer=new w.i({antialias:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(16777215,0),this.renderer.setSize(this.mount.clientWidth,this.mount.clientHeight),this.mount.appendChild(this.renderer.domElement);var t=new w.h;t.crossOrigin="anonymous",this.sliderImages=k.map((function(a){var n=t.load(a);return n.magFilter=n.minFilter=w.a,n.anisotropy=e.renderer.capabilities.getMaxAnisotropy(),n}));var a=t.load("./images/displacement/6.jpg");a.wrapS=a.wrapT=w.e,this.mat=new w.g({uniforms:{effectFactor:{type:"f",value:"0.6"},dispFactor:{type:"f",value:0},currentImage:{type:"t",value:this.sliderImages[0]},nextImage:{type:"t",value:this.sliderImages[1]},disp:{type:"t",value:a}},vertexShader:"\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  varying vec2 vUv;\n  uniform sampler2D currentImage;\n  uniform sampler2D nextImage;\n  uniform sampler2D disp;\n  uniform float dispFactor;\n  uniform float effectFactor;\n\n  void main() {\n    vec2 uv = vUv;\n    vec4 disp = texture2D(disp, uv);\n\n    vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);\n    vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);\n    vec4 _currentImage = texture2D(currentImage, distortedPosition);\n    vec4 _nextImage = texture2D(nextImage, distortedPosition2);\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n\n    gl_FragColor = finalTexture;\n\n  }\n",transparent:!0,opacity:1});var n=new w.d(this.mount.offsetWidth,this.mount.offsetHeight,1);this.object=new w.b(n,this.mat),this.object.position.set(0,0,0),this.scene.add(this.object),window.addEventListener("resize",(function(t){e.mount&&e.renderer.setSize(e.mount.offsetWidth,e.mount.offsetHeight)})),this.start()}},{key:"componentDidUpdate",value:function(e){var t=this,a=e.sectionIndex;this.props.sectionIndex&&a!==this.props.sectionIndex&&(this.currentProcess?this.next().then((function(){return t.next()})):this.next())}},{key:"componentWillUnmount",value:function(){this.stop(),window.removeEventListener("resize",(function(){})),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.className,ref:function(t){e.mount=t}})}}]),t}(n.Component),O=Object(m.a)((function(e){return{scrollDiv:{position:"fixed",bottom:0,width:"100vw",left:"50%",transform:"translateX(-50%)",background:"transparent",display:"block"},scrollBar:{backgroundColor:"#dc4133",position:"relative",display:"block",top:-1,height:4}}})),N=function(e){var t=O(),a=e.style;return r.a.createElement("div",{className:t.scrollDiv},r.a.createElement("div",{className:t.scrollBar,style:a}))},C=a(16),S=a(92),D=a(96),z=a(3),W=Object(m.a)((function(e){return{project:Object(C.a)({display:"inline-block",position:"relative",height:"100%",width:"40%",minWidth:"40rem",transition:"opacity .2s ease-in-out, background .2s ease-in-out",whiteSpace:"normal",overflow:"hidden",boxSizing:"border-box",verticalAlign:"top",cursor:"none",paddingBottom:48,padding:"0 4.5rem 8rem",borderRight:"1px #9da7b3 solid","&:first-child":Object(C.a)({minWidth:"66vw",width:"66%"},e.breakpoints.down("xs"),{minWidth:"100vw",width:"100%"})},e.breakpoints.down("xs"),{minWidth:"100vw",width:"100%"}),projectIsHover:{transition:"opacity .2s ease-in-out,background .2s ease-in-out"},projectLink:{display:"flex",position:"relative",width:"100%",height:"100%",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",textDecoration:"none",userSelect:"none"},projectLinkIsHover:{}}})),B=function(e){var t=W(),a=e.mouseOver,i=e.mouseOut,o=Object(n.useState)(!1),c=Object(p.a)(o,2),l=c[0],s=c[1],m=Object(n.useCallback)((function(){a(),s(!0)}),[a]),d=Object(n.useCallback)((function(){i(),s(!1)}),[i]),u=e.description,v=e.title,h=e.subtitle,f=l?"primary":"secondary";return r.a.createElement("div",{className:Object(z.a)(t.project,Object(C.a)({},t.projectIsHover,l)),onMouseEnter:m,onMouseLeave:d},r.a.createElement("a",{className:Object(z.a)(t.projectLink,Object(C.a)({},t.projectLinkIsHover,l)),href:e.url},r.a.createElement(S.a,{variant:"h5",color:f,gutterBottom:!0},h),r.a.createElement(S.a,{variant:"h1",component:"h2",color:f,gutterBottom:!0},"\b",v),r.a.createElement(D.a,{direction:"up",in:l,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",null,r.a.createElement(S.a,{variant:"subtitle1",color:f,gutterBottom:!0},u),r.a.createElement(S.a,{variant:"h6",color:f,gutterBottom:!0},"View Case Study ->")))))},L=[{title:"About",subtitle:"Explore More",description:"We run a product that serves distributed teams",pageUrl:"/about/"},{title:"Skill",subtitle:"Product",description:"We run a product that serves distributed teams",pageUrl:"/skill/"},{title:"Project",subtitle:"Platform Design",description:"We redesigned and rebuilt the Blue Diamond website from the ground-up.",pageUrl:"/project/"},{title:"Open Source Module",subtitle:"Product",description:"We run a product that serves distributed teams",pageUrl:"/opensource/"}],M=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(0),i=Object(p.a)(a,2),o=i[0],c=i[1],l=Object(n.useCallback)((function(e){var a=e.deltaY,n=e.deltaX,r=0!==a?a:n;t.current.scrollBy(r,0);var i=r*(t.current.clientWidth-374)/t.current.clientHeight;c((function(e){var a=e+i;return a<0?0:a>t.current.clientWidth-374?t.current.clientWidth-374:a}))}),[t]),s=e.setSectionIndex,m=Object(n.useCallback)((function(e){return function(){s(e.toString())}}),[s]),d=Object(n.useCallback)((function(){s(void 0)}),[s]);return r.a.createElement("div",{ref:t,className:e.className,onWheel:l},L.map((function(e,t){return r.a.createElement(B,{key:"pro".concat(t),url:e.pageUrl,mouseOut:d,mouseOver:m(t),title:e.title,subtitle:e.subtitle,description:e.description})})),r.a.createElement(N,{style:{transform:"translateX(".concat(o,"px)"),width:374}}))},F=a(32),T=a(55),P=a(20),H=a(35),R=a.n(H),A=a(50),U=a(93),V=Object(m.a)((function(e){return{"@keyframes moveInLeft":{"0%":{opacity:0,transform:"translateX(100px)"},"80%":{opacity:.6,transform:"translateX(-10px)"},"100%":{opacity:1,transform:"translate(0)"}},"@keyframes fadeIn":{"0%":{opacity:0},"100%":{opacity:1}},"@keyframes fadeOut":{"0%":{opacity:1},"100%":{opacity:0}},navRoot:{minHeight:"6.5rem",display:"flex",flexDirection:"row"},navWrapper:{paddingLeft:48,zIndex:100,display:"flex",alignItems:"flex-end"},smNavWrapper:{paddingLeft:48,paddingTop:60,zIndex:100,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"5.5rem 1fr",width:"100vw"},isOpenWrapper:{height:"100vh",backgroundColor:e.palette.background.main,animationName:"$fadeIn",animationDuration:".6s"},menu:{display:"flex",color:"white",justifyContent:"flex-end",paddingRight:48,paddingTop:"0.5rem","&:hover":{cursor:"pointer"},"&:active":{color:Object(P.a)(e.palette.secondary.main,.3)}},logoHome:{display:"flex",width:"2.5rem",height:"2.5rem",alignItems:"center",justifyContent:"center",cursor:"pointer",border:"2px solid #ffffff",color:"#ffffff"},navItems:{display:"flex",paddingLeft:"5rem",flex:"auto",listStyleType:"none",justifyContent:"space-between",alignItems:"center",clear:"both"},smNavItems:{pointerEvents:"all",position:"fixed",top:"7.5rem",display:"block",left:0,paddingInlineStart:0,lineHeight:1.6},smNavItem:{animationName:"$moveInLeft",animationDuration:".6s",animationTimingFunction:"ease-in",fontSize:"2.5rem",listStyleType:"none",width:"100vw"},navItem:{position:"relative",padding:"0 2.25rem",cursor:"pointer",transition:"transform .2s cubic-bezier(.59,.11,.64,1.38)","&:hover":{transform:"translateY(-30%)"}},navLink:{display:"inline-block",position:"relative",height:"1.3rem",margin:"-.5rem",padding:0,zIndex:20,textAlign:"center",color:"#fff",textDecoration:"none",overflow:"hidden",cursor:"pointer"},smNavLink:{height:"100%"},navLinkBg:{},navEffect:{}}})),X=function(e){var t=V(),a=e.isSm,n=(e.href,Object(F.a)(e,["isSm","href"]));return r.a.createElement("li",Object.assign({className:Object(z.a)(t.navItem,Object(C.a)({},t.smNavItem,a))},n),r.a.createElement("a",{className:Object(z.a)(t.navLink,Object(C.a)({},t.smNavLink,a)),href:e.href},r.a.createElement("span",{className:t.navEffect},e.children)))},_=function(e){var t=V(),a=function(){var e=Object(A.a)();return Object(T.a)(e.breakpoints.keys).reverse().reduce((function(t,a){var n=Object(U.a)(e.breakpoints.up(a));return!t&&n?a:t}),null)||"xs"}(),i=Object(n.useState)(!1),o=Object(p.a)(i,2),c=o[0],l=o[1];return"xs"===a||"sm"===a?r.a.createElement("nav",Object.assign({className:Object(z.a)(t.navRoot,Object(C.a)({},t.isOpenWrapper,c))},e),r.a.createElement("div",{className:t.smNavWrapper},r.a.createElement("a",{className:t.logoHome,href:"/"},r.a.createElement(R.a,null)),r.a.createElement("div",{className:t.menu,onClick:function(){l(!c)}},c?"Close":"Menu"),c&&r.a.createElement("ul",{className:Object(z.a)(t.smNavItems)},r.a.createElement(X,{href:"/about/",isSm:!0},"About"),r.a.createElement(X,{href:"/skill/",isSm:!0},"Skill"),r.a.createElement(X,{href:"/project/",isSm:!0},"Project"),r.a.createElement(X,{href:"/opensource",isSm:!0},"Open Source")))):r.a.createElement("nav",Object.assign({className:t.navRoot},e),r.a.createElement("div",{className:t.navWrapper},r.a.createElement("a",{className:t.logoHome,href:"/"},r.a.createElement(R.a,null)),r.a.createElement("ul",{className:t.navItems},r.a.createElement(X,{href:"/about/"},"About"),r.a.createElement(X,{href:"/skill/"},"Skill"),r.a.createElement(X,{href:"/project/"},"Project"),r.a.createElement(X,{href:"/opensource"},"Open Source"))))},G=Object(m.a)((function(e){return{background:{width:"100%",display:"flex"},projects:{position:"absolute",top:0,right:0,left:0,bottom:0,overflow:"scroll",display:"flex",flexDirection:"row",marginBottom:-15,cursor:"none"},navContainer:{position:"fixed",top:0,left:0,width:"100vw"}}})),J=function(e){var t=G(),a=Object(n.useState)(void 0),i=Object(p.a)(a,2),o=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{className:t.background,sectionIndex:o}),r.a.createElement(M,{className:t.projects,setSectionIndex:c}),r.a.createElement("div",{className:t.navContainer},r.a.createElement(_,null)))},$=a(45),q=function(e){return r.a.createElement($.a,e,r.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 372 427"},r.a.createElement("title",null,"lulu"),r.a.createElement("path",{d:"M41.56,157.83c1-1,1.79-1.74,2.53-2.53.35-.38,1-.64,1.18-.4,2,2.33,1.25-.91,2.14-1a6.19,6.19,0,0,1,1.25,1.75c.47,1.68,1.19,1.85,2.72,1.08A2,2,0,0,1,54,158a5.8,5.8,0,0,0,1.67,2.46c.78-1.13.94-2.9,3-2.85,1.85,0,3.24.41,4.36,1.88.69.9,1.48,1.6,2.58.33.55-.65,1.45-.23,2.19-.26a19.05,19.05,0,0,1,3.7,0c2.18.33,2.52-1.34,3.58-2.56s2.48,1.79,4,.43,2.13-3.08,3.06-4.72c2.47-4.37,5.67-8.33,7.45-13.09l6-4.1L97.83,139c1.9-2.8,4.24-2.88,6.3-3.51.6-.18,1.27.06,1.16.93-.18,1.31.19,2.06,1.7,1.82.45-.06.93,0,1.39,0,1.4-.1,2.66-.1,3,1.78,0,.35.68,1.56,1.59.35,1.61-2.14,3.9-1,5.93-1.1.57,2.69,2.73,1.58,4.3,1.71s3.4,0,5.1,0c.73,0,1.06-.44,1.52-.82.8-.67,1.27-1.74,2.83-2.07,1.23,1.71,3.87,2.57,3.31,6.53A45.87,45.87,0,0,0,141.46,134c.73-2.11,1.49-4.13,3.82-5a3.14,3.14,0,0,0,1.4-1c1.44-2.13,3.14-1.85,4.8-.45.92.77,1.6.87,2.25-.09,1.22-1.8,3.08-1.27,4.62-1.06,1.2.16.76,2.52,2.49,2.68,1.2.12,2.49-.41,3.58.28.39.25.36,1.09.71,1.51s.62,1.24,1.66.34a5.17,5.17,0,0,1,6.51-.37,6,6,0,0,0,2.84,1.07c1.81.41,3-1.54,4.74-1.05.32.09.33-.73.51-1.09,1.8-3.57,3.78-7.06,5.51-10.66s4.13-6.85,5.66-10.59c.95-2.33,5.39-4.66,7.28-4.38a13,13,0,0,0,7.74-.72c.79-.26,1.46-.47,1.61.69.13,1,1,1.93,1.7,1.8,2.61-.48,3.75,1.49,5.26,2.83,2.88-2.54,4.58-2.55,7.37,0,.84.77,1.5,1.58,2.6.3.55-.64,1.47-.32,2.19-.25,3,.31,5.78,0,7.28-2.8,1.48,0,1.79,1,2.51,1.55a4.27,4.27,0,0,1,1.76,3.92c0,2.49-.68,5.07.82,7.49.72,1.15-1.1,2-.89,3.28.64,3.94-1.12,7.67-1.06,11.62,0,2.25-1.22,4.53-.58,7.09,1.34,0,1.95-3.19,3.88-.95.81.94,3.26-1.09,3.39,1.61a4.89,4.89,0,0,0,4.33.08c.71-.34,1.55-.92,2-.54,2.37,1.83,3.39-.21,4.72-1.45.45-.42.87-.87,1.55-1.54.79.9,1.6,1.79,2.37,2.71a6.61,6.61,0,0,1,.7,1.1c.06.12,0,.31,0,.45.35,1.87-.9,4,.91,5.62-.22.21-.54.4-.64.66s-.33,1.08-.17,1.2c2.06,1.5-.65,4.79,2.3,5.86,1.49-3,3.1-6,4.53-9.13s2.93-6.5,4.12-9.84c.34-1,.84-1.89,1.51-2.05a4.35,4.35,0,0,0,1.88-1.09c2.39-2.08,2.41-2.09,5.12-.29.59.39,1.3.64,1.55,0,1-2.42,3.63-.91,5.21-2.15.56-.43,1.61.89,1.5,2.06-.1,1,.25,1.42,1.27,1.33a5.22,5.22,0,0,1,1.85,0c2,.56,2.76-1.06,3.12-2.2.81-2.6,2-5.06,2.86-7.58s2.38-4.86,3.23-7.46,1.83-5.1,2.48-7.73c.21-.88.9-1.62,1.36-1.67,1.45-.15,2.11-1.21,2.85-2.08s1.91-.65,2.9-.9c1.52-.38,1.73,2.41,3.15,1.3,1-.79,2.41-.84,3.1-1.39,2-1.59,2.76-.52,3.33,1s1.26,1.6,2.77,1,1.63-.24,3.09,2.53c1.82-.6,3.37-2.21,5.55-1.72.57.13,1.13,0,1.67.48.91.78,4,1.44,5.6,1.4a31.83,31.83,0,0,1,3.24,0,2.92,2.92,0,0,0,3.22-1.8c.73-1.44,1.7-1.25,2.76,0,2.27,2.63,2.42,5.94,2.66,9,.37,4.74-.07,9.54.18,14.3.09,1.77-1.25,3-1.09,4.7.13,1.55.36,3.11-.68,4.79-.76,1.23-.25,3.29-.14,5,.07,1-2.22,1.71-.56,2.63,1.84,1,1.25-1.46,2.18-2s1.72-1.33,2,.15c.36,1.94,3,2.19,2.88,4.38-.11,1.68.22,3.43-.1,5.06-.28,1.41.91,2.47.35,4-.51,1.35-.24,3-.27,4.51s0,3.08,0,4.62c.07,2.38-1.3,4.5-1,7,.24,2.15.7,4.51-.82,6.54-.15.2,0,.61,0,.91.51,7.29-1.64,14.48-.9,21.77.25,2.45-1.28,4.54-1,7a69.84,69.84,0,0,1,.05,7.38c0,.62,0,1.23,0,1.85s.28.8.79.87.78-.2,1.08-.58c1.37-1.69,1.48-1.68,2.77-.13,1.85,2.2,1.85,2.2,1.86,3.77a55.46,55.46,0,0,0,.06,6.45,5,5,0,0,1-1.34,4c-2.88,2.74-4.08,6.37-5.73,9.7a36.58,36.58,0,0,1-8.28,10.89c-1.54,1.42-3,1.27-4.15-.39-2-2.75-2.56-3-5-1.39-1.23.8-2.17,1.75-3.85,2-1.32.19-2,2.19-2.2,3.54-.18,1.19-.55,2.42-1.45,2.57-1.88.32-2.27,1.71-2.86,3a52.13,52.13,0,0,0-3.11,7.47,5.38,5.38,0,0,1-1.5,2.62c-1.54,1.46-2.24,1.16-3.57-.64-.51-.69-.13-2-1.3-2.1a19.47,19.47,0,0,0-3.24,0c-.48,0-.6.44-.74.93-.44,1.53-1.25,2-2.79,1-.75-.49-1.57,2-2.59.44-.43-.66-.11-1.78-.16-2.7,0-.12-.15-.24-.25-.37-2.43-.89-4.5,1-6.86,1-.6,0-1.1,1.11-1.3,2.15-.74,3.81-1.8,7.55-2.68,11.34-.11.48-.21,1-.66,1-4,0-4.23,3.61-4.7,5.83s-2,4.12-2.23,6.55c-.17,1.93-3.17,2.15-4.21.29-.76-1.36-1.29-2.23-3.07-2.64-1.56-.36-2.09-.4-2.84,1s-2.62,1.51-4,1.74c-.68.12-1.73-1.08-1.5-2.41.18-1.09-.57-1.26-1.42-1.14s-1.45-.22-2.19.33a3.15,3.15,0,0,1-4.12-.09c-.86-.61-2.06-1.45-3.32-.28a1.35,1.35,0,0,1-1.31,0c-1.72-2.37-3.33-1.12-5,0-.32.21-.91,0-1.37,0-1.11,0-1.28-2.4-2.66-1.22-1.56,1.32-2-1.43-3.2-.68-4.18-2.1-5-4.45-3.76-9.13,1.22-4.47,2.65-8.94,2.35-14.17-3,1.49-5.72,1.66-8.43-.2-.82-.57-2.26,1.38-3.41.12-.79-.87-1.72-.65-2.56-.55-5.08.62-5.38.15-8.82-1.5a12.93,12.93,0,0,0-1.59-.65c-2.36-.71-3-2.26-3-4.7,0-4.23,1.6-8.28,1.05-12.55-.15-1.19-.09-2-1.68-1.94a4.73,4.73,0,0,1-2.73-1.12c-.87-.69-1.46-1-2.28,0-.49.54-1.23.59-1.55,0-1-2-2.57-.8-3.62-.48-1.63.49-3,1.22-4.13-.69-.45-.74-.7.44-1,.32-1.49-.72-3.22-.62-4.57-2-1.06-1.09-3-1.24-2.73-3.5.06-.47-1.08-1.62-1.41-1.53-2.87.81-5.67-2.61-8.55-.11-.27.23-.91.09-1.37,0-2.56-.39-2.59-.42-3.6,1.57-5.52,10.95-11,21.93-16.58,32.85a16.91,16.91,0,0,1-2.38,3.67c-2.33,2.57-3.36,6-5,9-.83,1.55-1.46,3.22-3,4.31-.93.69-1.94.31-2.64-.89-.48-.85-.87-2.12-1.6-2.38-1.06-.38-2.4,0-3.62,0-.13,3-2.91,1.05-4.13,2.19s-1.78.36-1.79-1.07c0-.72.4-1.71-.43-2.08a2.84,2.84,0,0,0-2.25,0c-2.55,1.6-4.77.87-6.82-.8-1.34-1.08-2.39,1.2-3.93,0-.89-.67-2.68-.28-4-.18-3,.21-5.27.08-7.13-1.08-.95-.59-2.2-1.67-2.87-1.38a4.61,4.61,0,0,0-2.43,3,7.57,7.57,0,0,1-1.91,2.88c-1.67,1.83-3.22,1.8-4.24-.47-.78-1.75-1.73-2.26-3.4-2.1a4.41,4.41,0,0,0-1.26.32c-1.22.45-.29,2.61-2.15,2.47a3.4,3.4,0,0,0-3.49,1.23,23.4,23.4,0,0,0,0-2.73c-.2-1.55-2.77-2.66-3.83-1.53-1.47,1.58-2.76,1.45-4.26.24-2.09-1.67-5-.21-7.13-1.83a1,1,0,0,0-.89,0,3.16,3.16,0,0,1-3.78.82c-2.67-1-5.54-1.47-8-3.15-2-1.37-2-3.29-1.76-5.26.09-.81,1-1.35.92-2.4-.14-2.12,0-4.25,0-7-1.94,1.71-2.44,3.86-4.11,5-.63.43-1.06,1.13-1.67,1.6-.87.68-1.87.26-2.57-1-1.6-2.92-2.61-3.31-5.26-1.16-1.08.88-2.24.33-3.31,1.11-1.43,1-1.87.6-2.56-1.26s-2-2.83-3.3-1.79c-2.31,1.8-4,.21-5.71-.55-.94-.42-1.48-.91-2.29,0a1,1,0,0,1-1.57,0c-1-1.11-2.35-.61-3.47-.52-4.14.31-6.17,0-9.6-1.9-3.74-2.06-3.74-2.06-3.74-5.93,0-6,.27-12-.08-18a82.75,82.75,0,0,1,1.22-17.13,171.54,171.54,0,0,1,4.27-21.7c2-7.16,4.19-14.28,6.18-21.45.88-3.16,2.67-6.2,2.32-9.68a1.5,1.5,0,0,1,.43-1.21c3.33-3.73,3.92-8.55,5.12-13.11.15-.56-.06-1.15.44-1.69a5.72,5.72,0,0,0,.69-1.54c.05-.11.28-.26.31-.23,2.48,1.73,2.34-1.91,4.06-1.95C40.3,154.8,41.16,155.68,41.56,157.83Z"})))},K=Object(m.a)((function(e){var t=e.palette;return{root:{display:"block",width:"100%",position:"relative",overflow:"auto"},tlWrapper:{width:"100%",float:"left",position:"relative",background:t.background.main},heroFixed:{opacity:1,position:"fixed",top:0,bottom:0,height:"100vh",zIndex:1,width:"calc(100vw - 12px)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},heroWrap:{display:"flex",position:"relative",width:"100%",height:"100%",margin:"0 auto",zIndex:1,maxWidth:1440,alignItems:"center",justifyContent:"center"},outer:{position:"relative",zIndex:1,overflowX:"hidden",background:"linear-gradient(transparent,transparent 100vh, ".concat(t.background.main," 100.001vh, ").concat(t.background.main,")")},outerContainer:{width:"100%",margin:"0 auto",maxWidth:1440,verticalAlign:"baseline"},filledTop:{position:"relative",top:"-6.5rem",left:"50%",width:"100vw",height:"100vh",transform:"translateX(-50%)"},pageContent:{width:"100%",margin:"0 auto",maxWidth:1440,minHeight:800,paddingTop:24,color:t.secondary.main},workType:{position:"absolute",bottom:0,right:24,width:"100%",marginBottom:"5rem",paddingBottom:"4rem",textAlign:"right",listStyleType:"none",lineHeight:2,borderBottom:"1px solid ".concat(t.secondary.main),fontSize:".88rem",color:t.secondary.main},titleContainer:{position:"relative"},title:{position:"absolute",top:"6.5rem",left:"50%",transform:"translateX(-50%)",color:"#000",width:"100%",textAlign:"center",fontStyle:"italic"},BGIcon:{color:t.secondary.main,width:320,height:320}}})),Y=function(e){var t=K(),a=e.parallaxClass,n=e.outerClass,i=e.titleClass;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.tlWrapper,style:{zIndex:1,opacity:1}},r.a.createElement("div",{className:Object(z.a)(t.heroFixed,a),style:{display:"block"}},r.a.createElement("div",{className:Object(z.a)(t.heroWrap,i)},r.a.createElement("div",{className:t.titleContainer},r.a.createElement(q,{className:t.BGIcon}),r.a.createElement("h1",{className:Object(z.a)(t.title,i)},e.title)),r.a.createElement("ul",{className:t.workType},r.a.createElement("li",null,r.a.createElement("span",null,e.spanTitle||"Product")),r.a.createElement("li",null,r.a.createElement("span",null,e.spanDetail||"Internal Venture"))))),r.a.createElement("div",{className:Object(z.a)(t.outer,n)},r.a.createElement("div",{className:t.outerContainer},r.a.createElement(_,null),r.a.createElement("div",{style:{opacity:1}},r.a.createElement("div",{className:t.filledTop}),r.a.createElement("div",{className:t.pageContent},e.children))))))},Q=a(51),Z=a.n(Q),ee=a(34),te=a.n(ee),ae=Z.a.resolve("./"),ne=function(e){return te.a.join(ae,"../",e)},re=a(95),ie=function(e){return r.a.createElement($.a,e,r.a.createElement("svg",{viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M414.007,148.75c5.522,0,10-4.477,10-10V30c0-16.542-13.458-30-30-30h-364c-16.542,0-30,13.458-30,30v452 c0,16.542,13.458,30,30,30h364c16.542,0,30-13.458,30-30v-73.672c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10V482 c0,5.514-4.486,10-10,10h-364c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h364c5.514,0,10,4.486,10,10v108.75 C404.007,144.273,408.485,148.75,414.007,148.75z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M212.007,54c-50.729,0-92,41.271-92,92c0,26.317,11.11,50.085,28.882,66.869c0.333,0.356,0.687,0.693,1.074,1 c16.371,14.979,38.158,24.13,62.043,24.13c23.885,0,45.672-9.152,62.043-24.13c0.387-0.307,0.741-0.645,1.074-1 c17.774-16.784,28.884-40.552,28.884-66.869C304.007,95.271,262.736,54,212.007,54z M212.007,218 c-16.329,0-31.399-5.472-43.491-14.668c8.789-15.585,25.19-25.332,43.491-25.332c18.301,0,34.702,9.747,43.491,25.332 C243.405,212.528,228.336,218,212.007,218z M196.007,142v-6.5c0-8.822,7.178-16,16-16s16,7.178,16,16v6.5c0,8.822-7.178,16-16,16 S196.007,150.822,196.007,142z M269.947,188.683c-7.375-10.938-17.596-19.445-29.463-24.697c4.71-6.087,7.523-13.712,7.523-21.986 v-6.5c0-19.851-16.149-36-36-36s-36,16.149-36,36v6.5c0,8.274,2.813,15.899,7.523,21.986 c-11.867,5.252-22.088,13.759-29.463,24.697c-8.829-11.953-14.06-26.716-14.06-42.683c0-39.701,32.299-72,72-72s72,32.299,72,72 C284.007,161.967,278.776,176.73,269.947,188.683z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M266.007,438h-54c-5.522,0-10,4.477-10,10s4.478,10,10,10h54c5.522,0,10-4.477,10-10S271.529,438,266.007,438z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M266.007,382h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,382,266.007,382z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M266.007,326h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,326,266.007,326z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M88.366,272.93c-1.859-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.211,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07 s1.069,5.21,2.93,7.07c1.87,1.86,4.439,2.93,7.07,2.93c2.64,0,5.21-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07 S90.227,274.79,88.366,272.93z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M88.366,328.93c-1.869-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.2,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07 s1.069,5.21,2.93,7.07c1.87,1.86,4.439,2.93,7.07,2.93c2.64,0,5.21-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07 S90.227,330.79,88.366,328.93z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M88.366,384.93c-1.869-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.2,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07 s1.069,5.21,2.93,7.07c1.859,1.86,4.439,2.93,7.07,2.93c2.64,0,5.22-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07 S90.227,386.79,88.366,384.93z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M266.007,270h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,270,266.007,270z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M491.002,130.32c-9.715-5.609-21.033-7.099-31.871-4.196c-10.836,2.904-19.894,9.854-25.502,19.569L307.787,363.656 c-0.689,1.195-1.125,2.52-1.278,3.891l-8.858,79.344c-0.44,3.948,1.498,7.783,4.938,9.77c1.553,0.896,3.278,1.34,4.999,1.34 c2.092,0,4.176-0.655,5.931-1.948l64.284-47.344c1.111-0.818,2.041-1.857,2.73-3.052l125.841-217.963 C517.954,167.638,511.058,141.9,491.002,130.32z M320.063,426.394l4.626-41.432l28.942,16.71L320.063,426.394z M368.213,386.996 l-38.105-22l100.985-174.91l38.105,22L368.213,386.996z M489.054,177.693l-9.857,17.073l-38.105-22l9.857-17.073 c2.938-5.089,7.682-8.729,13.358-10.25c5.678-1.522,11.606-0.74,16.694,2.198c5.089,2.938,8.729,7.682,10.25,13.358 C492.772,166.675,491.992,172.604,489.054,177.693z"})))))},oe=function(e){return r.a.createElement($.a,e,r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{d:"m7.996 21.324c0 .695-.521.982-1.098.695l-6.228-3.113c-.188-.089-.346-.238-.475-.447s-.195-.417-.195-.622v-15.227c0-.568.341-.825 1.112-.441l6.844 3.42c.099.099.026-.581.04 15.735zm.857-14.32 7.152 11.568-7.152-3.553zm15.147.241v14.079c0 .223-.062.403-.188.541-.125.138-.295.207-.509.207s-.424-.058-.629-.174l-5.906-2.939zm-.04-1.603c0 .027-1.145 1.895-3.435 5.603s-3.632 5.88-4.025 6.512l-5.223-8.469 4.339-7.039c.236-.388.72-.456 1.045-.294l7.246 3.607c.035.017.053.044.053.08z"})))},ce=function(e){return r.a.createElement($.a,e,r.a.createElement("svg",{viewBox:"0 0 512 512"},r.a.createElement("path",{d:"m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"})))},le=function(e){return r.a.createElement($.a,e,r.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z",fill:"#212121"})))},se=Object(m.a)((function(e){return{parallaxClass:{backgroundImage:"url(".concat(ne("images"),"/bg1.jpg)")},pageContent:{display:"flex",flexDirection:"column",marginTop:"-3rem",paddingLeft:48,paddingRight:48},sectionDiv:{display:"grid",gridTemplateColumns:"1fr 3fr",paddingRight:24},columnDiv:{display:"flex",flexDirection:"column",flex:1},rowsDiv:{borderBottom:"1px solid #3c434d",marginTop:48,minHeight:80,paddingBottom:32,marginBottom:56,display:"flex",flexDirection:"column"},rowDiv:{display:"flex",flexDirection:"row",minHeight:120,marginBottom:24,"&:last-child":{marginBottom:0}},detail:{boxSizing:"border-box",width:"50%",paddingRight:"10%",lineHeight:2,whiteSpace:"pre-line"},extraDetial:{display:"flex",flexDirection:"row",alignItems:"center"},position:{lineHeight:1.25},iconDiv:{backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:Object(P.d)(e.palette.icon.main,.7)}},icon:{width:48,height:48,color:e.palette.icon.main}}})),me=function(e){var t=se(),a=e.details,n=e.position,i=e.period,o=e.isFirst,c=Object(F.a)(e,["details","position","period","isFirst"]);return r.a.createElement("div",Object.assign({className:t.sectionDiv},c),r.a.createElement("div",null,o&&r.a.createElement(S.a,{variant:"body2",color:"secondary",gutterBottom:!0},"Experience"),r.a.createElement(S.a,{variant:"body2",color:"secondary",gutterBottom:!0},i)),r.a.createElement("div",null,r.a.createElement(S.a,{className:t.position,variant:"h3",color:"secondary"},n),r.a.createElement("div",{className:t.rowsDiv},a&&a.map((function(e,a){var n=e.text,i=e.withRight,o=e.title,c=e.description;return i?r.a.createElement("div",{className:t.rowDiv,key:a.toString()},r.a.createElement(S.a,{className:t.detail,variant:"body2",color:"secondary"},n),r.a.createElement("div",{className:t.detail},r.a.createElement(S.a,{variant:"h3",color:"secondary"},o),r.a.createElement(S.a,{variant:"body2",color:"secondary",style:{marginTop:12,color:"rgba(255, 255, 255, 0.6)"}},c))):r.a.createElement("div",{className:t.rowDiv,key:a.toString()},r.a.createElement(S.a,{className:t.detail,variant:"body2",color:"secondary"},n))})))))},de=function(e){var t=se(),a=Object(n.useCallback)((function(e){return function(){return window.open(e,"_blank")}}),[]);return r.a.createElement(Y,{title:"About Me",parallaxClass:t.parallaxClass,spanTitle:"Louis Hsiao, a person who loved doing somethings weird.",spanDetail:"Hobbies: Volleyball, Jogging, Hiking, Table games and America TV series."},r.a.createElement("div",{className:t.pageContent},r.a.createElement("div",{className:t.columnDiv},r.a.createElement(me,{isFirst:!0,period:"From 2017 to present",position:"Dimension Eight Artificial Intelligence, Software Engineer",details:[{text:"WebRTC framework library integration. Dedicated to modulizing reusable components and data visulization.\nHands on docker and nodejs to develop RESTful api.\nIn charge of mobile version POC products. Opensource projects contribution in npm. ",withRight:!0,title:"Tools",description:"react, material-ui, react-router, redux, redux-saga, nodejs, TypeScript, React-Native, docker, webrtc, "}]}),r.a.createElement(me,{period:"From 2016 to 2017",position:"Substitude Military Service",details:[{text:"Implement a website for meal ordering purpose aim to minize human cost of daily job. For improving user experience, the website was integrated the RWD by bootstrap and line-bot notification.",withRight:!0,title:"50+",description:"Users and using the website"}]}),r.a.createElement(me,{period:"From 2014 to 2016",position:"NCCU, Manament Information System, Master"}),r.a.createElement(me,{period:"From 2014/7 to 2014/12",position:"Institute For Information Industry, Digital Service Innovation Lab, Intern",details:[{text:"Implement a crawler to fetch amazon website product details, customer reviews and prices etc. with python. \n Automize weekly report with php, replacing the manual way of serveral steps.",withRight:!0,title:"Tools",description:"python, php, MySQL"}]}),r.a.createElement(me,{period:"From 2010 to 2014",position:"NUK, Information Management, Bachelor",details:[{text:"2013 ICT Innovative Services Contest\nLocation-based chatting and discussing application(Android).",withRight:!0,title:"Award",description:"Second Place Of Group NGIS"},{text:"2013 Graduate Project Competition of NUKIM\nLocation-based chatting and discussing application(Android).",withRight:!0,title:"Award",description:"First Place"}]}),r.a.createElement("div",{className:t.sectionDiv,style:{paddingBottom:64}},r.a.createElement("div",null),r.a.createElement("div",{className:t.columnDiv},r.a.createElement("div",{className:t.rowDiv},r.a.createElement("div",{className:Object(z.a)(t.detail,t.extraDetial)},r.a.createElement("div",null,r.a.createElement(re.a,{className:t.iconDiv,onClick:a("".concat(ne("resume"),"/Resume.pdf"))},r.a.createElement(ie,{className:t.icon}))),r.a.createElement(S.a,{variant:"h5",style:{paddingLeft:48}},"Resume")),r.a.createElement("div",{className:Object(z.a)(t.detail,t.extraDetial)},r.a.createElement("div",null,r.a.createElement(re.a,{className:t.iconDiv,onClick:a("https://github.com/pohsiu")},r.a.createElement(le,{className:t.icon}))),r.a.createElement(S.a,{variant:"h5",style:{paddingLeft:48}},"Github"))),r.a.createElement("div",{className:t.rowDiv},r.a.createElement("div",{className:Object(z.a)(t.detail,t.extraDetial)},r.a.createElement("div",null,r.a.createElement(re.a,{className:t.iconDiv,onClick:a("https://www.linkedin.com/in/hsiao-louis-7434377a/")},r.a.createElement(ce,{className:t.icon}))),r.a.createElement(S.a,{variant:"h5",style:{paddingLeft:48}},"LinkedIn")),r.a.createElement("div",{className:Object(z.a)(t.detail,t.extraDetial)},r.a.createElement("div",null,r.a.createElement(re.a,{className:t.iconDiv,onClick:a("https://medium.com/@pohsiu0709")},r.a.createElement(oe,{className:t.icon}))),r.a.createElement(S.a,{variant:"h5",style:{paddingLeft:48}},"Medium"))))))))},ue=Object(m.a)((function(e){return{parallaxClass:{backgroundImage:"url(".concat(ne("images"),"/bg3.jpg)")}}})),pe=function(e){var t=ue();return r.a.createElement(Y,{title:"Skill",parallaxClass:t.parallaxClass},r.a.createElement("div",null,"This is Skill content Below"))},ve=Object(m.a)((function(e){return{parallaxClass:{backgroundImage:"url(".concat(ne("images"),"/bg5.jpg)")}}})),he=function(e){var t=ve();return r.a.createElement(Y,{title:"Open Source",parallaxClass:t.parallaxClass},r.a.createElement("div",null,"OpenSource"))},fe=Object(m.a)((function(e){return{parallaxClass:{backgroundImage:"url(".concat(ne("images"),"/bg4.jpg)")}}})),ge=function(e){var t=fe();return r.a.createElement(Y,{title:"Project",parallaxClass:t.parallaxClass},r.a.createElement("div",null,"This is Project content Below"))},be=Object(m.a)((function(e){return{app:{display:"flex",flex:1,width:"100%",height:"100vh",position:"relative"}}}));function Ee(){return r.a.createElement(d.a,{basename:"/porfolio"},r.a.createElement(u.a,{path:"/",exact:!0,component:J}),r.a.createElement(u.a,{path:"/about/",component:de}),r.a.createElement(u.a,{path:"/skill/",component:pe}),r.a.createElement(u.a,{path:"/project/",component:ge}),r.a.createElement(u.a,{path:"/opensource/",component:he}))}var xe=function(){var e=be();return r.a.createElement("div",{className:e.app},r.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(c.a,{theme:s},r.a.createElement(xe,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.4375ea99.chunk.js.map