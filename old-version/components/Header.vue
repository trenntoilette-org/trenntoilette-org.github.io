<template>
  <div>
    <header class="header_area sticky-header">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light main_box">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <nuxt-link
              class="navbar-brand logo_h"
              to="/"
              :title="config.siteSlogan"
              ><nuxt-img src="/assets/images/logo.png" :alt="config.siteSlogan"
            /></nuxt-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div
              class="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item active">
                  <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/shop/">Shop</nuxt-link>
                </li>
                <li class="nav-item submenu dropdown">
                  <nuxt-link
                    to="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Trenntoiletten</nuxt-link
                  >
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/kategorie/Innenbereich/"
                        >Haus</nuxt-link
                      >
                    </li>
                    <li class="nav-item">
                      <nuxt-link
                        class="nav-link"
                        to="/kategorie/Campingtoilette/"
                        >Campingtoiletten</nuxt-link
                      >
                    </li>
                    <li class="nav-item">
                      <nuxt-link
                        class="nav-link"
                        to="/kategorie/Gartentoilette/"
                        >Gartentoiletten</nuxt-link
                      >
                    </li>
                  </ul>
                </li>
                <!-- <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Pages</a
                  >
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="login.html">Login</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="tracking.html">Tracking</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="elements.html">Elements</a>
                    </li>
                  </ul>
                </li> -->
                <!-- <li class="nav-item">
                  <a class="nav-link" href="/kontakt/">Kontakt</a>
                </li> -->
              </ul>
              <!-- <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                  <a href="#" class="cart"><span class="ti-bag"></span></a>
                </li>
                <li class="nav-item">
                  <button class="search">
                    <span class="lnr lnr-magnifier" id="search"></span>
                  </button>
                </li>
              </ul> -->
            </div>
          </div>
        </nav>
      </div>
      <div class="search_input" id="search_input_box">
        <div class="container">
          <form class="d-flex justify-content-between">
            <input
              type="text"
              class="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" class="btn"></button>
            <span
              class="lnr lnr-cross"
              id="close_search"
              title="Close Search"
            ></span>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";

export default {
  name: "HeaderComponent",
  data() {
    return {
      config,
    };
  },
};
</script>
