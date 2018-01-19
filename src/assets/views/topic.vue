<template>
  <div @click="update">
    <wxc-minibar title="资讯"
                 background-color="rgb(25, 114, 217)"
                 text-color="#FFFFFF"
                 right-text="more"
                 :useDefaultReturn="false"
                 @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                 @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      <text slot="left" class="fa" style="color:#fff; width:36px; height:36px; font-size:36px;" >&#xf0c9;</text>
    </wxc-minibar>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>

    <div class="menu">
      <div class="bar-item" @click="linkTo('/home')">
          <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
      </div>
      <div class="bar-item" @click="linkTo('/topic')">
          <text class="bar-txt" :class="[this.isActive('topic')]">专题</text>
      </div>
      <div class="bar-item" @click="linkTo('class')">
          <text class="bar-txt" :class="[this.isActive('class')]">分类</text>
      </div>
      <div class="bar-item">
          <text class="bar-txt" :class="[this.isActive('shop')]">购物车</text>
      </div>
      <div class="bar-item" @click="linkTo('/my')">
          <text class="bar-txt" :class="[this.isActive('my')]">个人</text>
      </div>
    </div>

    <list class="list">
      <cell
        v-for="(v,i) in topics"
        append="tree"
        :index="i"
        :key="i"
        class="row"
        @appear="onappear(i, $event)"
        @disappear="ondisappear(i, $event)">
        <div class="item">
          <text class="item-title" @click="linkTo(`/topic/${v.id}`)">{{ v.title }}</text>
        </div>
      </cell>
    </list> 

  </div>
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
  .title { padding-top:100px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 0px; color:#888; font-size: 30px;}
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'
  const stream = weex.requireModule('stream');



  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      target: 'World',
      imageList: [
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ],
      topics: [],
      topicsLen: ''
    }),
    created() {
      const self = this
      stream.fetch({
        method: 'GET',
        url: 'http://localhost:7001/api/v1/article',
        type:'json'
      }, function(ret) {
        if (!ret.ok) {
          self.topics = "request failed";
        } else {
          self.topics =  ret.data
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
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>