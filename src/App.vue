<template>
  <div id="app">
    <transition appear>
      <component v-bind:is="Hello"></component>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'components/style/app.css';
</style>
