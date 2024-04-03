<template>
  <div>
      <div class="container">
        <NavBar/>
      </div>
      <div class="prueba"></div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
<script>

<style lang="scss">
.container {
  background-image: url('~/assets/images/document.jpeg');
  background-size: contain;
  height: 45rem;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
}
</style>