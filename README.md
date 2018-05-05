# Example Feathers Chat using Quasar and Feathers-Vuex

This is not done yet! At the moment I am putting it in github to trouble shoot why code commented out in src\plugins\routerAuth.js is not working.

When that code is used, signing in will cause infinite loop. I.e. route will redirect to chat page but for an unknown reason, a redirect to login page will happen instead. Which start the infinite loop since redirect to login page will redirect to chat page :D

To test this, comment out code that is working and uncomment code that is not working. The code in src\plugins\routerAuth.js should be as follows:

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


# Please ignore bellow instruction

1. NPM install and safe the following
- feathers
- feathers-authentication-client
- feathers-authentication-popups
- feathers-hooks
- feathers-socketio
- feathers-vuex

