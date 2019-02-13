<template>
    <div>
        <div class="row" v-for="item in question">
            <div class="container mt-3">
                <div class="row">
                    <div class="mx-auto">
                        <button class="btn btn-lg " style="border-radius: 50px">{{message2}}</button>
                    </div>
                </div>
                <div class="col-12 mt-3 ">
                    <div class="card shadow mb-5 bg-white rounded">
                        <div class="card-body text-center">
                            <p class="h4"><strong>{{item.question}}</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class=" mb-3">
                        <div class="card-body text-center">

              <span class="btn btn-lg w-100 mb-4 temp  color-white " @click.prevent="selectAnswer('a',item.answers)">
                  {{item.a}}
              </span>
                            <span class="btn btn-lg w-100 mb-4 temp color-white "
                                  @click.prevent="selectAnswer('b',item.answers)">
                  {{item.b}}
              </span>
                            <span class="btn btn-lg w-100 mb-4 temp color-white "
                                  @click.prevent="selectAnswer('c',item.answers)">
                  {{item.c}}
              </span>

                        </div>
                    </div>
                </div>
                <h3 class="color-white">Verilen cevap: {{answer}}</h3>
                <h3 class="color-white" v-if="answer === item.answers">Doğru Cevap</h3>
                <h3 class="color-white" v-else>Yanlış Cevap</h3>

            </div>


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
                timer: 10,
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
            startTimerAraEkran() {
                this.intervalAraEkran = setInterval(this.countDownAraEkran, 1000);
            },
            selectAnswer(ans, qAnser) {
                this.answer = ans
                this.qAnser = qAnser

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
                    this.araEkran = true
                    this.araEkrandayiz()


                }
            },
            countDownAraEkran() {

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
                    if ((this.answer === this.qAnser)) {
                        db.ref().child('/users/' + this.auth_user.key)
                            .update({continue: true});
                        // this.$router.push('questions/'+(this.$route.params.id+1))
                        let avs = parseInt(this.$route.params.id);
                        this.$router.push({name: 'araekran', params: {id: avs}})
                        //this.$router.push({name: 'questions', params: {id: avs}})

                    } else {
                        db.ref().child('/users/' + this.auth_user.key)
                            .update({continue: false});
                        this.$router.push('/')
                    }
                }
            },
            araEkrandayiz() {
                this.startTimerAraEkran()
                //this.$router.push({name: 'questions', params: {id: avs}})
            },
            get_question() {
                this.timer = 10
                this.startTimer()
                let id = this.$route.params.id
                console.log(id)
                if (!id) {
                    id = 1
                }
                console.log(id)
                questionRef.orderByChild('desc')
                    .startAt(`${id}`)
                    .limitToFirst(1)
                    .on('value', snapshot => this.question = (snapshot.val()))

            }
        },

        created() {
            this.get_question()

        }
    }

</script>

<style>
    .temp {
        border-color: crimson;
    }

    .temp:hover {
        background-color: tomato;
        color: white;
    }
</style>
