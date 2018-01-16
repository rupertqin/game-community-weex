<template>
  <scroller>
    <div>
      <wxc-minibar title="首页"
                   background-color="#FFF3CD"
                   text-color="#FFFFFF"
                   right-text="more"
                   :useDefaultReturn="false"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick">
        <image src="https://img.alicdn.com/tfs/TB1QN8pdlHH8KJjy0FbXXcqlpXa-220-80.png"
               slot="left"
               style="height: 32px;width: 88px;"></image>  
      </wxc-minibar>
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="img in imageList">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
      </slider>

      <image :src="logoUrl" class="logo" style="width: 360px;height: 207.6px;"></image>
      <text class="title">Home {{target}}</text>
      <text class="title">Home {{target}}</text>
      <text class="title">Home {{target}}</text>
      <text class="title">Home {{target}}</text>
      <text class="desc">Now, let's use vue to build your weex app.</text>
      <wxc-button text="Open Popup"
                  @wxcButtonClicked="buttonClicked">
      </wxc-button>
    </div>
  </scroller>
</template>

<style scoped>

  .title { padding-top:100px; padding-bottom: 40px; font-size: 48px; }
  .desc { padding-top: 0px; color:#888; font-size: 30px;}

  .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-bottom: 25px;
    width: 700px;
    height: 700px;
    border-width: 1px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'



  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      logoUrl: 'https://pic.36krcnd.com/201801/15061930/b80tardo9yta6qgf!heading',
      target: 'World',
      imageList: [
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ]
    }),
    methods: {
      buttonClicked () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      minibarLeftButtonClick () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    }
  }
</script>