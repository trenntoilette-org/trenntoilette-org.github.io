(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,10,11],{253:function(t,e,r){"use strict";r.r(e);r(186),r(10);var n=r(46),o={name:"productitem",props:{product:Object},data:function(){var t=this,e=n.categories.find((function(e){return e.key===t.product.category.toLowerCase()}));return{config:n,category:e}}},l=r(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/hersteller/"+t.product.brand.toLowerCase()+"/",title:t.product.brand}},[t._v(t._s(t.product.brand))])],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[t.category?r("i",{staticClass:"fa text-primary me-2"}):t._e(),t.product.category?r("NuxtLink",{attrs:{to:"/kategorie/"+t.product.category.toLowerCase()+"/",title:!!t.category&&t.category.seo.title}},[t._v("\n          "+t._s(t.product.category))]):t._e()],1)])])])}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,r){"use strict";r.r(e);var n=r(46),o={name:"categorySidebar",data:function(){return{config:n}}},l=r(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark",staticStyle:{width:"280px"}},[r("hr"),t._v(" "),r("span",{staticClass:"fs-4"},[t._v("Kategorien")]),t._v(" "),r("ul",{staticClass:"nav nav-pills flex-column mb-auto"},t._l(t.config.categories,(function(e,n){return r("li",{key:n,staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link text-white",attrs:{title:e.seo?e.seo.title:e.name,to:"manufacturer"===e.type?"/hersteller/"+e.key+"/":"/kategorie/"+e.key+"/"}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)})),0),t._v(" "),r("hr"),t._v(" "),r("span",{staticClass:"fs-4"},[t._v("Hersteller")]),t._v(" "),r("ul",{staticClass:"nav nav-pills flex-column mb-auto"},t._l(t.config.brands,(function(e,n){return r("li",{key:n,staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link text-white",attrs:{title:e.seo?e.seo.title:e.name,to:(e.type,"/hersteller/"+e.key+"/")}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)})),0),t._v(" "),r("hr")])])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,r){"use strict";r.r(e);var n={name:"products",props:{products:Array}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(253).default})},270:function(t,e,r){"use strict";r.r(e);r(186),r(10),r(30),r(19);var n=r(254),o=r(46),l={name:"categoryComponent",head:function(){var t=this.category,e=o.categories.find((function(e){return e.key===t}));return{title:e.seo?e.seo.title:e.name+"- Testsieger und Produkte",meta:[{hid:"description",name:"description",content:e.seo&&e.seo.metaDescription?e.seo.metaDescription:"Kaufe "+e.name+" günstig online in unserem Shop. Best-Preis-Garantie. "+e.name+" Markenprodukte und Zubehör."},{hid:"robots",name:"robots",content:e.seo&&e.seo.robots?e.seo.robots:"noindex, follow"}]}},data:function(){var t=this.$route.params.category;return{filteredProducts:n.filter((function(e){return e.category.toLowerCase()===t&&e.published})),category:t,categoryData:this.categoryData}}},c=r(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("Products",{attrs:{products:t.filteredProducts}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(255).default,Products:r(256).default})}}]);