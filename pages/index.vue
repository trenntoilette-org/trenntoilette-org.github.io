<template>
  <div>
    <FeaturedHeader />

    <Testsieger />

    <Advantages />

    <FeaturedProducts />

    <Hersteller />

    <Team />
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import products from "~/assets/data/products.json";

export default {
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
      products: products.slice(0, 50),
    };
  },
};
</script>
