<template>
  <div>
    <Header />
    <h1>わいわい</h1>
    <Top msg="やーい"/>
    <Footer />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Top from './pages/Top.vue';

  @Component({
    components: {
      Header,
      Top,
      Footer,
    },
  })
  export default class Template extends Vue {}
</script>

<style lang="scss"></style>
