<template>
  <div>
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-3">Schnellzugriff</h4>
            <!-- <a class="btn btn-link" href="">Über Uns</a> -->
            <a class="btn btn-link" href="#kontakt">Kontakt</a>
            <!-- <a class="btn btn-link" href="">Datenschutz</a>
            <a class="btn btn-link" href="">AGBs</a>
            <a class="btn btn-link" href="">FAQs & Hilfe</a> -->
            <div v-if="footerLinks">
              <nuxt-link
                v-for="(category, index) in footerLinks"
                :key="index"
                :to="`/kategorie/${category.key}/`"
                :title="category.seo ? category.seo.title : category.key"
                class="btn btn-link"
                >{{ category.name }}</nuxt-link
              >
            </div>
          </div>
          <div class="col-lg-3 col-md-6" id="kontakt">
            <h4 class="text-white mb-3">Kontakt</h4>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt me-3"></i
              >{{ config.companyAddress }}
            </p>
            <!-- <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p> -->
            <p class="mb-2">
              <i class="fa fa-envelope me-3"></i>{{ config.email }}
            </p>
            <div class="d-flex pt-2">
              <a
                v-for="(account, index) in config.socialMediaAccounts.filter(
                  (x) => x.published
                )"
                :key="index"
                class="btn btn-outline-light btn-social"
                :href="account.link"
                ><i :class="account.iconClass"></i
              ></a>
              <!-- <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a> -->
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-3">Gallerie</h4>
            <div class="row g-2 pt-2">
              <div
                class="col-4"
                v-for="(product, index) in footerProducts"
                :key="index"
              >
                <NuxtLink
                  :to="`/produkt/${product.slug}/`"
                  :title="product.linkTitle"
                >
                  <nuxt-img
                    preset="footerThumbnail"
                    class="img-fluid bg-light p-1"
                    :src="`${config.imageFolder}${product.localThumb}`"
                    :alt="product.linkTitle"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-3">Newsletter</h4>
            <p>
              Abonnieren Sie unseren Newsletter um über neue Testberichte und
              Angebote informiert zu werden.
            </p>
            <div class="position-relative mx-auto" style="max-width: 400px">
              <input
                class="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Ihre Email"
              />
              <button
                type="button"
                class="
                  btn btn-primary
                  py-2
                  position-absolute
                  top-0
                  end-0
                  mt-2
                  me-2
                "
              >
                Mitmachen
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;
              <nuxt-link class="border-bottom" to="/" :title="config.title">{{
                config.domain
              }}</nuxt-link>
              - Alle Rechte vorbehalten.
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <nuxt-link to="/" :title="config.title">Home</nuxt-link>
                <a href="#testsieger">Testsieger</a>
                <!-- <a href="#hilfe">Hilfe</a>
                <a href="#faq">FAQs</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top -->
    <a
      href="#"
      class="btn btn-lg btn-primary btn-lg-square back-to-top"
      title="Nach oben scrollen"
      ><i class="bi bi-arrow-up"></i
    ></a>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import products from "~/assets/data/products.json";

const footerLinks = config.categories.filter((x) => x.footerLink);
const footerProducts = products
  .filter((x) => x.featured && x.published)
  .slice(0, 6);
export default {
  name: "footerComponent",
  data() {
    return {
      config,
      footerLinks,
      footerProducts,
    };
  },
};
</script>
