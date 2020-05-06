<template>
    <div>
        input Component
        <input :type="type" :value="value" @input="handleInput($event.target.value)">
    </div>
</template>

<script>
    export default {
        name: "Child1Input",
        props:['type','value',"author","author2",'name','company'],
        mounted() {
            // console.log('author',this.author)
            // console.log('author2',this.author2)
            // console.log('name',this.name)
            // console.log('company',this.company)
        },
        methods:{
            handleInput(val){
                this.$emit('childInput',val)
            }
        }
    }
</script>

<style scoped>

</style>
