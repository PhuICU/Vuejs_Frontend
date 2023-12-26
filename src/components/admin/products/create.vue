<script setup>
import { onMounted, ref } from "vue";
import { createProduct } from "../../../api/fetchData";

const products = ref([]);
const image = ref("");

const handleSubmit = async (values) => {
  console.log(image.value);
  try {
    alert("Bạn đã thêm sản phẩm thành công.");
    await createProduct({
      name: values.target.name.value,
      price: values.target.price.value,
      description: values.target.description.value,
      image: image.value,
      type: values.target.type.value,
    });
  } catch (error) {
    console.log(error);
  }
  //
  function loadFile(event) {
    const theReader = new FileReader();
    theReader.onload = function () {
      const output = document.getElementById("output");
      output.src = theReader.result;
    };
    theReader.readAsDataURL(event.target.files[0]);
  }
};

const handleChange = (e) => {
  image.value = e.target.files[0];
};
</script>
<template>
  <!-- form add product -->
  <div class="container mt-4">
    <h1 class="d-flex justify-content-center">Thêm sản phẩm</h1>
    <div class="row mt-4">
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Tên sản phẩm</label>
            <input type="text" class="form-control" name="name" id="name" />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Giá</label>
            <input type="number" class="form-control" id="price" name="price" />
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Loại</label>
            <input type="number" class="form-control" id="type" name="type" />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Giới thiệu</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              name="description"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Hình</label>
            <input
              type="file"
              @change="handleChange"
              name="image"
              accept="image/*"
              id="image"
            />
            <img id="output" />
          </div>
          <button type="submit" class="btn btn-primary mt-4">
            Đăng sản phẩm
          </button>
        </form>
      </div>
      <div class="col">
        <img
          src="https://i.pinimg.com/474x/b9/ab/23/b9ab23a742cc55b701a968b2f771d4ea.jpg"
          alt=""
          style="width: 100%"
        />
      </div>
    </div>
  </div>
</template>
