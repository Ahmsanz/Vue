import Vue from 'vue'
import App from './App.vue'
import Comments from './components/Comments.vue'
import Users from './components/Users.vue'
import Title from './components/Title.vue'
import Footer from './components/Footer.vue'

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
