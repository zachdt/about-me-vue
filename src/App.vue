<template>
  <div id="app">
    <div class="wrap-banner">
      <b-navbar variant="faded" type="light">
        <div class="column">
          <div class="row">
            <router-link tag="v-btn" id="title" @click.native="++i" class="col" class-active="active" to="/">Blockchain @ Kelley</router-link>
          </div>
          <div class="row">
            <router-link tag="v-btn" @click.native="++i" class="col" class-active="active" to="/about">About</router-link>
            <router-link tag="v-btn" @click.native="++i" class="col" class-active="active" to="/people">People</router-link>
            <router-link tag="v-btn" @click.native="++i" class="col" class-active="active" to="/getting-involved">Getting Involved</router-link>
          </div>
        </div>
      </b-navbar>
    </div>
    <div id="content">
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer>
      <vue-particles color="#dedede"
                     :particleOpacity="0.7"
                     :particlesNumber="80"
                     shapeType="circle"
                     :particleSize="4"
                     linesColor="#dedede"
                     :linesWidth="1"
                     :lineLinked="true"
                     :lineOpacity="0.4"
                     :linesDistance="150"
                     :moveSpeed="3"
                     :hoverEffect="true"
                     hoverMode="grab"
                     :clickEffect="true"
                     clickMode="push"
      ></vue-particles>
    </footer>
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
