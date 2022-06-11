import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
    state: {},
    getters: {},
    actions: {
        getAllData({ commit }) {
            axiosClient.get('/')
                .then(response => {
                    console.log(response['data']['data']);
                })
                .catch(error => {
                    throw error;
                });
        }
    },
    mutations: {}
})

export default store;