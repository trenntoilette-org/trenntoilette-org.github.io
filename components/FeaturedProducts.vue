<template>
  <!-- Testsieger Start -->
  <div class="container-xxl py-5" id="testsieger">
    <div class="container">
      <div class="text-center fadeInUp">
        <div class="section-title bg-white text-center text-primary px-3 h6">
          {{ config.seo.mainKeyword }}
        </div>
        <div class="mb-5 h2">Beliebte Produkte</div>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          v-for="product in products"
          :key="product.name"
          class="col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"
        >
          <ProductItem :product="product" />
        </div>
      </div>
    </div>
  </div>
  <!-- Testsieger End -->
</template>

<script>
import config from "~/assets/data/config.json";
import _products from "~/assets/data/products.json";

const products = _products.filter(
  (x) => x.featured && x.published && !x.winner
);

export default {
  name: "featuredProducts",
  data() {
    return {
      config,
      products,
    };
  },
};
</script>
