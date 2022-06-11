import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      currentUser: {},
      listUser: [],
    },
    app: {
      successDialog: false,
    },
  },
  getters: {
    successDialog: (state) => state.app.successDialog,
  },
  mutations: {
    SET_Sucess_Modal(state, payload) {
      state.app.successDialog = payload;
    },
    ADD_New_User(state, payload) {
      state.user.listUser.push(payload);
    },
  },
  actions: {
    addNewUser({ commit }, payload) {
      console.log(payload);
      // let { username } = payload;

      // const isExist = state.user.listUser.find(
      //   (user) => user.username == username
      // );

      // console.log(isExist);

      // if (isExist) {
      //   return { status: false, message: "Mohon Maaf Username Sudah Dipakai" };
      // } else {
      //   commit("ADD_New_User", payload);
      //   return { status: true, message: "success" };
      // }

      commit("ADD_New_User", payload);
      return { status: true, message: "success" };
    },
    toggleMessageDialog({ commit }) {
      const timeOut = 2000;
      commit("SET_Sucess_Modal", true);

      setTimeout(() => {
        commit("SET_Sucess_Modal", false);
      }, timeOut);
    },
  },
  modules: {},
});
