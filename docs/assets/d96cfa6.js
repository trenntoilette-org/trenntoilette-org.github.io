(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{254:function(t,e,r){"use strict";r.r(e);r(187),r(10),r(30),r(34),r(35),r(255),r(188),r(80);var o=r(46),l={name:"productitem",props:{product:Object},data:function(){var t=this,e=o.categories.find((function(e){return e.key===t.product.category.toLowerCase()})),r=o.affiliates.find((function(e){return e.name===t.product.brand}));if(null!=r&&r.active){var l=new URL(this.product.shopLink);l.searchParams.set(r.parameter.key,r.parameter.value),this.product.shopLink=l.toString()}return{config:o,category:e}}},n=r(18),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),t._v(" "),r("NuxtLink",{attrs:{to:"/hersteller/"+t.product.brand.toLowerCase()+"/",title:t.product.brand}},[t._v(t._s(t.product.brand)+"\n        ")])],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[t.category?r("i",{staticClass:"fa text-primary me-2"}):t._e(),t._v(" "),t.product.category?r("NuxtLink",{attrs:{to:"/kategorie/"+t.product.category.toLowerCase()+"/",title:!!t.category&&t.category.seo.title}},[t._v("\n          "+t._s(t.product.category))]):t._e()],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);