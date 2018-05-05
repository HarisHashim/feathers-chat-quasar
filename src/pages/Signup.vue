<template>
  <q-page class="flex" padding>
    <q-field :error="isFieldError" :error-label="errorLabel">
      <q-input :error="isNameError" class="q-ma-sm" v-model="user" float-label="Email" />
      <q-input :error="isPwdError" class="q-ma-sm" v-model="pwd1" type="password" float-label="Enter Password" />
      <q-input :error="isPwdDifferentError" class="q-ma-sm" v-model="pwd2" type="password" float-label="Confirm Password" />
      <q-btn class="q-ma-sm" @click="signupUser">Sign Up</q-btn>
    </q-field>
  </q-page>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      user: "",
      pwd1: "",
      pwd2: "",
      isFieldError: undefined,
      isNameError: undefined,
      isPwdError: undefined,
      isPwdDifferentError: undefined,
      errorLabel: undefined
    };
  },
  methods: {
    dismissError() {
      this.isNameError = this.isPwdError = this.isPwdDifferentError = this.isFieldError = undefined;
      this.errorLabel = undefined;
      this.clearCreateError();
    },
    signupUser: function() {
      this.dismissError();

      if (this.pwd1 === undefined || this.pwd1 === "") {
        this.isPwdError = true;
        this.errorLabel = "Password cannot be empty!";
      } else if (!(this.pwd1 === this.pwd2)) {
        this.isPwdDifferentError = this.isPwdError = true;
        this.errorLabel = "Password not the same!";
      } else {
        const email = this.user;
        const password = this.pwd1;
        this.createUser({
          email,
          password
        })
          .then(response =>
            this.authenticate({
              strategy: "local",
              email,
              password
            })
          )
          // Just use the returned error instead of mapping it from the store.
          .catch(error => {
            // Convert the error to a plain object and add a message.
            let type = error.errorType;
            this.errorLabel =
              type === "uniqueViolated"
                ? "That email address is unavailable."
                : "An error prevented signup. " + error.message;

            this.isFieldError = true;
          });
      }
    },
    ...mapActions("users", {
      createUser: "create"
    }),
    ...mapMutations("users", {
      clearCreateError: "clearCreateError"
    }),
    ...mapActions("auth", ["authenticate"])
  }
};
</script>

<style>

</style>
