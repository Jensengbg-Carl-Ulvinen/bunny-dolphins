<template>
  <div class="nav_wrapper">
    <section class="nav_content">
      <div class="nav_header">
        <button @click="closeNav" class="nav_button">
          <img src="../assets/graphics/close.svg" alt />
        </button>
      </div>
      <section class="nav">
        <p @click="menu">Meny</p>
        <span class="line"></span>
        <p @click="about">Vårt Kaffe</p>
        <!-- todo: orderstatus -->
      </section>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav () {
      this.$emit('closeNav')
    },

    menu () {
      if (this.$route.path !== '/menu') {
        this.$router.push('/menu')
      } else {
        this.closeNav()
      }
    },

    about () {
      if (this.$route.path !== '/about') {
        this.$router.push('/about')
      } else {
        this.closeNav()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
</style>
