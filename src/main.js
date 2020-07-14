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
import ComputedDemo from './components/computedDemo'
// 1、完整版的Vue操作html
//  1.1 - 使用单文件组件
//  1.2 - 创建和使用全局组件
Vue.component('CompDemo2', {
    data() {
        return {
            n: 0
        }
    },
    template: `
        <div>
            <p>我是组件2</p>
            {{n}}
            <button @click="add">+1</button>
        </div>
    `,
    methods: {
        add() {
            this.n += 1
        }
    },
    // created 调用时，template内的内容还未被渲染
    created() {
        console.log('我是组件2,当前在内存中，还没有显示到页面上！')
    },
    // mounted 调用时，页面已渲染完毕
    mounted() {
        console.log('我是组件2，当前页面已经渲染出来了！')
    },
    // 页面发生更新就会调用updated()方法。
    updated() {
        console.log('我是组件2,页面更新了！')
    },
    // 在组件被隐藏时即调用destroyed()方法。
    // 组件发生destroyed是这个组件被干掉了，不会保留，再被显示出来也是创建了一个新的
    // 通过观察 n 就可以发现这一点，n增加后干掉组件不会被保留。
    destroyed() {
        console.log('组件2消亡了！')
    }
})
new Vue({
    components: {
        CompDemo1,
        ComputedDemo,
    },
    el: '#app',
    template: `
        <div>
            <!--            <comp-demo2/>-->
            <!--            <CompDemo1/>-->
            <button @click="toggle">toggle</button>
            <hr/>
            <comp-demo2 v-if="visiable === true"></comp-demo2>
            <hr/>
            <p>外部n：{{n}}</p>
            <comp-demo1 :message="n" :fn="add"></comp-demo1>
            <!--            使用ComputedDemo组件-->
            <ComputedDemo></ComputedDemo>
        </div>

    `,
    data: {
        n: 1,
        visiable: true
    },
    methods: {
        add() {
            this.n += 1
        },
        toggle() {
            this.visiable = !this.visiable
        }
    },
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


