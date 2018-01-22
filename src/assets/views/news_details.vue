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
        <text slot="left" class="fa" style="color:#fff; width:48px; height:48px; font-size:48px;" >&#xf104;</text>
      </wxc-minibar>
    </header>

    <cell class="menu">
      <div class="bar-item" @click="linkTo('/home')">
          <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
      </div>
      <div class="bar-item" @click="linkTo('/news')">
          <text class="bar-txt" :class="[this.isActive('news')]">专题</text>
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
    </cell>

    <cell>
      <div class="item">
        <text class="item-title">{{ news.title }}</text>
      </div>
    </cell>
    <cell>
      <text class="item-title">{{ news.content }}</text>
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
  .row {width: 750px;}
  .item {height: 80px;}
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'
  // const modal = weex.requireModule('modal')
  const stream = weex.requireModule('stream');

  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      news: {
        title: 'haha',
        content: 'content of news'
      },
    }),
    created() {
      const self = this
      const id = this.$route.params.id
      stream.fetch({
        method: 'GET',
        url: `http://192.168.0.119:7001/api/v1/article/${ id }`,
        type:'json'
      }, function(ret) {
        if (!ret.ok) {
          self.news = "request failed"
          self.news = ret
          // modal.toast({
          //   message: 'failed',
          //   duration: 3
          // })
        } else {
          self.news = ret.data
        }
      })
    },
    methods: {
      minibarLeftButtonClick() {
        this.$router.push('/news')
      },
      minibarRightButtonClick() {
      },
      buttonClicked () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      linkTo(path) {
        this.$router.push(path)
      },
      isActive() {},
      onappear() {},
      ondisappear() {},
    }
  }
</script>