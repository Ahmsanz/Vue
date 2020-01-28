

<template>
  <div  class="user-collection">{{getUsers}}
  <div v-for="user in users" class="user-card">
    <div class="user-content">
        <h4>{{ user.username }}</h4>
        <p>{{ user.email }}</p>
    </div>
  </div>
</div>

</template>

<script>

import axios from 'axios';

export default {

  data () {
    return {
      users: ""
    }
  },
  methods: {

  },
  computed: {
    getUsers () {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        this.users = res.data;
      })
      .catch(err => console.log('not getting those users', err))
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
    height: 100px;
    border: solid 1px lightcoral;
    margin: 20px 10px;
    padding: 30px 15px;
    border-radius: 6px;
    text-align: center;
  }

  .user-content {

  }
</style>
