<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { fetchProduct, addCart } from "../../../api/fetchData";

const product = ref();
const route = useRoute();
const quantity = ref(0);
const user_id = localStorage.getItem("user_id");

const fetchData = async () => {
  const res = await fetchProduct(route.query.id);
  product.value = res;
  console.log(product.value);
};

const addCart1 = async (id_product, quantity) => {
  console.log(id_product);
  try {
    await addCart(id_product, quantity, user_id);
    alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công.");
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div v-if="product" class="">
    <div class="main_title">
      <div>
        <h2 class="mt-4 d-flex justify-content-center font-weight-bold">
          {{ product.name }}
        </h2>
      </div>
    </div>
    <section class="main_title" style="background-color: #fffaf0">
      <hr />
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-5">
            <img
              class="card-img-top"
              :src="'http://localhost:3000/' + product.image"
              :alt="product.name"
              style="width: 400px"
            />
          </div>
          <div class="col-lg-7" style="background-color: #f8f8ff">
            <h3 class="container mt-4 text-dark font-weight-bold">
              {{ product.name }}
            </h3>
            <hr />
            <div class="main_title container">
              <h4>Giá: {{ product.price }}đ</h4>
            </div>
            <div class="main_title container align-items-center">
              <p>Số Lượng:</p>
              <form class="s-2">
                <input
                  type="number"
                  min="0"
                  name="quantity"
                  id="quantity"
                  v-model="quantity"
                />
              </form>
              {{ console.log(quantity) }}
            </div>
            <div class="main_title container">
              <a
                class="btn btn-warning text-white btn-lg-3"
                @click="addCart1(product._id, quantity)"
                ><h5 class="text-white">thêm vào giỏ hàng</h5></a
              >
            </div>
          </div>
        </div>

        <div class="p_w_title mt-4">
          <h3 class="font-weight-bolder font-italic">
            Mô tả chung
            <hr />
          </h3>
          <p>{{ product.description }}</p>
        </div>
        <hr />
      </div>
    </section>
  </div>
</template>
