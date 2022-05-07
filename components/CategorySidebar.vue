<template>
  <div>
    <div class="row">
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style="width: 280px"
      >
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-3 mb-md-0
            me-md-auto
            text-white text-decoration-none
          "
        >
          <span class="fs-4">Kategorien</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li
            v-for="(category, index) in config.categories"
            :key="index"
            class="nav-item"
          >
            <nuxt-link
              :title="category.seo ? category.seo.title : category.name"
              :to="
                category.type === 'manufacturer'
                  ? `/hersteller/${category.key}/`
                  : `/kategorie/${category.key}/`
              "
              class="nav-link text-white"
            >
              {{ category.name }}
            </nuxt-link>
          </li>
        </ul>
        <hr />
        <!-- <div class="dropdown">
          <a
            href="#"
            class="
              d-flex
              align-items-center
              text-white text-decoration-none
              dropdown-toggle
            "
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";

export default {
  name: "categorySidebar",
  data() {
    return {
      config,
    };
  },
};
</script>
