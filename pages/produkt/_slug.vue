<template>
  <div>
    <ProductHeader
      :productName="product.name"
      :textContent="product.description"
      :productImage="`${config.imageFolder}${product.localThumb}`"
    ></ProductHeader>

    <!-- About Start -->
    <div class="container-xxl py-5" id="testbericht">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4">{{ product.name }}</h2>
            <div v-if="product.seo && product.seo.texts">
              <div v-for="(text, index) in product.seo.texts" :key="index">
                <h5 class="mb-3 mt-5">
                  {{ text.title }}
                </h5>
                <p class="mb-4">
                  {{ text.text }}
                </p>
              </div>
            </div>

            <div class="row gy-2 gx-4 mb-5 mt-5">
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Funktionalität
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Materialien
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Nachhaltigkeit
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Geruchsentwicklung
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Komfort
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Entsorgung & Hygiene
                </p>
              </div>
            </div>
            <a
              class="btn btn-primary py-3 px-5"
              target="_blank"
              rel="nofollow noopener"
              :href="product.shopLink"
              >Bestellen</a
            >
          </div>
          <div class="col-lg-4 fadeInUp">
            <ProductCard :product="product" />
            <div class="mt-5">
              <a
                class="btn btn-primary py-3 px-5"
                target="_blank"
                rel="nofollow noopener"
                :href="product.shopLink"
                style="display: block; width: 100%"
                >{{ product.brand }} Online Shop</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>


<script>
import trenntoiletten from "~/assets/data/products.json";
import config from "~/assets/data/config.json";

export default {
  name: "product",
  head() {
    return {
      title:
        this.product.seo && this.product.seo.title
          ? this.product.seo.title
          : `${this.product.name} online kaufen`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.product.seo && this.product.seo.metaDescription
              ? this.product.seo.metaDescription
              : `${this.product.name} online kaufen auf Trenntoilette.org. Alle wichtigen Informationen zu ${this.product.name}.`,
        },
        {
          hid: "robots",
          name: "robots",
          content:
            this.product.seo &&
            this.product.seo.robots &&
            this.product.published
              ? this.product.seo.robots
              : config.seo.globalProductRobots || "noindex, follow",
        },
      ],
    };
  },
  async asyncData({ route }) {
    const slug = route.params.slug;
    return {
      product: trenntoiletten.find((x) => x.slug == route.params.slug),
      config,
    };
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          name: this.product.name,
          image: [
            config.hostname + config.imageFolder + this.product.localThumb,
          ],
          description: this.product.seo
            ? this.product.seo.metaDescription
            : this.product.brand + " " + this.product.name,
          sku: this.product.sku,
          brand: {
            "@type": "Brand",
            name: this.product.brand,
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: this.product.stars.toString(),
              bestRating: this.product.stars.toString(),
            },
            author: {
              "@type": "Organization",
              name: config.organization,
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (Math.random() * (5.0 - 4.0) + 4.0)
              .toFixed(1)
              .toString(),
            reviewCount: this.product.reviewCount,
          },
          offers: {
            "@type": "Offer",
            url: config.hostname + config.productUrl + this.product.slug + "/",
            priceCurrency: "EUR",
            price: this.product.price,
            priceValidUntil: "2024-11-20",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": config.hostname,
                name: "Trenntoiletten",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id":
                  config.hostname + config.productUrl + this.product.slug + "/",
                name: this.product.name,
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
