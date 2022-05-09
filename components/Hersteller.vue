<template>
  <div>
    <!-- Hersteller Start -->
    <div class="container-xxl py-5 category" id="hersteller">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <h3 class="mb-5 h2">Hersteller</h3>
        </div>
        <div class="row g-3">
          <div class="col-lg-7 col-md-6">
            <div class="row g-3">
              <div class="col-lg-12 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/trobolo/"
                  title="Mehr über TROBOLO erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/trobolo.webp"
                      alt="TROBOLO"
                    />
                    <div class="overlay">
                      <div class="overlayText">TROBOLO</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <h5 class="m-0">TROBOLO</h5>
                    <!-- <small class="text-primary">Deutschland</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/trelino/"
                  title="Mehr über Trelino erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/trelino.webp"
                      alt="Trelino"
                    />
                    <div class="overlay">
                      <div class="overlayText">Trelino</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <h5 class="m-0">Trelino</h5>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/kildwick/"
                  title="Mehr über Kildwick erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/kildwick.webp"
                      alt="Trelino"
                    />
                    <div class="overlay">
                      <div class="overlayText">Kildwick</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <h5 class="m-0">Kildwick</h5>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 zoomIn" style="min-height: 350px">
            <a class="position-relative d-block h-100 overflow-hidden" href="">
              <div class="grayscaleContainer">
                <img
                  class="img-fluid grayscale"
                  src="/assets/images/hersteller/meinetrenntoilette.webp"
                  alt="MeineTrenntoilette"
                />
                <div class="overlay">
                  <div class="overlayText">Meine Trenntoilette</div>
                </div>
              </div>
              <div
                class="
                  bg-white
                  text-center
                  position-absolute
                  bottom-0
                  end-0
                  py-2
                  px-3
                "
                style="margin: 1px"
              >
                <h5 class="m-0">Meine Trenntoilette</h5>
                <!-- <small class="text-primary">Deutschland</small> -->
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Hersteller End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";

export default {
  name: "herstellerComponent",
  data() {
    return {
      config,
    };
  },
};
</script>
