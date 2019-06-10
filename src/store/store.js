import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // It has to be "state" for Vuex to detact it.
    state: {
        counter: 0
    },
    getters: {
        // "getters" is also a reserved word
        doubleCounter: state => {
            return state.counter * 3;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    }
});