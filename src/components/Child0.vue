<template>
    <div id="app">
        <child1 :p-child1="child1Data" :p-child2="child2Data" v-on:test1="onTest1" @test2="onTest2" msg="child0msg"
                @emitMessage="handleEmit2($event)"
        ></child1>
    </div>
</template>
<script>
    import Child1 from './Child1.vue';
    export default {
        data() {
            return {
                child1Data:'child1Data',
                child2Data:'child2Data'
            };
        },
        components: { Child1 },
        methods: {
            onTest1() {
                console.log('test1 running...');
            },
            onTest2() {
                console.log('test2 running');
            },
            handleEmit(e,msg){
                console.log(msg)
                console.log(e)
                console.log('event123',this.event)
            },
            handleEmit2(e){
                console.log(e)
            }
        }
    };
</script>
