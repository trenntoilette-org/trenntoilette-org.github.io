<template>
  <div class="col-xl-3 col-lg-4 col-md-5">
    <div class="sidebar-categories">
      <div class="head">Kategorien</div>
      <ul class="main-categories">
        <li
          class="main-nav-list"
          v-for="(category, index) in categories.filter(
            (category) => !category.subCategories
          )"
          :key="index"
        >
          <nuxt-link :to="`/kategorie/${category.key}/`"
            ><span class="lnr lnr-arrow-right"></span>{{ category.name
            }}<span class="number">(53)</span></nuxt-link
          >
        </li>
        <li
          class="main-nav-list"
          v-for="(category, index) in categories.filter(
            (category) => category.subCategories
          )"
          :key="index"
        >
          <a
            data-toggle="collapse"
            href="#meatFish"
            aria-expanded="false"
            aria-controls="meatFish"
            ><span class="lnr lnr-arrow-right"></span>Zubehör<span
              class="number"
              >(53)</span
            ></a
          >
          <ul
            class="collapse"
            id="meatFish"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="meatFish"
          >
            <li
              class="main-nav-list child"
              v-for="(subCategory, index) in category.subCategories"
              :key="index"
            >
              <nuxt-link :to="`/kategorie/${subCategory.key}/`"
                >{{ subCategory.name
                }}<span class="number">(13)</span></nuxt-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="sidebar-filter mt-50">
      <div class="top-filter-head">Produkt Filters</div>
      <div class="common-filter">
        <div class="head">Marken</div>
        <form action="#">
          <ul>
            <li class="filter-list">
              <nuxt-link
                :to="`/hersteller/TROBOLO/`"
                title="Trenntoiletten von TROBOLO"
                class="removeLinkAttr"
              >
                <input
                  class="pixel-radio"
                  type="radio"
                  id="apple"
                  name="brand"
                /><label for="TROBOLO">TROBOLO<span>(29)</span></label>
              </nuxt-link>
            </li>
            <li class="filter-list">
              <nuxt-link
                :to="`/hersteller/Kompotoi/`"
                title="Trenntoiletten von Kompotoi"
                class="removeLinkAttr"
              >
                <input
                  class="pixel-radio"
                  type="radio"
                  id="asus"
                  name="brand"
                /><label for="Kompotoi">Kompotoi<span>(29)</span></label>
              </nuxt-link>
            </li>
            <li class="filter-list">
              <nuxt-link
                :to="`/hersteller/MeineTrenntoilette/`"
                title="Trenntoiletten von Trelino"
                class="removeLinkAttr"
              >
                <input
                  class="pixel-radio"
                  type="radio"
                  id="gionee"
                  name="brand"
                /><label for="Trelino">Trelino<span>(19)</span></label>
              </nuxt-link>
            </li>
          </ul>
        </form>
      </div>
      <!-- <div class="common-filter">
        <div class="head">Color</div>
        <form action="#">
          <ul>
            <li class="filter-list">
              <input
                class="pixel-radio"
                type="radio"
                id="black"
                name="color"
              /><label for="black">Black<span>(29)</span></label>
            </li>
            <li class="filter-list">
              <input
                class="pixel-radio"
                type="radio"
                id="balckleather"
                name="color"
              /><label for="balckleather">Black Leather<span>(29)</span></label>
            </li>
            <li class="filter-list">
              <input
                class="pixel-radio"
                type="radio"
                id="blackred"
                name="color"
              /><label for="blackred">Black with red<span>(19)</span></label>
            </li>
            <li class="filter-list">
              <input
                class="pixel-radio"
                type="radio"
                id="gold"
                name="color"
              /><label for="gold">Gold<span>(19)</span></label>
            </li>
            <li class="filter-list">
              <input
                class="pixel-radio"
                type="radio"
                id="spacegrey"
                name="color"
              /><label for="spacegrey">Spacegrey<span>(19)</span></label>
            </li>
          </ul>
        </form>
      </div> -->
      <!-- <div class="common-filter">
        <div class="head">Price</div>
        <div class="price-range-area">
          <div id="price-range"></div>
          <div class="value-wrapper d-flex">
            <div class="price">Price:</div>
            <span>$</span>
            <div id="lower-value"></div>
            <div class="to">to</div>
            <span>$</span>
            <div id="upper-value"></div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import categories from "~/assets/data/categories.json";

export default {
  name: "categorysidebar",
  data() {
    return {
      categories,
    };
  },
};
</script>