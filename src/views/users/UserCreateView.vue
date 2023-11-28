
<script>
import axios from "axios";

// export default {
//   name: "UserCreateView",
//   data() {
//     return {
//       showPassword: false,
//       model: {
//         user: {
//           username: '',
//           password: '',
//           firstName: '',
//           lastName: '',
//           email: '',
//           age: '',
//           birthDay: ''
//         }
//       }
//     };
//   },
//   methods: {
//     saveUser() {
//       axios.post('http://localhost:8080/api/users', this.model.user)
//           .then(res => {
//             alert('User was saved successfully');
//             this.model.user = {
//               username: '',
//               password: '',
//               firstName: '',
//               lastName: '',
//               email: '',
//               age: '',
//               birthDay: ''
//             };
//           })
//           .catch(error => {
//             console.error('Error saving user:', error);
//           });
//     },
//     togglePasswordVisibility() {
//       this.showPassword = !this.showPassword;
//     }
//   }
// };

export default {
  name: "UserCreateView",
  data() {
    return {
      showPassword: false,
      validationError: '',
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
      }
    };
  },
  methods: {
    validateEmail() {
      if (!this.model.user.email) {
        this.validationError = 'Email cannot be left null.';
        window.alert(this.validationError);
        return false;
      }
      this.validationError = '';
      return true;
    },
    saveUser() {
      if (!this.validateEmail()) {
        return;
      }
      axios.post('http://localhost:8080/api/users', this.model.user)
          .then(res => {
            alert('User was saved successfully');
            this.model.user = {
              username: '',
              password: '',
              email: '',
              userDetail: {
                firstName: '',
                lastName: '',
                age: '',
                birthDay: ''
              }
            };
          })
          .catch(error => {
            console.error('Error saving user:', error);
          });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};

</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Agregar Usuario</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">Usuario</label>
          <input type="text" v-model="model.user.username" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <div class="input-group">
            <input
                :type="showPassword ? 'text' : 'password'"
                v-model="model.user.password"
                class="form-control"
            />
            <button @click="togglePasswordVisibility" class="btn btn-outline-secondary">
              <i v-if="showPassword" class="fas fa-eye"></i>
              <i v-else class="fas fa-eye-slash"></i>
            </button>
          </div>
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input type="text" v-model="model.user.email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Nombre</label>
          <input type="text" v-model="model.user.userDetail.firstName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Apellido</label>
          <input type="text" v-model="model.user.userDetail.lastName" class="form-control">
        </div>

        <div class="mb-3">
          <label for="">Edad</label>
          <input type="text" v-model="model.user.userDetail.age" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Cumpleanos</label>
          <input type="date" v-model="model.user.userDetail.birthDay" class="form-control">
        </div>
        <div class="mb-3">
          <button type="button" @click="saveUser" class="btn btn-primary">
            Guardar
          </button>&nbsp;
          <RouterLink to="/users" class="btn btn-primary">
            Volver
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-3" v-if="validationError">
    <span class="text-danger">{{ validationError }}</span>
  </div>
</template>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
