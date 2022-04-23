<template>
  <div>
    <!-- Start Content -->
    <div class="container py-5">
      <div class="row">
        <Categories />

        <div class="col-lg-9">
          <ProductFilter />
          <div class="row">
            <Product
              v-for="(product, index) in products"
              :key="index"
              :product="product"
            />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
    <!-- End Content -->
  </div>
</template>

<script>
import products from "~/assets/data/products.json";
export default {
  name: "haus",
  data: () => ({
    products: products.filter((item) => item.category === "Innenbereich"),
  }),
};
</script>
