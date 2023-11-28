
<script>
import axios from "axios";

export default {
  name: "UserEditView",
  data() {
    return {
      userId: '',
      model: {
        user: {
          username: '',
          password: '',
          email: '',
          userDetail: {
            firstName: '',
            lastName: '',
            age: '',
            birthDay: ''
          }
        }
      },
      errorMessage: ''
    }
  },
  methods: {
    getUserById(userId) {
      axios.get(`http://localhost:8080/api/users/${userId}`).then(res => {
        this.model.user = res.data;
      }).catch(function (error) {
        this.errorMessage = 'An error occurred while fetching the user: ' + error.message;
      })
    },
    editUser() {
      axios.put(`http://localhost:8080/api/users/${this.userId}`, this.model.user)
          .then(res => {
            alert('User was Edited successfully');
          }).catch(function (error) {
        this.errorMessage = 'An error occurred while editing the user: ' + error.message;
      })
    }
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.getUserById(this.userId);
  }
}

</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit User</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">Usuario</label>
          <input type="text" v-model="model.user.username" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <input type="text" v-model="model.user.password" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input type="text" v-model="model.user.email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">First Name</label>
          <input type="text" v-model="model.user.userDetail.firstName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Last Name</label>
          <input type="text" v-model="model.user.userDetail.lastName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Age</label>
          <input type="text" v-model="model.user.userDetail.age" class="form-control">
        </div>

        <div class="mb-3">
          <button type="button" @click="editUser" class="btn btn-primary">
            Edit
          </button>&nbsp;
          <RouterLink to="/users" class="btn btn-primary">
            Back
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>