<script setup>
import { onMounted, ref, computed } from "vue";
import { fetchCart, fetchUser } from "../../../api/fetchData";

const carts = ref([]);
const user_id = localStorage.getItem("user_id");
const user = ref({});

const fetchUser1 = async () => {
  const res = await fetchUser(user_id);
  user.value = res;
};

const currentPage = ref(1);
const itemsPerPage = 5;

const fetchCart1 = async () => {
  const res = await fetchCart(user_id);
  carts.value = res.products;
};

//pagination
const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return carts.value.slice(startIndex, endIndex);
});

const Arr = [
  {
    value: 1,
    title: "Bánh sinh nhật",
  },
  {
    value: 2,
    title: "Bánh mì",
  },
  {
    value: 3,
    title: "Bánh mặn",
  },
  {
    value: 4,
    title: "Cookie",
  },
  {
    value: 5,
    title: "MiniCake",
  },
  {
    value: 6,
    title: "TeaBreak",
  },
  {
    value: 7,
    title: "Petit",
  },
];

onMounted(() => {
  fetchCart1();
  fetchUser1();
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
            <th scope="col">Loại</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Đơn giá</th>
            <th scope="col" colspan="3">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginatedProducts" :key="item.product.id">
            <!-- {{
              console.log(product)
            }} -->
            <td>
              <p class="text-muted mb-0 small">
                {{
                  Arr.find((item1) => item1.value == item.product.type)?.title
                }}
              </p>
            </td>
            <td>
              <img
                :src="'http://localhost:3000/' + item.product.image"
                alt=""
                style="width: 50px; height: 50px"
              />
            </td>
            <td>{{ item.product.name }}</td>
            <td>{{ item.quantity }}</td>

            <td>{{ item.product.price }}đ</td>
            <td>{{ item.product.price * item.quantity }}đ</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div class="pagination">
        <button @click="currentPage--" :disabled="currentPage === 1">
          Previous
        </button>
        <button>{{ currentPage }}</button>
        <button
          @click="currentPage++"
          :disabled="currentPage * itemsPerPage >= carts.length"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
