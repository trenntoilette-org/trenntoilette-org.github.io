(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10],{253:function(t,e,r){"use strict";r.r(e);r(186),r(10);var n=r(46),o={name:"productitem",props:{product:Object},data:function(){var t=this,e=n.categories.find((function(e){return e.key===t.product.category.toLowerCase()}));return{config:n,category:e}}},l=r(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("h3",{staticClass:"mb-0"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("h5",{staticClass:"mb-4"},[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/hersteller/"+t.product.brand.toLowerCase()+"/",title:t.product.brand}},[t._v(t._s(t.product.brand))])],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[t.category?r("i",{staticClass:"fa text-primary me-2"}):t._e(),t.product.category?r("NuxtLink",{attrs:{to:"/kategorie/"+t.product.category.toLowerCase()+"/",title:!!t.category&&t.category.seo.title}},[t._v("\n          "+t._s(t.product.category))]):t._e()],1)])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,r){"use strict";r.r(e);r(19),r(10);var n=r(46),o=r(254).filter((function(t){return t.featured&&t.published&&!t.winner})),l={name:"featuredProducts",data:function(){return{config:n,products:o}}},c=r(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),r("h4",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),r("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return r("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[r("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(253).default})}}]);