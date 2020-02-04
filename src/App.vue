<template>
  <div id="app">
    <app-title v-bind:title="title" v-on:changeTitle="updateTitle($event)" />
    <h2>{{greeting()}}</h2>
    <h3>Users:</h3>
    <users />
    <h3>Comments</h3>
    <comments />
    <app-footer v-bind:title="title" />
  </div>
</template>

<script>

import Ninjas from './Ninja.vue'

export default {

  data () {
    return {
      title: 'Testing Vue-CLI'
    }
  },
  methods: {
    greeting: function(){
      return "I'm creating my first Vue app"
    },
    updateTitle: function(newTitle){
      this.title = newTitle;
    }
  }
}
</script>

<style>

</style>
