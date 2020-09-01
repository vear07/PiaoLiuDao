<template>
	<div class="y-bg-default y-w100 y-maxw750 y-h100 y-pr">
    <div class="y-w100 y-maxw750 y-pa y-p-t0">
      <img src="../../assets/img/bg_login_top.png" >
    </div>
    <div class="y-w100 y-ph30 y-pa y-pz100 y-pt30">
      <h2 class="y-fs36 y-fc-white">忘记密码</h2>
      <p class="y-fs24 y-fc-white y-pt30">请时刻牢记您的密码</p>
      <div class="y-bg-white y-pv30 y-ph20 y-br16 y-mt30 y-bs-black">
        <div class="y-w100 y-pv20 y-bd-b1-e5 y-flex-row">
          <input type="text" v-model="phone" placeholder="请输入手机号" class="y-flex-grow1 y-mh20 y-bg-white y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
          <span class="iconfont y-pr30 y-fs30 y-fc-gray" v-if="phone.length > 0">&#xe641;</span>
        </div>
				<div class="y-w100 y-pv20 y-bd-b1-e5 y-flex-row y-mt30">
					<input type="text" v-model="code" placeholder="请输入验证码" class="y-flex-grow1 y-mh20 y-bg-white y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
					<span class="iconfont y-pr30 y-fs30 y-fc-gray" @click="showCode">{{isShowCode ? '重新生成' : '生成验证码'}}</span>
				</div>
				<div class="y-w100 y-pv20 y-bd-b1-e5 y-flex-row y-mt30">
					<input :type="isShowPassword ? 'text' : 'password'" v-model="password" placeholder="请输入密码" class="y-flex-grow1 y-mh20 y-bg-white y-bd0 y-fs30" maxlength="11" @input="passwordInput(1)" />
					<span class="iconfont y-pr30 y-fs30 y-fc-gray" @click="showPassword(1)">{{isShowPassword ? '&#xe73c;' : '&#xe7b3;'}}</span>
				</div>
				<div class="y-w100 y-pv20 y-bd-b1-e5 y-flex-row y-mt30">
					<input :type="isShowConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" placeholder="请再次输入密码" class="y-flex-grow1 y-mh20 y-bg-white y-bd0 y-fs30" maxlength="11" @input="passwordInput(2)" />
					<span class="iconfont y-pr30 y-fs30 y-fc-gray" @click="showPassword(2)">{{isShowConfirmPassword ? '&#xe73c;' : '&#xe7b3;'}}</span>
				</div>
				<div class="y-w100 y-fs30 y-lh y-fc-white y-bg-blue y-pv30 y-mt20 y-bd0 y-br80 y-flex-row y-flex-center">修改密码</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forget',
  data() {
    return {
      phone: '', // 手机号
			code: '', // 验证码
      password: '', // 密码
			confirmPassword: '', //确认密码
			isShowCode: false, // 验证码是否可点击
      isShowPassword: false, // 密码框内容显隐
			isShowConfirmPassword: false // 确认密码框内容显隐
    }
  },
  methods: {
		// 密码输入框输入限制 —— 解决微软输入法中文输入问题
		passwordInput(type) {
			if (type == 1) {
				this.password = this.password.replace(/[^0-9A-Za-z]/g, '')
			} else if (type == 2) {
				this.confirmPassword = this.confirmPassword.replace(/[^0-9A-Za-z]/g, '')
			}
		},
		// 验证码是否可点击
		showCode() {
			this.isShowCode = !this.isShowCode
		},
		// 密码输入框内容显隐
    showPassword(type) {
			if (type == 1) {
				this.isShowPassword = !this.isShowPassword
			} else {
				this.isShowConfirmPassword = !this.isShowConfirmPassword
			}
    },
		// 清空输入框
    resetInput() {
      this.uPhone = ''
      this.uPassword = ''
    }
  }
}
</script>

<style scoped>
</style>
