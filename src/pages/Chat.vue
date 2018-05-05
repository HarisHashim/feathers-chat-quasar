<template>
  <q-page class=" flex-center" padding>
    <div><h1>CHAT</h1></div>
    <q-btn @click="logoutClick">Sign Out</q-btn>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Chat",
  methods: {
    logoutClick: function() {
      this.logout();
    },
    ...mapActions("messages", {
      findMessages: "find",
      createMessage: "create"
    }),
    ...mapActions("users", {
      findUsers: "find"
    }),
    ...mapActions("auth", ["logout"])
  }
};
</script>

<style>

</style>
