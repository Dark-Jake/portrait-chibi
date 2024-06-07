"use strict";(self.webpackChunkportrait_chibi=self.webpackChunkportrait_chibi||[]).push([[187],{9187:(e,t,n)=>{n.r(t),n.d(t,{default:()=>st});var s=n(6540),i=n(1003),a=n(9532),o=n(4848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(i.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(1312),x=n(8774);function p(e){const{permalink:t,title:n,subLabel:s,isNext:i}=e;return(0,o.jsxs)(x.A,{className:(0,u.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}function f(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(p,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(p,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,o.jsx)(f,{previous:e.previous,next:e.next})}var b=n(4586),g=n(4070),j=n(7559),N=n(5597),A=n(2252);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const t=C[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(x.A,{to:n,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,b.A)(),{pluginId:i}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,N.g1)(i),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,g.HW)(i),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(L,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>a(r.name)})})]})}function k(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,o.jsx)(T,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,o.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,o.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function w(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,o.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,o.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,o.jsx)(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,o.jsx)(w,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const M={iconEdit:"iconEdit_Z9Sw"};function B(e){let{className:t,...n}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(M.iconEdit,t),"aria-hidden":"true",...n,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,o.jsxs)(x.A,{to:t,className:j.G.common.editThisPage,children:[(0,o.jsx)(B,{}),(0,o.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const E={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function z(e){let{permalink:t,label:n,count:s}=e;return(0,o.jsxs)(x.A,{href:t,className:(0,u.A)(E.tag,s?E.tagWithCount:E.tagRegular),children:[n,s&&(0,o.jsx)("span",{children:s})]})}const V={tags:"tags_jXut",tag:"tag_QGVx"};function R(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.A)(V.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:V.tag,children:(0,o.jsx)(z,{label:t,permalink:n})},n)}))})]})}const G={lastUpdated:"lastUpdated_vwxv"};function O(e){return(0,o.jsx)("div",{className:(0,u.A)(j.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(R,{...e})})})}function S(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return(0,o.jsxs)("div",{className:(0,u.A)(j.G.docs.docFooterEditMetaRow,"row"),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsx)(I,{editUrl:t})}),(0,o.jsx)("div",{className:(0,u.A)("col",G.lastUpdated),children:(n||s)&&(0,o.jsx)(U,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:s})})]})}function P(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:i,tags:a}=e,l=a.length>0,r=!!(t||n||i);return l||r?(0,o.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,o.jsx)(O,{tags:a}),r&&(0,o.jsx)(S,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:s})]}):null}var D=n(1422),F=n(6342);function q(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function W(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=W({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function $(e){const t=e.getBoundingClientRect();return t.top===t.bottom?$(e.parentNode):t}function Z(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>$(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}($(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function J(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,F.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Q(e){const t=(0,s.useRef)(void 0),n=J();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),r=Z(l,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function X(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,o.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,o.jsxs)("li",{children:[(0,o.jsx)(x.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,o.jsx)(X,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const Y=s.memo(X);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:r,...c}=e;const d=(0,F.p)(),u=l??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>W({toc:q(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Q((0,s.useMemo)((()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}}),[i,a,u,m])),(0,o.jsx)(Y,{toc:h,className:n,linkClassName:i,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:l}=(0,D.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!a&&ne.tocCollapsibleExpanded,n),children:[(0,o.jsx)(te,{collapsed:a,onClick:l}),(0,o.jsx)(D.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(K,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const ie={tocMobile:"tocMobile_ITEo"};function ae(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,ie.tocMobile)})}const oe={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},le="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,u.A)(oe.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(K,{...n,linkClassName:le,linkActiveClassName:re})})}function de(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var ue=n(1107),me=n(8453),he=n(8020),xe=n.n(he);function pe(e){let{children:t}=e;return(0,o.jsx)(me.x,{components:xe(),children:t})}function fe(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(ue.A,{as:"h1",children:n})}),(0,o.jsx)(pe,{children:t})]})}var ve=n(4142),be=n(9169),ge=n(6025);function je(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Ne={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Ae(){const e=(0,ge.A)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(x.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(je,{className:Ne.breadcrumbHomeIcon})})})}const Ce={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Le(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,o.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,o.jsx)(x.A,{className:i,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:i,children:t})}function _e(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,o.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Te(){const e=(0,ve.OF)(),t=(0,be.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Ce.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(Ae,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(_e,{active:s,index:n,addMicrodata:!!i,children:(0,o.jsx)(Le,{href:i,isLast:s,children:t.label})},n)}))]})}):null}var ke=n(5260);function He(){return(0,o.jsx)(h.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ye(){return(0,o.jsx)(h.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function we(){return(0,o.jsx)(ke.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Ue(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:i.length>0?(0,o.jsx)(o.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}const Me={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function Be(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,u.A)(j.G.common.admonition,j.G.common.admonitionType(t),Me.admonition,n),children:s})}function Ie(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:Me.admonitionHeading,children:[(0,o.jsx)("span",{className:Me.admonitionIcon,children:t}),n]})}function Ee(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:Me.admonitionContent,children:t}):null}function ze(e){const{type:t,icon:n,title:s,children:i,className:a}=e;return(0,o.jsxs)(Be,{type:t,className:a,children:[(0,o.jsx)(Ie,{title:s,icon:n}),(0,o.jsx)(Ee,{children:i})]})}function Ve(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const Re={icon:(0,o.jsx)(Ve,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Ge(e){return(0,o.jsx)(ze,{...Re,...e,className:(0,u.A)("alert alert--secondary",e.className),children:e.children})}function Oe(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const Se={icon:(0,o.jsx)(Oe,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Pe(e){return(0,o.jsx)(ze,{...Se,...e,className:(0,u.A)("alert alert--success",e.className),children:e.children})}function De(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const Fe={icon:(0,o.jsx)(De,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function qe(e){return(0,o.jsx)(ze,{...Fe,...e,className:(0,u.A)("alert alert--info",e.className),children:e.children})}function We(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const $e={icon:(0,o.jsx)(We,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Ze(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Je={icon:(0,o.jsx)(Ze,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Qe={icon:(0,o.jsx)(We,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Xe={...{note:Ge,tip:Pe,info:qe,warning:function(e){return(0,o.jsx)(ze,{...$e,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(ze,{...Je,...e,className:(0,u.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(Ge,{title:"secondary",...e}),important:e=>(0,o.jsx)(qe,{title:"important",...e}),success:e=>(0,o.jsx)(Pe,{title:"success",...e}),caution:function(e){return(0,o.jsx)(ze,{...Qe,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})}}};function Ye(e){const t=Ue(e),n=(s=t.type,Xe[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Xe.info));var s;return(0,o.jsx)(n,{...t})}function Ke(e){let{className:t}=e;return(0,o.jsx)(Ye,{type:"caution",title:(0,o.jsx)(He,{}),className:(0,u.A)(t,j.G.common.unlistedBanner),children:(0,o.jsx)(ye,{})})}function et(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(we,{}),(0,o.jsx)(Ke,{...e})]})}const tt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function nt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,o.jsx)(ae,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(de,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&tt.docItemCol),children:[s&&(0,o.jsx)(et,{}),(0,o.jsx)(k,{}),(0,o.jsxs)("div",{className:tt.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(Te,{}),(0,o.jsx)(H,{}),n.mobile,(0,o.jsx)(fe,{children:t}),(0,o.jsx)(P,{})]}),(0,o.jsx)(v,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function st(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(i.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(nt,{children:(0,o.jsx)(n,{})})]})})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);