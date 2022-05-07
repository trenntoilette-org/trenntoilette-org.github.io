<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-lg-2 fadeInUp">
            <CategorySidebar />
          </div>
          <div class="col-lg-10 fadeInUp">
            <Products :products="products" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "~/assets/data/products.json";
import config from "~/assets/data/config.json";

export default {
  name: "categoryComponent",
  data() {
    return {
      products,
    };
  },
};
</script>
