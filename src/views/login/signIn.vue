<template>
  <div class="y-bg-default y-w100 y-maxw750 y-h100 y-pr">
    <div class="y-w100 y-maxw750 y-pa y-p-t0">
      <img src="../../assets/img/bg_login_top.png" >
    </div>
    <div class="y-w100 y-ph30 y-pa y-pz100 y-pt90">
      <h2 class="y-fs36 y-fc-white y-textAlign-c">用户登录</h2>
      <p class="y-fs24 y-fc-white y-pt30 y-textAlign-c">欢迎来到夜燕漂流岛</p>
      <div class="y-w100 y-bg-white y-mt90 y-pt30 y-pb60 y-ph30 y-br16 y-bs-black">
        <div class="y-pt30">
          <div class="y-bg-f5 y-br80 y-pv30 y-flex-row y-aligni-center">
            <span class="iconfont y-fc-blue y-pl30 y-fs30">&#xe6f9;</span>
            <input type="text" v-model="uPhone" class="y-flex-grow1 y-mh20 y-bg-f5 y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
            <span class="iconfont y-pr30 y-fs30 y-fc-gray" v-if="uPhone.length > 0" @click="resetInput">&#xe641;</span>
          </div>
          <div class="y-bg-f5 y-br80 y-pv30 y-flex-row y-aligni-center y-mt30">
            <span class="iconfont y-fc-blue y-pl30 y-fs30">&#xe6fa;</span>
            <input :type="isShowPassword ? 'text' : 'password'" v-model="uPassword" class="y-flex-grow1 y-mh20 y-bg-f5 y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
            <span class="iconfont y-pr30 y-fs30 y-fc-gray" @click="showPassword">{{isShowPassword ? '&#xe73c;' : '&#xe7b3;'}}</span>
          </div>
        </div>
        <p class="y-textAlign-r y-fc-blue y-fs24 y-pt20">忘记密码?</p>
        <div class="y-w100 y-fs30 y-lh y-fc-white y-bg-blue y-pv30 y-mt20 y-br80 y-flex-row y-flex-center">登录</div>
        <div class="y-textAlign-r y-fc-gray y-fs24 y-pt20">没有账号？请先<span class="y-fc-blue" @click="goSignUp">注册账号</span></div>
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
    },
    resetInput() {
      this.uPhone = ''
      this.uPassword = ''
    },
    goSignUp() {
      this.$router.push('/signUp')
    }
  }
}
</script>

<style scoped>

</style>