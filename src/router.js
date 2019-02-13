import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Waiting from './views/Waiting.vue'
import Questions from './views/Questions.vue'
import Admin from './views/Admin.vue'
import Hazirla from './views/Hazirla.vue'
import AraEkran from './views/AraEkran.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/waiting',
            name: 'waiting',
            component: Waiting
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },
        {
            path: '/questions/:id?',
            name: 'questions',
            component: Questions
        },

        {
            path: '/araekran/:id?',
            name: 'araekran',
            component: AraEkran
        },
        {
            path: '/hazirla',
            name: 'hazirla',
            component: Hazirla
        }
    ]
})
