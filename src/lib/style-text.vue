<template>
  <div>
    <p
      class="text"
      :style="textStyle"
      @click="handleClick"
      v-html="styleTxt"
    ></p>
  </div>
</template>
<script>

import parseText from './parse'
// {{高亮}}
const HILIGHT = {
  pattern: /\{\{(.+?)\}\}/gi,
  offset: 2,
  style: 'color:red'
}
// [[加粗]]
const BOLD = {
  pattern: /\[\[(.+?)\]\]/gi,
  offset: 2,
  style: 'font-weight:500'
}
// #高亮并加粗$
const HILIGHT_BOLD = {
  pattern: /#(.+?)\$/gi,
  offset: 1,
  style: 'font-weight:500;color:red'
}
// <<点击链接>>
const LINK = {
  pattern: /<<(.+?)>>/gi,
  offset: 2,
  style: 'font-weight:500;color:blue',
  link: true
}
// [{点击事件}]
const EVENT = {
  pattern: /\{\[(.+?)\]\}/gi,
  offset: 2,
  style: 'font-weight:500;color:green;cursor:pointer',
  event: true
}

export default {
  name: "StyleText",
  props: {
    text: {
      type: String
    },
    textStyle: {
      type: String
    },
    links: {
      type: Array
    },
    events: {
      type: Array
    },
    custom: {
      type: Object,
      default:function(){
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log(this)
  },
  computed: {
    styleTxt() {
      if (!this.text === null || typeof this.text !== 'string') return null
      if (this.text === '' || this.text.trim() === '') {
        return '<br/>'
      }
      return parseText(this.text, [
        this.override(HILIGHT,this.custom.HILIGHT),
        this.override(BOLD,this.custom.BOLD),
        this.override(HILIGHT_BOLD,this.custom.HILIGHT_BOLD),
        this.override(LINK,this.custom.LINK),
        this.override(EVENT,this.custom.EVENT),
      ], {
        links: this.links,
        events: this.events
      })
    },
  },
  methods: {
    override(obj1 = {},obj2 = {}){
      return {
        ...obj1,
        ...obj2
      }
    },
    // 事件代理相应事件
    handleClick(e) {
      const id = e.target.id
      if (!id) return console.warn("检测到事件id为空,没有触发事件。")
      this.$emit('click', id)
    }
  }
}
</script>
<style lang="css">
.text {
  font-size: 14px;
  color: #444444;
  line-height: 1.5;
}
</style>
