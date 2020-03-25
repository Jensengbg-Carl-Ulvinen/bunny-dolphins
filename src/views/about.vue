<template>
  <div class="about">
    <Nav v-if="openNav" @closeNav="nav" class="nav_wrapper" />
    <section class="about_content">
      <div class="about_header">
        <button @click="nav" class="nav_button">
          <img src="../assets/graphics/navicon.svg" alt />
        </button>
      </div>
      <section class="about_main">
        <h1 class="about_leader">Vårt Kaffe</h1>
        <p
          class="about_text"
        >Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, cema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
        <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
        <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, cema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny cema.</p>
        <section class="about_creator">
          <img src="../assets/graphics/eva-cortado.jpg" alt="creator img" class="creator_image" />
          <h2 class="creator_name">Eva Cortado</h2>
          <p class="creator_role">VD & Grundare</p>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import Nav from "../components/nav";
export default {
  components: {
    Nav
  },
  data: () => {
    return {
      openNav: false
    };
  },
  methods: {
    nav() {
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.nav_wrapper {
  position: absolute;
  height: 100em;
  background-color: $black;
}

.about {
  background: $beige;
  height: 100em;

  .about_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.2em;
    height: 100%;
    width: auto;
    color: $black;
    background: url("../assets/graphics/graphics-header.svg") top no-repeat,
      url("../assets/graphics/graphics-footer.svg") bottom no-repeat;
    background-size: contain;

    .about_header {
      display: flex;
      width: 100%;
      margin-bottom: auto;

      .nav_button {
        height: 5.2em;
        width: 5.2em;
        border-radius: 100%;
        border: none;
      }
    }

    .about_main {
      padding: 1.2em;
      display: flex;
      flex-direction: column;
      margin-bottom: auto;

      .about_leader {
        font-size: 4.2em;
        font-family: $PT;
        margin: 1em;
      }

      .about_text {
        font-weight: 600;
        font-size: 1.4em;
        font-family: $worksans;
        line-height: 1.6em;
        margin: 1em;
      }

      p {
        font-size: 1.2em;
        font-family: $worksans;
        line-height: 1.6em;
        margin: 1em;
      }

      .about_creator {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 2em;

        .creator_image {
          border-radius: 100%;
        }

        .creator_name {
          font-size: 2.2em;
          font-family: $PT;
        }

        .creator_role {
          margin: 0;
          font-size: 1.2em;
          font-family: $worksans;
        }
      }
    }
  }
}
</style>
