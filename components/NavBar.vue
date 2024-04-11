<template>
  <div class="container">
    <NuxLink to="/">
      <span>Home</span>
    </NuxLink>
    <NuxLink to="/">
      <span>Experience</span>
    </NuxLink>
    <NuxLink to="/">
      <span>Skills</span>
    </NuxLink>
    <NuxLink to="/">
      <span>Contact</span>
    </NuxLink>
    <input type="text" placeholder="Search">    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1em;
  background-image: url('~/assets/images/document.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 30em;
  width: 100%;
  position: relative;
  margin-bottom: 2em;


  input{
    @apply text-lg bg-gray-100 rounded p-1 max-h-8;
  }

  span{
    @apply cursor-pointer;
    color:white
  }
}
</style>