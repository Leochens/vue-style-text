<template>
  <div id="app">
    <style-text
      :text="`{{本段文字被高亮}},再看这段[[加粗的文字]],还有#既加粗又高亮的文案$,<<链接>>也不在话下,链接需要提前配置下哦，多个<<链接>>也不在话下`"
      :links="['https://juejin.cn/post/6844903497654091789','http://baidu.com']"
    ></style-text>

    <style-text
      :text="`文案中想要做点小交互？{[点我触发事件]}试试，多个{[事件]}也不在话下`"
      :events="[
      {
      id: 'click-me'
      },
      {
      id: 'click-me2'
      }  
    ]"
      @click="handleClick"
    ></style-text>
    <style-text
      :text="`默认样式不满足？想自定义样式？没问题！你可以设置高亮的样式为:font-weight:500;color:orange. 摇身一变的{{高亮}},其他预设也可以灵活自定义哦`"
      :custom="{
        HILIGHT:{
          style: 'font-weight:500;color:orange'
        }
      }"
      @click="handleClick"
    ></style-text>

        <style-text
      :text="`想对文案整体进行设置，比如整体文案颜色，行距等，可以设置textStyle。本文案的将颜色设置成了灰色，行距设为了2。注意，全局设置不会覆盖样式标签已设置的样式。如{{高亮}},[[加粗]]等`"
      textStyle="color: grey;line-height:2"
      :custom="{
        HILIGHT:{
          style: 'font-weight:500;color:orange'
        }
      }"
      @click="handleClick"
    ></style-text>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

    handleClick(eventId) {
      switch (eventId) {
        case 'click-me': {
          alert('点我就对啦')
          break
        }
        case 'click-me2': {
          alert('点我就对啦2')
          break
        }
        default: break
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style-text>
