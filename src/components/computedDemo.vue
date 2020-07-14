<template>
<!--  computed计算属性使用练习  -->
    <div id="computedBox">
        <p>我是computedDemo组件</p>
        <button @click="setGender('')">全部</button>
        <button @click="setGender('male')">男</button>
        <button @click="setGender('female')">女</button>
        <ul>
            <li v-for="(user,index) in displayUser" :key="index">
                {{user.name}} : {{user.value}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "computedDemo",
        data(){
            return {
                users:[],
                gender:''
            }
        },
        created() {
            this.users.push({name:'张三',value:'男'})
            this.users.push({name:'李四',value:'女'})
            this.users.push({name:'王五',value:'男'})
            this.users.push({name:'刘亦菲',value:'女'})
        },
        methods:{
            // 数据和行为ui分离，只设置gender而不用关心具体如何实现显示
            setGender(value){
                this.gender = value
            }
        },
        computed:{
            displayUser(){
                const hash = {
                    'male' : '男',
                    'female' : '女'
                }
                const {users,gender} = this
                if('' === gender){
                    return users
                } else if(typeof gender === 'string'){
                    return users.filter(user => {
                        return user.value === hash[gender]
                    })
                }
                return {}
            }
        }
    }
</script>

<style scoped>
    #computedBox {
        border: 1px solid #ccc;
    }
</style>