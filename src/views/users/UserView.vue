
<script>
import axios from "axios";

export default {
  name: "UserView",
  data() {
    return {
      users: [],
      errorMessage: ''
    }
  },
  methods: {
    getUsers() {
      axios.get('http://localhost:8080/api/users/detailedUsers').then(res => {
        this.users = res.data;
        console.log(this.users);
      }).catch(function (error) {
        this.errorMessage = 'An error occurred while fetching the users: ' + error.message;
      })
    },

    deleteUserById(userId) {
      if (confirm('Are you sure, you want to delete this data?')) {
        axios.delete(`http://localhost:8080/api/users/${userId}`).then(res => {
          this.getUsers();
        }).catch(function (error) {
          this.errorMessage = 'An error occurred while deleting the user: ' + error.message;
        })
      }
    }
  },
  mounted() {
    this.getUsers();
  }


}
</script>

<template>
  <div class="course">
    <div class="card">
      <div class="card-header">
        <h4>
          Usuarios
          <RouterLink to="/users/create" class="btn btn-primary float-end">
            Agregar Un Usuario
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Nro.</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Birthday</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody v-if="users.length > 0">
          <tr v-for="(user, index) in this.users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.birthDay }}</td>
            <td>
              <RouterLink :to="{ path: '/users/' + user.id + '/edit' }" class="btn btn-success" style="margin-right: 10px;">
                Edit
              </RouterLink>
              <button type="button" @click="deleteUserById(user.id)" class="btn btn-danger" style="margin-left: 10px;">
                Delete
              </button>
            </td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr>
            <td colspan="7">There are no users here</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="mb-3" v-if="errorMessage">
    <span class="text-danger">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>

</style>