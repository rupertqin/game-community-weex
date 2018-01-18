<template>
  <div @click="update">
    <wxc-minibar title="首页"
                 background-color="rgb(25, 114, 217)"
                 text-color="#FFFFFF"
                 right-text="more"
                 :useDefaultReturn="false"
                 @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                 @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      <text slot="left" class="fa" style="color:#fff; width:36px; height:36px; font-size:36px;" >&#xf0c9;</text>
    </wxc-minibar>
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
  .iconfont {
    font-family: iconfont;
  }
  .fa {
    font-family: awesomefont;
  }
  .title { padding-top:100px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 0px; color:#888; font-size: 30px;}
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'



  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      target: 'World',
    }),
    methods: {
      minibarLeftButtonClick() {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      minibarRightButtonClick() {
      },
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