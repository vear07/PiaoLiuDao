<template>
  <div class="y-bg-default y-w100 y-maxw750 y-h100 y-pr">
    <div class="y-w100 y-maxw750 y-pa y-p-t0">
      <img src="../../assets/img/bg_login_top.png" >
    </div>
    <div class="y-w100 y-ph30 y-pa y-pz100 y-pt160">
      <h2 class="y-fs36 y-fc-white">欢迎登录</h2>
      <p class="y-fs24 y-fc-white y-pt30">搭建专属于自己的漂流岛</p>
      <div class="y-w100 y-bg-white y-mt90 y-pt30 y-pb60 y-ph30 y-br16">
        <div class="y-pt30">
          <div class="y-bg-f5 y-br80 y-pv30 y-flex-row y-aligni-center">
            <span class="iconfont y-pl30 y-fs30">&#xe6f9;</span>
            <input type="text" v-model="uPhone" class="y-flex-grow1 y-mh20 y-bg-f5 y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
            <span class="iconfont y-pr30 y-fs30 y-fc-999" v-if="uPhone.length > 0">&#xe658;</span>
          </div>
          <div class="y-bg-f5 y-br80 y-pv30 y-flex-row y-aligni-center y-mt30">
            <span class="iconfont y-pl30 y-fs30">&#xe6fa;</span>
            <input :type="isShowPassword ? 'text' : 'password'" v-model="uPassword" class="y-flex-grow1 y-mh20 y-bg-f5 y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
            <span class="iconfont y-pr30 y-fs30 y-fc-999" @click="showPassword">{{isShowPassword ? '&#xe73c;' : '&#xe7b3;'}}</span>
          </div>
        </div>
        <div class="y-w100 y-fs30 y-lh y-fc-white y-bg-blue y-pv30 y-mt30 y-br80 y-flex-row y-flex-center">登录</div>
      </div>
    </div>
    <div class="y-w100 y-maxw750 y-pa y-p-b0">
      <img src="../../assets/img/bg_login_bottom.png" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      uPhone: '',
      uPassword: '',
      isShowPassword: false
    }
  },
  methods: {
    showPassword() {
      this.isShowPassword = !this.isShowPassword
    }
  }
}
</script>

<style scoped>

</style>