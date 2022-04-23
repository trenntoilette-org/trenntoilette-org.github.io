export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Trenntoiletten Shop',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/fav.png' },
        ],
        script: [
            { type: 'text/javascript', src: "js/vendor/jquery-2.2.4.min.js" },
            {
                type: 'text/javascript',
                src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js",
                integrity: "sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS",
                crossorigin: "anonymous"
            },
            { type: 'text/javascript', src: "js/vendor/bootstrap.min.js" },
            { type: 'text/javascript', src: "js/jquery.ajaxchimp.min.js" },
            { type: 'text/javascript', src: "js/jquery.nice-select.min.js" },
            { type: 'text/javascript', src: "js/jquery.sticky.js" },
            { type: 'text/javascript', src: "js/nouislider.min.js" },
            { type: 'text/javascript', src: "js/countdown.js" },
            { type: 'text/javascript', src: "js/jquery.magnific-popup.min.js" },
            { type: 'text/javascript', src: "js/owl.carousel.min.js" },
            { type: 'text/javascript', src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE" },
            { type: 'text/javascript', src: "js/gmaps.min.js" },
            { type: 'text/javascript', src: "js/main.js" },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~assets/css/linearicons.css",
        "~assets/css/font-awesome.min.css",
        "~assets/css/themify-icons.css",
        "~assets/css/bootstrap.css",
        "~assets/css/owl.carousel.css",
        "~assets/css/nice-select.css",
        "~assets/css/nouislider.min.css",
        "~assets/css/ion.rangeSlider.css",
        "~assets/css/ion.rangeSlider.skinFlat.css",
        "~assets/css/magnific-popup.css",
        "~assets/css/main.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/sitemap'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    generate: {
        dir: 'docs'
    },

    router: {
        trailingSlash: true
    }
}