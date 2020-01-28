

<template>
  <div  class="user-collection">{{getComments}}
  <div v-for="comment in comments" class="user-card">
    <div class="user-content">
        <h4>{{ comment.id }}</h4>
        <p>{{ comment.body }}</p>
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

  },
  computed: {
    getComments () {
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        console.log(res)
        this.comments = res.data.slice(0, 9);

      })
      .catch(err => console.log('not getting those comments', err))
    }
  }
}
</script>

<style>
.user-collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;

}
  .user-card {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: auto;
    border: solid 1px lightcoral;
    margin: 20px 10px;
    padding: 30px 15px;
    border-radius: 6px;
    text-align: center;
  }

  .user-content {

  }
</style>
