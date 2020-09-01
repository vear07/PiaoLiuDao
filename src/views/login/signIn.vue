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
            <input type="text" v-model="uPhone" placeholder="请输入手机号" class="y-flex-grow1 y-mh20 y-bg-f5 y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
            <span class="iconfont y-pr30 y-fs30 y-fc-gray" v-if="uPhone.length > 0" @click="resetInput">&#xe641;</span>
					</div>
					<div class="y-bg-f5 y-br80 y-pv30 y-flex-row y-aligni-center y-mt30">
            <span class="iconfont y-fc-blue y-pl30 y-fs30">&#xe6fa;</span>
            <input :type="isShowPassword ? 'text' : 'password'" v-model="uPassword" placeholder="请输入密码" class="y-flex-grow1 y-mh20 y-bg-f5 y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
            <span class="iconfont y-pr30 y-fs30 y-fc-gray" @click="showPassword">{{isShowPassword ? '&#xe73c;' : '&#xe7b3;'}}</span>
          </div>
        </div>
        <p class="y-textAlign-r y-fc-blue y-fs24 y-pt20" @click="forget">忘记密码?</p>
        <button class="y-w100 y-fs30 y-lh y-fc-white y-bg-blue y-pv30 y-mt20 y-bd0 y-br80 y-flex-row y-flex-center">登录</button>
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
      uPhone: '', // 用户手机号
      uPassword: '', // 用户密码
      isShowPassword: false, // 密码输入框显隐
    }
  },
	watch: {},
  methods: {
		// 密码框显隐
    showPassword() {
      this.isShowPassword = !this.isShowPassword
    },
		// 重置输入框
    resetInput() {
      this.uPhone = ''
      this.uPassword = ''
    },
		// 登录
		signIn() {
			// const phoneTest = /^((13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])+\d{8})$/
		},
		// 前往注册
    goSignUp() {
      this.$router.push('/signUp')
    },
		// 前往忘记密码
		forget() {
			this.$router.push('/forget')
		}
  }
}
</script>

<style scoped>

</style>