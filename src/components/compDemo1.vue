<template>
    <div class="red">
        我是组件1,我接收外部过来的数据n：{{message}}
        <button @click="fn">调用外部传过来的方法</button>
    </div>

</template>

<script>
    export default {
        name: "compDemo1",
        // props 接收一个数组
        props:['message','fn'],
    }
</script>

<style scoped>
.red {
    border: 1px solid red;
}
</style>