<template>
  <div>
    <router-view></router-view>
    <wxc-popup width="500"
               pos="left"
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
</template>

<style scoped>
</style>

<script>
  import { WxcButton, WxcPopup, WxcCell, WxcMinibar } from 'weex-ui'

  const modal = weex.requireModule('modal');

  export default {
    components: { WxcButton, WxcPopup, WxcCell, WxcMinibar },
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
      wxcCellClicked() {

      },

    }
  }
</script>