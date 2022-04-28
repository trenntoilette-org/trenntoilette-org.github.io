<template>
  <div>
    <!-- start banner Area -->
    <section class="banner-area">
      <div class="container">
        <div class="row fullscreen align-items-center justify-content-start">
          <div class="col-lg-12">
            <div class="active-banner-slider owl-carousel">
              <!-- single-slide -->
              <div
                v-for="(product, index) in headerFeatures"
                :key="index"
                class="row single-slide align-items-center d-flex"
              >
                <div class="col-lg-5 col-md-6">
                  <div class="banner-content">
                    <h1>{{ product.headerFeature.title }}</h1>
                    <p>
                      {{ product.headerFeature.text }}
                    </p>
                    <div class="add-bag d-flex align-items-center">
                      <nuxt-link
                        :to="`/product/${product.sku}/`"
                        class="add-btn"
                        href=""
                        ><span class="lnr lnr-cross"></span
                      ></nuxt-link>
                      <span class="add-text text-uppercase">Mehr erfahren</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="banner-img">
                    <nuxt-link
                      :to="`/product/${product.sku}/`"
                      class="add-btn"
                      href=""
                    >
                      <img class="img-fluid" :src="product.image" alt="" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- single-slide -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->

    <!-- start features Area -->
    <section class="features-area section_gap">
      <div class="container">
        <div class="row features-inner">
          <!-- single features -->
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-features">
              <div class="f-icon">
                <img src="/assets/images/img/features/f-icon1.png" alt="" />
              </div>
              <h6>Kein Wasser</h6>
              <p>Eine Trenntoilete benötigt kein Wasser</p>
            </div>
          </div>
          <!-- single features -->
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-features">
              <div class="f-icon">
                <img src="/assets/images/img/features/f-icon2.png" alt="" />
              </div>
              <h6>Keine Chemie</h6>
              <p>Trenntoiletten kommen komplett ohne Chemie aus</p>
            </div>
          </div>
          <!-- single features -->
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-features">
              <div class="f-icon">
                <img src="/assets/images/img/features/f-icon3.png" alt="" />
              </div>
              <h6>Geruchsfrei</h6>
              <p>
                Eine Trennung von Urin und Feststoffen verhindert die
                Geruchsentwicklung
              </p>
            </div>
          </div>
          <!-- single features -->
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-features">
              <div class="f-icon">
                <img src="/assets/images/img/features/f-icon4.png" alt="" />
              </div>
              <h6>Überall einsetzbar</h6>
              <p>
                Du benötigst keine externe Wasserzufuhr oder Sanitäranschlüsse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end features Area -->

    <!-- Start category Area -->
    <section class="category-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12">
            <div class="row">
              <div class="col-lg-8 col-md-8">
                <div class="single-deal">
                  <div class="overlay"></div>
                  <img
                    class="img-fluid w-100"
                    src="/assets/images/img/category/c1.jpg"
                    alt=""
                  />
                  <nuxt-link
                    to="/kategorie/Campingtoilette/"
                    title="Campingtoiletten für Van, Wohnmobil und Camper"
                  >
                    <div class="deal-details">
                      <h6 class="deal-title">Campingtoiletten</h6>
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="single-deal">
                  <div class="overlay"></div>
                  <img
                    class="img-fluid w-100"
                    src="/assets/images/img/category/c2.jpg"
                    alt=""
                  />
                  <nuxt-link
                    to="/kategorie/Innenbereich/"
                    title="Trenntoileten für's Haus oder Tiny House"
                  >
                    <div class="deal-details">
                      <h6 class="deal-title">Trenntoiletten für's Haus</h6>
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="single-deal">
                  <div class="overlay"></div>
                  <img
                    class="img-fluid w-100"
                    src="/assets/images/img/category/c3.jpg"
                    alt=""
                  />
                  <nuxt-link to="/shop/" title="Zubehör für Trenntoiletten">
                    <div class="deal-details">
                      <h6 class="deal-title">Trenntoiletten Zubehör</h6>
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="single-deal">
                  <div class="overlay"></div>
                  <img
                    class="img-fluid w-100"
                    src="/assets/images/img/category/c4.jpg"
                    alt=""
                  />
                  <nuxt-link
                    to="/kategorie/Trenneinsatz/"
                    title="Einsatz für die Trenntoilette"
                  >
                    <div class="deal-details">
                      <h6 class="deal-title">Trenntoilete Einsatz</h6>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-deal">
              <div class="overlay"></div>
              <img
                class="img-fluid w-100"
                src="/assets/images/img/category/c5.jpg"
                alt=""
              />
              <nuxt-link
                to="/kategorie/Gartentoilette/"
                title="Gartentoiletten"
              >
                <div class="deal-details">
                  <h6 class="deal-title">Gartentoiletten</h6>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End category Area -->

    <!-- start product Area -->
    <section class="owl-carousel active-product-area section_gap">
      <!-- single product slide -->
      <div class="single-product-slider">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-title">
                <h1>Trenntoiletten für's Haus</h1>
                <p>Die meistverkauften Trenntoiletten</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-3 col-md-6"
              v-for="(product, index) in products"
              :key="index"
            >
              <div class="single-product">
                <nuxt-link
                  :to="`/product/${product.sku}/`"
                  :title="product.name"
                >
                  <img
                    class="img-fluid"
                    :src="product.image"
                    :alt="product.name"
                  />
                </nuxt-link>
                <div class="product-details">
                  <h6>
                    <nuxt-link
                      class="removeLinkAttr"
                      :to="`/product/${product.sku}/`"
                      :title="product.name"
                      >{{ product.name }}</nuxt-link
                    >
                  </h6>
                  <div class="price">
                    <h6>{{ product.price }} €</h6>
                    <!-- <h6 class="l-through">$210.00</h6> -->
                  </div>
                  <div class="prd-bottom">
                    <nuxt-link
                      :to="`/product/${product.sku}/`"
                      :title="product.name"
                      class="social-info"
                    >
                      <span class="ti-bag"></span>
                      <p class="hover-text">Bestellen</p>
                    </nuxt-link>
                    <!-- <a href="" class="social-info">
                      <span class="lnr lnr-heart"></span>
                      <p class="hover-text">Mehr erfahren</p>
                    </a>
                    <a href="" class="social-info">
                      <span class="lnr lnr-sync"></span>
                      <p class="hover-text">compare</p>
                    </a> -->
                    <!-- <a href="" class="social-info">
                      <span class="lnr lnr-move"></span>
                      <p class="hover-text">Mehr erfahren</p>
                    </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- single product slide -->
      <div class="single-product-slider">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-title">
                <h1>Campingtoiletten</h1>
                <p>Die meistverkauften Campingtoiletten</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-3 col-md-6"
              v-for="(product, index) in campingtoiletten"
              :key="index"
            >
              <div class="single-product">
                <img class="img-fluid" :src="product.image" alt="" />
                <div class="product-details">
                  <h6>{{ product.name }}</h6>
                  <div class="price">
                    <h6>{{ product.price }}</h6>
                    <!-- <h6 class="l-through">$210.00</h6> -->
                  </div>
                  <div class="prd-bottom">
                    <nuxt-link
                      :to="`/product/${product.sku}/`"
                      class="social-info"
                    >
                      <span class="ti-bag"></span>
                      <p class="hover-text">Bestellen</p>
                    </nuxt-link>
                    <!-- <a href="" class="social-info">
                      <span class="lnr lnr-heart"></span>
                      <p class="hover-text">Mehr erfahren</p>
                    </a>
                    <a href="" class="social-info">
                      <span class="lnr lnr-sync"></span>
                      <p class="hover-text">compare</p>
                    </a> -->
                    <a href="" class="social-info">
                      <span class="lnr lnr-move"></span>
                      <p class="hover-text">Mehr erfahren</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- single product slide -->
      <div class="single-product-slider">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-title">
                <h1>Gartentoiletten</h1>
                <p>Die meistverkauften Gartentoiletten</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-3 col-md-6"
              v-for="(product, index) in gartentoiletten"
              :key="index"
            >
              <div class="single-product">
                <img class="img-fluid" :src="product.image" alt="" />
                <div class="product-details">
                  <h6>{{ product.name }}</h6>
                  <div class="price">
                    <h6>{{ product.price }}</h6>
                    <!-- <h6 class="l-through">$210.00</h6> -->
                  </div>
                  <div class="prd-bottom">
                    <nuxt-link
                      :to="`/product/${product.sku}/`"
                      class="social-info"
                    >
                      <span class="ti-bag"></span>
                      <p class="hover-text">Bestellen</p>
                    </nuxt-link>
                    <!-- <a href="" class="social-info">
                      <span class="lnr lnr-heart"></span>
                      <p class="hover-text">Mehr erfahren</p>
                    </a>
                    <a href="" class="social-info">
                      <span class="lnr lnr-sync"></span>
                      <p class="hover-text">compare</p>
                    </a> -->
                    <a href="" class="social-info">
                      <span class="lnr lnr-move"></span>
                      <p class="hover-text">Mehr erfahren</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end product Area -->

    <!-- Start exclusive deal Area -->
    <section class="exclusive-deal-area">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-6 no-padding exclusive-left">
            <div class="row clock_sec clockdiv" id="clockdiv">
              <div class="col-lg-12">
                <h1>Exclusive Hot Deal Ends Soon!</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
              <div class="col-lg-12">
                <div class="row clock-wrap">
                  <div class="col clockinner1 clockinner">
                    <h1 class="days">150</h1>
                    <span class="smalltext">Days</span>
                  </div>
                  <div class="col clockinner clockinner1">
                    <h1 class="hours">23</h1>
                    <span class="smalltext">Hours</span>
                  </div>
                  <div class="col clockinner clockinner1">
                    <h1 class="minutes">47</h1>
                    <span class="smalltext">Mins</span>
                  </div>
                  <div class="col clockinner clockinner1">
                    <h1 class="seconds">59</h1>
                    <span class="smalltext">Secs</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="" class="primary-btn">Shop Now</a>
          </div>
          <div class="col-lg-6 no-padding exclusive-right">
            <div class="active-exclusive-product-slider">
              <!-- single exclusive carousel -->
              <div
                v-for="(product, index) in headerFeatures"
                :key="index"
                class="single-exclusive-slider"
              >
                <nuxt-link
                  :to="`/product/${product.sku}/`"
                  :title="product.name"
                >
                  <img
                    class="img-fluid"
                    :src="product.image"
                    :alt="product.name"
                  />
                </nuxt-link>
                <div class="product-details">
                  <div class="price">
                    <h6>{{ product.price }} €</h6>
                    <!-- <h6 class="l-through">$210.00</h6> -->
                  </div>
                  <h4>
                    <nuxt-link
                      class="removeLinkAttr"
                      :to="`/product/${product.sku}/`"
                      :title="product.name"
                      >{{ product.name }}</nuxt-link
                    >
                  </h4>
                  <div
                    class="
                      add-bag
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <a class="add-btn" href=""><span class="ti-bag"></span></a>
                    <span class="add-text text-uppercase">Mehr erfahren</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End exclusive deal Area -->

    <!-- Start brand Area -->
    <section class="brand-area section_gap">
      <div class="container">
        <div class="row">
          <a class="col single-img" href="#">
            <img
              class="img-fluid d-block mx-auto"
              src="/assets/images/img/brand/1.png"
              alt=""
            />
          </a>
          <a class="col single-img" href="#">
            <img
              class="img-fluid d-block mx-auto"
              src="/assets/images/img/brand/2.png"
              alt=""
            />
          </a>
          <a class="col single-img" href="#">
            <img
              class="img-fluid d-block mx-auto"
              src="/assets/images/img/brand/3.png"
              alt=""
            />
          </a>
          <a class="col single-img" href="#">
            <img
              class="img-fluid d-block mx-auto"
              src="/assets/images/img/brand/4.png"
              alt=""
            />
          </a>
          <a class="col single-img" href="#">
            <img
              class="img-fluid d-block mx-auto"
              src="/assets/images/img/brand/5.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
    <!-- End brand Area -->

    <WeeklyDeals />
  </div>
</template>

<script>
import trenntoiletten from "~/assets/data/trenntoiletten.json";
import config from "~/assets/data/config.json";

const pageKey = "index";
const meta = config.meta.find((x) => x.key == pageKey);
const products = trenntoiletten.filter(
  (product) => product.published == true && product.featured == true
);
const campingtoiletten = trenntoiletten.filter(
  (x) => x.category == "Campingtoilette" && x.published
);
const gartentoiletten = trenntoiletten.filter(
  (x) => x.category == "Gartentoilette" && x.published
);
const headerFeatures = trenntoiletten.filter((x) => x.headerFeature);

export default {
  name: "IndexPage",
  title: meta.title,
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: meta.metaDescription,
        },
      ],
    };
  },
  data: () => ({
    products,
    headerFeatures,
    campingtoiletten,
    gartentoiletten,
  }),
};
</script>

<style scoped>
.removeLinkAttr {
  text-decoration: none;
  color: grey;
}
</style>