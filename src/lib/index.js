import StyleText from './style-text.vue'

// install是挂载组件的方法，有了它我们就可以在外部use一个插件了
const styleText = {
    install: function(Vue){
        Vue.component(StyleText.name, StyleText)
    }
}

// 这里判断必须要有 确保window上有挂载Vue实例
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(styleText)
}

export default styleText