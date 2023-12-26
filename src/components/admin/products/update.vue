<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchProduct, updateProduct } from "../../../api/fetchData";

const product = ref({
  name: "",
  price: "",
  description: "",
  image: "",
});

const route = useRoute();
const router = useRouter();

const fetchData = async () => {
  const res = await fetchProduct(route.query.id);
  product.value = res;
};

const handleSubmit = async () => {
  try {
    console.log(route.query.id);
    await updateProduct(route.query.id, {
      name: product.value.name,
      price: product.value.price,
      description: product.value.description,
      image: product.value.image,
    });
    alert("Bạn đã cập nhật sản phẩm thành công.");
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <!-- update product -->
  <div class="container">
    <div class="d-flex justify-content-center mt-4">
      <h1>Cập nhật sản phẩm</h1>
    </div>

    <div class="row mt-4">
      <div class="col-md-6">
        <form v-if="product" @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Tên</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="product.name"
            />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Giá</label>
            <input
              type="number"
              class="form-control"
              id="price"
              v-model="product.price"
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Mô tả</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              v-model="product.description"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Hình </label>
            <input
              type="file"
              class="form-control"
              id="image"
              v-on="product.image"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Cập nhật sản phẩm
          </button>
        </form>
      </div>
      <div class="col-md-4 container" v-if="product">
        <img
          src="https://c8.alamy.com/comp/2E51PT6/cake-menu-hand-drawn-bakery-product-sweet-food-on-chalkboard-vintage-donut-macaroon-engraved-sketch-vector-illustration-for-a-banner-of-a-cafe-2E51PT6.jpg"
          alt=""
          style="width: 300px"
        />
      </div>
    </div>
  </div>
</template>
