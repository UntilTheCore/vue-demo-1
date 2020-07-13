// import Vue from 'vue'
// import App from './App.vue'

// 使用cdn引入的Vue
const Vue = window.Vue
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// console.log(window.Vue)

import CompDemo1 from './components/compDemo1'
// 1、完整版的Vue操作html
//  1.1 - 使用单文件组件
//  1.2 - 创建和使用全局组件
Vue.component('CompDemo2', {
    template: `
        <div>
        我是组件2
</div>
    `
})
new Vue({
    components: {
        CompDemo1,
    },
    el: '#app',
    template: `
        <div>
            <CompDemo1/>
            <comp-demo2/>
        </div>

    `,
    data: {
        n: 1,
    },
    methods: {
        add() {
            this.n += 1
        }

    }
})

// 2、非完整版的Vue需要通过 h 去渲染
// 它是通过 render 方法内渲染出的内容去替换掉 #app，包括 app 本身
// new Vue({
//     el: '#app',
//     data:{
//         n:0
//     },
//     render(h) {
//         return h('div',[this.n,h('button',{on:{click:this.add}},'+1')])
//     },
//     methods:{
//         add(){this.n+=1}
//     }
// })

// 3、使用vue单文件组件渲染
// import app1 from './App1'
// 通过 vue-loader 会将 后缀为vue的文件加载为一个对象供render去渲染。
// console.log(app1)
// console.log(app1.render)
// new Vue({
//     el:'#app',
//     render(h) {
//         console.log(h)
//         return h(app1)
//     }
// })


