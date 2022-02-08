<template>
  <div>
    <h2 class="text-center">Users List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Faculty</th>
          <th>Major</th>
          <th>Address</th>
          <!--<th>Actions</th>-->
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.photo }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.faculty }}</td>
          <td>{{ user.major }}</td>
          <td>{{ user.address }}</td>
          <td>
            <div class="btn-group" role="group">
              <router-link
                to="{name: 'edit', params: {id: user.id}}"
                class="btn btn-success"
                >Edit</router-link
              >
              <button class="btn btn-danger" @click="deleteUser(user.id)">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return { users: [] };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/users/").then((response) => {
      this.users = response.data;
    });
  },
  methods: {
    deleteUser(id) {
      axios.delete("http://127.0.0.1:8000/api/users/${id}").then((response) => {
        let i = this.users.map((data) => data.id).indexOf(id);
        this.users.splice(i, 1);
      });
    },
  },
};
</script>
