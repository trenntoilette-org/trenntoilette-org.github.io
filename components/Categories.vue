<template>
  <div class="col-lg-3">
    <h1 class="h2 pb-4">Kategorien</h1>
    <ul class="list-unstyled templatemo-accordion">
      <li class="pb-3">
        <a
          class="
            collapsed
            d-flex
            justify-content-between
            h3
            text-decoration-none
          "
          href="#"
        >
          Einsatzgebiet
          <i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
        </a>
        <ul class="collapse show list-unstyled pl-3">
          <li>
            <nuxt-link
              class="text-decoration-none"
              to="/haus/"
              title="Trenntoiletten für's Haus"
              >Haus</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="text-decoration-none"
              to="/gartentoiletten/"
              title="Gartentoiletten"
              >Garten</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="text-decoration-none"
              to="/campingtoiletten/"
              title="Campingtoiletten"
              >Camping</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li class="pb-3">
        <a
          class="
            collapsed
            d-flex
            justify-content-between
            h3
            text-decoration-none
          "
          href="#"
        >
          Anbieter
          <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
        </a>
        <ul id="collapseTwo" class="collapse list-unstyled pl-3">
          <li>
            <nuxt-link class="text-decoration-none" to="/hersteller/trobolo/"
              >TROBOLO</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="text-decoration-none" to="/kildwick/"
              >Kildwick</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="text-decoration-none" to="/trelino/"
              >Trelino</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="text-decoration-none" to="/separett/"
              >Separett</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li class="pb-3">
        <a
          class="
            collapsed
            d-flex
            justify-content-between
            h3
            text-decoration-none
          "
          href="#"
        >
          Selbstbau Sets
          <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
        </a>
        <ul id="collapseThree" class="collapse list-unstyled pl-3">
          <li><a class="text-decoration-none" href="#">TROBOLO</a></li>
          <li><a class="text-decoration-none" href="#">Trelino</a></li>
          <li><a class="text-decoration-none" href="#">Separett</a></li>
        </ul>
      </li>
      <li class="pb-3">
        <a
          class="
            collapsed
            d-flex
            justify-content-between
            h3
            text-decoration-none
          "
          href="#"
        >
          Zubehör
          <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
        </a>
        <ul id="collapseThree" class="collapse list-unstyled pl-3">
          <li><a class="text-decoration-none" href="#">Trenneinsätze</a></li>
          <li><a class="text-decoration-none" href="#">Abluftsysteme</a></li>
          <li><a class="text-decoration-none" href="#">Einstreu</a></li>
          <li><a class="text-decoration-none" href="#">Inlays</a></li>
          <li><a class="text-decoration-none" href="#">Komposter</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "categories",
};
</script>
