<template>
  <q-page class="flex-center" padding>
    <h1>LOGIN</h1>

    <q-field :error-label="errorLabel">
      <q-input :error="isNameError" class="q-ma-sm" v-model="user" float-label="Email" />
      <q-input :error="isPwdError" class="q-ma-sm" v-model="pwd" type="password" float-label="Enter Password" />
      <q-btn class="q-ma-sm" @click="loginUser">Sign In</q-btn>
    </q-field>

  </q-page>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: undefined,
      pwd: undefined,
      isNameError: undefined,
      isPwdError: undefined,
      errorLabel: undefined
    };
  },
  methods: {
    dismissError() {
      this.isNameError = this.isPwdError = undefined;
      this.errorLabel = undefined;
      this.clearAuthenticateError();
    },
    loginUser: function() {
      const email = this.user;
      const password = this.pwd;

      this.dismissError();

      this.authenticate({ strategy: "local", email, password })
        // Just use the returned error instead of mapping it from the store.
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let type = error.className;
          
          this.errorLabel =
            type === "not-authenticated"
              ? "Incorrect email or password."
              : "An error prevented login. " + error.message;
          
          this.isPwdError = this.isNameError = true;
        });
    },
    ...mapMutations("auth", {
      clearAuthenticateError: "clearAuthenticateError"
    }),
    ...mapActions("auth", ["authenticate"])
  }
};
</script>

<style>

</style>
