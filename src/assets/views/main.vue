<template>
  <div class="wrapper" @click="update">
    <div>
      <wxc-button text="Open Popup"
                  @wxcButtonClicked="buttonClicked">
      </wxc-button>
      <wxc-popup width="500"
                 pos="right"
                 :show="isShow"
                 @wxcPopupOverlayClicked="overlayClicked">
      </wxc-popup>
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
      isShow: false
    }),
    methods: {
      buttonClicked () {
        this.isShow = true;
      },
      overlayClicked () {
        this.isShow = false;
      },
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>