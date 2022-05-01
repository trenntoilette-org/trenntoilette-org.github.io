<template>
  <div>
    <footer class="footer-area section_gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Über uns</h6>
              <p>
                {{ config.siteDescription }}
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Bleib immer auf dem neusten Stand!</p>
              <div class="" id="mc_embed_signup">
                <form
                  target="_blank"
                  novalidate="true"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  class="form-inline"
                >
                  <div class="d-flex flex-row">
                    <input
                      class="form-control"
                      name="EMAIL"
                      placeholder="Email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email '"
                      required=""
                      type="email"
                    />

                    <button class="click-btn btn btn-default">
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </button>
                    <div style="position: absolute; left: -5000px">
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabindex="-1"
                        value=""
                        type="text"
                      />
                    </div>

                    <!-- <div class="col-lg-4 col-md-4">
												<button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
											</div>  -->
                  </div>
                  <div class="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget mail-chimp">
              <h6 class="mb-20">Beliebte Produkte</h6>
              <ul class="instafeed d-flex flex-wrap">
                <li v-for="(product, index) in featured" :key="index">
                  <nuxt-link
                    :to="`/product/${product.sku}/`"
                    :title="product.name"
                  >
                    <nuxt-img
                      preset="footerThumbnail"
                      :src="`/assets/images/products/${product.localThumb}`"
                      :alt="product.name"
                    />
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Folge uns</h6>
              <p>Besuch uns auch auf:</p>
              <div class="footer-social d-flex align-items-center">
                <!-- <a href="#"><i class="fa fa-facebook"></i></a> -->
                <!-- <a href="#"><i class="fa fa-github"></i></a> -->
                <a href="#"><i class="fa fa-twitter"></i></a>
                <!-- <a href="#"><i class="fa fa-dribbble"></i></a> -->
                <!-- <a href="#"><i class="fa fa-behance"></i></a> -->
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            footer-bottom
            d-flex
            justify-content-center
            align-items-center
            flex-wrap
          "
        >
          <p class="footer-text m-0">
            Copyright &copy; 2022 Alle Rechte vorbehalten |
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <nuxt-link to="/" :title="config.siteSlogan">{{
              config.siteName
            }}</nuxt-link>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import trenntoiletten from "~/assets/data/trenntoiletten.json";
import config from "~/assets/data/config.json";

const featured = trenntoiletten.filter((x) => x.featured);

export default {
  name: "footercomponent",
  data() {
    return {
      featured,
      config,
    };
  },
};
</script>
