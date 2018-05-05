export default ({ app, router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    const isLoggedIn =
      store.state.auth.user !== null && store.state.auth.user !== undefined;
    if (to.name === "Login" && isLoggedIn) {
      next({ name: "Home" });
    } else if (to.name !== "Login" && !isLoggedIn) {
      next({ name: "Login" });
    } else {
      next();
    }

    // store
    //   .dispatch("auth/authenticate")
    //   .then(() => {
    //     next();
    //   })
    //   .catch(() => {
    //     if (to.name !== "Login") {
    //       next({ name: "Login" });
    //     } else {
    //       next();
    //     }
    //   });
  });
};
