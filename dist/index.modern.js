import e,{useContext as t,createContext as r,useReducer as n,useState as o,useEffect as u}from"react";import a from"auth0-js";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){switch(t.type){case"login":var r=t.authResult,n=t.user,o=1e3*r.expiresIn+(new Date).getTime();return"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",JSON.stringify(o)),localStorage.setItem("useAuth:user",JSON.stringify(n))),i({},e,{user:n,expiresAt:o,authResult:r});case"logout":return"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user")),i({},e,{user:{},expiresAt:null,authResult:null});case"stopAuthenticating":return i({},e,{isAuthenticating:!1});case"startAuthenticating":return i({},e,{isAuthenticating:!0});case"error":return i({},e,{user:{},expiresAt:null,authResult:null,errorType:t.errorType,error:t.error});default:return e}},c=function(e){var t=e.err,r=e.dispatch,n=e.auth0,o=e.authResult;try{return r({type:"stopAuthenticating"}),o&&o.accessToken&&o.idToken?Promise.resolve(function(e){var t=e.dispatch,r=e.auth0,n=e.authResult;try{return Promise.resolve(new Promise((function(e,o){r.client.userInfo(n.accessToken||"",(function(r,u){r?(t({type:"error",errorType:"userInfo",error:r}),o(r)):(t({type:"login",authResult:n,user:u}),e(u))}))})))}catch(e){return Promise.reject(e)}}({dispatch:r,auth0:n,authResult:o})).then((function(){return!0})):t?(console.error(t),r({type:"error",error:t,errorType:"authResult"}),Promise.resolve(!1)):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},l=function(){var e=t(p),r=e.state,n=e.dispatch,o=e.auth0,u=e.callback_domain,a=e.navigate;return{isAuthenticating:r.isAuthenticating,isAuthenticated:function(){return!!(r.expiresAt&&(new Date).getTime()<r.expiresAt)},user:r.user,userId:r.user?r.user.sub:null,authResult:r.authResult,login:function(){o&&o.authorize()},logout:function(){o&&o.logout({returnTo:u}),n({type:"logout"}),a("/")},handleAuthentication:function(e){var t=(void 0===e?{}:e).postLoginRoute,r=void 0===t?"/":t;"undefined"!=typeof window&&(n({type:"startAuthenticating"}),o&&o.parseHash((function(e,t){try{return Promise.resolve(c({err:e,authResult:t,dispatch:n,auth0:o})).then((function(){a(r)}))}catch(e){return Promise.reject(e)}})))}}};function h(){var e={};if("undefined"!=typeof localStorage){var t=new Date(JSON.parse(localStorage.getItem("useAuth:expires_at")||"0"));console.log(localStorage.getItem("useAuth:expires_at"),t),t>new Date&&(console.log("doing things"),e={user:JSON.parse(localStorage.getItem("useAuth:user")||"{}"),expiresAt:t})}return console.log(e),i({},{user:{},expiresAt:null,isAuthenticating:!1},{},e)}var p=r({state:h(),dispatch:function(){},auth0:null,callback_domain:"http://localhost:8000",navigate:function(e){}}),g=function(t){var r=t.children,l=t.navigate,g=t.auth0_domain,f="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000",d=new a.WebAuth(i({},{domain:g,clientID:t.auth0_client_id,redirectUri:f+"/auth0_callback",audience:"https://"+g+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},{},t.auth0_params)),m=n(s,h()),v=m[0],y=m[1],A=o({state:v,dispatch:y,auth0:d,callback_domain:f,navigate:l}),w=A[0],S=A[1];return u((function(){S((function(e){return i({},e,{state:v})}))}),[v]),u((function(){y({type:"startAuthenticating"}),d.checkSession({},(function(e,t){y({type:"stopAuthenticating"}),console.log(e),e?y({type:"error",errorType:"checkSession",error:e}):c({dispatch:y,auth0:d,authResult:t})}))}),[]),e.createElement(p.Provider,{value:w},r)};export{g as AuthProvider,l as useAuth};
//# sourceMappingURL=index.modern.js.map