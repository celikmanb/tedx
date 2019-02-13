<template>
    <div style="background-color:rgb(43, 43, 43)">
        <div class="mx-auto">
            <button class="btn btn-lg " style="border-radius: 50px">{{message2}}</button>
            <h1 style="opacity:0.4;">Cevaplar Değerlendiriliyor</h1>
        </div>
        
    </div>
</template>

<script>
    // @ is an alias to /src
    import {mapState, mapActions} from 'vuex'

    import {db, questionRef, usersRef} from '../firebase'

    export default {
        name: 'Questions',
        data: () => {
            return {
                timer: 4,
                counter: false,
                counterAraEkran: false,
                users: [],
                message2: '',
                message2AraEkran: '',
                started: false,
                question: {},
                question2: {},
                answer: '',
                qAnser: 'd',
                timerAraEkran: 5,
                araEkran: false
            }
        },
        watch: {
            '$route'(to, from) {
                this.get_question()
            }
        },
        computed: {
            ...mapState(['auth_user']),
        },

        methods: {
            startTimer() {
                this.interval = setInterval(this.countDown, 1000);
            },
            /*startTimerAraEkran() {
                this.intervalAraEkran = setInterval(this.countDownAraEkran, 1000);
            },
            selectAnswer(ans, qAnser) {
                this.answer = ans
                this.qAnser = qAnser

            },*/
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
                    this.araEkran = true
                    this.araEkrandayiz()


                }
            },
            /*countDownAraEkran() {

                var n = this.timerAraEkran
                if (!this.counterAraEkran) {
                    this.counterAraEkran = true;
                } else if (n > 0) {
                    n = n - 1
                    this.timerAraEkran = n
                    this.message2AraEkran = n
                } else {
                    clearInterval(this.intervalAraEkran);
                    this.counterAraEkran = false
                    this.araEkran = false
                    this.message2AraEkran = "Your time is up!"
                        db.ref().child('/users/' + this.auth_user.key)
                            .update({continue: true});
                        // this.$router.push('questions/'+(this.$route.params.id+1))
                        
                }
            },*/
            araEkrandayiz() {
                let avs = parseInt(this.$route.params.id)+1;
                this.$router.push({name: 'questions', params: {id: avs}})
                //this.startTimerAraEkran()
            },
            get_question() {
                let id = this.$route.params.id
                let soru=
                questionRef.orderByChild('desc')
                    .startAt(`${id}`)
                    .limitToFirst(1)
                    .on('value', snapshot => this.question = (snapshot.val()))
                console.log("asd"+soru.desc)
                //if(id>soru.desc)
                this.timer = 10
                this.startTimer()
                console.log(id)
                if (!id) {
                    id = 1
                }
                console.log(id)
                /*questionRef.orderByChild('desc')
                    .startAt(`${id}`)
                    .limitToFirst(1)
                    .on('value', snapshot => this.question = (snapshot.val()))*/

            }
        },

        created() {
            this.get_question()

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
