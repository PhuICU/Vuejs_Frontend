<script setup>
import { onMounted, ref } from "vue";
import { fetchAllProduct, fetchUser } from "../../../api/fetchData";

const products = ref([]);

const fetchProducts = async () => {
  const res = await fetchAllProduct();
  products.value = res;
};

onMounted(() => {
  fetchProducts();
});
</script>
<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div
      class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
    >
      <div v-for="product in products" :key="product.id">
        <div class="col mb-5">
          <div class="card h-100">
            <!-- Product image-->
            <img
              class="card-img-top"
              :src="'http://localhost:3000/' + product.image"
              alt="..."
            />
            <!-- Product details-->
            <div class="card-body p-4">
              <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{ product.name }}</h5>
                <!-- Product price-->
                {{ product.price }}đ
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <router-link
                  :to="{ name: 'DetailProduct', query: { id: product._id } }"
                  class="btn btn-outline-dark mt-auto"
                  >Xem sản phẩm</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
