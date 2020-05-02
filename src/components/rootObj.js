import Vue from 'vue'


Vue.component('root-obj', {
    data() {
        return {
            msg: '我是子组件'
        }
    },
    template: `
        <div>
            <button @click='getRoot'>子组件</button>
            <child-component></child-component>
        </div>`,
    methods: {
        getRoot() {
            console.log(this.msg)
            console.log(this.$parent.msg)
            console.log(this.$root.msg)
        }
    }

})
Vue.component('child-component', {
    data() {
        return {
            msg: '我是子子组件'
        }
    },
    template: `
        <div>
            <button @click='getRoot'>子子组件</button>
        </div>`,
    methods: {
        getRoot() {
            console.log(this.msg)
            console.log(this.$parent.msg)
            console.log(this.$root.msg)
        }
    }
})

var Main = {
    data() {
        return {
            msg: '我是父组件'
        }
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
