(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8p/1":function(e,n,t){"use strict";t("E5k/");var a=t("qWyU"),o=t("CjxU"),r=t("uDoD"),i=t("b9RQ"),l=t("mf32"),c=t("BMxC"),s=t("qKvR"),d=t("7ljp"),u=(t("lfCk"),t("Wbzz")),m=t("q1tI"),b=t.n(m),p=t("eJLp"),h=t("sK1y"),g=t("XZ7F"),f=t("Weur"),j=t("y7Su"),O=t("IDkF"),v=t("OQ2h"),x=t("+NMY");function w(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["cursor: pointer; padding-bottom: 2px"]);return w=function(){return e},e}var E=function(){var e=Object(x.b)(),n=e.isAuthenticated,t=e.login,a=e.logout;return n()?Object(s.d)(b.a.Fragment,null,Object(s.d)(p.a,{onClick:a},"Logout")):Object(s.d)(b.a.Fragment,null,Object(s.d)(p.a,{onClick:t},"Login"))},y=function(e){var n=e.children;return Object(s.d)(h.a,{mt:{base:4,md:0},mr:4,display:"block",color:"sec"},n)},k=function(e){var n=Object(l.b)(),t=n.colorMode,o=n.toggleColorMode,r=Object(g.a)(),i=r.isOpen,d=r.onOpen,m=r.onClose,p=b.a.useRef();return Object(s.d)(f.a,Object.assign({as:"nav",align:"center",justify:"space-between",wrap:"wrap",padding:".6rem",bg:"light"===t?"grey.600":"grey.800",color:"light"===t?"black":"#ccc"},e),Object(s.d)(f.a,{align:"center"},Object(s.d)(c.a,{mt:1,ml:1,mr:3,display:{sm:"block",md:"none"},ref:p,onClick:d,css:Object(s.c)(w())},Object(s.d)("svg",{fill:"light"===t?"black":"white",width:"17px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(s.d)("title",null,"Menu"),Object(s.d)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),Object(s.d)(f.a,{align:"center",ml:1},Object(s.d)(j.a,{isOpen:i,placement:"left",onClose:m,finalFocusRef:p},Object(s.d)(j.d,null),Object(s.d)(j.c,null,Object(s.d)(j.b,null),Object(s.d)(O.f,null,"Docs"),Object(s.d)(O.b,null,Object(s.d)(u.Link,{to:"/docs/test"},"Getting Started")),Object(s.d)(O.e,null,"Drawer Footer content"))),Object(s.d)(u.Link,{to:"/"},Object(s.d)(a.a,{as:"h1",size:"xl",color:"pri",style:{letterSpacing:"-3px"}},"useAuth")))),Object(s.d)(c.a,{display:{xs:"none",sm:"none",md:"flex"},width:{sm:"full",md:"auto"},alignItems:"center"},Object(s.d)(y,null,Object(s.d)("a",{href:"https://github.com/Swizec/useAuth"},"GitHub  ")),Object(s.d)(E,null),Object(s.d)(c.a,{display:{xs:"none",sm:"none",md:"flex"},mt:{base:4,md:0}},Object(s.d)(v.a,{"aria-label":"Switch to "+("light"===t?"dark":"light")+" mode",isRound:"true","border-top-color":"green !important",variant:"ghost",color:"current",ml:"1.735rem",fontSize:"20px",onClick:o,icon:"light"===t?"sun":"moon"}))))};function C(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  /*\n    This will hide the focus indicator if the element receives focus via the mouse,\n    but it will still show up on keyboard focus.\n  */\n  .js-focus-visible :focus:not([data-focus-visible-added]) {\n     outline: none;\n     box-shadow: none;\n   }\n\n   html {\n    scroll-behavior: smooth;\n  }\n\n  @media screen and (prefers-reduced-motion: reduce) {\n    html {\n      scroll-behavior: auto;\n    }\n  }\n\n    body {\n        overflow: hidden;\n        padding: 0;\n    }\n\n    .container {\n    height: 90vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr;\n\n    /*  to add a footer, use 1fr 30px(for the footer) etc in grid-template-rows  */\n    grid-template-rows: 1fr;\n    }\n\n    .body {\n        display: grid;\n        grid-template-columns: .75fr 3fr;\n        overflow: hidden;\n        margin-top: 1rem;\n    }\n\n    @media (max-width: 767px) {\n      .body {\n          grid-template-columns: 1fr;\n      }\n    }\n\n    .body p {\n        padding-bottom: 1.25rem;\n    }\n\n\n\n    .sidebar li {\n      margin-bottom: .5rem;\n      font-size: 1rem;\n      font-weight: bold;\n      cursor: pointer;\n    }\n\n\n    .sidenav {\n      list-style-type: none;\n    }\n\n    @media (min-width: 360px) {\n      .sidebar {\n        display: none;\n      }\n    }\n  \n\n    .footer {\n        border-top: 1px solid lightgrey;\n    }\n\n    .content {\n      margin-top: .4rem;\n      overflow-y: scroll;\n    }\n\n\n\n    pre {\n      padding-top: .5rem;\n      padding-left: .5rem;\n      margin-bottom: 1rem;\n      border-radius: 8px;\n      overflow: auto;\n    }\n\n    @media (min-width: 360px) {\n      pre {\n        font-size: .8rem;\n      }\n    }\n\n    @media (min-width: 500px) {\n      pre {\n        font-size: .9rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 768px) {\n      pre {\n        font-size: 1rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 360px) {\n      code {\n        font-size: .9rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 768px) {\n      code {\n        font-size: 1rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      code {\n        font-size: 1.1rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n\n\n\n\n\n    \n"]);return C=function(){return e},e}var z=Object(s.c)(C()),N={h1:function(e){return b.a.createElement(a.a,Object.assign({as:"h1",size:"lg",mb:"1.2rem",mt:"-3px"},e))},h2:function(e){return b.a.createElement(a.a,Object.assign({as:"h2",size:"md",mb:"1rem"},e))},h3:function(e){return b.a.createElement(a.a,Object.assign({as:"h3",size:"md",mb:"1rem"},e))}};n.a=function(e){var n=e.children;return b.a.createElement(b.a.Fragment,null,b.a.createElement(o.a,{theme:r.a},b.a.createElement(i.a,null),b.a.createElement(s.a,{styles:z}),b.a.createElement(l.a,null,b.a.createElement(k,null),b.a.createElement(c.a,{className:"container"},b.a.createElement(c.a,{className:"body"},b.a.createElement(c.a,{ml:4,display:{sm:"none",md:"block"},className:"sidebar"},b.a.createElement("ul",{className:"sidenav"},b.a.createElement("li",null),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/getting-started/"},"Getting Started")),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/auth/"},"Auth Provider")),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/callback"},"Callback page")),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/enjoy"},"Enjoy")))),b.a.createElement(d.a,{components:N},b.a.createElement(c.a,{fontSize:["sm","md","lg","xl"],maxW:"40rem",pl:"2rem",pr:"1rem",width:{sm:"full"},display:"block",className:"content"},n)))))))}},Vp8u:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var a=t("7ljp"),o=t("8p/1");var r={},i={_frontmatter:r},l=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(l,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"4-enjoy-useauth",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#4-enjoy-useauth","aria-label":"4 enjoy useauth permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"4. Enjoy useAuth"),Object(a.b)("p",null,"You're ready to use useAuth for authentication in your React app."),Object(a.b)("p",null,"Here's a login button for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const Login = () => {\n    const { isAuthenticated, login, logout } = useAuth()\n\n    if (isAuthenticated()) {\n        return <Button onClick={logout}>Logout</Button>\n    } else {\n        return <Button onClick={login}>Login</Button>\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isAuthenticated")," is a method that checks if the user's cookie is still valid."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"login")," and ",Object(a.b)("inlineCode",{parentName:"p"},"logout")," trigger their respective actions."),Object(a.b)("p",null,"You can even say hello to your users:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// src/pages/index.js\n\nconst IndexPage = () => {\n  const { isAuthenticated, user } = useAuth()\n\n  return (\n    <Layout>\n      <SEO title="Home" />\n      <h1>Hi {isAuthenticated() ? user.name : "people"}</h1>\n  )\n}\n')),Object(a.b)("p",null,"Check ",Object(a.b)("inlineCode",{parentName:"p"},"isAuthenticated")," then use the user object. Simple as that."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-enjoy-mdx-5d76df1dde88425fc86e.js.map