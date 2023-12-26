<script setup>
import Header from "../partial/Header.vue";
import Footer from "../partial/Footer.vue";
</script>

<template>
  <div>
    <Header></Header>
    <div class="">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
