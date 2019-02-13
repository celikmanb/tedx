import HTTP from '@/utils/http'
import router from '../router'

const state = {
    logged: !!localStorage.getItem('access_token'),
    auth_user: {},
    access_token: localStorage.getItem('access_token'),
}

const getters = {};
const mutations = {
    setLogin(state, login) {
        state.login = login;
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
};
const actions = {
    loginSet({commit, dispatch}, payload) {
        commit('setUser', payload);

    },

    getUserInfo({commit}) {
        HTTP.get('/admin/me').then(res => {
            res = res.data
            if (res.success === false) {
                return false;
            }
            commit('setUser', res.data);

        })
    }
};
export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}
