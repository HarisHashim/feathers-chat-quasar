import Vue from "vue";
import Vuex from "vuex";
import feathersVuex from "feathers-vuex";
import feathersClient from "../api/feathers-client";

import example from "./module-example";

Vue.use(Vuex);

const { service, auth } = feathersVuex(feathersClient, { idField: "_id" });

const store = new Vuex.Store({
  modules: {
    example
  },
  plugins: [
    service("users"),
    service("messages"),

    auth({
      userService: "users"
    })
  ]
});

export default store;
