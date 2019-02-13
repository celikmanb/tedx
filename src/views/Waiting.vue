<template>
    <div class="waiting" style="background-color:rgb(43, 43, 43)">
        <div v-if="!haciseninisyalanoldu">
            <div v-if="started">
                <h1 class="text-center color-white">
                    Yarışma Başlıyor
                </h1>
                <div class="row mb-3 mt-3 ">
                    <div class="mx-auto">
                        <button class="btn btn-lg " style="border-radius: 50px;">{{message2}}</button>
                    </div>
                </div>
            </div>


            <div v-else>
                <h2 class="color-white text-center mb-3 mt-3">
                    Katılımcılar Bekleniyor...
                </h2>
            </div>
            <div class="table-responsive">
                <table class="table card-table table-striped table-vcenter">
                    <thead>
                    <tr>
                        <th class="h3 color-white">Katılımcılar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(user, index) in users.slice().reverse()" :key="index">
                        <td class="text-center">{{user.username}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else>
            <h3> Yarışmaya Devam Edemiyorsunuz!!!</h3>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {mapState, mapActions} from 'vuex'
    import {onRef, usersRef} from '../firebase'

    export default {
        name: 'waiting',
        data: () => {
            return {
                users: [],
                started: false,
                message2:'',
                timer: 10,
                counter: false,
                haciseninisyalanoldu:false
            }
        },
        watch: {
            started(newValue, oldValue) {
                if (newValue===true && this.auth_user.continue){
                    this.timer=10
                    this.startTimer()
                }
                else{
                    this.haciseninisyalanoldu=true
                }
            }
        },
        methods: {
            startTimer() {
                this.interval = setInterval(this.countDown, 1000);
            },
            selectAnswer(ans) {
                this.answer = ans
            },
            countDown() {

                var n = this.timer
                if (!this.counter) {
                    this.counter = true;
                } else if (n > 0) {
                    n = n - 1
                    this.timer = n
                    this.message2 = n
                } else {
                    clearInterval(this.interval);
                    this.counter = false
                    this.message2 = "Your time is up!"
                    this.SoruyaGec()
                }
            },
            SoruyaGec() {
                this.$router.push('/questions/1')
            }
        },
        computed: {
            ...mapState(['started','continue','auth_user'])
        },

        created() {
            usersRef.on('child_added', snapshot => this.users.push(snapshot.val()))
            onRef.limitToLast(1).on('child_added', snapshot => this.started = (snapshot.val().control))
        }
    }
</script>
<style>
    h1{
        color: white;
    }
    h3{
        color: white;
    }
    tr >td {
        color: #ffc200;
    }

</style>
