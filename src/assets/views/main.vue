<template>
  <div class="wrapper" @click="update">
    <div>
      <router-view class="r-box"></router-view>
      <wxc-popup width="500"
                 pos="right"
                 ref="sidebar"
                 :show="isSidebarOpen"
                 @wxcPopupOverlayClicked="overlayClicked">

        <wxc-cell label="首页"
                  :has-arrow="true"
                  @wxcCellClicked="linkTo(`/main/home`)"
                  :has-margin="true"></wxc-cell>
        <wxc-cell label="新闻"
                  :has-arrow="true"
                  @wxcCellClicked="linkTo(`/main/topic`)"
                  :has-margin="true"></wxc-cell>
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
  import { WxcButton, WxcPopup, WxcCell } from 'weex-ui'



  export default {
    components: { WxcButton, WxcPopup, WxcCell },
    text: 'hipanda',
    data: () => ({
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
    }),
    computed: {
      isSidebarOpen() {
        return this.$store.state.isSidebarOpen
      }
    },
    methods: {
      linkTo(path) {
        this.$router.push(path)
        this.$refs.sidebar.hide()
      },
      overlayClicked () {
        this.$store.dispatch('CLOSE_SIDEBAR')
      },
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      wxcCellClicked() {

      }
    }
  }
</script>