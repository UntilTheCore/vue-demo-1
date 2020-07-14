<template>
    <div>
        <p>我是watchDemo组件,运行结果看控制台</p>
        <button @click="n += 1">n+1</button>
        <button @click="obj.a += 'hi'">obj.a + 'hi'</button>
        <button @click="obj = {a:'a'}">obj = 新对象</button>
    </div>
</template>

<script>
    export default {
        name: "watchDemo",
        data() {
            return {
                n: 0,
                obj: {
                    a: "a"
                }
            }
        },
        watch:{
            // n(){
            //     console.log('n改变了！')
            // },
            n:{
                handler(){
                    console.log('n改变了！')
                },
                // immediate 表示一开始就监听n的变化
                immediate:true
            },
            // 这种方式只能监听到一层改变，想要看内部是否也发生了改变要使用另一种方式
            obj(){
                console.log('obj改变了！')
            },
            // obj:{
            //   handler(){
            //       console.log('使用handler监听到obj发生改变了!')
            //   },
            //     // 使用 deep:true 表示obj内部数据发生的改变，我也要知道
            //   deep:true
            // },
            'obj.a'(){
                console.log('obj.a改变了！')
            }
        }
    }
</script>

<style scoped>

</style>