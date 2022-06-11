import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

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
    products: {
      listProduct: [
        {
          id: "1",
          isbn: "978-623-7835-04-2",
          title: "Best Of The Best Psikotes & TPA",
          price: 200000,
          discount: 50000,
          quantity: 25,
          rating: 5,
          reviewsCount: 234,
          imageURL: `@/assets/store/book_banner.png`,
          author: "Buku Bagus",
          program: "TPA",
        },
      ],
    },
    orders: {
      listOrder: [
        // {
        //   orderDate: Date,
        //   username: "",
        //   itemID: "",
        //   price: 0,
        //   quantity: 0,
        //   totalPrice: 0,
        //   userRating: 5,
        // },
      ],
    },
  },
  getters: {
    listProducts: (state) => state.products.listProduct,
    getItemById: (state) => (id) => {
      console.log(id);
      console.log(state.products.listProduct);

      return state.products.listProduct.find((item) => item.id === id);
    },
    successDialog: (state) => state.app.successDialog,
  },
  mutations: {
    SET_Quantity_Product(state, { id, count }) {
      console.log("SET_Quantity_Product");
      const selectedIndex = state.products.listProduct.findIndex(
        (item) => item.id == id
      );

      if (selectedIndex != undefined) {
        state.products.listProduct[selectedIndex].quantity -= count;

      }
    },
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
  plugins: [createPersistedState()],
});
