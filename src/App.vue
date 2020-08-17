<template>
  <div id="app" style="max-width:18.75rem;margin:0 auto;">
    <keep-alive>
      <router-view class="router-view" v-if="$route.meta.keepAlive" :style="'min-height:' + height + 'px;'"></router-view>
    </keep-alive>
    <router-view class="router-view" v-if="!$route.meta.keepAlive" :style="'min-height:' + (height - (showhref == false ? ((clientWidth * 80) / 320) : ((clientWidth * 52) / 320))) + 'px;'"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      clientWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      height:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      showhref: true
    }
  }
}
</script>

<style>
  /* 阿里图标样式 */
  .iconfont{
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
