<template>
  <section class="bg-accpunt-pages">
        <div class="container" >
            <div class="row">
                <div class="col-sm-12">

                    <div class="wrapper-page">

                        <div class="account-pages">
                            <div class="account-box">
                                <div class="account-logo-box">

                                    <div class="text-center mx-auto ">
                                        <button class="btn btn-info btn-lg ml-auto mr-3 color-white"
                                                @click.prevent="Go()">Anasayfa
                                        </button>


                                    </div>

                                    <h3 class="text-uppercase text-center color-white font-bold mt-4">Soru Hazırla</h3>

                                </div>
                                <div class="account-content">
                                    <form class="form-horizontal" @submit.prevent="prepare_q">
                                      <div class="form-group row m-b-20">
                                            <div class="col-12">
                                                <label  >
                                                    Sorunuz
                                                </label>

                                                <textarea class="form-control m-input" v-model="data.question"
                                                       type="text"
                                                       name="username" placeholder="Sorunuz"
                                                       required>
                                                </textarea>
                                            </div>

                                        </div>
                                        <div class="form-group row m-b-20">
                                            <div class="col-12">
                                                <label  >
                                                    A Şıkkı
                                                </label>

                                                <input class="form-control m-input" v-model="data.a"
                                                       type="text"
                                                       required>
                                            </div>

                                        </div>
                                        <div class="form-group row m-b-20">
                                            <div class="col-12">
                                                <label  >
                                                    B Şıkkı
                                                </label>

                                                <input class="form-control m-input" v-model="data.b"
                                                       type="text"
                                                       required>
                                            </div>

                                        </div>
                                        <div class="form-group row m-b-20">
                                            <div class="col-12">
                                                <label  >
                                                    C Şıkkı
                                                </label>

                                                <input class="form-control m-input" v-model="data.c"
                                                       type="text"
                                                       required>
                                            </div>

                                        </div>
                                        <div class="form-group row m-b-20">
                                            <div class="col-12">
                                                <label  >
                                                    Cevap
                                                </label>

                                                <input class="form-control m-input" v-model="data.answers"
                                                       type="text"
                                                       required>
                                            </div>

                                        </div>
                                        <div class="form-group row m-b-20">
                                            <div class="col-12">
                                                <label  >
                                                    Kaçıncı Soru
                                                </label>

                                                <input class="form-control m-input" v-model="data.desc"
                                                       type="numeric"
                                                       required>
                                            </div>

                                        </div>
                                        <div class="form-group row text-center m-t-10">
                                            <div class="col-12">
                                                <button class="btn btn-block btn-gradient waves-effect waves-light" @click.prevent="prepare_q()" type="submit">Kaydet</button>
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
import {questionRef} from '../firebase'

export default {
  name: 'Hazirla',
  data (){
    return{
      data: {}
    }
  },
  methods:{
    prepare_q() {
      questionRef.push(this.data)
        alert('Sorunuz Kaydedildi')
        this.data={}
    },
      Go() {
          this.$router.push('/');
          //this.$router.go('/about');     -ARAŞTIR-
      },
  }
}
</script>
<style>
    label{
        color: #fff;
    }
</style>
