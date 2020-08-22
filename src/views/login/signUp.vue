<template>
	<div class="y-bg-default y-w100 y-maxw750 y-h100 y-pr">
    <div class="y-w100 y-maxw750 y-pa y-p-t0">
      <img src="../../assets/img/bg_login_top.png" >
    </div>
    <div class="y-w100 y-ph30 y-pa y-pz100 y-pt30">
      <h2 class="y-fs36 y-fc-white">用户注册</h2>
      <p class="y-fs24 y-fc-white y-pt30">搭建专属于自己的漂流岛</p>
      <div></div>
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
