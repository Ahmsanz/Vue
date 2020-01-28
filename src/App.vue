<template>
  <div id="app">
    <h1> {{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>

import Ninjas from './Ninja.vue'

export default {
  components: {
    'ninjas': Ninjas
  },
  data () {
    return {
      title: 'Brand new Vue App'
    }
  },
  methods: {
    greeting: function(){
      return "I'm creating my first Vue app"
    }
  }
}
</script>

<style>

</style>
