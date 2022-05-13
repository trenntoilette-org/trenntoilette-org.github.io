(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,5,10,12],{253:function(t,e,l){"use strict";l.r(e);l(186),l(10);var n=l(46),r={name:"productitem",props:{product:Object},data:function(){var t=this,e=n.categories.find((function(e){return e.key===t.product.category.toLowerCase()}));return{config:n,category:e}}},c=l(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"course-item bg-light"},[l("div",{staticClass:"position-relative overflow-hidden"},[l("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[l("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb}})],1),t._v(" "),l("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[l("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),l("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),l("div",{staticClass:"text-center p-4 pb-0"},[l("h3",{staticClass:"mb-0"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),l("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return l("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return l("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),l("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),l("h5",{staticClass:"mb-4"},[t._v(t._s(t.product.name))])]),t._v(" "),l("div",{staticClass:"d-flex border-top"},[l("small",{staticClass:"flex-fill text-center border-end py-2"},[l("i",{staticClass:"fa fa-toilet text-primary me-2"}),l("NuxtLink",{attrs:{to:"/hersteller/"+t.product.brand.toLowerCase()+"/",title:t.product.brand}},[t._v(t._s(t.product.brand))])],1),t._v(" "),l("small",{staticClass:"flex-fill text-center border-end py-2"},[t.category?l("i",{staticClass:"fa text-primary me-2"}):t._e(),t.product.category?l("NuxtLink",{attrs:{to:"/kategorie/"+t.product.category.toLowerCase()+"/",title:!!t.category&&t.category.seo.title}},[t._v("\n          "+t._s(t.product.category))]):t._e()],1)])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,l){"use strict";l.r(e);l(19),l(10);var n=l(46),r=l(254).filter((function(t){return t.featured&&t.published&&!t.winner})),c={name:"featuredProducts",data:function(){return{config:n,products:r}}},o=l(18),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"text-center fadeInUp"},[l("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),l("h4",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),l("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return l("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[l("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:l(253).default})},260:function(t,e,l){"use strict";l.r(e);l(19),l(10);var n=l(46),r=l(254),c={name:"testsieger",data:function(){return{featured:r.filter((function(t){return t.featured&&t.winner&&t.published})),config:n}}},o=l(18),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"text-center fadeInUp"},[l("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),l("h4",{staticClass:"mb-5 h2"},[t._v("Testsieger")])]),t._v(" "),l("div",{staticClass:"row g-4 justify-content-center"},t._l(t.featured,(function(t){return l("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[l("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:l(253).default})},261:function(t,e,l){"use strict";l.r(e);var n=l(46),r={name:"herstellerComponent",data:function(){return{config:n}}},c=l(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"container-xxl py-5 category",attrs:{id:"hersteller"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"text-center fadeInUp"},[l("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n          "+t._s(t.config.seo.mainKeyword)+"\n        ")]),t._v(" "),l("h3",{staticClass:"mb-5 h2"},[t._v("Hersteller")])]),t._v(" "),l("div",{staticClass:"row g-3"},[l("div",{staticClass:"col-lg-7 col-md-6"},[l("div",{staticClass:"row g-3"},[l("div",{staticClass:"col-lg-12 col-md-12 zoomIn"},[l("NuxtLink",{staticClass:"position-relative d-block overflow-hidden",attrs:{to:"/hersteller/trobolo/",title:"Mehr über TROBOLO erfahren"}},[l("div",{staticClass:"grayscaleContainer"},[l("img",{staticClass:"img-fluid grayscale",attrs:{src:"/assets/images/hersteller/trobolo.webp",alt:"TROBOLO"}}),t._v(" "),l("div",{staticClass:"overlay"},[l("div",{staticClass:"overlayText"},[t._v("TROBOLO")])])]),t._v(" "),l("div",{staticClass:"\n                    bg-white\n                    text-center\n                    position-absolute\n                    bottom-0\n                    end-0\n                    py-2\n                    px-3\n                  ",staticStyle:{margin:"1px"}},[l("h5",{staticClass:"m-0"},[t._v("TROBOLO")])])])],1),t._v(" "),l("div",{staticClass:"col-lg-6 col-md-12 zoomIn"},[l("NuxtLink",{staticClass:"position-relative d-block overflow-hidden",attrs:{to:"/hersteller/trelino/",title:"Mehr über Trelino erfahren"}},[l("div",{staticClass:"grayscaleContainer"},[l("img",{staticClass:"img-fluid grayscale",attrs:{src:"/assets/images/hersteller/trelino.webp",alt:"Trelino"}}),t._v(" "),l("div",{staticClass:"overlay"},[l("div",{staticClass:"overlayText"},[t._v("Trelino")])])]),t._v(" "),l("div",{staticClass:"\n                    bg-white\n                    text-center\n                    position-absolute\n                    bottom-0\n                    end-0\n                    py-2\n                    px-3\n                  ",staticStyle:{margin:"1px"}},[l("h5",{staticClass:"m-0"},[t._v("Trelino")])])])],1),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-6 col-md-12 zoomIn"},[l("a",{staticClass:"position-relative d-block overflow-hidden",attrs:{title:"Mehr über Kildwick erfahren"}},[l("div",{staticClass:"grayscaleContainer"},[l("img",{staticClass:"img-fluid grayscale",attrs:{src:"/assets/images/hersteller/kildwick.webp",alt:"Kildwick"}}),t._v(" "),l("div",{staticClass:"overlay"},[l("div",{staticClass:"overlayText"},[t._v("Kildwick")])])]),t._v(" "),l("div",{staticClass:"\n                    bg-white\n                    text-center\n                    position-absolute\n                    bottom-0\n                    end-0\n                    py-2\n                    px-3\n                  ",staticStyle:{margin:"1px"}},[l("h5",{staticClass:"m-0"},[t._v("Kildwick")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-5 col-md-6 zoomIn",staticStyle:{"min-height":"350px"}},[l("a",{staticClass:"position-relative d-block h-100 overflow-hidden"},[l("div",{staticClass:"grayscaleContainer"},[l("img",{staticClass:"img-fluid grayscale",attrs:{src:"/assets/images/hersteller/meinetrenntoilette.webp",alt:"MeineTrenntoilette"}}),t._v(" "),l("div",{staticClass:"overlay"},[l("div",{staticClass:"overlayText"},[t._v("Meine Trenntoilette")])])]),t._v(" "),l("div",{staticClass:"\n                bg-white\n                text-center\n                position-absolute\n                bottom-0\n                end-0\n                py-2\n                px-3\n              ",staticStyle:{margin:"1px"}},[l("h5",{staticClass:"m-0"},[t._v("Meine Trenntoilette")])])])])}],!1,null,null,null);e.default=component.exports},272:function(t,e,l){"use strict";l.r(e);var n=l(46),r={components:{FeaturedProducts:l(257).default},name:"IndexPage",head:{title:n.seo.index.title,meta:[{hid:"description",name:"description",content:n.seo.index.metaDescription},{hid:"robots",name:"robots",content:n.seo.index.robots}]},asyncData:function(){return{config:n}}},c=l(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"container-xxl py-5"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row g-5"},[l("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[l("div",{staticClass:"position-relative h-100"},[l("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{preset:"default",src:"/assets/images/feature-campingtoilette-trobolo-wandago.webp",alt:t.config.seo.mainKeyword}})],1)]),t._v(" "),l("div",{staticClass:"col-lg-6 fadeInUp"},[l("div",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n            Der Shop für die richtige\n          ")]),t._v(" "),l("h1",{staticClass:"mb-4"},[t._v(t._s(t.config.seo.mainKeyword))]),t._v(" "),l("div",{domProps:{innerHTML:t._s(t.config.seo.featureText)}}),t._v(" "),t._m(0),t._v(" "),l("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testsieger"}},[t._v("Zu den Testsiegern")])])])])]),t._v(" "),l("Testsieger"),t._v(" "),l("div",{staticClass:"container-xxl py-5"},[l("div",{staticClass:"container"},[l("div",{staticClass:"text-center fadeInUp"},[l("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n          Gründe\n        ")]),t._v(" "),l("h2",{staticClass:"mb-5 h2"},[t._v("Vorteile einer "+t._s(t.config.seo.mainKeyword))])]),t._v(" "),l("div",{staticClass:"row g-4"},[l("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[l("div",{staticClass:"service-item text-center pt-3"},[l("div",{staticClass:"p-4"},[l("i",{staticClass:"fa fa-3x fa-water text-primary mb-4"}),t._v(" "),l("h5",{staticClass:"mb-3"},[t._v("Wasserfrei")]),t._v(" "),l("p",[t._v("\n                Eine "+t._s(t.config.seo.mainKeyword)+" kommt komplett ohne Wasser\n                aus\n              ")])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),l("FeaturedProducts"),t._v(" "),l("Hersteller"),t._v(" "),t._m(4)],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row gy-2 gx-4 mb-4"},[l("div",{staticClass:"col-sm-6"},[l("p",{staticClass:"mb-0"},[l("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Funktionalität\n              ")])]),t._v(" "),l("div",{staticClass:"col-sm-6"},[l("p",{staticClass:"mb-0"},[l("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Materialien\n              ")])]),t._v(" "),l("div",{staticClass:"col-sm-6"},[l("p",{staticClass:"mb-0"},[l("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Nachhaltigkeit\n              ")])]),t._v(" "),l("div",{staticClass:"col-sm-6"},[l("p",{staticClass:"mb-0"},[l("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Geruchsentwicklung\n              ")])]),t._v(" "),l("div",{staticClass:"col-sm-6"},[l("p",{staticClass:"mb-0"},[l("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Komfort\n              ")])]),t._v(" "),l("div",{staticClass:"col-sm-6"},[l("p",{staticClass:"mb-0"},[l("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v("Entsorgung\n                & Hygiene\n              ")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[l("div",{staticClass:"service-item text-center pt-3"},[l("div",{staticClass:"p-4"},[l("i",{staticClass:"fa fa-3x fa-sun text-primary mb-4"}),t._v(" "),l("h5",{staticClass:"mb-3"},[t._v("Autark")]),t._v(" "),l("p",[t._v("Sie benötigen keine zusätzlichen Sanitäranschlüsse")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[l("div",{staticClass:"service-item text-center pt-3"},[l("div",{staticClass:"p-4"},[l("i",{staticClass:"fa fa-3x fa-ban text-primary mb-4"}),t._v(" "),l("h5",{staticClass:"mb-3"},[t._v("Keine Chemie")]),t._v(" "),l("p",[t._v("Dank Trenneinsatz ist keine Chemie notwendig")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-3 col-sm-6 fadeInUp"},[l("div",{staticClass:"service-item text-center pt-3"},[l("div",{staticClass:"p-4"},[l("i",{staticClass:"fa fa-3x fa-recycle text-primary mb-4"}),t._v(" "),l("h5",{staticClass:"mb-3"},[t._v("Nachhaltig")]),t._v(" "),l("p",[t._v("\n                Benutzen Sie die Ausscheidungen als nährstoffreichen Kompost\n              ")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container-xxl py-5"},[l("div",{staticClass:"container"},[l("div",{staticClass:"text-center fadeInUp"},[l("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n          Team\n        ")]),t._v(" "),l("div",{staticClass:"mb-5 h2"},[t._v("Unsere Experten")])]),t._v(" "),l("div",{staticClass:"row g-4"},[l("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[l("div",{staticClass:"team-item bg-light"},[l("div",{staticClass:"overflow-hidden"},[l("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/img/team-1.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[l("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-instagram"})])])]),t._v(" "),l("div",{staticClass:"text-center p-4"},[l("h5",{staticClass:"mb-0"},[t._v("Ringo Hülsmann")]),t._v(" "),l("small",[t._v('Der "Toilettenkönig"')])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[l("div",{staticClass:"team-item bg-light"},[l("div",{staticClass:"overflow-hidden"},[l("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/img/team-2.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[l("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-instagram"})])])]),t._v(" "),l("div",{staticClass:"text-center p-4"},[l("h5",{staticClass:"mb-0"},[t._v("Leonie Meyer")]),t._v(" "),l("small",[t._v("Biologin")])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[l("div",{staticClass:"team-item bg-light"},[l("div",{staticClass:"overflow-hidden"},[l("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/img/team-3.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[l("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-instagram"})])])]),t._v(" "),l("div",{staticClass:"text-center p-4"},[l("h5",{staticClass:"mb-0"},[t._v("Markus Baum")]),t._v(" "),l("small",[t._v("Ökologe")])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 fadeInUp"},[l("div",{staticClass:"team-item bg-light"},[l("div",{staticClass:"overflow-hidden"},[l("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/img/team-4.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"position-relative d-flex justify-content-center",staticStyle:{"margin-top":"-23px"}},[l("div",{staticClass:"bg-light d-flex justify-content-center pt-2 px-1"},[l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{staticClass:"btn btn-sm-square btn-primary mx-1"},[l("i",{staticClass:"fab fa-instagram"})])])]),t._v(" "),l("div",{staticClass:"text-center p-4"},[l("h5",{staticClass:"mb-0"},[t._v("Anh Tanaka")]),t._v(" "),l("small",[t._v("Innenarchitektin")])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Testsieger:l(260).default,FeaturedProducts:l(257).default,Hersteller:l(261).default})}}]);