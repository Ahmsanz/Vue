

<template>
  <div class="users-body">


  <div  class="user-collection">
  <div v-for="user in users" class="user-card">
    <div class="user-content">
        <h4>{{ user.username }}</h4>
        <p>{{ user.email }}</p>
        <p v-show="user.show">{{user.name}}</p>
    </div>
  </div>
  </div>
  <div>

  <form v-on:submit = "addUser" class="formulario" >
    <input type="text" name="username" value="" ref="username" placeholder="User Name">
    <input type="text" name="email" value="" ref="email" placeholder="User Email">
    <button>Add new user!</button>

  </form>

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

    addUser(e){
      e.preventDefault();
      axios('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        data: {
          username: this.$refs.username.value,
          email: this.$refs.email.value
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(res => console.log('adding user', res.data))
        .catch(err => console.log ('oops, my bad', err))

      }
    },
  // computed: {
  //   getUsers () {
  //     axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {
  //       console.log(res)
  //       this.users = res.data;
  //     })
  //     .catch(err => console.log('not getting those users', err))
  //   }
  // },
  //lifecycle hooks

  created(){

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log('users ok', res.status);
      this.users = res.data;
    })
    .catch(err => console.log('not getting those users', err))
  },
  mounted(){
    //getting references in console
      console.log('refs', this.$refs)

  }
}
</script>

<style>
.users-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-collection {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
    box-shadow: lightgrey 0 4px;
  }

  .user-card:hover {
    background-color: lightcoral;
    color: white;
    cursor: pointer;
    box-shadow: lightgrey 0 6px;
  }

  .user-content {

  }

  .formulario {
    margin: 30px 10px;
    display: flex;
    flex-direction: column;
  }

  .formulario input {
    margin: 10px;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: solid green 2px;
    width: 80%;
  }

  .formulario input:focus {
    margin: 10px;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: solid red 2px;
    width: 85%;
    box-shadow: lightgrey 0 4px;
  }

  .formulario button {
    background-color: lightgreen;
    border-radius: 5px;
    color: black;
    padding: 5px 10px;
  }
  .formulario button:hover {
    background-color: darkgreen;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
    padding: 5px 15px;
  }
</style>
