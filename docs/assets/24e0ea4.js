(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4,10,11],{257:function(t,e,r){"use strict";r.r(e);var n=r(46),o={data:function(){return{config:n}}},c=r(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row gy-2 gx-4 mb-4 mt-5"},t._l(t.config.checklist,(function(e,n){return r("div",{key:n,staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,r){"use strict";r.r(e);var n={name:"productheader",props:{productName:String,textContent:String,productImage:String}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-xxl py-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[r("div",{staticClass:"position-relative h-100"},[r("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{src:t.productImage,alt:t.productName,preset:"productHeader"}})],1)]),t._v(" "),r("div",{staticClass:"col-lg-6 fadeInUp"},[r("h6",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n            Testbericht\n          ")]),t._v(" "),r("h1",{staticClass:"mb-4"},[t._v(t._s(t.productName))]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            "+t._s(t.textContent)+"\n          ")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            Unsere Tests beinhalten mehrere Faktoren denen wir auf den Grund\n            gehen. Dabei kommen folgende Testkritieren zum Einsatz:\n          ")]),t._v(" "),t._m(0),t._v(" "),r("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testbericht"}},[t._v("Zum Testbericht")])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row gy-2 gx-4 mb-4"},[r("div",{staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Funktionalität\n              ")])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Materialien\n              ")])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Nachhaltigkeit\n              ")])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Geruchsentwicklung\n              ")])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Komfort\n              ")])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Entsorgung\n                & Hygiene\n              ")])])])}],!1,null,null,null);e.default=component.exports},259:function(t,e,r){"use strict";r.r(e);r(187),r(10);var n=r(46),o={name:"productcard",props:{product:Object},data:function(){var t=this,e=n.categories.find((function(e){return e.key===t.product.category.toLowerCase()}));return{config:n,category:e}}},c=r(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"sidebar-widget schedule-widget mt-5"},[r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))]),t._v(" "),r("ul",{staticClass:"list-unstyled"},[r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Hersteller")]),t._v(" "),r("span",[r("nuxt-link",{attrs:{to:"/hersteller/"+t.product.brand.toLowerCase()+"/"}},[t._v(t._s(t.product.brand))])],1)]),t._v(" "),r("hr"),t._v(" "),r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Kategorie")]),t._v(" "),t.product.category?r("nuxt-link",{attrs:{to:"/kategorie/"+t.product.category.toLowerCase()+"/",title:!!t.category&&t.category.seo.title}},[r("span",[t._v(t._s(t.product.category))])]):t._e()],1),t._v(" "),r("hr"),t._v(" "),t._l(t.product.specifications,(function(e,n){return r("div",{key:n},[r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v(t._s(Object.keys(e)[0]))]),t._v(" "),r("span",[t._v(t._s(Object.values(e)[0]))])]),t._v(" "),r("hr")])})),t._v(" "),r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Bewertung")]),t._v(" "),r("div",{staticClass:"mb-1 mt-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})}))],2)]),t._v(" "),r("hr")],2),t._v(" "),r("div",{staticClass:"sidebar-contact-info mt-4"},[r("p",{staticClass:"mb-0"},[t._v("Preis")]),t._v(" "),r("h3",[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" EUR")])])])])}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,r){"use strict";var n=r(5),o=r(1),c=r(3),l=r(54),d=r(189),m=r(188),f=r(4),v=o.RangeError,h=o.String,_=Math.floor,C=c(m),y=c("".slice),x=c(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},k=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=_(n/1e7)},j=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=_(r/t),r=r%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+C("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,r,n,o,c=d(this),m=l(t),data=[0,0,0,0,0,0],f="",_="0";if(m<0||m>20)throw v("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return h(c);if(c<0&&(f="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*w(2,69,1))-69)<0?c*w(2,-e,1):c/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(k(data,0,r),n=m;n>=7;)k(data,1e7,0),n-=7;for(k(data,w(10,n,1),0),n=e-1;n>=23;)j(data,1<<23),n-=23;j(data,1<<n),k(data,1,1),j(data,2),_=S(data)}else k(data,0,r),k(data,1<<-e,0),_=S(data)+C("0",m);return _=m>0?f+((o=_.length)<=m?"0."+C("0",m-o)+_:y(_,0,o-m)+"."+y(_,o-m)):f+_}})},275:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(49),r(30),r(50),r(187),r(10),r(80),r(266),r(136)),c=r(46),l={name:"product",head:function(){return{title:this.product.seo&&this.product.seo.title?this.product.seo.title:"".concat(this.product.name," online kaufen"),meta:[{hid:"description",name:"description",content:this.product.seo&&this.product.seo.metaDescription?this.product.seo.metaDescription:"".concat(this.product.name," online kaufen auf Trenntoilette.org. Alle wichtigen Informationen zu ").concat(this.product.name,".")},{hid:"robots",name:"robots",content:this.product.seo&&this.product.seo.robots&&this.product.published?this.product.seo.robots:c.seo.globalProductRobots||"noindex, follow"}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,r.params.slug,e.abrupt("return",{product:o.find((function(t){return t.slug==r.params.slug})),config:c});case 3:case"end":return e.stop()}}),e)})))()},jsonld:function(){return{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org/","@type":"Product",name:this.product.name,image:[c.hostname+c.imageFolder+this.product.localThumb],description:this.product.seo?this.product.seo.metaDescription:this.product.brand+" "+this.product.name,sku:this.product.sku,brand:{"@type":"Brand",name:this.product.brand},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:this.product.stars.toString(),bestRating:this.product.stars.toString()},author:{"@type":"Organization",name:c.organization}},aggregateRating:{"@type":"AggregateRating",ratingValue:(1*Math.random()+4).toFixed(1).toString(),reviewCount:this.product.reviewCount},offers:{"@type":"Offer",url:c.hostname+c.productUrl+this.product.slug+"/",priceCurrency:"EUR",price:this.product.price,priceValidUntil:"2024-11-20",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock"}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c.hostname,name:"Trenntoiletten"}},{"@type":"ListItem",position:2,item:{"@id":c.hostname+c.productUrl+this.product.slug+"/",name:this.product.name}}]}]}}},d=r(18),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ProductHeader",{attrs:{productName:t.product.name,textContent:t.product.description,productImage:""+t.config.imageFolder+t.product.localThumb}}),t._v(" "),r("div",{staticClass:"container-xxl py-5",attrs:{id:"testbericht"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},[r("h2",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),t.product.seo&&t.product.seo.texts?r("div",t._l(t.product.seo.texts,(function(text,e){return r("div",{key:e},[r("div",{staticClass:"mb-3 mt-5 h5"},[t._v("\n                "+t._s(text.title)+"\n              ")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n                "+t._s(text.text)+"\n              ")])])})),0):t._e(),t._v(" "),r("Checklist"),t._v(" "),r("a",{staticClass:"btn btn-primary py-3 px-5",attrs:{target:"_blank",rel:"nofollow noopener",href:t.product.shopLink}},[t._v("Bestellen")])],1),t._v(" "),r("div",{staticClass:"col-lg-4 fadeInUp"},[r("ProductCard",{attrs:{product:t.product}}),t._v(" "),r("div",{staticClass:"mt-5"},[r("a",{staticClass:"btn btn-primary py-3 px-5",staticStyle:{display:"block",width:"100%"},attrs:{target:"_blank",rel:"nofollow noopener",href:t.product.shopLink}},[t._v(t._s(t.product.brand)+" Online Shop")])])],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductHeader:r(258).default,Checklist:r(257).default,ProductCard:r(259).default})}}]);