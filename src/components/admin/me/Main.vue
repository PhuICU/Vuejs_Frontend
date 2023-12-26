<script setup>
import sidebar from "../sidebar/sidebar.vue";
</script>
<template>
  <div
    class="row bg-image"
    style="
      background-image: url('https://media.istockphoto.com/id/1126080328/vector/vector-pastry-seamless-pattern-with-cakes-pies-muffins-and-eclairs-outline-hand-drawn-sweet.jpg?s=612x612&w=0&k=20&c=BfnfRusAqdWI8r9ptbCC0Ow3w-FbB-Seeyi3mFbh05k=');
      /* height: 100vh; */
    "
  >
    <div class="col-3">
      <sidebar></sidebar>
    </div>
    <div class="col-9">
      <router-view></router-view>
    </div>

    <!-- <router-view></router-view> -->
  </div>
</template>
