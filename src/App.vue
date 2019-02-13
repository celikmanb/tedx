<template>
  <div id="app" >
    <div class="mt-3">
      <router-view/>
    </div>
  </div>
</template>

<style>

  @import "~@fortawesome/fontawesome-free/css/all.css";
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>

<style lang="sass">
  @import '../node_modules/bootstrap/scss/bootstrap.scss'
  @import "~@fortawesome/fontawesome-free/scss/fontawesome.scss"
  @import 'assets/style'
</style>

<style>

body, html {
    height: 100%;
}

body { 
    /* The image used */
    background-image: url('./assets/galaxy2.png');

    /* Full height */
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>


