<template>
  <div id="app">
    <h1> {{ title }}</h1>
    <p> {{ greeting() }}</p>
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
