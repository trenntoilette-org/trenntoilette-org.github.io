<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-lg-2 fadeInUp">
            <CategorySidebar />
          </div>
          <div class="col-lg-10 fadeInUp">
            <Products :products="filteredProducts" />
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
  head() {
    const category = this.category;
    const categoryData = config.categories.find((x) => x.key === category);

    return {
      title:
        categoryData.seo && categoryData.seo.title
          ? categoryData.seo.title
          : "Produkte von " + categoryData.name + " günstig kaufen.",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            categoryData.seo && categoryData.seo.metaDescription
              ? categoryData.seo.metaDescription
              : "Kaufe Produkte von " +
                categoryData.name +
                " günstig online in unserem Shop. Best-Preis-Garantie. Markenprodukte und Zubehör von " +
                categoryData.name +
                ".",
        },
        {
          hid: "robots",
          name: "robots",
          content:
            categoryData.seo && categoryData.seo.robots
              ? categoryData.seo.robots
              : "noindex, follow",
        },
      ],
    };
  },
  data() {
    const category = this.$route.params.category;
    const filteredProducts = products.filter(
      (x) => x.brand.toLowerCase() === category && x.published
    );
    return {
      filteredProducts,
      category,
      categoryData: this.categoryData,
    };
  },
};
</script>
