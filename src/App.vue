<template>
  <div id="app">
    <h1> {{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
export default {

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
