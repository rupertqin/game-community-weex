<template>
  <router-view></router-view>
</template>

<style scoped>
</style>

<script>

  export default {
    data: () => ({
    }),
    created() {
      let domModule = weex.requireModule('dom');
      domModule.addRule('fontFace', {
          'fontFamily': "iconfont",
          'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
      });

      // http://fontawesome.io/cheatsheet/
      domModule.addRule('fontFace', {
          'fontFamily': "awesomefont",
          'src': "url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0')"
      });
    },
  }
</script>