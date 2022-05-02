<template>
  <div class="single-product">
    <nuxt-link :to="`/product/${product.slug}/`" :title="product.name">
      <nuxt-img
        preset="default"
        class="img-fluid"
        :src="`${config.imageFolder + product.localThumb}`"
        :alt="product.name"
      />
    </nuxt-link>
    <div class="product-details">
      <h6 v-html="product.name">}</h6>
      <div class="price">
        <h6>{{ parseFloat(product.price).toFixed(2) }} €</h6>
        <!-- <h6 class="l-through">$210.00</h6> -->
      </div>
      <div class="prd-bottom">
        <nuxt-link :to="`/product/${product.slug}/`" class="social-info">
          <span class="ti-bag"></span>
          <p class="hover-text">Bestellen</p>
        </nuxt-link>
        <!-- <a href="" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Wishlist</p>
                      </a>
                      <a href="" class="social-info">
                        <span class="lnr lnr-sync"></span>
                        <p class="hover-text">compare</p>
                      </a>
                      <a href="" class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">view more</p>
                      </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
export default {
  name: "singleproduct",
  props: {
    product: Object,
  },
  data() {
    return {
      config,
    };
  },
};
</script>
