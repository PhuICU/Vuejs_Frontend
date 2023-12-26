<script setup>
import { ref, onMounted } from "vue";
import { getOrderAdmin } from "../../../api/fetchData";

const order = ref([]);

const getOrder = async () => {
  const res = await getOrderAdmin();
  order.value = res.data;
  console.log(res.data);
};

onMounted(() => {
  getOrder();
});
</script>

<template>
  <div class="container">
    <div class="mt-4 bg-white p-5">
      <h1 class="d-flex justify-content-center">Đơn hàng</h1>
      <hr />
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">Khách hàng</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col" colspan="3">Thời gian tạo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order" :key="item.data.id">
            <!-- {{
              console.log(product)
            }} -->
            <td>{{ item.data.customer }}</td>
            <td>{{ item.data.quantity }}</td>
            <td>{{ item.data.name }}</td>
            <td>{{ item.data.price }}</td>
            <td>{{ item.data.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
