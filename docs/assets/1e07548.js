(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,5,10,12],{253:function(t,e,n){"use strict";n.r(e);n(186),n(10);var r=n(46),l={name:"productitem",props:{product:Object},data:function(){var t=this,e=r.categories.find((function(e){return e.key===t.product.category.toLowerCase()}));return{config:r,category:e}}},c=n(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"course-item bg-light"},[n("div",{staticClass:"position-relative overflow-hidden"},[n("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[n("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),n("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[n("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),n("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),n("div",{staticClass:"text-center p-4 pb-0"},[n("h3",{staticClass:"mb-0"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),n("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return n("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return n("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),n("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),n("h5",{staticClass:"mb-4"},[t._v(t._s(t.product.name))])]),t._v(" "),n("div",{staticClass:"d-flex border-top"},[n("small",{staticClass:"flex-fill text-center border-end py-2"},[n("i",{staticClass:"fa fa-toilet text-primary me-2"}),n("NuxtLink",{attrs:{to:"/hersteller/"+t.product.brand.toLowerCase()+"/",title:t.product.brand}},[t._v(t._s(t.product.brand))])],1),t._v(" "),n("small",{staticClass:"flex-fill text-center border-end py-2"},[t.category?n("i",{staticClass:"fa text-primary me-2"}):t._e(),t.product.category?n("NuxtLink",{attrs:{to:"/kategorie/"+t.product.category.toLowerCase()+"/",title:!!t.category&&t.category.seo.title}},[t._v("\n          "+t._s(t.product.category))]):t._e()],1)])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,n){"use strict";n.r(e);n(19),n(10);var r=n(46),l=n(254).filter((function(t){return t.featured&&t.published&&!t.winner})),c={name:"featuredProducts",data:function(){return{config:r,products:l}}},o=n(18),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("h4",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),n("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return n("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[n("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(253).default})},260:function(t,e,n){"use strict";n.r(e);n(19),n(10);var r=n(46),l=n(254),c={name:"testsieger",data:function(){return{featured:l.filter((function(t){return t.featured&&t.winner&&t.published})),config:r}}},o=n(18),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("h4",{staticClass:"mb-5 h2"},[t._v("Testsieger")])]),t._v(" "),n("div",{staticClass:"row g-4 justify-content-center"},t._l(t.featured,(function(t){return n("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[n("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(253).default})},261:function(t,e,n){"use strict";n.r(e);var r=n(46),l={name:"herstellerComponent",data:function(){return{config:r}}},c=n(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5 category",attrs:{id:"hersteller"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n          "+t._s(t.config.seo.mainKeyword)+"\n        ")]),t._v(" "),n("h3",{staticClass:"mb-5 h2"},[t._v("Hersteller")])]),t._v(" "),n("div",{staticClass:"row g-3"},[n("div",{staticClass:"col-lg-7 col-md-6"},[n("div",{staticClass:"row g-3"},[n("div",{staticClass:"col-lg-12 col-md-12 zoomIn"},[n("NuxtLink",{staticClass:"position-relative d-block overflow-hidden",attrs:{to:"/hersteller/trobolo/",title:"Mehr über TROBOLO erfahren"}},[n("div",{staticClass:"grayscaleContainer"},[n("nuxt-img",{staticClass:"img-fluid grayscale",attrs:{preset:"default",src:"/assets/images/hersteller/trobolo.webp",alt:"TROBOLO"}}),t._v(" "),n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlayText"},[t._v("TROBOLO")])])],1),t._v(" "),n("div",{staticClass:"\n                    bg-white\n                    text-center\n                    position-absolute\n                    bottom-0\n                    end-0\n                    py-2\n                    px-3\n                  ",staticStyle:{margin:"1px"}},[n("h5",{staticClass:"m-0"},[t._v("TROBOLO")])])])],1),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-12 zoomIn"},[n("NuxtLink",{staticClass:"position-relative d-block overflow-hidden",attrs:{to:"/hersteller/trelino/",title:"Mehr über Trelino erfahren"}},[n("div",{staticClass:"grayscaleContainer"},[n("nuxt-img",{staticClass:"img-fluid grayscale",attrs:{preset:"default",src:"/assets/images/hersteller/trelino.webp",alt:"Trelino"}}),t._v(" "),n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlayText"},[t._v("Trelino")])])],1),t._v(" "),n("div",{staticClass:"\n                    bg-white\n                    text-center\n                    position-absolute\n                    bottom-0\n                    end-0\n                    py-2\n                    px-3\n                  ",staticStyle:{margin:"1px"}},[n("h5",{staticClass:"m-0"},[t._v("Trelino")])])])],1),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-12 zoomIn"},[n("button",{staticClass:"position-relative d-block overflow-hidden",attrs:{title:"Mehr über Kildwick erfahren"}},[n("div",{staticClass:"grayscaleContainer"},[n("nuxt-img",{staticClass:"img-fluid grayscale",attrs:{preset:"default",src:"/assets/images/hersteller/kildwick.webp",alt:"Kildwick"}}),t._v(" "),t._m(0)],1),t._v(" "),t._m(1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-5 col-md-6 zoomIn",staticStyle:{"min-height":"350px"}},[n("button",{staticClass:"position-relative d-block h-100 overflow-hidden"},[n("div",{staticClass:"grayscaleContainer"},[n("nuxt-img",{staticClass:"img-fluid grayscale",attrs:{preset:"default",src:"/assets/images/hersteller/meinetrenntoilette.webp",alt:"MeineTrenntoilette"}}),t._v(" "),t._m(2)],1),t._v(" "),t._m(3)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlayText"},[t._v("Kildwick")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n                    bg-white\n                    text-center\n                    position-absolute\n                    bottom-0\n                    end-0\n                    py-2\n                    px-3\n                  ",staticStyle:{margin:"1px"}},[n("h5",{staticClass:"m-0"},[t._v("Kildwick")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlayText"},[t._v("Meine Trenntoilette")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n                bg-white\n                text-center\n                position-absolute\n                bottom-0\n                end-0\n                py-2\n                px-3\n              ",staticStyle:{margin:"1px"}},[n("h5",{staticClass:"m-0"},[t._v("Meine Trenntoilette")])])}],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var r=n(46),l={components:{FeaturedProducts:n(257).default},name:"IndexPage",head:{title:r.seo.index.title,meta:[{hid:"description",name:"description",content:r.seo.index.metaDescription},{hid:"robots",name:"robots",content:r.seo.index.robots}]},asyncData:function(){return{config:r}}},c=n(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[n("div",{staticClass:"position-relative h-100"},[n("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{preset:"default",src:"/assets/images/feature-campingtoilette-trobolo-wandago.webp",alt:t.config.seo.mainKeyword}})],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 fadeInUp"},[n("div",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n            Der Shop für die richtige\n          ")]),t._v(" "),n("h1",{staticClass:"mb-4"},[t._v(t._s(t.config.seo.mainKeyword))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.config.seo.featureText)}}),t._v(" "),t._m(0),t._v(" "),n("nuxt-link",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{to:"/shop/",title:"Trenntoiletten günstig kaufen in unserem Shop"}},[t._v("zum Trenntoiletten Shop")])],1)])])]),t._v(" "),n("Testsieger"),t._v(" "),n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n          Gründe\n        ")]),t._v(" "),n("h2",{staticClass:"mb-5 h2"},[t._v("Vorteile einer "+t._s(t.config.seo.mainKeyword))])]),t._v(" "),n("div",{staticClass:"row g-4"},[n("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[n("div",{staticClass:"service-item text-center pt-3"},[n("div",{staticClass:"p-4"},[n("i",{staticClass:"fa fa-3x fa-water text-primary mb-4"}),t._v(" "),n("h5",{staticClass:"mb-3"},[t._v("Wasserfrei")]),t._v(" "),n("p",[t._v("\n                Eine "+t._s(t.config.seo.mainKeyword)+" kommt komplett ohne Wasser\n                aus\n              ")])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),n("FeaturedProducts"),t._v(" "),n("Hersteller"),t._v(" "),n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[t._m(4),t._v(" "),n("div",{staticClass:"row g-4"},[n("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[n("div",{staticClass:"team-item bg-light"},[n("div",{staticClass:"overflow-hidden"},[n("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"default",src:"/assets/images/img/team-1.jpg",alt:""}})],1),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[n("div",{staticClass:"team-item bg-light"},[n("div",{staticClass:"overflow-hidden"},[n("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"default",src:"/assets/images/img/team-2.jpg",alt:""}})],1),t._v(" "),t._m(7),t._v(" "),t._m(8)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[n("div",{staticClass:"team-item bg-light"},[n("div",{staticClass:"overflow-hidden"},[n("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"default",src:"/assets/images/img/team-3.jpg",alt:""}})],1),t._v(" "),t._m(9),t._v(" "),t._m(10)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[n("div",{staticClass:"team-item bg-light"},[n("div",{staticClass:"overflow-hidden"},[n("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"default",src:"/assets/images/img/team-4.jpg",alt:""}})],1),t._v(" "),t._m(11),t._v(" "),t._m(12)])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row gy-2 gx-4 mb-4"},[n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Funktionalität\n              ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Materialien\n              ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Nachhaltigkeit\n              ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Geruchsentwicklung\n              ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Komfort\n              ")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Entsorgung\n                & Hygiene\n              ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[n("div",{staticClass:"service-item text-center pt-3"},[n("div",{staticClass:"p-4"},[n("i",{staticClass:"fa fa-3x fa-sun text-primary mb-4"}),t._v(" "),n("h5",{staticClass:"mb-3"},[t._v("Autark")]),t._v(" "),n("p",[t._v("Sie benötigen keine zusätzlichen Sanitäranschlüsse")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[n("div",{staticClass:"service-item text-center pt-3"},[n("div",{staticClass:"p-4"},[n("i",{staticClass:"fa fa-3x fa-ban text-primary mb-4"}),t._v(" "),n("h5",{staticClass:"mb-3"},[t._v("Keine Chemie")]),t._v(" "),n("p",[t._v("Dank Trenneinsatz ist keine Chemie notwendig")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[n("div",{staticClass:"service-item text-center pt-3"},[n("div",{staticClass:"p-4"},[n("i",{staticClass:"fa fa-3x fa-recycle text-primary mb-4"}),t._v(" "),n("h5",{staticClass:"mb-3"},[t._v("Nachhaltig")]),t._v(" "),n("p",[t._v("\n                Benutzen Sie die Ausscheidungen als nährstoffreichen Kompost\n              ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n          Team\n        ")]),t._v(" "),n("div",{staticClass:"mb-5 h2"},[t._v("Unsere Experten")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[n("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center p-4"},[n("h5",{staticClass:"mb-0"},[t._v("Ringo Hülsmann")]),t._v(" "),n("small",[t._v('Der "Toilettenkönig"')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[n("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center p-4"},[n("h5",{staticClass:"mb-0"},[t._v("Leonie Meyer")]),t._v(" "),n("small",[t._v("Biologin")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[n("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center p-4"},[n("h5",{staticClass:"mb-0"},[t._v("Markus Baum")]),t._v(" "),n("small",[t._v("Ökologe")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[n("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("button",{staticClass:"btn btn-sm-square btn-primary mx-1"},[n("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center p-4"},[n("h5",{staticClass:"mb-0"},[t._v("Anh Tanaka")]),t._v(" "),n("small",[t._v("Innenarchitektin")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Testsieger:n(260).default,FeaturedProducts:n(257).default,Hersteller:n(261).default})}}]);