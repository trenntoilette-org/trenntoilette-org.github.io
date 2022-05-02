<template>
  <div>
    <!-- Start related-product Area -->
    <section class="related-product-area section_gap_bottom pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <div class="section-title">
              <h1>Deals der Woche</h1>
              <p>
                Die besten Trenntoiletten und Zubehör Deals der Woche. Wir
                durchsuchen das Netz ständig nach dem bestem Preis und bieten
                daher eine Best-Preis-Garantie
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <div class="row">
              <div
                v-for="(product, index) in featured"
                :key="index"
                class="col-lg-4 col-md-4 col-sm-6 mb-20"
              >
                <div class="single-related-product d-flex">
                  <nuxt-link
                    :to="`/product/${product.slug}/`"
                    :title="product.name"
                    ><nuxt-img
                      preset="seventyFourty"
                      :src="`${config.imageFolder + product.localThumb}`"
                      :alt="product.name"
                  /></nuxt-link>
                  <div class="desc">
                    <nuxt-link
                      :to="`/product/${product.slug}/`"
                      :title="product.name"
                      class="title"
                      v-html="product.name"
                    ></nuxt-link>
                    <div class="price">
                      <h6>{{ parseFloat(product.price).toFixed(2) }} €</h6>
                      <!-- <h6 class="l-through">$210.00</h6> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="ctg-right">
              <nuxt-link
                :to="`/product/${bigProduct.slug}/`"
                :title="bigProduct.name"
              >
                <nuxt-img
                  preset="default"
                  class="img-fluid d-block mx-auto"
                  :src="`${config.imageFolder + bigProduct.localThumb}`"
                  :alt="bigProduct.name"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End related-product Area -->
  </div>
</template>

<script>
import trenntoiletten from "~/assets/data/trenntoiletten.json";
import config from "~/assets/data/config.json";

const featured = trenntoiletten
  .filter((product) => product.published == true && product.featured == true)
  .slice(0, 6);
const bigProduct = trenntoiletten.find((x) => x.sku == "M20XX1313");

export default {
  name: "weeklydeals",
  data() {
    return {
      config,
      featured,
      bigProduct,
    };
  },
};
</script>
