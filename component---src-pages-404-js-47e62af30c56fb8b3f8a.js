(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,t,n){"use strict";n.r(t);var r=n(160),a=n.n(r),i=n(0),o=n.n(i),l=n(36),c=n(159),s=n(177),m=n(168),u=n(171);function f(){var e=a()(["\n  text-align: center;\n  line-height: 1.6;\n  a {\n    color: #121212;\n  }\n"]);return f=function(){return e},e}var d=c.c.p(f());t.default=function(){return o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement(s.a,null,"Page Not Found"),o.a.createElement(d,null,"Please return ",o.a.createElement(l.Link,{to:"/"},"home")," or use the menu to navigate to a different page.")))}},168:function(e,t,n){"use strict";var r=n(160),a=n.n(r),i=n(0),o=n.n(i);function l(){var e=a()(["\n  margin: 0 auto auto;\n  width: 100%;\n  max-width: ",";\n  padding: 3em 1.5em 2em;\n  flex-grow: 1;\n"]);return l=function(){return e},e}var c=n(159).c.section(l(),function(e){return e.theme.sizes.maxWidth});t.a=function(e){var t=e.children;return o.a.createElement(c,null," ",t," ")}},171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(159),o=(n(76),n(56),n(181),n(186)),l=n.n(o),c=n(172),s=n.n(c),m=n(173),u=function(e){var t=e.post,n=void 0===t?{}:t,r=e.page,i=void 0===r?{}:r,o=m.siteTitle,c=m.siteDescription,u=m.siteImage,f=m.siteUrl,d=[{"@context":"https://schema.org","@type":"WebSite",url:m.siteUrl,name:m.shortSiteTitle,alternateName:m.siteTitle}];Object.keys(n).length>0&&(o=(n.metaTitle||n.title)+" | "+m.shortSiteTitle,c=n.metaDescription||n.summary||n.excerpt,f=m.siteUrl+"/"+n.slug,d.push({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m.siteUrl,name:m.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":f,name:o}}]},{"@context":"https://schema.org","@type":"BlogPosting",url:f,name:o,alternateName:m.siteTitle||"",headline:o,image:u,author:m.author,publisher:m.publisher,datePublished:n.date,dateModified:n.modified||n.date,mainEntityOfPage:f}));Object.keys(i).length>0&&(o=(i.metaTitle||i.title)+" | "+m.shortSiteTitle,c=i.metaDescription||i.summary||i.excerpt,f=m.siteUrl+"/"+n.slug,d.push({"@context":"https://schema.org","@type":"WebPage",url:f,name:o}));return a.a.createElement(l.a,{htmlAttributes:{lang:m.siteLanguage,prefix:"og: https://ogp.me/ns#"}},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:s.a}),a.a.createElement("title",null,o),a.a.createElement("meta",{name:"image",content:u.src}),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:f}),a.a.createElement("meta",{property:"og:image",itemProp:"image",content:u.url}),a.a.createElement("meta",{property:"og:image:width",content:u.width}),a.a.createElement("meta",{property:"og:image:height",content:u.height}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:m.authorTwitterHandle||""}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:image",content:u.url}),a.a.createElement("meta",{name:"twitter:description",content:c}))},f=n(160),d=n.n(f),h=n(36);function p(){var e=d()(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  li {\n    display: inline-block;\n    margin-left: 1em;\n    &:first-child {\n      position: relative;\n      margin: 0;\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: DarkGray;\n    font-weight: 600;\n    transition: all 0.2s;\n    border-bottom: 2px solid ",";\n    &:hover {\n      color: white;\n    }\n  }\n"]);return p=function(){return e},e}function A(){var e=d()(["\n  background: ",";\n  width: 100%;\n  padding: 1.5em 0;\n"]);return A=function(){return e},e}var g=i.c.header(A(),function(e){return e.theme.colors.base}),v=i.c.nav(p(),function(e){return e.theme.sizes.maxWidth},function(e){return e.theme.colors.base}),b={color:"white"},y=function(){return a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/",activeStyle:b},"Home")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/tags/",activeStyle:b},"Tags")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/about/",activeStyle:b},"About")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/contact/",activeStyle:b},"Contact")))))};n(165);function w(){var e=d()(["\n  display: inline-block;\n  padding: 0.25em 0;\n  width: 100%;\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n  a {\n    font-weight: 600;\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n"]);return w=function(){return e},e}function E(){var e=d()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 1px solid ",";\n  padding: 1em 0 2em;\n  margin: 0 1.5em;\n"]);return E=function(){return e},e}function P(){var e=d()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 auto;\n  max-width: ",";\n"]);return P=function(){return e},e}var x=i.c.footer(P(),function(e){return e.theme.sizes.maxWidth}),k=i.c.ul(E(),function(e){return e.theme.colors.secondary}),T=i.c.li(w(),function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.base}),j=function(){return a.a.createElement(x,null,a.a.createElement(k,null,a.a.createElement(T,null,"Copyright © 2019 -"," ",a.a.createElement("a",{href:"https://www.vadelabs.com/",rel:"nofollow noopener noreferrer",target:"_blank"},"Vadelabs"),". All Rights Reserved"),a.a.createElement(T,null,a.a.createElement("a",{href:"/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")," ",a.a.createElement("a",{href:"/terms-of-use/",target:"_blank",rel:"noopener noreferrer"},"Terms Of Use")," ",a.a.createElement("a",{href:"/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact"))))},z={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}};function S(){var e=d()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n']);return S=function(){return e},e}var L=Object(i.b)(S());t.a=function(e){var t=e.children,n=e.post,r=e.page;return a.a.createElement("div",{className:"siteRoot"},a.a.createElement(u,{post:n,page:r}),a.a.createElement(i.a,{theme:z},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"siteContent"},a.a.createElement(y,null),t),a.a.createElement(j,null))),a.a.createElement(L,null))}},172:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADr2/T/69v0/+vb9P/q2vT/7t72//jo+f/46Pn/9+j5//fo+f/56/r/9uf5/+/f9v/r2vT/69v0/+vb9P/r2/T/7d32/+3d9v/t3PX/8OD3/+LS8f+wnN3/e2TJ/4x30P+3pN//jHHN/4tzzf/fz+//79/3/+3c9v/t3fb/7d32/+/h+P/v4fj/7d73//vs/P+Cacz/JAep/y8Trf8vE63/PSu0/2d70P9TW8T/bVfD//bn+v/u4Pf/7+H4/+/h+P/z5Pn/8uP4//nn+v/U0/D/X2fI/zoasP88H7H/RC61/1dQwv+w8/f/qubz/22A0P/S0e//+ej7//Lj+P/z5Pn/8ub4//Hl+P/36fn/3dnx/1BKv/8xEa3/PyWz/15gxf9QRb3/XV/G/3KF0/9YVML/087u//jq+v/x5fj/8ub4//Xo+v/16Pr/+Or7/+vf9f+FitT/cHjO/05Mv/9MP7v/Pym0/0Avtv8/Mbb/Ry+2/+zd9f/46/v/9ef6//Xo+v/06/v/9Ov7//Tq+//16/v/+/f+/+nh9v9+bsv/bXzQ/2Bfxf+ipN3/0tfw/83P7f/z6Pr/9ev7//Tq+//06/v/9+77//fu+//37vv/9+37//bt+//97/v/29/z/3KM1f+pr+D//vH7//70/v/98/3/+O/7//fu+//37vv/9+77//fy+//38vv/9/H7//fy+//47/r/wNrw/53i8v+t8vn/qvf7/7DT7f/16vj/+fT8//bx+v/38vv/9/L7//fy+//59Pv/+fT7//j0+//8+P3/7ej2/5jL6/+l5/X/nNTu/4245f+i7Pf/t9Tt/+/q9v/79vz/+PT7//n0+//59Pv/+vj+//r4/v/49v3//////8vL7P+JteH/jbjj/4Om3v+Wyur/jbbk/5DH5//W1u////7///n2/f/6+P7/+vj+//z6/f/8+v3/+/r9///+///j5/X/k8Lm/5PD6P+f2vD/hKfc/6Pm9P+Cntz/4NPu///////7+f3//Pr9//z6/f/+/f7//v3+//38/v//////6u74/5/e8f+o7Pb/r/r9/6jt9/+2////a3zP/9fS7f///////Pv9//79/v/+/f7////////////+/v///////+fg8/+hxuf/qPj8/6b0+v+g5fX/mdju/4+r3P/18vn///////7+////////////////////////////////////////9/T4/77K6f+31Oz/oK3e/87U7P+0sOD///79//////////////////////////////////////////////7//////////v///vz+//38/v///////Pz9//39/v//////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},173:function(e,t){e.exports={siteTitle:"Nerd's Den | Memoirs Of A Skeptic Nerd",shortSiteTitle:"Nerd's Den",siteDescription:"Official blog for Vadelabs. It discusses about software design and building scalable, reliable, and flexible applications the right way. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteImage:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png",width:820,height:312},siteLanguage:"en",headerTitle:"Nerd's Den",headerSubTitle:"Memoirs Of A Skeptic Nerd",publisher:{"@type":"Organization",name:"Vadelabs, Inc.",url:"https://vadelabs.com",logo:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png"}},author:{"@type":"Person",name:"Pragyan Tripathi",url:"https://nerds-den.com/about/"},authorTwitterHandle:"pntripathi9417",authorSocialLinks:[{name:"github",url:"https://github.com/pntripathi9417"},{name:"twitter",url:"https://twitter.com/pntripathi9417"},{name:"facebook",url:"http://facebook.com/pntripathi9417"}],manifestName:"Nerd's Den - Memoirs Of A Skeptic Nerd",manifestShortName:"Nerd's Den",manifestStarUrl:"/index.html",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",google:{trackingId:{}.GOOGLE_ANALYTICS_ID||"UA-55436366-2"},facebook:{appId:{}.FB_APP_ID||"2232544823425455"},postsPerHomePage:10,postsPerPage:10}},177:function(e,t,n){"use strict";n(165);var r=n(160),a=n.n(r),i=n(0),o=n.n(i);function l(){var e=a()(["\n  font-size: ",";\n  text-transform: capitalize;\n  font-weight: 600;\n  text-align: center;\n  margin: 0 0 3rem 0;\n  margin: ",";\n  line-height: 1.2;\n  span {\n    margin: 0 0 0 0.25em;\n  }\n  a {\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return l=function(){return e},e}var c=n(159).c.h1(l(),function(e){return e.small?"2em":"3em"},function(e){return e.small?"1rem 0 4rem 0":"0 0 3rem 0"},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight});t.a=function(e){return o.a.createElement(c,{small:e.small},e.children)}}}]);
//# sourceMappingURL=component---src-pages-404-js-47e62af30c56fb8b3f8a.js.map