import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninja.vue'
import Comments from './Comments.vue'
import Users from './Users.vue'
import Title from './Title.vue'
import Footer from './Footer.vue'

Vue.component('ninjas', Ninjas);

Vue.component('comments', Comments);

Vue.component('users', Users);

Vue.component('app-title', Title);

Vue.component('app-footer', Footer);

export const bus = new Vue({

});

new Vue({
  el: '#app',
  render: h => h(App)
})
