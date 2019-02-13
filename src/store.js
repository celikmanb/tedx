import Vue from 'vue'
import Vuex from 'vuex'
import './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        started: false,
        continue: true,
        name: '',
        Id: '',
        users: {},
        logged: !!localStorage.getItem('access_token'),
        auth_user: {},
        access_token: localStorage.getItem('access_token'),
    },
    mutations: {
        setStarted(state, payLoad) {
            state.started = payLoad
        },
        setContinue(state, payLoad) {
            state.continue = payLoad
        },
        setName(state, payLoad) {
            state.name = payLoad
        },
        setId(state, payLoad) {
            state.Id = payLoad
        },
        setUsers(state, payLoad) {

        },
        setLogin(state, login) {
            state.login = login;
        },
        setLogout(state, login) {
            state.logged = login;
        },
        setLogged(state, payload) {
            state.logged = payload;
        },
        setUser(state, user) {
            state.auth_user = user;
        },
        setAccessToken(state, access_token) {
            state.access_token = access_token;
        }
    },
    actions: {
        getStarted({commit}, payLoad) {
            commit('setStarted', payLoad)
        },
        getContinue({commit}, payLoad) {
            commit('setContinue', payLoad)
        },
        getLogout({commit}) {
            localStorage.removeItem('access_token')
            commit('setLogout',false)
        },
        getName({commit}, payLoad) {
            commit('setName', payLoad)
        },
        getId({commit}, payLoad) {
            commit('setId', payLoad)
        },
        getUsers({commit}, payLoad) {
            commit('setUsers', payLoad)
        },
        loginSet({commit, dispatch}, payload) {
            commit('setUser', payload);
            localStorage.setItem('access_token',payload.key)

        },

    }
})
