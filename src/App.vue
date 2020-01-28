<template>
  <div id="app">
    <h1> {{ title }}</h1>
    <h3>Users:</h3>
    <users />
    <h3>Comments</h3>
    <comments />
  </div>
</template>

<script>

import Ninjas from './Ninja.vue'

export default {
  // components: {
  //   'ninjas': Ninjas
  // },
  data () {
    return {
      title: 'Testing Vue-CLI'
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
