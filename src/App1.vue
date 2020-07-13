<template>
    <div id="app1">
        {{n}}
        <button @click="add">+1</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                n:0
            }
        },
        methods:{
            add(){this.n+=1}
        },
    }
</script>

<style scoped>
    #app1 {
        color: red;
    }
</style>