<template>
  <div id="app">
    <transition appear>
      <component v-bind:to="hello"></component>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app' 
}
</script>

<style>
@import 'components/style/app.css';
</style>
