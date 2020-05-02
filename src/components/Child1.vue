<template>
    <div class="child-1">
        <p @click="handleClick">in child1:</p>
        <button @click="sendMessage">给兄弟发消息</button>
        <p>props: {{pChild1}}</p>
        <p>$attrs: {{$attrs}}</p>
        <p>$listeners: {{$listeners}}</p>
        <hr>
        <!-- C组件中能直接触发test的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
        <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->
        <child2 v-bind="$attrs" v-on="$listeners"></child2>
    </div>
</template>
<script>
    import Child2 from './Child2.vue';
    export default {
        props: ['pChild1','msg'],
        data() {
            return {};
        },
        inheritAttrs: false,
        components: { Child2 },
        mounted() {
            this.$emit('test1');
            console.log('$listeners',this.$listeners)
            console.log('msg',this.msg)

            this.$parent.$on('sendMsg',(msg)=>{
                console.log(msg)
            })
        },
        methods:{
            sendMessage(){
                this.$parent.$emit('sendMsg','hi brother')
            },
            handleClick(){
                this.$emit('emitMessage','emitContent','emitContent2')
                // this.$emit('emitMessage', $event.target)
            }
        }
    };
</script>
