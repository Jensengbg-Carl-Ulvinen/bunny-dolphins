<template>
  <div class="about">
    <Nav v-if="openNav" @closeNav="nav" class="nav_wrapper" />
    <section class="about_content">
      <div class="header">
        <button @click="nav" class="nav_button">
          <img src="../assets/graphics/navicon.svg" alt />
        </button>
      </div>
      <section class="about_main">
        <h1 class="about_leader">Vårt Kaffe</h1>
        <p
          class="about_text"
        >Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
        <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
        <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
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
import Nav from '../components/nav'
export default {
  components: {
    Nav
  },
  data: () => {
    return {
      openNav: false
    }
  },
  methods: {
    nav () {
      if (this.openNav === true) {
        this.openNav = false
      } else {
        this.openNav = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
</style>
