import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninja.vue'
import Comments from './Comments.vue'
import Users from './Users.vue'

Vue.component('ninjas', Ninjas);

Vue.component('comments', Comments);

Vue.component('users', Users);



new Vue({
  el: '#app',
  render: h => h(App)
})
