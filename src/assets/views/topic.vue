<template>
  <div @click="update">
    <div>
      <text class="title">Topic {{target}}</text>
      <text class="desc">Now, let's use vue to build your weex app.</text>
      <wxc-button text="Open Popup"
                  @wxcButtonClicked="buttonClicked">
      </wxc-button>
    </div>
  </div>
</template>

<style scoped>
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