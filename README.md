# Example Feathers Chat using Quasar and Feathers-Vuex

This is not done yet! At the moment I am putting it in github to trouble shoot why code commented out in [src\plugins\routerAuth.js](https://github.com/HarisHashim/feathers-chat-quasar/blob/master/src/plugins/routerAuth.js) is not working.

When that code is used, signing in will cause infinite loop. I.e. route will redirect to chat page but for an unknown reason, a redirect to login page will happen instead. Which start the infinite loop since redirect to login page will redirect to chat page :D . The source code file that redirect after sucesfull login is [src\layouts\default.vue](https://github.com/HarisHashim/feathers-chat-quasar/blob/master/src/layouts/default.vue). The code can be found in watch for user data.

To test this, comment out code that is working and uncomment code that is not working. The code in [src\plugins\routerAuth.js](https://github.com/HarisHashim/feathers-chat-quasar/blob/master/src/plugins/routerAuth.js) should be as follows:

```
export default ({ app, router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    // const isLoggedIn =
    //   store.state.auth.user !== null && store.state.auth.user !== undefined;
    // if (to.name === "Login" && isLoggedIn) {
    //   next({ name: "Home" });
    // } else if (to.name !== "Login" && !isLoggedIn) {
    //   next({ name: "Login" });
    // } else {
    //   next();
    // }

    store
      .dispatch("auth/authenticate")
      .then(() => {
        next();
      })
      .catch(() => {
        if (to.name !== "Login") {
          next({ name: "Login" });
        } else {
          next();
        }
      });
  });
};
```

NOTE: This front end client code should work with feathers back end code at https://github.com/feathersjs/feathers-chat

# Please ignore bellow instruction

1. NPM install and safe the following
- feathers
- feathers-authentication-client
- feathers-authentication-popups
- feathers-hooks
- feathers-socketio
- feathers-vuex


