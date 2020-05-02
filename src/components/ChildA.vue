<template>
    <div id="childA">
        <h1 class="div1">我是A组件</h1>
        <button @click="transform">点我让B组件接收到数据</button>
        <p>因为你点了B，所以我的信息发生了变化：{{BMessage}}</p>
    </div>
</template>

<style type="less" scoped>
    .div1{
        height: 0px;
        padding-bottom: 56.25%;
        background: #fff;
    }

</style>

<script>
    import ApiService from "../store/ApiService";

    export default {
        data() {
            return {
                AMessage: 'Hello，B组件，我是A组件'
            }
        },
        computed: {
            BMessage() {
                console.log('compute BMessage')
                console.log('this.$store.state.BMsg',this.$store.state.BMsg)
                // 这里存储从store里获取的B组件的数据
                return this.$store.state.ApiService.BMsg
            }
        },
        methods: {
            transform() {
                console.log('this.$store',this.$store)
                // 触发receiveAMsg，将A组件的数据存放到store里去
                this.$store.commit('receiveAMsg', {
                    AMsg: this.AMessage
                })
                console.log('this.$store.state.BMsg',this.$store.state.BMsg)
            }
        }
    }
</script>

