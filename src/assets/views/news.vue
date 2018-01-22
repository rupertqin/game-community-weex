<template>
  <list class="list">
    <header>
      <wxc-minibar title="资讯"
                   background-color="rgb(25, 114, 217)"
                   text-color="#FFFFFF"
                   right-text="more"
                   :useDefaultReturn="false"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick">
        <text slot="left" class="fa" style="color:#fff; width:36px; height:36px; font-size:36px;" >&#xf0c9;</text>
      </wxc-minibar>
    </header>

    <cell>
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="img in imageList">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
      </slider>
    </cell>
    <cell class="menu">
      <div class="bar-item" @click="linkTo('/home')">
        <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
      </div>
      <div class="bar-item" @click="linkTo('/news')">
        <text class="bar-txt" :class="[this.isActive('news')]">专题</text>
      </div>
      <div class="bar-item" @click="linkTo('/class')">
        <text class="bar-txt" :class="[this.isActive('class')]">分类</text>
      </div>
      <div class="bar-item">
        <text class="bar-txt" :class="[this.isActive('shop')]">购物车</text>
      </div>
      <div class="bar-item" @click="linkTo('/my')">
        <text class="bar-txt" :class="[this.isActive('my')]">个人</text>
      </div>
    </cell>
    <cell
      v-for="(v,i) in news"
      append="tree"
      :index="i"
      :key="i"
      class="row"
      @appear="onappear(i, $event)"
      @disappear="ondisappear(i, $event)">
      <div class="item">
        <text class="item-title" @click="linkTo(`/news/${v.id}`)">{{ v.title }}</text>
      </div>
    </cell>
  </list>
</template>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .fa {
    font-family: awesomefont;
  }
  .slider {
    margin-bottom: 25px;
    width: 750px;
    height: 250px;
  }
  .frame {
    width: 750px;
    height: 750px;
    position: relative;
  }
  .image {
    width: 750px;
    height: 750px;
  }
  .menu {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    height: 90px;
  }
  .bar-item{
    flex: 1;
  }
  .bar-active{
    color:#b4282d;
  }

  .list {}
  .row {width: 750px;}
  .item {height: 80px;}
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'
  const modal = weex.requireModule('modal')
  const stream = weex.requireModule('stream')



  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      imageList: [
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ],
      news: [],
    }),
    created() {
      const self = this
      stream.fetch({
        method: 'GET',
        url: 'http://192.168.0.119:7001/api/v1/article',
        type:'json'
      }, function(ret) {
        if (!ret.ok) {
          self.news = "request failed"
          self.news = ret
          modal.toast({
            message: 'failed' + JSON.stringify(ret),
            duration: 3
          })
        } else {
          self.news =  ret.data
          modal.toast({
            message: 'news',
            duration: 1
          })
        }
      })
    },
    methods: {
      minibarLeftButtonClick() {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      minibarRightButtonClick() {
      },
      buttonClicked () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      linkTo(path) {
        this.$router.push(path)
      },
      isActive() {

      },
      onappear() {},
      ondisappear() {},
    }
  }
</script>