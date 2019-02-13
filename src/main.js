import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/utils/additions'
import '@/utils/utils/bvue-components'

Vue.config.productionTip = false
import {usersRef} from '@/firebase'

router.beforeEach((to, from, next) => {

    // localStorage.removeItem(removeIte'access_token')
    const LoggedIn = localStorage.getItem('access_token')
    if (LoggedIn) {
        usersRef.child(LoggedIn).once('value')
            .then(function (dataSnapshot) {

                let ayarla = {}
                ayarla.username = dataSnapshot.val().username
                ayarla.continue = dataSnapshot.val().continue
                ayarla.key = LoggedIn
                store.commit('setUser', ayarla)
            });


    }
    next();


})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
