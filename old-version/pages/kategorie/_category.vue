<template>
  <div id="category">
    <!-- Start Banner Area -->
    <section class="banner-area organic-breadcrumb">
      <div class="container">
        <div
          class="
            breadcrumb-banner
            d-flex
            flex-wrap
            align-items-center
            justify-content-end
          "
        >
          <div class="col-first">
            <h1>{{ category }}</h1>
            <!-- <nav class="d-flex align-items-center">
              <a href="index.html"
                >Home<span class="lnr lnr-arrow-right"></span
              ></a>
              <a href="#">Shop<span class="lnr lnr-arrow-right"></span></a>
              <a href="category.html">Fashon Category</a>
            </nav> -->
          </div>
        </div>
      </div>
    </section>
    <!-- End Banner Area -->

    <div class="container">
      <div class="row">
        <CategorySidebar />
        <div class="col-xl-9 col-lg-8 col-md-7">
          <!-- Start Filter Bar -->
          <!-- <div class="filter-bar d-flex flex-wrap align-items-center">
            <div class="sorting">
              <select>
                <option value="1">Default sorting</option>
                <option value="1">Default sorting</option>
                <option value="1">Default sorting</option>
              </select>
            </div>
            <div class="sorting mr-auto">
              <select>
                <option value="1">Show 12</option>
                <option value="1">Show 12</option>
                <option value="1">Show 12</option>
              </select>
            </div>
            <div class="pagination">
              <a href="#" class="prev-arrow"
                ><i class="fa fa-long-arrow-left" aria-hidden="true"></i
              ></a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#" class="dot-dot"
                ><i class="fa fa-ellipsis-h" aria-hidden="true"></i
              ></a>
              <a href="#">6</a>
              <a href="#" class="next-arrow"
                ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
              ></a>
            </div>
          </div> -->
          <!-- End Filter Bar -->

          <!-- Start Best Seller -->
          <section class="lattest-product-area pb-40 category-list">
            <div class="row">
              <div
                v-for="(product, index) in products"
                :key="index"
                class="col-lg-4 col-md-6"
              >
                <SingleProduct :product="product" />
              </div>
            </div>
          </section>
          <!-- End Best Seller -->

          <!-- Start Filter Bar -->
          <!-- <div class="filter-bar d-flex flex-wrap align-items-center">
            <div class="sorting mr-auto">
              <select>
                <option value="1">Show 12</option>
                <option value="1">Show 12</option>
                <option value="1">Show 12</option>
              </select>
            </div>
            <div class="pagination">
              <a href="#" class="prev-arrow"
                ><i class="fa fa-long-arrow-left" aria-hidden="true"></i
              ></a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#" class="dot-dot"
                ><i class="fa fa-ellipsis-h" aria-hidden="true"></i
              ></a>
              <a href="#">6</a>
              <a href="#" class="next-arrow"
                ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
              ></a>
            </div>
          </div> -->
          <!-- End Filter Bar -->
        </div>
      </div>
    </div>

    <WeeklyDeals />

    <!-- Modal Quick Product View -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="container relative">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="product-quick-view">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="quick-view-carousel">
                  <div
                    class="item"
                    style="background: url(img/organic-food/q1.jpg)"
                  ></div>
                  <div
                    class="item"
                    style="background: url(img/organic-food/q1.jpg)"
                  ></div>
                  <div
                    class="item"
                    style="background: url(img/organic-food/q1.jpg)"
                  ></div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="quick-view-content">
                  <div class="top">
                    <h3 class="head">Mill Oil 1000W Heater, White</h3>
                    <div class="price d-flex align-items-center">
                      <span class="lnr lnr-tag"></span>
                      <span class="ml-10">$149.99</span>
                    </div>
                    <div class="category">Category: <span>Household</span></div>
                    <div class="available">
                      Availibility: <span>In Stock</span>
                    </div>
                  </div>
                  <div class="middle">
                    <p class="content">
                      Mill Oil is an innovative oil filled radiator with the
                      most modern technology. If you are looking for something
                      that can make your interior look awesome, and at the same
                      time give you the pleasant warm feeling during the winter.
                    </p>
                    <a href="#" class="view-full"
                      >View full Details
                      <span class="lnr lnr-arrow-right"></span
                    ></a>
                  </div>
                  <div class="bottom">
                    <div class="color-picker d-flex align-items-center">
                      Color:
                      <span class="single-pick"></span>
                      <span class="single-pick"></span>
                      <span class="single-pick"></span>
                      <span class="single-pick"></span>
                      <span class="single-pick"></span>
                    </div>
                    <div
                      class="quantity-container d-flex align-items-center mt-15"
                    >
                      Anzahl:
                      <input
                        type="text"
                        class="quantity-amount ml-15"
                        value="1"
                      />
                      <div class="arrow-btn d-inline-flex flex-column">
                        <button
                          class="increase arrow"
                          type="button"
                          title="Increase Quantity"
                        >
                          <span class="lnr lnr-chevron-up"></span>
                        </button>
                        <button
                          class="decrease arrow"
                          type="button"
                          title="Decrease Quantity"
                        >
                          <span class="lnr lnr-chevron-down"></span>
                        </button>
                      </div>
                    </div>
                    <div class="d-flex mt-20">
                      <a href="#" class="view-btn color-2"
                        ><span>Add to Cart</span></a
                      >
                      <a href="#" class="like-btn"
                        ><span class="lnr lnr-layers"></span
                      ></a>
                      <a href="#" class="like-btn"
                        ><span class="lnr lnr-heart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import trenntoiletten from "~/assets/data/trenntoiletten.json";
import categories from "~/assets/data/categories.json";
import WeeklyDeals from "../../components/WeeklyDeals.vue";

export default {
  components: { WeeklyDeals },
  name: "shop",
  async asyncData({ route }) {
    const category = route.params.category;
    return {
      products: trenntoiletten.filter((x) => x.category == category),
      categories,
      category,
    };
  },
};
</script>
