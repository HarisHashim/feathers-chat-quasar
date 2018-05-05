<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar Feathers Vuex Example
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: "Default",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  methods: {},
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    user() {
      return this.$store.state.auth.user;
    }
  },
  watch: {
    // When the user is set, redirect to the Chat page.
    user(newVal) {
      if (newVal === undefined || newVal === null) {
        console.log("DEFAULT REDIRECT TO LOGIN!");
        this.$router.replace({ name: "Login" });
      }
       else {
        console.log("DEFAULT REDIRECT TO CHAT!");
        this.$router.replace({ name: "Chat" });
      }
    }
  },
  mounted() {
    console.log("MOUNTED!");
    // this.$store.dispatch("auth/authenticate").catch(error => {
    //   console.log("MOUNTED Error:" + error.message);
    //   if (!error.message.includes("Could not find stored JWT")) {
    //     console.error(error);
    //   }
    // });
  }
};
</script>

<style>

</style>
