<template>
  <div>
    <div class="sidebar-widget schedule-widget mt-5">
      <h5 class="mb-4">{{ product.name }}</h5>
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center">
          <span>Hersteller</span>
          <span
            ><nuxt-link :to="`/hersteller/${product.brand}/`">{{
              product.brand
            }}</nuxt-link></span
          >
        </li>
        <hr />

        <li class="d-flex justify-content-between align-items-center">
          <span>Kategorie</span>
          <span>{{ product.category }}</span>
        </li>
        <hr />

        <div v-for="(spec, index) in product.specifications" :key="index">
          <li class="d-flex justify-content-between align-items-center">
            <span>{{ Object.keys(spec)[0] }}</span>
            <span>{{ Object.values(spec)[0] }}</span>
          </li>
          <hr />
        </div>

        <li class="d-flex justify-content-between align-items-center">
          <span>Bewertung</span>
          <div class="mb-1 mt-3">
            <small
              v-for="star in product.stars"
              :key="star"
              class="pl-3 fa fa-star text-primary"
            ></small>
            <small
              v-for="index in 5 - product.stars"
              :key="index"
              class="fa fa-star text-default"
            ></small>
          </div>
        </li>

        <hr />
      </ul>
      <div class="sidebar-contact-info mt-4">
        <p class="mb-0">Preis</p>
        <h3>{{ parseFloat(product.price).toFixed(2) }} EUR</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productcard",
  props: {
    product: Object,
  },
};
</script>
