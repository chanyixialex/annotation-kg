// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import i18n from './i18n'
import './http'
import 'vuetify/dist/vuetify.min.css'
import menu from './menu'
// import 'vuetify/src/stylus/main.styl'
// import 'vuetify/src/stylus/settings/_colors.styl'
// import '@/styles/main.styl'
Vue.use(Vuetify)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('username')
  }
  let user = JSON.parse(sessionStorage.getItem('username'))
  if(to.path === '/') {
    next({ path: '/login' })
  }else {
    next()
  }
  // if (!user && to.path !== '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>',
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  created () {
    global.$t = this.$t
    // this.$http.get(require(`./menu.js`)).then(({data}) => {
    //   this.$store.commit('setMenu', data)
    // })
    this.$store.commit('setMenu', {menu})
    this.$store.dispatch('checkPageTitle', this.$route.path)
    this.$store.dispatch('checkAuth')
  }
})
// new Vue({
//   el: '#app',
//   data: () => ({
//     valid: true,
//     name: '',
//     nameRules: [
//       v => !!v || 'Name is required',
//       v => (v && v.length <= 10) || 'Name must be less than 10 characters'
//     ],
//     email: '',
//     emailRules: [
//       v => !!v || 'E-mail is required',
//       v => /.+@.+/.test(v) || 'E-mail must be valid'
//     ],
//     select: null,
//     items: [
//       'Item 1',
//       'Item 2',
//       'Item 3',
//       'Item 4'
//     ],
//     checkbox: false
//   }),

//   methods: {
//     validate () {
//       if (this.$refs.form.validate()) {
//         this.snackbar = true
//       }
//     },
//     reset () {
//       this.$refs.form.reset()
//     },
//     resetValidation () {
//       this.$refs.form.resetValidation()
//     }
//   }
// })
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   data: {
//     points: 100
//   },
//   computed: {
//     level: function () {
//       if (this.points <= 100) {
//         return '普通会员'
//       }
//       return 'VIP会员'
//     }
//   }
// })
// new Vue({
//   el: '#computed',
//   data: {
//     first: 'alex',
//     last: 'chan'
//   },
//   computed: {
//     username: function () {
//       return this.first + ' ' + this.last
//     }
//   }
// })
// Vue.component('to-item', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })
// new Vue({
//   el: '#component',
//   data: {
//     groceryList: [
//       { id: 0, text: '蔬菜' },
//       { id: 1, text: '苹果' }
//     ]
//   }
// })
// new Vue({
//   el: '#form',
//   data: {
//     tasks: [
//       {body: 'movie', completed: false},
//       {body: 'book', completed: true},
//       {body: 'play', completed: false}
//     ]
//   },
//   methods: {
//     toggle: function (task) {
//       task.completed = !task.completed
//     }
//   }
// })
// Vue.component('template-component', {
//   props: ['list'],
//   template: '#task-template',
//   methods: {
//     toggle: function (task) {
//       task.completed = !task.completed
//     },
//     deleteTask: function (task) {
//       this.list.splice(task, 1)// splice删除方法
//     }
//   },
//   computed: {
//     remaining: function () {
//       return this.list.filter(function (task) { // task是list的元素，filter是过滤掉返回值为false的元素
//         return !task.completed
//       }).length
//     }
//   }
// })
// new Vue({
//   el: '#tem',
//   data: {
//     tasks: [
//       {body: 'movie', completed: false},
//       {body: 'book', completed: true},
//       {body: 'play', completed: false}
//     ]
//   }
// })
