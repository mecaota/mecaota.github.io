<template>
  <div id="app">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="mecaota works portfolio">
    <meta name="keywords" content="mecaota">
    <title>mecaota works</title>
</head>
    <Template />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Template from './Template.vue';

  @Component({
    components: {
      Template,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss"></style>
