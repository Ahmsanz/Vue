<template lang="html">

    <h1 v-on:click="changeTitle">{{title}}</h1>

</template>

<script>
import { bus } from '../main';
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return {

    }
  },
  methods: {
    changeTitle: function(){
    //  this.$emit('changeTitle', 'Playing with Vue');  emiting events from one component to other;

    // this.title = 'Vue ninjas';
    //emiting event to the bus event, so it can be imported from a number of components;
    bus.$emit('titleChanged', 'Vue Wizards');

    }
  }
}
</script>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  h1 {
    color: brown;
    font-size: 34px;
    text-align: center;
    font-family: serif;
  }
</style>
