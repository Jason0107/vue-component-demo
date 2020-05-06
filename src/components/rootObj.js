import Vue from 'vue'


// Vue.component('root-obj', {
//     data() {
//         return {
//             msg: '我是子组件'
//         }
//     },
//     template: `
//         <div>
//             <button @click='getRoot'>子组件</button>
//             <child-component></child-component>
//         </div>`,
//     methods: {
//         getRoot() {
//             console.log(this.msg)
//             console.log(this.$parent.msg)
//             console.log(this.$root.msg)
//         }
//     }
//
// })
// Vue.component('child-component', {
//     data() {
//         return {
//             msg: '我是子子组件'
//         }
//     },
//     template: `
//         <div>
//             <button @click='getRoot'>子子组件</button>
//         </div>`,
//     methods: {
//         getRoot() {
//             console.log(this.msg)
//             console.log(this.$parent.msg)
//             console.log(this.$root.msg)
//         }
//     }
// })



// var Main = {
//     data() {
//         return {
//             msg: '我是父组件'
//         }
//     }
// }
// var Ctor = Vue.extend(Main)
// new Ctor().$mount('#app')



// MyPlugin.install = function (Vue, options) {
//     // 1. 添加全局方法或 property
//     Vue.myGlobalMethod = function () {
//         // 逻辑...
//     }
//
//     // 3. 注入组件选项
//     Vue.mixin({
//         created: function () {
//             // 逻辑...
//         }
//     })
//
//     // 4. 添加实例方法
//     Vue.prototype.$myMethod = function (methodOptions) {
//         // 逻辑...
//     }
// }

// 引入组件
// import LoadingComponent from './loading.vue'

// 定义 Loading 对象
const Loading={
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install:function(Vue){
        // Vue.component('Loading',LoadingComponent)
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
    }
}
// 导出
export default Loading
