<template>
    <section class="bg-accpunt-pages ">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">

                    <div class="wrapper-page">

                        <div class="account-pages">
                            <div class="account-box">
                                <div class="account-logo-box">
                                    <h2 class="text-uppercase text-center">
                                        <a href="javascript::void" class="text-success">
                                            <span><img width="200" src="@/assets/tedx_logo.png" alt=""></span>
                                        </a>
                                    </h2>
                                    <h6 class="text-uppercase text-center font-bold mt-4 color-white">Giriş Yap</h6>
                                </div>
                                <div class="account-content">
                                    <form class="form-horizontal" @submit.prevent="loginForm">
                                        <div class="form-group row m-b-20">
                                            <div class="col-12">
                                                <label>
                                                    Kullanıcı Adınız
                                                </label>

                                                <input class="form-control m-input" v-model.trim="username"
                                                       type="text"
                                                       name="username" placeholder="Kullanıcı Adınız"
                                                       required>
                                            </div>

                                        </div>
                                        <div class="form-group row text-center m-t-10">
                                            <div class="col-12">
                                                <button class="btn btn-block btn-gradient waves-effect waves-light"
                                                        type="submit">Giriş Yap
                                                </button>
                                            </div>
                                        </div>


                                    </form>


                                </div>
                            </div>
                        </div>
                        <!-- end card-box-->


                    </div>
                    <!-- end wrapper -->

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // @ is an alias to /src
    import {mapState,mapActions} from 'vuex'
    import {usersRef} from '../firebase'

    export default {
        name: 'home',
        data() {
            return {
                username: '',
                // userLogin:''
            }
        },
        computed:{
          ...mapState(['auth_user','logged'])
        },
        methods: {
            ...mapActions(['loginSet']),
            loginForm() {
                let ayarlar={}
                usersRef.push({username: this.username, continue: true}).on('value', snapshot =>{
                    ayarlar=snapshot.val()
                    ayarlar.key=snapshot.key


                });
                // userLogin=usersRef.where("username", "==", this.username)
                this.loginSet(ayarlar)
                // const userLogin = usersRef
                //     .limitToFirst(1)

// Listen for realtime updates
//                 let ayarlar=''
//                 userLogin.on('value', snapshot => ayarlar=(snapshot.val()));
//
//                 this.loginSet(ayarlar)
                this.$router.push('/waiting')
            }
        },
        mounted(){
            if (this.logged){
                this.$router.push('/waiting')
            }

        }

    }
</script>
