<template>
	<div class="y-bg-default y-w100 y-maxw750 y-h100 y-pr">
    <div class="y-w100 y-maxw750 y-pa y-p-t0">
      <img src="../../assets/img/bg_login_top.png" >
    </div>
    <div class="y-w100 y-ph30 y-pa y-pz100 y-pt30">
      <h2 class="y-fs36 y-fc-white">用户注册</h2>
      <p class="y-fs24 y-fc-white y-pt30">搭建专属于自己的漂流岛</p>
      <div class="y-bg-white y-pv30 y-ph20 y-br16 y-mt30 y-bs-black">
        <div class="y-w100 y-pv20 y-bd-b1-e5 y-flex-row">
          <input type="text" v-model="phone" placeholder="请输入手机号" class="y-flex-grow1 y-mh20 y-bg-white y-bd0 y-fs30" maxlength="11" oninput="value=value.replace(/[^\d]/g, '')" />
          <span class="iconfont y-pr30 y-fs30 y-fc-gray" v-if="phone.length > 0">&#xe641;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      phone: '',
      password: '',
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
    }
  }
}
</script>

<style scoped>
</style>
