(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return i});n(26);var r=n(0),a=n.n(r),i=(n(173),n(171),n(179),n(194),"4170762887");t.default=function(e){var t=e.data,n=(e.pageContext,t.page),r=n.id,i=n.html,o=n.fields,l=n.frontmatter;Object.assign({id:r,html:i},o,l);return a.a.createElement("div",null," AMP PAGE ")}},171:function(e,t,n){"use strict";var r=n(169),a=n.n(r),i=n(0),o=n.n(i);function l(){var e=a()(["\n  margin: 0 auto auto;\n  width: 100%;\n  max-width: ",";\n  padding: 3em 1.5em 2em;\n  flex-grow: 1;\n"]);return l=function(){return e},e}var c=n(168).b.section(l(),function(e){return e.theme.sizes.maxWidth});t.a=function(e){var t=e.children;return o.a.createElement(c,null," ",t," ")}},173:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(168),o=(n(76),n(56),n(184),n(185)),l=n.n(o),c=n(177),m=n.n(c),s=n(174),u=s.facebook.appId,f=function(e){var t=e.post,n=void 0===t?{}:t,r=e.page,i=void 0===r?{}:r,o=s.siteTitle,c=s.siteDescription,f=s.siteImage,h=s.siteUrl,d="",p=[{"@context":"https://schema.org","@type":"WebSite",url:s.siteUrl,name:s.shortSiteTitle,alternateName:s.siteTitle}];if(Object.keys(n).length>0){var A=n.metaTitle||n.title;(o=A+" | "+s.shortSiteTitle).length>60&&(o=""+A),c=n.metaDescription||n.summary||n.excerpt,h=s.siteUrl+"/"+n.slug,n.tags&&n.tags.forEach(function(e){return d+=e.title+","}),p.push({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":s.siteUrl,name:s.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":h,name:o}}]},{"@context":"https://schema.org","@type":"BlogPosting",url:h,name:o,alternateName:s.siteTitle||"",headline:o,image:f,author:s.author,publisher:s.publisher,datePublished:n.date,dateModified:n.modified||n.date,mainEntityOfPage:h})}Object.keys(i).length>0&&(o=(i.metaTitle||i.title)+" | "+s.shortSiteTitle,c=i.metaDescription||i.summary||i.excerpt,h=s.siteUrl+"/"+i.slug,p.push({"@context":"https://schema.org","@type":"WebPage",url:h,name:o}));return a.a.createElement(l.a,{htmlAttributes:{lang:s.siteLanguage,prefix:"og: https://ogp.me/ns#"}},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:m.a}),a.a.createElement("link",{rel:"canonical",href:h}),a.a.createElement("title",null,o),a.a.createElement("meta",{name:"image",content:f.src}),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("meta",{name:"keywords",content:""+d.trim(",")}),a.a.createElement("link",{rel:"preconnect",href:"https://m.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://staticxx.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://connect.facebook.net"}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:h}),a.a.createElement("meta",{property:"og:image",itemProp:"image",content:f.url}),a.a.createElement("meta",{property:"og:image:width",content:f.width}),a.a.createElement("meta",{property:"og:image:height",content:f.height}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{property:"fb:app_id",content:u}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:s.authorTwitterHandle||""}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:image",content:f.url}),a.a.createElement("meta",{name:"twitter:description",content:c}))},h=n(169),d=n.n(h),p=n(36);function A(){var e=d()(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0.6em 0;\n  padding-right:1.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  li {\n    display: inline-block;\n    margin-left: 0.5em;\n    &:first-child {\n      position: relative;\n      margin: 0;\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: White;\n    font-weight: 600;\n    transition: all 0.2s;\n    border-bottom: 2px solid ",";\n    &:hover {\n      color: #00ffff\t;\n    }\n  }\n"]);return A=function(){return e},e}function g(){var e=d()(["\n  background: ",";\n  width: 100%;\n  height:2.5em;\n"]);return g=function(){return e},e}var v=i.b.header(g(),function(e){return e.theme.colors.base}),b=i.b.nav(A(),function(e){return e.theme.sizes.maxWidth},function(e){return e.theme.colors.base}),E={color:"#00ffff"},y=function(){return a.a.createElement(v,null,a.a.createElement(b,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/",activeStyle:E},"Home")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/tags/",activeStyle:E},"Tags")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/about/",activeStyle:E},"About")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/contact/",activeStyle:E},"Contact")))))};n(170);function w(){var e=d()(["\n  display: inline-block;\n  padding: 0.25em 0;\n  width: 100%;\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n  a {\n    font-weight: 600;\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n"]);return w=function(){return e},e}function P(){var e=d()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 1px solid ",";\n  padding: 1em 0 2em;\n  margin: 0 1.5em;\n"]);return P=function(){return e},e}function x(){var e=d()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 auto;\n  max-width: ",";\n"]);return x=function(){return e},e}var k=i.b.footer(x(),function(e){return e.theme.sizes.maxWidth}),T=i.b.ul(P(),function(e){return e.theme.colors.secondary}),z=i.b.li(w(),function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.base}),j=function(){return a.a.createElement(k,null,a.a.createElement(T,null,a.a.createElement(z,null,"Copyright © 2019 -"," ",a.a.createElement("a",{href:"https://vadelabs.com/",rel:"nofollow noopener noreferrer",target:"_blank"},"Vadelabs"),". All Rights Reserved"),a.a.createElement(z,null,a.a.createElement("a",{href:"/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")," ",a.a.createElement("a",{href:"/terms-of-use/",target:"_blank",rel:"noopener noreferrer"},"Terms Of Use")," ",a.a.createElement("a",{href:"/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact"))))},S={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}};t.a=function(e){var t=e.children,n=e.post,r=e.page;e.index;return a.a.createElement("div",{className:"siteRoot"},a.a.createElement(f,{post:n,page:r,index:!0}),a.a.createElement(i.a,{theme:S},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"siteContent"},a.a.createElement(y,null),t),a.a.createElement(j,null))))}},174:function(e,t){e.exports={siteTitle:"Nerd's Den | Helping You Succeed In Software Development",shortSiteTitle:"Nerd's Den",siteDescription:"Software engineering blog for vadelabs. Collection of best resources to learn software design, web development, and programming practices. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteImage:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png",width:820,height:312},siteLanguage:"en",headerTitle:"Nerd's Den",headerSubTitle:"Memoirs Of A Skeptic Nerd",publisher:{"@type":"Organization",name:"Vadelabs, Inc.",url:"https://vadelabs.com",logo:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png"}},author:{"@type":"Person",name:"Pragyan Tripathi",url:"https://nerds-den.com/about/"},authorTwitterHandle:"pntripathi9417",authorSocialLinks:[{name:"github",url:"https://github.com/pntripathi9417"},{name:"twitter",url:"https://twitter.com/pntripathi9417"},{name:"facebook",url:"https://facebook.com/pntripathi9417"}],manifestName:"Nerd's Den - Memoirs Of A Skeptic Nerd",manifestShortName:"Nerd's Den",manifestStartUrl:"/",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",google:{trackingId:{}.GOOGLE_ANALYTICS_ID||"UA-55436366-2"},facebook:{appId:{}.FB_APP_ID||"2232544823425455"},postsPerHomePage:10,postsPerPage:10}},177:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADr2/T/69v0/+vb9P/q2vT/7t72//jo+f/46Pn/9+j5//fo+f/56/r/9uf5/+/f9v/r2vT/69v0/+vb9P/r2/T/7d32/+3d9v/t3PX/8OD3/+LS8f+wnN3/e2TJ/4x30P+3pN//jHHN/4tzzf/fz+//79/3/+3c9v/t3fb/7d32/+/h+P/v4fj/7d73//vs/P+Cacz/JAep/y8Trf8vE63/PSu0/2d70P9TW8T/bVfD//bn+v/u4Pf/7+H4/+/h+P/z5Pn/8uP4//nn+v/U0/D/X2fI/zoasP88H7H/RC61/1dQwv+w8/f/qubz/22A0P/S0e//+ej7//Lj+P/z5Pn/8ub4//Hl+P/36fn/3dnx/1BKv/8xEa3/PyWz/15gxf9QRb3/XV/G/3KF0/9YVML/087u//jq+v/x5fj/8ub4//Xo+v/16Pr/+Or7/+vf9f+FitT/cHjO/05Mv/9MP7v/Pym0/0Avtv8/Mbb/Ry+2/+zd9f/46/v/9ef6//Xo+v/06/v/9Ov7//Tq+//16/v/+/f+/+nh9v9+bsv/bXzQ/2Bfxf+ipN3/0tfw/83P7f/z6Pr/9ev7//Tq+//06/v/9+77//fu+//37vv/9+37//bt+//97/v/29/z/3KM1f+pr+D//vH7//70/v/98/3/+O/7//fu+//37vv/9+77//fy+//38vv/9/H7//fy+//47/r/wNrw/53i8v+t8vn/qvf7/7DT7f/16vj/+fT8//bx+v/38vv/9/L7//fy+//59Pv/+fT7//j0+//8+P3/7ej2/5jL6/+l5/X/nNTu/4245f+i7Pf/t9Tt/+/q9v/79vz/+PT7//n0+//59Pv/+vj+//r4/v/49v3//////8vL7P+JteH/jbjj/4Om3v+Wyur/jbbk/5DH5//W1u////7///n2/f/6+P7/+vj+//z6/f/8+v3/+/r9///+///j5/X/k8Lm/5PD6P+f2vD/hKfc/6Pm9P+Cntz/4NPu///////7+f3//Pr9//z6/f/+/f7//v3+//38/v//////6u74/5/e8f+o7Pb/r/r9/6jt9/+2////a3zP/9fS7f///////Pv9//79/v/+/f7////////////+/v///////+fg8/+hxuf/qPj8/6b0+v+g5fX/mdju/4+r3P/18vn///////7+////////////////////////////////////////9/T4/77K6f+31Oz/oK3e/87U7P+0sOD///79//////////////////////////////////////////////7//////////v///vz+//38/v///////Pz9//39/v//////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},179:function(e,t,n){"use strict";n(170);var r=n(169),a=n.n(r),i=n(0),o=n.n(i);function l(){var e=a()(["\n  font-size: ",";\n  text-transform: capitalize;\n  font-weight: 600;\n  text-align: center;\n  margin: 0 0 3rem 0;\n  margin: ",";\n  line-height: 1.2;\n  span {\n    margin: 0 0 0 0.25em;\n  }\n  a {\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return l=function(){return e},e}var c=n(168).b.h1(l(),function(e){return e.small?"2em":"3em"},function(e){return e.small?"1rem 0 4rem 0":"0 0 3rem 0"},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight});t.a=function(e){return o.a.createElement(c,{small:e.small},e.children)}},194:function(e,t,n){"use strict";var r=n(169),a=n.n(r),i=n(0),o=n.n(i),l=n(168);function c(){var e=a()(["\n  margin: 0 auto;\n  max-width: ",";\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n      /*table-layout: fixed;*/\n  }\n\n  table th {\n    text-align: center;\n    padding-top: 20;\n    height: 120%;\n    width: 0.2em;\n    font-size: 1.2em;\n    background: lightblue;\n  }\n  table tr:hover{\n      background-color: #eeeeee;\n  }\n  table tr:nth-child(even) {\n    background-color: #F1F1F1\t;\n\n  }\n  table th, table td {\n      border: white 0.2em solid;\n      padding: .2em 0.8em;\n  }\n\n    h1,\n    h2,\n    h3 {\n      line-height: 1.25;\n      margin: 0 0 1rem 0;\n      text-transform: capitalize;\n    }\n  }\n  h2 {\n    font-size: 1.5em;\n  }\n  h3 {\n    font-size: 1.3em;\n  }\n  p {\n    line-height: 1.4;\n    margin: 0 0 2em 0;\n  }\n\n  a {\n    transition: 0.2s;\n    line-height: 1.6;\n\n  }\n  ul,\n  ol {\n    margin: 0 0 2em 0;\n  }\n  ul {\n      list-style-position: inside;\n      padding-left: 1em;\n    li {\n      list-style: disc;\n\n      font-style: italic;\n        font-weight: bold;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n\n  ol {\n    padding-left: 1em;\n    list-style-position: outside;\n    li {\n      list-style: decimal;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n  em {\n    font-style: bold;\n  }\n  title-text: {\n    fontSize: 20,\n    fontWeight: 'bold',\n  }\n"]);return c=function(){return e},e}n(200);var m=l.b.div(c(),function(e){return e.theme.sizes.maxWidthCentered});t.a=function(e){var t=e.html;return o.a.createElement(m,{dangerouslySetInnerHTML:{__html:t}})}},200:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-amp-page-js-8252a0d5668bad0a2c61.js.map