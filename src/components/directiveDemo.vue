<template>
    <div>
        <p>我是directiveDemo组件</p>
        n:{{n}}
<!--        <div v-on:click="add">temp</div>-->
        <div v-on2:click="add">使用自定义事件绑定指令on2,点击我改变n的值</div>
    </div>
</template>

<script>
    export default {
        name: "directive",
        data(){
            return {
                n:0
            }
        },
        methods:{
            add(){
                this.n+=1
            }
        },
        directives:{
            on2:{
                inserted(el,info){
                    console.log(el)
                    console.log(info);
                    el.addEventListener(info.arg,info.value)
                },
                unbind(el,info){
                    el.removeEventListener(info.arg,info.value)
                }
            }
        }
    }
</script>

<style scoped>

</style>