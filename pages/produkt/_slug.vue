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
            <h2 class="mb-4">Testbericht</h2>
            <p class="mb-4">
              Die TROBOLO TeraBlœm ist eine autarke Trockentrenntoilette für den
              Innenbereich. Sie wird als vorgefertigter Bausatz geliefert und
              hat ein optionales, elektrisches Abluftsystem.
            </p>

            <h5 class="mb-3 mt-5">Komfort</h5>

            <p>
              In unserem Test mussten wir letztlich keine Abstriche bei der
              Komfortabilität und dem Komfort einer herkömmlichen Toilette
              machen. Das Sitzgefühl war sehr gut und teils sogar angenehmer und
              natürlicher als wie bei einer Toilette aus Keramik.
            </p>

            <h5 class="mb-3 mt-5">Eckdaten</h5>

            <p>
              Die Trockentrenntoilette hat ein Gewicht von 12,7 kg, ist 497 mm
              hoch, 470 mm tief und 330 mm breit. Die Sitzhöhe beträgt 477 mm.
              Die Traglast der TeraBloem beträgt 200 kg. Somit kann die
              Trockentrenntoilette ohne Einbuße auch von größeren Menschen
              genutzt werden.
            </p>

            <h5 class="mb-3 mt-5">
              Funktionsweise, Material und Geruchsentwicklung
            </h5>

            <p>
              Die TROBOLO TeraBlœm funktionert durch ein Trennsystem. Die
              Ausscheidungen landen durch den Trenneinsatz in ihrem zugehörigen
              Feststoff- oder Urinbehälter. Dieses führt zu einer geringen
              Geruchsentwicklung, da erst bei Berührung der beiden
              Ausscheidungen unangenehme Gerüche entstehen. Weiterhin befindet
              sich in dem Teil des festen Festbehälter's Einstreu aus einer
              Mischung von Kiefernholz und Erle, welches im übrigen angenehmen
              Holzduft verbreitet.
            </p>

            <p>
              Für die Nutzung ist kein Wasser oder Chemie notwendig. Die
              Ausscheidungen können bei Bedarf kompostiert werden, damit sie im
              Anschluss als Nährstoff der Natur zurückgeführt werden kann.
            </p>

            <p>
              Das Material der TeraBlœm ist ein aus FSC-zertifiziertem, 15 mm
              dickem Erlen Mehrschichtholz handgefertigt und hat sich als sehr
              stabil erwiesen. TROBOLO liefert die Trockentrenntoilette mit
              einer bereits behandelten Oberfläche. Sie ist somit optimal für
              eine weitere Behandlung oder Veredelung vorbeireitet. Das
              verwendete Material des Trennsystems ist aus Kunststoff und hat
              eine Oberflächenversiegelung. In unserem Test erwies dieser sich
              als sehr strapazierfähig.
            </p>

            <h5 class="mb-3 mt-5">Nachhaltigkeit</h5>

            <p>
              Die verwendeten Materialien, insbesondere das verwendete Holz,
              sind FSC-zertifiziert. Die FSC verfolgt dem ehrgeizigen Anspruch
              die Wälder auf der ganzen Welt für die kommenden Generation zu
              erhalten. Wir begrüßen die umweltfreundliche Vorgehensweise und
              Unternehmensphilosophie TROBOLO's und vergeben an dieser Stelle
              eine Bestnote.
            </p>

            <h5 class="mb-3 mt-5">Zubehör</h5>

            <p>
              Als optionales Zubehör bietet TROBOLO ein natürliches oder
              elektrisches Abluftsystem. Dieser besitzt einen flexiblen USB
              Anschluss und kann per 12V, 24V oder 230V betrieben werden.
            </p>

            <h5 class="mb-3 mt-5">Fazit</h5>

            <p>
              Zu erwähnen sei, das die TeraBlœm Trockentrenntoilette von
              TROBOLO, als vorgefertigter Bausatz geliefert wird. Es muss also
              selbst Hand angelegt werden, ein großes handwerkliches Können oder
              Wissen war dafür aber zugegebenermaßen nicht notwendig. Im
              Gegenteil, die Zusammensetzung erwies sich als sehr einfach.
              Zumindest haben wir so aber das Gefühl, wir hätten unseren
              Trockentrenntoilette selbst gebaut.
            </p>

            <p>
              Aufgrund der Funktionalität, dem hohen Komfort, der Nachhaltigkeit
              des Produktes, der Einfachheit der Entleerung sowie der Hygiene,
              vergeben wir der TeraBlœm von TROBOLO eine Bestnote.
            </p>

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
      title: this.product.seo
        ? this.product.seo.title
        : `${this.product.name} online kaufen`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.product.seo && this.product.seo.metaDescription
              ? this.product.seo.metaDescription
              : `${this.product.name} online kaufen auf Trenntoilette.org. Alle wichtigen Informationen zu ${this.product.name}`,
        },
        {
          hid: "robots",
          name: "robots",
          content:
            this.product.seo &&
            this.product.seo.robots &&
            this.product.published
              ? this.product.seo.robots
              : "noindex, follow",
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
};
</script>
