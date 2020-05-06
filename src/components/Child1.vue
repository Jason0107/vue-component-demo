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
        <Child1Input :value="data1" :type="Child1InputType" v-bind:author="{
                                                                            name: 'Veronica',
                                                                            company: 'Veridian Dynamics'
                                                                          }"
                     v-bind="author2"
                     attr-test="testAttr"
                     @childInput="handleChildInput"></Child1Input>
<!--        <Child1Input :value="data1" :type="Child1InputType" @childInput="data1=$event"></Child1Input>-->
    </div>
</template>
<script>
    import Child2 from './Child2.vue';
    import Child1Input from './Child1Input';
    export default {
        name:'Child1',
        props: ['pChild1','msg'],
        data() {
            return {
                data1:1,
                data2:2,
                Child1InputType:'text',
                author2:{
                    name: 'Veronica',
                    company: 'Veridian Dynamics'
                }
            };
        },
        inheritAttrs: false,
        components: { Child2,Child1Input },
        mounted() {
            this.$emit('test1');
            // console.log('$listeners',this.$listeners)
            // console.log('msg',this.msg)

            this.$parent.$on('sendMsg',(msg)=>{
                console.log(msg)
            })
            // console.log('this.$options',this.$options)
            // console.log('this.$options.name',this.$options.name)
            // console.log('this.$options.methods',this.$options.methods)
            // console.log('this.$options.data().data1',this.$options.data().data1)
        },
        methods:{
            handleChildInput(val){
                this.data1 = val
            },
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
