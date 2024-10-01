"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[49408],{84899:(t,r,o)=>{o.r(r),o.d(r,{default:()=>S});o(71372),o(36728),o(4173),o(73439),o(77950),o(88233),o(31235),o(94908),o(6886),o(14121),o(60523);var e=o(22799),n=o(28248),i=o(53249),a=o(16216),s=o(87342),l=o(2784),g=o(74495),c=o(4517),u=o(61030),d=o(98900);const h=t=>{let{error:r,fallbackReturnUrl:o}=t;const[e,n,a]=(0,u.QF)("authPageErrorTitle","authPageErrorSubtitle","authPageErrorGoBack");return l.createElement(i.WA,{title:e,subtitle:n,error:r},l.createElement("div",{className:"MsaAuthError-module__buttonContainer___oWAbn"},l.createElement(d.k,{as:"button",onClick:()=>{var t;null===(t=globalThis.window)||void 0===t||t.location.assign(o)}},a)))},w="fallback-return-url";function f(t){var r,o;try{null===(o=null===(r=globalThis.window)||void 0===r?void 0:r.sessionStorage)||void 0===o||o.removeItem(w)}catch(e){t.error(`[MsaAuthPage] Error deleting returnUrl from sessionStorage: ${e}`)}}const v=(t,r)=>{const o=new URL(window.location.origin);if(r.info(`[MsaAuthPage] validating return url: ${t}`),null===t)return o;try{const r=(t=>{try{return new URL(t)}catch(r){return new URL(t,window.location.origin)}})(t);if(window.location.host!==r.host)throw new Error(`Invalid returnUrl specified; host ${r.host} did not match expected ${window.location.host}.`);const o="https:";if(r.protocol!==o)throw new Error(`[MsaAuthPage] Invalid returnUrl specified; protocol ${r.protocol} did not match expected ${o}.`);if(!t||t.toLowerCase().includes("javascript:")||t.toLowerCase().includes("vbscript:"))throw new Error("[MsaAuthPage] Invalid returnUrl specified; disallowed keyword detected.");return r}catch(e){return r.warn(`[MsaAuthPage] Invalid returnUrl specified ${t} - Using default value: ${o} (${e}).`),o}},S=()=>{const t=(0,n.Tv)(),r=(0,s.Qc)(),o=(0,c.k6)(),u=(0,g.useSelector)(a.Yzi),d=(0,g.useSelector)(a.TrC),[S,A]=(0,l.useState)();return(0,l.useEffect)((()=>{const i=r.logger();(async()=>{var r,s,l,g,c,h;const S=new URLSearchParams(window.location.search),p=S.get("returnUrl"),P=v(p,i);i.info(`[MsaAuthPage]: ${P}`);switch(S.get("action")){case"blank":return void i.info("[MsaAuthPage] blank auth page.");case"loggedIn":{i.info("[MsaAuthPage] Checking for signin complete.");const n=function(t){var r,o;try{return null===(o=null===(r=globalThis.window)||void 0===r?void 0:r.sessionStorage)||void 0===o?void 0:o.getItem(w)}catch(e){return t.error(`[MsaAuthPage] Error retrieving returnUrl from sessionStorage: ${e}`),null}}(i);f(i);const l=null!==n&&void 0!==n?n:P.toString();try{const e=await t.completeSignInAfterRedirectIfNeeded();if(e){const t=v(e,i),n=(0,a.Sl8)(t.pathname,u),s=n+t.search;if(i.verbose(`[MsaAuthPage] - Going to do the redirect [returnUrlPathName:${n} spaReturnUrl:${s}]`),o.location.pathname!==n){const e=(0,a.o$o)(n,d,void 0,u);e&&!e.isServerOnly?(i.info(`[MsaAuthPage] sign-in complete; performing SPA nav to ${s}`),o.push(s)):(i.info(`[MsaAuthPage] sign-in complete; redirecting to: ${t}`),null===(r=globalThis.window)||void 0===r||r.location.assign(t.toString()))}return}i.info(`[MsaAuthPage] sign-in was not pending completion, redirecting to: ${P}`),null===(s=globalThis.window)||void 0===s||s.location.assign(l)}catch(m){const r=(0,e.toError)(m);i.error(`[MsaAuthPage] Error completing sign-in after redirect: ${String(r)}, initiating sign out`,r);try{await t.startSignOutWithRedirect(l)}catch(E){const t=(0,e.toError)(E);return i.error(`[MsaAuthPage] Error initiating sign-out after failed sign-in: ${String(t)}, going to show auth error`,t),void A({error:t,fallbackReturnUrl:l})}}return}case"loggedOut":return i.info(`[MsaAuthPage] completed sign-out, redirecting to ${P}`),void(null===(l=globalThis.window)||void 0===l||l.location.assign(P.toString()));case"logIn":{i.info(`[MsaAuthPage] starting redirect sign-in for ${P}`);const r=null!==(g=S.get("prompt"))&&void 0!==g?g:void 0;try{return function(t,r){var o,e;try{null===(e=null===(o=globalThis.window)||void 0===o?void 0:o.sessionStorage)||void 0===e||e.setItem(w,t)}catch(n){r.error(`[MsaAuthPage] Error saving returnUrl to sessionStorage: ${n}`)}}(P.toString(),i),void await t.startSignInWithRedirect(P.toString(),{prompt:r})}catch(m){f(i);const t=(0,e.toError)(m);return t instanceof n.K_?(i.warn(`[MsaAuthPage] Redirect loop detected, redirecting to ${P.toString()}`),void(null===(c=globalThis.window)||void 0===c||c.location.assign(P.toString()))):(i.error(`[MsaAuthPage] Error initiating sign-in: ${String(t)}, going to show auth error`,t),void A({error:t,fallbackReturnUrl:P.toString()}))}}case"logOut":i.info(`[MsaAuthPage] starting sign-out, will return to ${P}`);try{return void await t.startSignOutWithRedirect(P.toString())}catch(m){const t=(0,e.toError)(m);return i.error(`[MsaAuthPage] Error initiating sign-out: ${String(t)}, going to show auth error`,t),void A({error:t,fallbackReturnUrl:P.toString()})}default:{const r=S.get("sid");if(r&&window.parent!==window)try{return i.info(`[MsaAuthPage] MSA 'front-channel logout' for sid ${r}`),void await t.startSignOutWithRedirect(P.toString(),r)}catch($){i.error(`[MsaAuthPage] Error initiating front-channel logout: ${String($)}`)}i.warn(`[MsaAuthPage] Unexpected auth flow, redirecting to: ${P}`),null===(h=globalThis.window)||void 0===h||h.location.assign(P.toString())}}})()}),[t,o,u,r]),S?l.createElement(h,{error:S.error,fallbackReturnUrl:S.fallbackReturnUrl}):l.createElement(i.h2,null)}}}]);
//# sourceMappingURL=msa-login-page-component.88ba0c0e.chunk.js.map
