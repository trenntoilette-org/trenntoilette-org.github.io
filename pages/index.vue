<template>
  <div>
    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 fadeInUp" style="min-height: 400px">
            <div class="position-relative h-100">
              <nuxt-img
                preset="default"
                class="img-fluid position-absolute w-100 h-100"
                src="/assets/images/feature-campingtoilette-trobolo-wandago.webp"
                :alt="config.seo.mainKeyword"
                style="object-fit: cover; object-position: center bottom"
              />
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <div class="section-title bg-white text-start text-primary pe-3">
              Der Shop für die richtige
            </div>
            <h1 class="mb-4">{{ config.seo.mainKeyword }}</h1>
            <div v-html="config.seo.featureText"></div>
            <div class="row gy-2 gx-4 mb-4">
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Funktionalität
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Materialien
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Nachhaltigkeit
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Geruchsentwicklung
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Komfort
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Entsorgung
                  & Hygiene
                </p>
              </div>
            </div>
            <nuxt-link
              class="btn btn-primary py-3 px-5 mt-2"
              to="/shop/"
              title="Trenntoiletten günstig kaufen in unserem Shop"
              >zum Trenntoiletten Shop</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <Testsieger />

    <!-- Vorteile Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Gründe
          </div>
          <h2 class="mb-5 h2">Vorteile einer {{ config.seo.mainKeyword }}</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-water text-primary mb-4"></i>
                <div class="mb-3 h5">Wasserfrei</div>
                <p>
                  Eine {{ config.seo.mainKeyword }} kommt komplett ohne Wasser
                  aus
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-sun text-primary mb-4"></i>
                <div class="mb-3 h5">Autark</div>
                <p>Sie benötigen keine zusätzlichen Sanitäranschlüsse</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-ban text-primary mb-4"></i>
                <div class="mb-3 h5">Keine Chemie</div>
                <p>Dank Trenneinsatz ist keine Chemie notwendig</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-recycle text-primary mb-4"></i>
                <div class="mb-3 h5">Nachhaltig</div>
                <p>
                  Benutzen Sie die Ausscheidungen als nährstoffreichen Kompost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Vorteile End -->

    <FeaturedProducts />

    <Hersteller />

    <!-- Innenbereich Start -->
    <!-- <div class="container-xxl py-5" id="produkte">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <h5 class="mb-5 h2">Innenbereich</h5>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in innenbereich"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Innenbereich End -->

    <!-- Gartentoiletten Start -->
    <!-- <div class="container-xxl py-5" id="gartentoiletten">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <h6 class="mb-5 h2">Gartentoiletten</h6>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in gartentoiletten"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Gartentoiletten End -->

    <!-- Campingtoiletten Start -->
    <!-- <div class="container-xxl py-5" id="campingtoiletten">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <div class="mb-5 h2">{{ config.seo.mainKeyword }}</div>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in campingtoiletten"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Campingtoiletten End -->

    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Team
          </div>
          <div class="mb-5 h2">Unsere Experten</div>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <nuxt-img
                  preset="default"
                  class="img-fluid"
                  src="/assets/images/img/team-1.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
              <div class="text-center p-4">
                <div class="mb-0 h5">Ringo Hülsmann</div>
                <small>Der "Toilettenkönig"</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <nuxt-img
                  preset="default"
                  class="img-fluid"
                  src="/assets/images/img/team-2.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
              <div class="text-center p-4">
                <div class="mb-0 h5">Leonie Meyer</div>
                <small>Biologin</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <nuxt-img
                  preset="default"
                  class="img-fluid"
                  src="/assets/images/img/team-3.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
              <div class="text-center p-4">
                <div class="mb-0 h5">Markus Baum</div>
                <small>Ökologe</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <nuxt-img
                  preset="default"
                  class="img-fluid"
                  src="/assets/images/img/team-4.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="btn btn-sm-square btn-primary mx-1"
                    aria-label="instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
              <div class="text-center p-4">
                <div class="mb-0 h5">Anh Tanaka</div>
                <small>Innenarchitektin</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import FeaturedProducts from "../components/FeaturedProducts.vue";

export default {
  components: { FeaturedProducts },
  name: "IndexPage",
  head: {
    title: config.seo.index.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: config.seo.index.metaDescription,
      },
      {
        hid: "robots",
        name: "robots",
        content: config.seo.index.robots,
      },
    ],
  },
  asyncData: () => {
    return {
      config,
    };
  },
};
</script>
