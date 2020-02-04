

<template>
  <div  class="comments-collection">{{getComments}}
  <div v-for="comment in comments" class="comments-card">
    <div class="comments-content">
        <h4>{{ comment.id }}</h4>
        <p>{{ comment.body }}</p>
        <button type="button" name="borrar" v-on:click="deleteComment(comment.id)"> DELETE </button>
    </div>
  </div>
</div>

</template>

<script>

import axios from 'axios';

export default {

  data () {
    return {
      comments: ""
    }
  },
  methods: {
    deleteComment(id){
      axios.delete('https://jsonplaceholder.typicode.com/comments/' + id)
      .then(res => console.log('bye, bye, comment', res.status))
      .catch( err => console.log ("it's unbeatable", err))
    }

  },
  computed: {
    getComments () {
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        console.log(res)
        this.comments = res.data.slice(0, 12);

      })
      .catch(err => console.log('not getting those comments', err))
    }
  }
}
</script>

<style>
.comments-collection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;

}
  .comments-card {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: auto;
    border: solid 1px blue;
    margin: 20px 10px;
    padding: 30px 15px;
    border-radius: 6px;
    text-align: center;
  }

  .comments-content button{
    background-color: red;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    padding: 3px;
  }

  .comments-content button:hover {
    background-color: red;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    padding: 3px 6px;
  }
</style>
