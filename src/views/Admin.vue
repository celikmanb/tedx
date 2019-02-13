<template>
    <div class="">
        <div class="row">

            <div class="text-center mx-auto">
                <button class="btn btn-success btn-lg color-white ml-auto mr-3" @click.prevent="take_val(true)">Başla</button>
                <button class="btn btn-danger btn-lg color-white mr-auto" @click.prevent="take_val(false)">Bitir</button>
                <button class="btn btn-success btn-lg color-white ml-auto mr-3" @click.prevent="cıkıs(false)">Çıkış</button>
            </div>



        </div>

        <h3 class="color-white text-center mb-3 mt-3">Yarışma Durumu: {{control}}</h3>

        <div class="row">
            <div class="mx-auto text-center">
                <button class="btn btn-info btn-lg ml-auto mr-3 color-white" @click.prevent="Go()">Anasayfa</button>
                <button class="btn btn-info btn-lg mr-auto color-white" @click.prevent="Hazırla()">Hazırla</button>
            </div>



        </div>
        <!--<h1>{{this.continue}}</h1>-->

    </div>
</template>

<style>
    h1 {
        color: white;
    }
</style>

<script>
    // @ is an alias to /src
    import {mapState, mapActions} from 'vuex'
    import {db, onRef, questionRef} from '../firebase'

    export default {
        data: () => {
            return {
                control: false
            }
        },
        name: 'waiting',
        firebase: {
            question: questionRef
        },
        computed: {
            ...mapState(['started', 'continue'])
        },
        watch: {
            control: function (val) {
                this.getStarted(val)
                console.log(val)
            }
        },
        methods: {
            ...mapActions(['getStarted','getLogout']),
            Go() {
                this.$router.push('/');
                //this.$router.go('/about');     -ARAŞTIR-
            },
            take_val(value) {
                onRef.push({control: value})
            },
            cıkıs(value) {
                console.log("Cıkıs")
                this.getLogout()
            },
            Hazırla() {
                this.$router.push('/hazirla')
            }
        },
        created() {
            onRef.limitToLast(1).on('child_added', snapshot => this.control = (snapshot.val().control))
        }
    }
</script>
