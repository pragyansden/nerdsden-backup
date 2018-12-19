(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(155),s=n.n(l),c=n(158),p=n(186),m=n(223),u=n(154),d=n.n(u),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement("div",{className:"index-container"},o.a.createElement(s.a,{title:d.a.siteTitle}),o.a.createElement(m.a,null),o.a.createElement(p.a,{postEdges:e})))},t}(o.a.Component);t.default=f;var h="1014838814"},154:function(e,t){e.exports={siteTitle:"Nerd's Den",siteTitleShort:"NerdsDen",siteTitleAlt:"Tutorials On Building Reliable, Scalable, and Flexible Software Application",siteLogo:"/logos/logo-1024.png",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteDescription:"Memoirs Of A Skeptic Nerd",siteRss:"/rss.xml",siteFBAppID:"2232544823425455",googleAnalyticsID:"UA-55436366-2",disqusShortname:"nerdsden",postDefaultCategoryID:"Software Development",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"pragyan",userTwitter:"pntripathi9417",userLocation:"Bangalore, India",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"",userLinks:[{label:"GitHub",url:"https://github.com/vadelabls/nerdsden",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/nerdsden",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:nerdsden@vadelabs.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Nerd's Den",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},158:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(155),s=n.n(l),c=n(154),p=n.n(c),m=(n(159),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:p.a.siteDescription})),e)},t}(o.a.Component))},159:function(e,t,n){},183:function(e,t,n){var a,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var a=0;a<e.length;a++){var r=e[a];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(a>0&&(r=r.replace(/^[\/]+/,"")),r=a<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(a=i)?a.call(t,n,t,e):a)||(e.exports=r)},186:function(e,t,n){"use strict";n(78);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(37),s=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",null,e.map(function(e){return o.a.createElement(l.Link,{to:e.path,key:e.title},o.a.createElement("h1",null,e.title))}))},t}(o.a.Component);t.a=s},223:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(155),s=n.n(l),c=n(183),p=n.n(c),m=n(154),u=n.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,l=r.postPath,c=r.postSEO;if(c){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,n=m.cover,a=p()(u.a.siteUrl,u.a.pathPrefix,l)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=p()(u.a.siteUrl,u.a.pathPrefix,n);var d=p()(u.a.siteUrl,u.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:c?a:d}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ac244e24922626359a1b.js.map