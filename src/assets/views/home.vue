<template>
  <div class="wrapper" @click="update">
    <div>
      <image :src="logoUrl" class="logo"></image>
      <text class="title">Home {{target}}</text>
      <text class="desc">Now, let's use vue to build your weex app.</text>
      <wxc-button text="Open Popup"
                  @wxcButtonClicked="buttonClicked">
      </wxc-button>
    </div>
  </div>
</template>

<style scoped>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { padding-top:100px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 0px; color:#888; font-size: 30px;}
</style>

<script>
  import { WxcButton, WxcPopup } from 'weex-ui'



  export default {
    components: { WxcButton, WxcPopup },
    text: 'hipanda',
    data: () => ({
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
    }),
    methods: {
      buttonClicked () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>