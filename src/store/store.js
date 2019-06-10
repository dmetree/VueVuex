import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // It has to be "state" for Vuex to detact it.
    state: {
        counter: 0
    }
});